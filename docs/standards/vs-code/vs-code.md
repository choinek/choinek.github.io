---
title: Visual Studio Code
sidebar_title: VS sCode
tags:
  - paReq
---

# Visual Studio Code for YAML, Markdown, and HTML

## Requirement Description
Knowledge of working with Visual Studio Code with YAML, Markdown, and HTML files, including installing appropriate extensions, configuring the environment, and using tools that facilitate working with these formats.

## Detailed Requirements
- Installing and configuring Visual Studio Code.
- Installing extensions for YAML, Markdown, and HTML support.
- Ability to configure the working environment in VS Code.
- Working with the built-in terminal in VS Code.
- Using syntax suggestions, validation, and formatting.

## Practical Skills
The person should be able to configure VS Code for working with YAML, Markdown, and HTML, use syntax suggestions and validation, and utilize the built-in terminal.

## Verification Task
**Objective:**  
Configure Visual Studio Code for effective work with YAML, Markdown, and HTML files.

**Steps to Perform:**  
1. Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/).  
2. Install extensions:
   - YAML (Red Hat)
   - Markdown All in One
   - Live Server (for HTML preview)
   - Prettier (for code formatting)  
3. Create a `.vscode` folder in the project and create a `settings.json` file with the following configuration:

**Example `settings.json`:**

```
{
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "files.autoSave": "afterDelay",
  "yaml.validate": true,
  "markdown.preview.breaks": true,
  "editor.formatOnSave": true,
  "html.format.enable": true
}
```

4. Create a file `assistant_config.yaml`:

```
user:
  name: "Anna Kowalska"
  email: "anna.kowalska@example.com"
  preferences:
    language: "pl"
    timezone: "Europe/Warsaw"
```

5. Create a file `README.md`:

```
# Personal Assistant

An application for managing tasks and a shopping list.

## Features
- Task management
- Creating shopping lists
- Notifications
```

6. Create a file `index.html`:

```
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Assistant</title>
</head>
<body>
    <h1>Welcome to the Assistant application!</h1>
</body>
</html>
```

7. Configure Live Server to preview HTML files.  
8. Check YAML validation and Markdown preview (`Ctrl + Shift + V`).

**Evaluation Criteria:**  
- VS Code correctly validates YAML and Markdown syntax.  
- Live Server correctly renders the HTML file.  
- Code formatting works automatically.  
- The terminal in VS Code is used for basic commands.

## Recommended Tutorials
- [Official Visual Studio Code Guide](https://code.visualstudio.com/docs) - VS Code documentation.  
- [Markdown All in One Extension Guide](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - Markdown extension documentation.  
- [YAML Extension Guide](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) - YAML extension documentation.  
- [Live Server Guide](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Live Server guide.  
- [Prettier Formatter Guide](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Prettier user guide.  

---

> **Additional Notes:**  
> Familiarize yourself with the documentation for each extension to fully utilize its capabilities.
