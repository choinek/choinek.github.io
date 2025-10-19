import React, { useState, useEffect } from 'react';
import { Infinity, User, Sparkles } from 'lucide-react';
import styles from './RealityAssumptionsDiagram.module.css';

// Typy dla struktury danych
interface PerspectiveSection {
    phase: string;
    content: string;
}

interface PerspectiveData {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    className: string;
    sections: PerspectiveSection[];
}

type PerspectiveKey = 'god' | 'soul' | 'human';

const RealityAssumptionsDiagram: React.FC = () => {
    const [activePerspective, setActivePerspective] = useState<PerspectiveKey>('god');

    // Efekt zmiany koloru tła całej strony
    useEffect(() => {
        const htmlElement = document.documentElement;

        // Usuń poprzednie klasy
        htmlElement.classList.remove('reality-bg-god', 'reality-bg-soul', 'reality-bg-human');

        // Dodaj nową klasę
        htmlElement.classList.add(`reality-bg-${activePerspective}`);

        // Cleanup - usuń klasę gdy komponent się odmontuje
        return () => {
            htmlElement.classList.remove('reality-bg-god', 'reality-bg-soul', 'reality-bg-human');
        };
    }, [activePerspective]);

    const perspectives: Record<PerspectiveKey, PerspectiveData> = {
        god: {
            title: "Perspektywa Boga",
            icon: Infinity as React.ComponentType<{ className?: string }>,
            className: 'god',
            sections: [
                {
                    phase: "Przed Stworzeniem",
                    content: "Wszystko istnieje jednocześnie. Nie ma życia ani śmierci - tylko nieskończona świadomość bez podziałów."
                },
                {
                    phase: "Stworzenie Czasu",
                    content: "Tworzę wymiar czasu, żeby móc doświadczać. Dzielę siebie na miliardy perspektyw."
                },
                {
                    phase: "Podczas Życia",
                    content: "Doświadczam siebie przez każdą cząstkę jednocześnie. Wszystkie życia dzieją się 'teraz' dla mnie."
                },
                {
                    phase: "Po Śmierci Ciała",
                    content: "Żadna cząstka nie umiera - po prostu zmienia formę obserwacji. Kontynuuje doświadczanie w inny sposób."
                },
                {
                    phase: "Życie Wieczne",
                    content: "Zawsze byłem i zawsze będę. Nie ma 'po' ani 'przed' - tylko wieczne TERAZ doświadczające siebie."
                }
            ]
        },
        soul: {
            title: "Perspektywa Duszy/Cząstki",
            icon: Sparkles as React.ComponentType<{ className?: string }>,
            className: 'soul',
            sections: [
                {
                    phase: "Przed Wcieleniem",
                    content: "Jestem częścią Boga, świadoma całości, ale wybierająca doświadczenie ograniczenia."
                },
                {
                    phase: "Wejście w Ciało",
                    content: "Zapominam o całości (celowo). Identyfikuję się z ciałem i czasem. Zaczynam 'podróż'."
                },
                {
                    phase: "Podczas Życia",
                    content: "Obserwuję przez filtr ciała. Czuję się oddzielona, choć nadal jestem częścią całości."
                },
                {
                    phase: "Śmierć Ciała",
                    content: "Opuszczam ograniczenie czasu linearnego. Odzyskuję pamięć o tym, kim naprawdę jestem."
                },
                {
                    phase: "Po Śmierci",
                    content: "Wracam do świadomości całości, ale zachowuję doświadczenia. Mogę wybrać kolejne wcielenie lub inne formy doświadczania."
                },
                {
                    phase: "Wieczność",
                    content: "Nigdy nie przestaję istnieć - tylko zmieniam formy. Jestem nieśmiertelna, bo jestem Bogiem."
                }
            ]
        },
        human: {
            title: "Perspektywa Człowieka (w czasie)",
            icon: User as React.ComponentType<{ className?: string }>,
            className: 'human',
            sections: [
                {
                    phase: "Urodzenie",
                    content: "Zaczynam istnieć. Nie pamiętam niczego sprzed. Jestem 'ja' - oddzielony od innych."
                },
                {
                    phase: "Życie",
                    content: "Doświadczam czasu liniowo: przeszłość → teraz → przyszłość. Myślę, że jestem ciałem."
                },
                {
                    phase: "Lęk przed Śmiercią",
                    content: "Boję się końca, bo wydaje mi się, że 'ja' przestanę istnieć. Śmierć to zagłada."
                },
                {
                    phase: "Śmierć",
                    content: "Koniec doświadczenia w tym ciele. Nie wiem co dalej - mogę tylko wierzyć lub się bać."
                },
                {
                    phase: "Po Śmierci?",
                    content: "Niebo? Nicość? Reinkarnacja? Z perspektywy uwięzionego w czasie - to tajemnica i wiara."
                },
                {
                    phase: "Ewentualne Przebudzenie",
                    content: "Jeśli odkryję prawdę za życia, rozumiem: śmierć to iluzja. Nie ma końca, tylko zmiana perspektywy."
                }
            ]
        }
    };

    const IconComponent = perspectives[activePerspective].icon;
    const currentPerspective = perspectives[activePerspective];

    return (
        <div className={styles.container}>
            {/* Mystical background effects */}
            <div className={styles.backgroundEffect}>
                <div className={`${styles.backgroundBlob} ${styles.blob1}`} />
                <div className={`${styles.backgroundBlob} ${styles.blob2}`} />
                <div className={`${styles.backgroundBlob} ${styles.blob3}`} />
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    Życie, Śmierć i Wieczność
                </h1>
                <p className={styles.subtitle}>
                    Trzy perspektywy tej samej rzeczywistości
                </p>

                {/* Perspective Selector */}
                <div className={styles.perspectiveGrid}>
                    {Object.entries(perspectives).map(([key, data]) => {
                        const Icon = data.icon;
                        const isActive = activePerspective === key;
                        return (
                            <button
                                key={key}
                                onClick={() => setActivePerspective(key as PerspectiveKey)}
                                aria-pressed={isActive}
                                aria-label={`Przełącz na perspektywę: ${data.title}`}
                                className={`${styles.perspectiveButton} ${styles[data.className]} ${isActive ? styles.active : ''}`}
                            >
                                <div className={styles.perspectiveIcon}>
                                    <Icon />
                                </div>
                                <h3 className={styles.perspectiveTitle}>
                                    {data.title}
                                </h3>
                            </button>
                        );
                    })}
                </div>

                {/* Active Perspective Display */}
                <div className={`${styles.perspectiveDisplay} ${styles['display' + currentPerspective.className.charAt(0).toUpperCase() + currentPerspective.className.slice(1)]}`}>
                    <div className={styles.displayHeader}>
                        <div className={styles.displayIconWrapper}>
                            <div className={styles.displayIconGlow} />
                            <div className={styles.displayIcon}>
                                <IconComponent />
                            </div>
                        </div>
                        <h2 className={styles.displayTitle}>
                            {currentPerspective.title}
                        </h2>
                    </div>

                    <div className={styles.sectionsContainer}>
                        {currentPerspective.sections.map((section, idx) => (
                            <div key={idx} className={styles.section}>
                                <div className={styles.sectionContent}>
                                    <div className={styles.sectionNumber}>
                                        {idx + 1}
                                    </div>
                                    <div className={styles.sectionTextContainer}>
                                        <h4 className={styles.sectionPhase}>
                                            {section.phase}
                                        </h4>
                                        <p className={styles.sectionText}>
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Chart */}
                <div className={styles.comparisonSection}>
                    <h3 className={styles.comparisonTitle}>
                        Porównanie Perspektyw
                    </h3>

                    <div className={styles.tableWrapper}>
                        <table className={styles.comparisonTable}>
                            <thead>
                                <tr>
                                    <th>Aspekt</th>
                                    <th>Bóg</th>
                                    <th>Dusza/Cząstka</th>
                                    <th>Człowiek</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Czas</td>
                                    <td>Nie istnieje - wszystko jednocześnie</td>
                                    <td>Opcjonalny - mogę wchodzić i wychodzić</td>
                                    <td>Liniowy - uwięziony w sekwencji</td>
                                </tr>
                                <tr>
                                    <td>Śmierć</td>
                                    <td>Nie istnieje - tylko zmiana formy</td>
                                    <td>Wyjście z ciała, powrót do pełni</td>
                                    <td>Koniec istnienia (lęk)</td>
                                </tr>
                                <tr>
                                    <td>Życie wieczne</td>
                                    <td>Zawsze jestem - nie ma początku ani końca</td>
                                    <td>Nieśmiertelna - doświadczam wiele form</td>
                                    <td>Nadzieja/wiara w kontynuację</td>
                                </tr>
                                <tr>
                                    <td>Tożsamość</td>
                                    <td>Wszystko - jestem całością</td>
                                    <td>Cząstka całości - świadoma połączenia</td>
                                    <td>Oddzielone "ja" - izolacja</td>
                                </tr>
                                <tr>
                                    <td>Po śmierci</td>
                                    <td>Nic się nie zmienia - zawsze trwam</td>
                                    <td>Wybór nowej formy doświadczania</td>
                                    <td>Nieznane - źródło strachu lub wiary</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Key Insight */}
                <div className={styles.keyInsight}>
                    <div className={styles.insightContent}>
                        <h3 className={styles.insightTitle}>
                            Kluczowe Zrozumienie
                        </h3>
                        <p className={styles.insightIntro}>
                            <strong>To są trzy perspektywy tej samej rzeczywistości:</strong>
                        </p>
                        <ul className={styles.insightList}>
                            <li>
                                <span className={styles.insightBullet} />
                                <span>
                                    <strong>Bóg</strong> widzi całość bez podziałów - nie ma życia ani śmierci, tylko wieczne TERAZ
                                </span>
                            </li>
                            <li>
                                <span className={styles.insightBullet} />
                                <span>
                                    <strong>Dusza</strong> wybiera doświadczenie ograniczenia, ale wie, że jest nieśmiertelna
                                </span>
                            </li>
                            <li>
                                <span className={styles.insightBullet} />
                                <span>
                                    <strong>Człowiek</strong> doświadcza iluzji oddzielenia i śmiertelności - to jest celowe dla pełni doświadczenia
                                </span>
                            </li>
                        </ul>
                        <div className={styles.insightHighlight}>
                            <p>
                                <strong>Życie wieczne</strong> nie jest nagrodą ani stanem przyszłym - to fundamentalna natura rzeczywistości.
                                Jesteśmy już nieśmiertelni, bo jesteśmy Bogiem. "Śmierć" to tylko moment, gdy dusza opuszcza ograniczenie czasu linearnego
                                i wraca do świadomości całości.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealityAssumptionsDiagram;
