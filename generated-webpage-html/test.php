<?php

declare(strict_types=1);

class StaticLoremIpsumGenerator
{
    private string $outputDir;
    private array $pages;

    public function __construct(string $outputDir)
    {
        $this->outputDir = rtrim($outputDir, '/');
        $this->pages = [
            'index' => 'Home',
            'dashboard' => 'Dashboard',
            'profile' => 'Profile',
            'settings' => 'Settings',
            'files' => 'Files',
            'messages' => 'Messages',
            'notifications' => 'Notifications',
            'support' => 'Support',
            'about' => 'About',
            'contact' => 'Contact',
            'legal' => 'Legal',
            'top1' => 'Top1',
            'top2' => 'Top2',
            'top3' => 'Top3',
        ];
    }

    public function generate(): void
    {
        foreach ($this->pages as $slug => $title) {
            $path = $this->outputDir . '/' . $slug;
            if (!is_dir($path)) {
                mkdir($path, 0777, true);
            }
            file_put_contents($path . '/index.html', $this->buildPage($slug, $title));
        }
        $this->generateAssets();
    }

    private function buildPage(string $slug, string $title): string
    {
        $withSidebar = !in_array($slug, ['top1', 'top3'], true);
        $fullContent = in_array($slug, ['top1', 'top3'], true) ? 'full' : '';
        $content = '<h1>' . htmlspecialchars($title) . '</h1>';
        if ($slug === 'top1') {
            $content = '<div class="box">Main page without sidebar</div>';
        } elseif ($slug === 'top3') {
            $content = '<div class="box">Center only box</div>';
        } else {
            $content .= $this->boxes() . $this->treeList() . $this->forms();
        }

        return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{$title}</title>
<link rel="stylesheet" href="../assets/style.css">
</head>
<body>
<div class="top-menu">
    {$this->topMenu()}
</div>
HTML
. ($withSidebar ? '<div class="side-menu">' . $this->sideMenu() . '</div>' : '') .
'<div class="content ' . $fullContent . '">' . $content . '</div></body></html>';
    }

    private function topMenu(): string
    {
        return <<<HTML
<nav>
    <a href="../top1/index.html">Home</a>
    <a href="../top2/index.html">With Menu</a>
    <a href="../top3/index.html">Center Only</a>
    <form style="margin-left:auto;">
        <input type="search" placeholder="Search...">
    </form>
</nav>
HTML;
    }

    private function sideMenu(): string
    {
        $items = '';
        $menuPages = array_slice($this->pages, 1, 10, true);
        foreach ($menuPages as $slug => $label) {
            $items .= '<a href="../' . $slug . '/index.html">' . htmlspecialchars($label) . '</a>';
        }
        return $items;
    }

    private function boxes(): string
    {
        return <<<HTML
<div class="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
<div class="box">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
<div class="card">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
HTML;
    }

    private function treeList(): string
    {
        return <<<HTML
<div class="tree">
    <ul>
        <li>Folder 1
            <ul>
                <li>File 1-1</li>
                <li>File 1-2</li>
            </ul>
        </li>
        <li>Folder 2
            <ul>
                <li>File 2-1</li>
                <li>File 2-2</li>
            </ul>
        </li>
    </ul>
</div>
HTML;
    }

    private function forms(): string
    {
        return <<<HTML
<form>
    <input type="text" placeholder="Text input">
    <input type="email" placeholder="Email input">
    <input type="password" placeholder="Password input">
    <select>
        <option>Option 1</option>
        <option>Option 2</option>
    </select>
    <textarea placeholder="Textarea"></textarea>
    <button type="submit">Submit</button>
</form>
HTML;
    }

    private function generateAssets(): void
    {
        $assetDir = $this->outputDir . '/assets';
        if (!is_dir($assetDir)) {
            mkdir($assetDir, 0777, true);
        }
        file_put_contents($assetDir . '/style.css', $this->styles());
    }

    private function styles(): string
    {
        return <<<CSS
body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #0d1117;
    color: #c9d1d9;
}
.top-menu {
    position: fixed;
    width: 100%;
    top: 0;
    background: rgba(22, 27, 34, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    z-index: 1000;
}
.top-menu a {
    color: #c9d1d9;
    text-decoration: none;
    margin: 0 1rem;
}
.side-menu {
    position: fixed;
    top: 3.5rem;
    left: 0;
    width: 220px;
    height: calc(100% - 3.5rem);
    background: #161b22;
    padding: 1rem;
}
.side-menu a {
    display: block;
    margin: 1rem 0;
    color: #c9d1d9;
    text-decoration: none;
}
.content {
    margin-top: 4.5rem;
    margin-left: 240px;
    padding: 2rem;
}
.content.full {
    margin-left: 0;
}
.card, .box {
    background: #161b22;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
}
input, select, textarea, button {
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background: #0d1117;
    color: #c9d1d9;
}
input::placeholder, textarea::placeholder {
    color: #8b949e;
}
button {
    background: #238636;
    cursor: pointer;
}
.tree ul {
    list-style: none;
    padding-left: 1rem;
}
.tree li {
    margin: 0.5rem 0;
}
CSS;
    }
}

$generator = new StaticLoremIpsumGenerator(__DIR__ . '/output');
$generator->generate();
