# Makefile for Docusaurus project

# Default target
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  install     Install dependencies using pnpm"
	@echo "  dev         Dev server with en + pl locales (build + serve + watch)"
	@echo "  dev-fast    Fast HMR dev server (en only, /pl will 404)"
	@echo "  dev-pl      Fast HMR dev server (pl only)"
	@echo "  start       Alias for dev-fast"
	@echo "  build       Build production site"
	@echo "  serve       Serve the built site"
	@echo "  clear       Clear Docusaurus cache"
	@echo "  deploy      Deploy the site"
	@echo "  typecheck   Run TypeScript type checking"
	@echo "  clean       Clean build artifacts and dependencies"
	@echo "  clean-all   Clean everything including node_modules"
	@echo "  swizzle     Swizzle Docusaurus components"
	@echo "  update-docusaurus  Update @docusaurus/* packages to latest"
	@echo "  update-packages    Update all project packages to latest"

# Variables
PNPM := pnpm

# Install dependencies
.PHONY: install
install:
	$(PNPM) install

# Dev server with full i18n (en + pl)
.PHONY: dev
dev:
	$(PNPM) dev

# Fast HMR dev server – default locale only
.PHONY: dev-fast start
dev-fast start:
	$(PNPM) dev:fast

# Fast HMR dev server – Polish locale only
.PHONY: dev-pl
dev-pl:
	$(PNPM) dev:pl

# Build production site
.PHONY: build
build:
	$(PNPM) build

# Serve the built site
.PHONY: serve
serve:
	$(PNPM) serve

# Clear Docusaurus cache
.PHONY: clear
clear:
	$(PNPM) clear

# Deploy the site
.PHONY: deploy
deploy:
	$(PNPM) deploy

# Run TypeScript type checking
.PHONY: typecheck
typecheck:
	$(PNPM) typecheck

# Swizzle Docusaurus components
.PHONY: swizzle
swizzle:
	$(PNPM) swizzle

# Clean build artifacts
.PHONY: clean
clean:
	rm -rf build
	rm -rf .docusaurus
	$(PNPM) clear

# Clean everything including dependencies
.PHONY: clean-all
clean-all: clean
	rm -rf node_modules
	rm -rf pnpm-lock.yaml

# Write translations
.PHONY: write-translations
write-translations:
	$(PNPM) write-translations

# Write heading IDs
.PHONY: write-heading-ids
write-heading-ids:
	$(PNPM) write-heading-ids

# Update @docusaurus/* packages to latest (see Docusaurus upgrade banner)
.PHONY: update-docusaurus
update-docusaurus:
	$(PNPM) update @docusaurus/core@latest \
		@docusaurus/plugin-google-gtag@latest \
		@docusaurus/preset-classic@latest \
		@docusaurus/theme-mermaid@latest \
		@docusaurus/module-type-aliases@latest \
		@docusaurus/tsconfig@latest \
		@docusaurus/types@latest

# Update all dependencies to latest
.PHONY: update-packages
update-packages:
	$(PNPM) update --latest
