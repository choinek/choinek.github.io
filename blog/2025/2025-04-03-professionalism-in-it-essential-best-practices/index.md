---
title: "Professionalism in IT: Few Essential Best Practices"
authors: [choinek]
tags: [health]
---

# Profesjonalizm w IT - Przewodnik Dobrych Praktyk

## Zasady ogólne

| Zasada | Opis | Przykład pozytywny | Przykład negatywny | Konsekwencje nieprzestrzegania |
|--------|------|-------------------|-------------------|--------------------------------|
| **Spójność dokumentów** | Zachowanie jednolitych odstępów, formatowania i stylu, szczególnie w prezentacjach i szablonach | Raport techniczny z jednolitym formatowaniem, gdzie wszystkie nagłówki tego samego poziomu mają identyczny styl, a odstępy między sekcjami są równe; szablon firmowy stosowany konsekwentnie | Prezentacja dla klienta, gdzie każdy slajd używa innego fontu, układ elementów jest przypadkowy, a niektóre nagłówki są wycentrowane, a inne wyrównane do lewej | Odbiorcy skupiają się na chaotycznej formie zamiast na treści; trudność w interpretacji dokumentów; wydłużony czas edycji przy współpracy |
| **Spójność prezentacji** | Utrzymanie spójnego wyglądu i stylu przez całą prezentację | Prezentacja z tezą, gdzie każdy slajd ma podobną strukturę, spójną kolorystykę i układ graficzny, a przejścia między slajdami tworzą logiczną narrację | Slajdy stworzone przez różne osoby bez uzgodnienia formatu: różne style punktorów, odmienne palety kolorów, mieszane fonty i różne poziomy formalności języka | Odbiorca zapamiętuje chaos wizualny zamiast przekazu; prezentacja sprawia wrażenie przygotowanej na ostatnią chwilę; utrata wiarygodności przekazu |
| **Kontrola wersji** | Stosowanie numeracji wersji zamiast ogólnikowych nazw | Dokumentacja projektu z nazwami `Specyfikacja_API_v1.2.docx`, `Specyfikacja_API_v1.3.docx` z datą w komentarzu do pliku oraz w nagłówku dokumentu | Pliki nazwane `nowa_specyfikacja.docx`, `najnowsza_specyfikacja.docx`, `finalna_wersja.docx`, `poprawiona_finalna_wersja.docx` bez dat i numerów wersji | Nadpisanie ważnych zmian; trudność w śledzeniu historii dokumentu; zespół pracujący na nieaktualnych wersjach |
| **Czytelność dokumentu** | Utrzymanie czystej struktury bez zbędnych ozdobników | Dokumentacja techniczna z przejrzystą hierarchią nagłówków, odpowiednim kontrastem tekstu, precyzyjnymi diagramami i jednolitym stylem | Raport zawierający przypadkowe cliparty, pięć różnych fontów, zbędne kolorowe tła i efekty tekstowe utrudniające czytanie | Kluczowe informacje pozostają niezauważone; zwiększone ryzyko błędnej interpretacji danych; nieprofesjonalny wizerunek firmy |
| **Kompresja plików** | Kompresowanie dużych dokumentów przed wysyłką e-mailem | Wysłanie spakowanego ZIP-a zawierającego zoptymalizowane obrazy prezentacji (3MB zamiast 20MB) z informacją o zawartości w treści maila | Wysłanie prezentacji PowerPoint z nieskompresowanymi zdjęciami wysokiej rozdzielczości (25MB) do 15 odbiorców, blokując ich skrzynki | Przepełnienie skrzynek odbiorców; problemy z dostarczeniem wiadomości; wydłużony czas przesyłania; podwyższone koszty przechowywania danych |
| **Przygotowanie** | Testowanie sprzętu i materiałów przed prezentacjami | Sprawdzenie przed prezentacją projektora, dźwięku, połączenia internetowego oraz przetestowanie wszystkich elementów interaktywnych prezentacji | Odkrycie podczas prezentacji, że plik ma 0 bajtów i nikt nawet raz nie otworzył go aby sprawdzić czy działa; konieczność improwizowania całego wystąpienia | Utrata wiarygodności; strata czasu uczestników; nieefektywne przekazanie informacji; stres prezentera; postrzeganie jako osoba nieprzygotowana |
| **Profesjonalny wygląd** | Świadome dostosowanie wyglądu do kontekstu spotkania | Zadbany, schludny wygląd na spotkanie, dopasowany do roli i kontekstu, pokazujący szacunek dla rozmówcy | Pojawienie się na ważnym spotkaniu w wyraźnie nieadekwatnym stroju, niechlujnym lub zbyt swobodnym | Ludzie niestety bardzo zwracają uwagę na wygląd i na tej podstawie potrafią zaszufladkować kogoś, jeszcze zanim padną pierwsze słowa; nie należy jednak przesadzać z formalnością, gdyż może to tworzyć niepotrzebny dystans (chyba że właśnie o to nam chodzi) |

