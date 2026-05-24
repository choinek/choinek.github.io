---
title: Visual Studio Code
sidebar_title: VS sCode
tags:
  - paReq
---

# Visual Studio Code dla YAML, Markdown i HTML

## Opis wymagania
Znajomość pracy w Visual Studio Code z plikami YAML, Markdown i HTML, w tym instalacja odpowiednich rozszerzeń, konfiguracja środowiska oraz umiejętność korzystania z narzędzi ułatwiających pracę z tymi formatami.

## Wymagania szczegółowe
- Instalacja i konfiguracja Visual Studio Code.
- Instalacja rozszerzeń do obsługi YAML, Markdown i HTML.
- Umiejętność konfigurowania środowiska pracy w VS Code.
- Praca z terminalem wbudowanym w VS Code.
- Korzystanie z podpowiedzi składni, walidacji i formatowania.

## Praktyczne umiejętności
Osoba powinna potrafić skonfigurować VS Code do pracy z YAML, Markdown i HTML, korzystać z podpowiedzi składni i walidacji oraz używać terminala wbudowanego.

## Zadanie weryfikacyjne
**Cel:**  
Skonfigurować Visual Studio Code dla efektywnej pracy z plikami YAML, Markdown i HTML.

**Kroki do wykonania:**  
1. Pobierz i zainstaluj Visual Studio Code z [oficjalnej strony](https://code.visualstudio.com/).  
2. Zainstaluj rozszerzenia:
   - YAML (Red Hat)
   - Markdown All in One
   - Live Server (dla podglądu HTML)
   - Prettier (do formatowania kodu)  
3. Utwórz folder `.vscode` w projekcie i stwórz plik `settings.json` z poniższą konfiguracją:

**Przykładowy plik `settings.json`:**

```json
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

4. Utwórz plik `assistant_config.yaml`:

```yaml
user:
  name: "Imie nazwisko"
  email: "idk@example.com"
  preferences:
    language: "pl"
    timezone: "Europe/Warsaw"
```

5. Utwórz plik `README.md`:

```markdown
# Personalna asystentka

Aplikacja do zarządzania zadaniami i listą zakupów.

## Funkcje
- Zarządzanie zadaniami
- Tworzenie listy zakupów
- Powiadomienia
```

6. Utwórz plik `index.html`:

```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personalna Asystentka</title>
</head>
<body>
    <h1>Witaj w aplikacji Asystentki!</h1>
</body>
</html>
```

7. Skonfiguruj Live Server do podglądu plików HTML.  
8. Sprawdź walidację plików YAML i podgląd Markdown (`Ctrl + Shift + V`).

**Kryteria oceny:**  
- VS Code poprawnie waliduje składnię YAML i Markdown.  
- Live Server poprawnie renderuje plik HTML.  
- Formatowanie kodu działa automatycznie.  
- Terminal w VS Code jest używany do podstawowych komend.

## Polecane Tutoriale
- [Oficjalny Przewodnik Visual Studio Code](https://code.visualstudio.com/docs) - Dokumentacja VS Code.  
- [Markdown All in One Extension Guide](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - Dokumentacja rozszerzenia do Markdown.  
- [YAML Extension Guide](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) - Dokumentacja rozszerzenia YAML.  
- [Live Server Guide](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Przewodnik po Live Server.  
- [Prettier Formatter Guide](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Instrukcja obsługi Prettier.

---

> **Notatki dodatkowe:**  
> Zapoznaj się z dokumentacją każdego rozszerzenia, aby maksymalnie wykorzystać jego możliwości.
