Kryteria oceny:

- Plik YAML jest poprawnie sformatowany i zawiera wszystkie wymagane sekcje.
- Wcięcia i struktury są zgodne z zasadami YAML.
- Dane odzwierciedlają realistyczne zastosowanie asystentki.
- Zadania i lista zakupów są logicznie przemyślane i poprawnie opisane.

```
user:
  name: "Asystentka"
  email: "asystentka@localhost"
  preferences:
    language: "pl"
    timezone: "Europe/Warsaw"

tasks:
  - name: "Umówienie wizyty u lekarza"
    deadline: "2025-03-20"
    priority: "high"
  - name: "Przygotowanie prezentacji na spotkanie"
    deadline: "2025-03-22"
    priority: "medium"

shopping_list:
  - item: "Mleko"
    quantity: 2
    category: "Nabiał"
  - item: "Chleb"
    quantity: 1
    category: "Pieczywo"
  - item: "Jabłka"
    quantity: 6
    category: "Owoce"

notifications:
  email: true
  sms: false


  Kryteria oceny:

```