---
tags:
  - paReq
---

# Podstawy YAML

## Kursy

[Kurs](https://blog.askomputer.pl/co-to-jest-yaml/)

## Opis Wymagania

Znajomość podstawowej składni YAML, umiejętność tworzenia, odczytu i edycji plików YAML, a także zrozumienie zasad poprawnego formatowania danych.

## Wymagania Szczegółowe

- Znajomość podstawowej składni YAML.
- Umiejętność definiowania kluczy i wartości.
- Zrozumienie pracy z listami, słownikami i strukturami zagnieżdżonymi.
- Umiejętność rozróżniania typów danych w YAML.

## Praktyczne Umiejętności

Osoba powinna potrafić napisać poprawny plik YAML zawierający różne typy danych, zagnieżdżone struktury i listy.

## Zadanie Weryfikacyjne

**Cel:**  
Stworzenie pliku `assistant_config.yaml` definiującego konfigurację dla prostej, personalnej asystentki, która zarządza listą zakupów i zadaniami dnia codziennego.

**Kroki do wykonania:**  

1. Stwórz plik `assistant_config.yaml`.  
2. Zdefiniuj następujące sekcje:
   - `user` z kluczami `name`, `email` i preferencjami (`language`, `timezone`).  
   - `tasks` jako lista zadań do wykonania z polami `name`, `deadline` i `priority`.  
   - `shopping_list` jako lista produktów do kupienia z polami `item`, `quantity`, `category`.  
   - `notifications` z preferencjami dotyczącymi powiadomień (`email`, `sms`, `push`).