## Zarządzanie plikami

| Praktyka | Opis | Przykład pozytywny | Przykład negatywny | Konsekwencje nieprzestrzegania |
|----------|------|-------------------|-------------------|--------------------------------|
| **Konwencje nazewnictwa** | Unikanie emoji i tworzenie logicznych struktur plików z użyciem małych liter | Struktura folderów projektu: `projekty/analiza_danych/2024/faza1/dokumentacja/specyfikacja_techniczna_v2.1.pdf` | Plik `📊✨Raport_FINALNY😊.xlsx` umieszczony bezpośrednio w folderze Dokumenty bez żadnej struktury, z mieszanymi wielkimi i małymi literami | Problemy z wyszukiwaniem; trudność w identyfikacji najnowszych wersji; chaos informacyjny; problemy z systemami kontroli wersji; problemy przy przenoszeniu między systemami operacyjnymi (Linux rozróżnia wielkość liter) |
| **Znaki specjalne** | Unikanie znaków diakrytycznych, spacji i znaków specjalnych w nazwach plików | `raport_kwartalny_sprzedazy_2024Q2.pdf` z podkreślnikami zamiast spacji i bez polskich znaków | `Raport Sprzedaży Kwartalnej (2024) - Wersja Końcowa!.pdf` ze spacjami, znakami specjalnymi i polskimi literami | Problemy z kompatybilnością między systemami; błędy przy synchronizacji w chmurze; problemy z linkami do plików w systemach CI/CD |
| **Organizacja** | Tworzenie dedykowanych folderów dla plików tymczasowych | Posiadanie folderu `temp` w katalogu Dokumentów z podfolderami według projektu, regularne czyszczenie po zakończeniu zadań | Pulpit zaśmiecony 50+ plikami bez organizacji, nazwy typu `obraz1.jpg`, `skan.pdf` bez kontekstu | Utrata produktywności; wydłużony czas wyszukiwania; przypadkowe usunięcie ważnych plików; niemożność identyfikacji kontekstu pliku |
| **Formaty plików** | Używanie standardowych formatów dla zapewnienia kompatybilności | Udostępnianie dokumentacji w formatach PDF (dla dokumentów finalnych), DOCX (dla dokumentów edytowalnych), XLSX (dla danych), oraz JPG/PNG (dla grafik) | Przesłanie dokumentu w natywnym formacie specjalistycznego oprogramowania, którego odbiorca nie posiada, lub w starych wersjach (np. DOC zamiast DOCX) | Niemożność odczytu dokumentów przez odbiorców; utrata formatowania; dodatkowe koszty zakupu oprogramowania; opóźnienia w komunikacji; problemy z kompatybilnością wersji |

## Etykieta e-mailowa

| Praktyka | Opis | Przykład pozytywny | Przykład negatywny | Konsekwencje nieprzestrzegania |
|----------|------|-------------------|-------------------|--------------------------------|
| **Responsywność** | Odpowiadanie w odpowiednim czasie i potwierdzanie otrzymania wiadomości | "Dziękuję za zgłoszenie. Otrzymałem zadanie i zajmę się nim do czwartku. Poinformuję o postępach lub jeśli wystąpią jakiekolwiek komplikacje." | Odpowiedź po tygodniu z merytorycznym rozwiązaniem, gdy ktoś inny już zdążył to zrobić z powodu braku informacji zwrotnej; obie strony straciły czas | Osoba wysyłająca wiadomość może nie widzieć, że dostaliśmy maila; podwójnie wykonana praca; nieefektywne wykorzystanie zasobów; brak koordynacji działań |
| **Komunikacja grupowa** | Używanie "Odpowiedz wszystkim" gdy jest to właściwe | Odpowiedź na e-mail zespołowy o zmianie terminu spotkania z użyciem "Odpowiedz wszystkim", aby wszyscy wiedzieli o Twojej dostępności | Odpowiedź tylko do nadawcy, gdy informacja jest istotna dla całego zespołu, powodując konieczność ponownego rozesłania | Niekompletna komunikacja; dezinformacja w zespole; konieczność dodatkowych wyjaśnień; niewłaściwa koordynacja działań |
| **Profesjonalny styl** | Jasne tematy i właściwe formatowanie | Temat: "Projekt Alfa: Plan migracji bazy danych - Prośba o recenzję do 10.05" z poprawnie sformatowaną treścią, podziałem na akapity i podpisem | Temat: "Hej" z jednolitym blokiem tekstu bez formatowania, literówkami i bez informacji kontaktowych | Pominięcie wiadomości przez odbiorców; trudność w odnalezieniu w przyszłości; nieczytelność treści; postrzeganie jako spam |

