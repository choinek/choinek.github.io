# Makefile for Docusaurus project

# Default target
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  install     Install dependencies using pnpm"
	@echo "  dev         Start development server (alias for start)"
	@echo "  start       Start development server"
	@echo "  build       Build production site"
	@echo "  serve       Serve the built site"
	@echo "  clear       Clear Docusaurus cache"
	@echo "  deploy      Deploy the site"
	@echo "  typecheck   Run TypeScript type checking"
	@echo "  clean       Clean build artifacts and dependencies"
	@echo "  clean-all   Clean everything including node_modules"
	@echo "  swizzle     Swizzle Docusaurus components"

# Variables
PNPM := pnpm

# Install dependencies
.PHONY: install
install:
	$(PNPM) install

# Development server (alias)
.PHONY: dev
dev: start

# Start development server
.PHONY: start
start:
	$(PNPM) start

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
