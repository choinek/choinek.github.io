/**
 * Dev server with full i18n support.
 *
 * `docusaurus start` only registers routes for one locale (default: en),
 * so /pl/* shows "Page not found" in the client router. This script builds
 * all locales and serves the static output, rebuilding on file changes.
 */
import {spawn} from 'node:child_process';
import {createRequire} from 'node:module';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const require = createRequire(import.meta.url);
const chokidar = require('chokidar');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = process.env.PORT ?? '3000';
const HOST = process.env.HOST ?? '0.0.0.0';

let building = false;
let pending = false;
let serveProcess;

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: ROOT,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    });
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
        return;
      }
      reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`));
    });
  });
}

async function buildSite() {
  if (building) {
    pending = true;
    return;
  }

  building = true;
  try {
    await run('pnpm', ['exec', 'docusaurus', 'build', '--dev', '--no-minify']);
  } finally {
    building = false;
    if (pending) {
      pending = false;
      await buildSite();
    }
  }
}

function startServe() {
  if (serveProcess) {
    return;
  }

  serveProcess = spawn(
    'pnpm',
    ['exec', 'docusaurus', 'serve', '--host', HOST, '--port', PORT, '--no-open'],
    {
      cwd: ROOT,
      stdio: 'inherit',
      shell: process.platform === 'win32',
    },
  );

  serveProcess.on('close', () => {
    serveProcess = undefined;
  });
}

function stopServe() {
  if (serveProcess) {
    serveProcess.kill('SIGTERM');
    serveProcess = undefined;
  }
}

function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

const rebuild = debounce(async () => {
  console.log('\n[i18n dev] Rebuilding all locales…');
  try {
    await buildSite();
    console.log('[i18n dev] Rebuild done — refresh the browser.\n');
  } catch (error) {
    console.error('[i18n dev] Rebuild failed:', error.message);
  }
}, 600);

async function main() {
  const onExit = () => {
    stopServe();
    process.exit(0);
  };
  process.on('SIGINT', onExit);
  process.on('SIGTERM', onExit);

  console.log('[i18n dev] Building en + pl (first run may take a minute)…');
  await buildSite();
  startServe();
  console.log(
    `[i18n dev] Ready at http://localhost:${PORT}/ and http://localhost:${PORT}/pl/`,
  );
  console.log('[i18n dev] For fast HMR without /pl, use: pnpm dev:fast\n');

  chokidar
    .watch(
      [
        'docs',
        'blog',
        'src',
        'i18n',
        'static',
        'docusaurus.config.ts',
        'sidebars.ts',
      ],
      {cwd: ROOT, ignoreInitial: true},
    )
    .on('all', rebuild);
}

main().catch((error) => {
  console.error(error);
  stopServe();
  process.exit(1);
});