## Ochrona danych osobowych

| Praktyka | Opis | Przykład pozytywny | Przykład negatywny | Konsekwencje nieprzestrzegania |
|----------|------|-------------------|-------------------|--------------------------------|
| **Udostępnianie plików** | Udostępnianie wrażliwych danych tylko konkretnym osobom | Użycie Microsoft Teams do udostępnienia wrażliwych dokumentów konkretnym osobom z ustawieniem wygasania dostępu | Umieszczenie dokumentów z danymi osobowymi na publicznie dostępnym linku bez zabezpieczeń | Naruszenie RODO; potencjalne kary finansowe; utrata zaufania; kradzież tożsamości; odpowiedzialność prawna |
| **Bezpieczne udostępnianie** | Korzystanie z odpowiednich ustawień prywatności w usługach chmurowych | Udostępnienie dokumentu w Google Drive z ustawieniem "Dostęp tylko dla określonych użytkowników" i wyłączoną opcją dalszego udostępniania | Wysłanie dokumentu przez niezabezpieczoną platformę lub z publicznym linkiem "każdy kto ma link" | Nieautoryzowany dostęp do poufnych informacji; rozpowszechnienie danych poza zamierzony krąg odbiorców; brak kontroli nad kopiami dokumentu |
| **Bezpieczeństwo danych** | Nigdy nie transmitować ani nie pokazywać danych osobowych podczas prezentacji | Całkowite wyłączenie wszystkich okien zawierających wrażliwe dane przed rozpoczęciem udostępniania ekranu, używanie danych testowych zamiast rzeczywistych | Przypadkowe pokazanie danych karty kredytowej klienta podczas demonstracji na żywo, ponieważ okno pozostało otwarte w tle | Naruszenie prywatności; utrata zaufania; możliwe konsekwencje prawne; wyciek danych; ryzyko nadużyć |
| **Ograniczenia przechowywania** | Unikanie przechowywania danych osobowych na urządzeniach prywatnych | Używanie szyfrowanych systemów firmowych do przechowywania informacji o personelu z kontrolą dostępu | Trzymanie arkusza kalkulacyjnego z danymi osobowymi pracowników na prywatnym laptopie bez szyfrowania | Brak kontroli nad danymi; ryzyko utraty urządzenia z danymi; naruszenie polityki firmowej; konsekwencje prawne |

## Dobre praktyki arkuszy kalkulacyjnych

| Praktyka | Opis | Przykład pozytywny | Przykład negatywny | Konsekwencje nieprzestrzegania |
|----------|------|-------------------|-------------------|--------------------------------|
| **Formatowanie danych** | Używanie odpowiednich typów danych i formatowania | Ustawienie kolumn cenowych jako format walutowy (1 250,00 zł) z właściwymi funkcjami sumowania | Wprowadzanie w komórce wartości tekstowych jak "To rozliczymy później" zamiast liczb, co niszczy całą funkcjonalność arkusza | Niemożność przeprowadzenia analizy; błędy w obliczeniach; konieczność ręcznego przetwarzania danych; nieprawidłowe raportowanie finansowe |
| **Spójność formuł** | Zapewnienie spójności formuł i obliczeń | Używanie formuł SUM z odwołaniami do zakresów, które automatycznie aktualizują się przy dodaniu nowych danych | Ręczne dodawanie liczb i zapominanie o aktualizacji sumy po zmianie danych wejściowych | Błędne wyniki; niespójne dane; trudność w śledzeniu źródła błędów; podejmowanie decyzji w oparciu o nieprawidłowe informacje |
| **Priorytet funkcjonalności** | Priorytetyzacja funkcjonalności nad układem wizualnym | Strukturyzowanie danych jako właściwą tabelę umożliwiającą filtrowanie i tworzenie tabel przestawnych | Tworzenie wizualnie atrakcyjnego, ale funkcjonalnie ograniczonego raportu, którego nie można analizować | Konieczność ręcznego przetwarzania przy każdej zmianie; niemożność głębszej analizy; nieefektywne wykorzystanie narzędzia; zwiększone nakłady pracy |

