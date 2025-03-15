---
authors: [choinek]
---

# Podstawy przechowywania haseł
:::tip
Rozważ włączenie dwuskładnikowego uwierzytelniania dla konta Bitwarden.
:::

## Opis
Znajomość podstawowych zasad korzystania z managera haseł na przykładzie aplikacji Bitwarden, w tym rejestracja, tworzenie bezpiecznych haseł, przechowywanie danych logowania oraz bezpieczne zarządzanie nimi.

## Zakres
- Zrozumienie, czym jest manager haseł i dlaczego warto z niego korzystać.  
- Umiejętność tworzenia i przechowywania bezpiecznych haseł w Bitwarden.  
- Korzystanie z generatora haseł Bitwarden.  
- Automatyczne uzupełnianie danych logowania na stronach internetowych.  
- Bezpieczne przechowywanie i zarządzanie hasłami w aplikacji i przeglądarce.

## Praktyczne umiejętności
- Wygenerowanie silnego hasła za pomocą Bitwarden.  
- Zapisanie danych logowania do Bitwarden i używanie ich do logowania na stronach internetowych.  
- Skonfigurowanie wtyczki Bitwarden w przeglądarce.  

## Zadanie

**Cel:**  
Zarejestrowanie konta na platformie GitHub i zapisanie danych logowania w Bitwarden.

**Kroki do wykonania:**  
1. **Utwórz konto w Bitwarden:**  
   :::danger
   Upewnij się, że hasło główne, które ustawisz w managerze haseł, jest unikalne i trudne do odgadnięcia, ponieważ zabezpiecza wszystkie inne hasła. **Nie zgub tego hasła, bo to jedyne, do którego musisz mieć dostęp.**
   :::
   - Przejdź na stronę [Bitwarden](https://bitwarden.com) i załóż nowe konto.  
   - Użyj silnego, unikalnego hasła głównego i zapisz je w bezpiecznym miejscu.

2. **Zainstaluj wtyczkę Bitwarden do przeglądarki:**  
    - Pobierz rozszerzenie Bitwarden dla swojej przeglądarki (Chrome).  
      :::note
         Ściągając rozszerzenia do przeglądarki, zwracaj uwagę na autora, ilość ocen, ilość pobrań, opinie. Tego typu programy mają dostęp do Twojej przeglądarki i mogą potencjalnie podejrzeć w losowym momencie Twój ruch. Nikt nie zagwarantuje, że zaufana firma nie będzie miała wtopy, jakiegoś wycieku czy przejęcia rozszerzenia, ale szansa na to jest nieduża. 
      :::
   - Zaloguj się do wtyczki, używając konta Bitwarden.

3. **Zarejestruj konto na GitHub:**  
   - Przejdź na [GitHub](https://github.com) i wybierz opcję rejestracji.  
   - W polu „username” wpisz unikalną nazwę użytkownika.  
   - Dla pola „password” użyj generatora haseł Bitwarden, ustawiając długość na co najmniej 16 znaków, zawierających duże i małe litery, cyfry i znaki specjalne.  
   - Skopiuj wygenerowane hasło do formularza rejestracyjnego i zapisz je automatycznie w Bitwarden.  
   - Zakończ proces rejestracji, podając wymagane dane.

4. **Sprawdź zapisane dane w Bitwarden:**  
   - Otwórz wtyczkę Bitwarden i upewnij się, że dane logowania do GitHub są poprawnie zapisane.  
   - Sprawdź, czy Bitwarden automatycznie uzupełnia dane podczas logowania do GitHub.

5. **Test automatycznego logowania:**  
   - Wyloguj się z GitHub i ponownie spróbuj się zalogować, korzystając z funkcji automatycznego uzupełniania Bitwarden.

**Kryteria oceny:**  
- Konto w Bitwarden jest poprawnie założone.  
- Wtyczka Bitwarden jest zainstalowana i działa prawidłowo.  
- Dane logowania do GitHub są poprawnie zapisane w Bitwarden.  
- Funkcja automatycznego uzupełniania danych działa prawidłowo.  
- Hasło do konta GitHub spełnia standardy bezpieczeństwa.

## Polecane tutoriale
- [Oficjalny przewodnik Bitwarden](https://bitwarden.com/help/) – kompletny przewodnik po funkcjach Bitwarden.  
- [Jak korzystać z menagera haseł Bitwarden – YouTube](https://www.youtube.com/results?search_query=bitwarden+poradnik) – wideo tutorial pokazujący krok po kroku, jak korzystać z Bitwarden.  
- [Generator haseł Bitwarden](https://bitwarden.com/password-generator/) – narzędzie do tworzenia silnych haseł.  
- [Bezpieczne zarządzanie hasłami – poradnik CERT Polska](https://www.cert.pl/) – praktyczne wskazówki dotyczące zarządzania hasłami i bezpieczeństwa online.

---

:::danger
Upewnij się, że hasło główne, które ustawisz w managerze haseł, jest unikalne i trudne do odgadnięcia, ponieważ zabezpiecza wszystkie inne hasła. 

Jednocześnie nie zgub tego hasła, bo to jedyne, do którego musisz mieć dostęp.

Rozważ włączenie dwuskładnikowego uwierzytelniania dla konta Bitwarden.
:::