## Bezpieczeństwo i prywatność

| Praktyka | Opis | Przykład pozytywny | Przykład negatywny | Konsekwencje nieprzestrzegania |
|----------|------|-------------------|-------------------|--------------------------------|
| **Zarządzanie hasłami** | Nigdy nie używać ponownie haseł na różnych platformach | Używanie menedżera haseł do generowania i przechowywania unikalnych poświadczeń dla każdej usługi z silnymi, losowymi hasłami | Używanie "NazwaFirmy2024!" jako hasła do każdego konta związanego z pracą | Kompromitacja wielu kont po wycieku jednego hasła; nieautoryzowany dostęp do systemów; kradzież danych firmowych; naruszenie bezpieczeństwa |
| **Zarządzanie prywatnością kont** | Regularne audytowanie informacji udostępnianych publicznie i usuwanie niepotrzebnych kont | Udostępnianie minimum informacji o sobie w internecie; regularne przeglądanie i kasowanie nieużywanych kont; korzystanie z menedżera haseł do śledzenia posiadanych kont | Posiadanie dziesiątek nieużywanych i zapomnianych kont w różnych serwisach z tymi samymi danymi uwierzytelniającymi; udostępnianie nadmiernej ilości danych osobowych | Wyciek poufnych informacji; narażenie na ataki socjotechniczne; kumulacja danych osobowych w wielu miejscach; zwiększone ryzyko kradzieży tożsamości |
| **Bezpieczeństwo dokumentów** | Stosowanie haseł i szyfrowania dla ważnych dokumentów | Zabezpieczenie hasłem pliku zawierającego informacje o wynagrodzeniach przed wysłaniem go do działu HR | Wysłanie niezaszyfrowanego arkusza kalkulacyjnego z numerami PESEL pracowników przez niezabezpieczoną pocztę e-mail | Nieautoryzowany dostęp do poufnych informacji; naruszenie przepisów o ochronie danych; kradzież tożsamości; odpowiedzialność prawna firmy |

## Dodatkowe zagadnienia

| Zagadnienie | Opis | Przykład pozytywny | Przykład negatywny | Konsekwencje nieprzestrzegania |
|-------------|------|-------------------|-------------------|--------------------------------|
| **Weryfikacja tego co wysyłamy 2x** | Sprawdzanie materiałów przed i po wysłaniu, szczególnie w ważnych tematach | Testowanie linku przed wysłaniem, a następnie sprawdzenie go "na chłodno" po wysłaniu, aby upewnić się o poprawności; kliknięcie we własny link aby sprawdzić czy działa | Wysłanie uszkodzonego linku do całego departamentu, powodując zamieszanie i stratę czasu 20 osób, podczas gdy szybka weryfikacja pomogłaby uniknąć problemu | Strata czasu wielu osób; konieczność wysyłania sprostowań; utrata profesjonalnego wizerunku; podważenie kompetencji |
| **Nastawienie na rozwiązywanie problemów** | Podejmowanie prób samodzielnego rozwiązania problemów | Dokładne przyjrzenie się nieprawidłowemu linkowi i zauważenie, że dokleił się do niego fragment tekstu, który wystarczy usunąć | Natychmiastowe odbicie maila do wszystkich z informacją o nieprawidłowym linku, zamiast spróbować znaleźć i naprawić problem | Niepotrzebne obciążenie całego zespołu; rozpraszanie uwagi innych pracowników; tworzenie kultury zależności; utrata okazji do samodzielnego rozwoju |
| **Narzędzia profesjonalne** | Używanie odpowiednich narzędzi dla swojej domeny | Używanie Git do kontroli wersji kodu z sensownymi komunikatami commit i odpowiednią strukturą gałęzi | Tworzenie wielu kopii plików z nazwami jak "index_v1.html", "index_v2.html", "index_final.html" na współdzielonym dysku sieciowym | Konflikty w kodzie; trudności w śledzeniu zmian; problemy z integracją; niemożność ustalenia aktualnej wersji; wydłużony czas wdrożenia |

| Head 1 | Head 2 | Head 3 | Head 4 | Head 5 |
| ------ | ------ | ------ | ------ | ------ |
| >      | (2x1)  | Cell   | Cell   | Cell   |
| (1x3)  | >  <br/>asd    | (2x2)  | >      | (2x2)  |
| ^      | >      | ^      | Cell   | Cell   |
| ^      | >      | >      | (3x1)  | Cell   |