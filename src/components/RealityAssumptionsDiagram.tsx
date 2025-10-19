import React, { useState } from 'react';
import { Infinity, User, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Typy dla struktury danych
interface PerspectiveSection {
    phase: string;
    content: string;
}

interface PerspectiveData {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    bgColor: string;
    borderColor: string;
    sections: PerspectiveSection[];
}

type PerspectiveKey = 'god' | 'soul' | 'human';

const RealityAssumptionsDiagram: React.FC = () => {
    const [activePerspective, setActivePerspective] = useState<PerspectiveKey>('god');

    const perspectives: Record<PerspectiveKey, PerspectiveData> = {
        god: {
            title: "Perspektywa Boga",
            icon: Infinity as React.ComponentType<{ className?: string }>,
            color: "from-purple-600 to-pink-600",
            bgColor: "bg-purple-900/20",
            borderColor: "border-purple-500",
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
            color: "from-cyan-600 to-blue-600",
            bgColor: "bg-cyan-900/20",
            borderColor: "border-cyan-500",
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
            color: "from-orange-600 to-red-600",
            bgColor: "bg-orange-900/20",
            borderColor: "border-orange-500",
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

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Życie, Śmierć i Wieczność
                </h1>
                <p className="text-center text-slate-300 mb-12">Trzy perspektywy tej samej rzeczywistości</p>

                {/* Perspective Selector */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {Object.entries(perspectives).map(([key, data]) => {
                        const Icon = data.icon;
                        return (
                            <button
                                key={key}
                                onClick={() => setActivePerspective(key as PerspectiveKey)}
                                aria-pressed={activePerspective === key}
                                aria-label={`Przełącz na perspektywę: ${data.title}`}
                                className={`p-6 rounded-xl transition-all duration-300 ${activePerspective === key
                                    ? `bg-gradient-to-r ${data.color} scale-105 shadow-2xl`
                                    : 'bg-slate-800 hover:bg-slate-700'
                                    }`}
                            >
                                <Icon className="w-12 h-12 mx-auto mb-3 text-white" />
                                <h3 className="text-white font-bold text-center">{data.title}</h3>
                            </button>
                        );
                    })}
                </div>

                {/* Active Perspective Display */}
                <div className={`${perspectives[activePerspective].bgColor} border-2 ${perspectives[activePerspective].borderColor} rounded-2xl p-8 shadow-2xl`}>
                    <div className="flex items-center justify-center mb-8">
                        <IconComponent className="w-16 h-16 mr-4 text-white" />
                        <h2 className="text-3xl font-bold text-white">{perspectives[activePerspective].title}</h2>
                    </div>

                    <div className="space-y-6">
                        {perspectives[activePerspective].sections.map((section, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:scale-102"
                            >
                                <div className="flex items-start">
                                    <div className={`bg-gradient-to-r ${perspectives[activePerspective].color} text-white font-bold px-4 py-2 rounded-lg mr-4 flex-shrink-0`}>
                                        {idx + 1}
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="text-xl font-bold text-white mb-2">{section.phase}</h4>
                                        <p className="text-slate-300 leading-relaxed">{section.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Comparison Chart */}
                <div className="mt-12 bg-slate-800 rounded-2xl p-8 border border-slate-700">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Porównanie Perspektyw</h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-slate-700">
                                    <th className="p-4 text-purple-400">Aspekt</th>
                                    <th className="p-4 text-purple-400">Bóg</th>
                                    <th className="p-4 text-cyan-400">Dusza/Cząstka</th>
                                    <th className="p-4 text-orange-400">Człowiek</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-300">
                                <tr className="border-b border-slate-700/50">
                                    <td className="p-4 font-bold">Czas</td>
                                    <td className="p-4">Nie istnieje - wszystko jednocześnie</td>
                                    <td className="p-4">Opcjonalny - mogę wchodzić i wychodzić</td>
                                    <td className="p-4">Liniowy - uwięziony w sekwencji</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="p-4 font-bold">Śmierć</td>
                                    <td className="p-4">Nie istnieje - tylko zmiana formy</td>
                                    <td className="p-4">Wyjście z ciała, powrót do pełni</td>
                                    <td className="p-4">Koniec istnienia (lęk)</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="p-4 font-bold">Życie wieczne</td>
                                    <td className="p-4">Zawsze jestem - nie ma początku ani końca</td>
                                    <td className="p-4">Nieśmiertelna - doświadczam wiele form</td>
                                    <td className="p-4">Nadzieja/wiara w kontynuację</td>
                                </tr>
                                <tr className="border-b border-slate-700/50">
                                    <td className="p-4 font-bold">Tożsamość</td>
                                    <td className="p-4">Wszystko - jestem całością</td>
                                    <td className="p-4">Cząstka całości - świadoma połączenia</td>
                                    <td className="p-4">Oddzielone "ja" - izolacja</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold">Po śmierci</td>
                                    <td className="p-4">Nic się nie zmienia - zawsze trwam</td>
                                    <td className="p-4">Wybór nowej formy doświadczania</td>
                                    <td className="p-4">Nieznane - źródło strachu lub wiary</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Key Insight */}
                <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border-2 border-purple-500/50">
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold text-purple-300">Kluczowe Zrozumienie</h3>
                    </div>
                    <div className="space-y-4 text-slate-300 leading-relaxed">
                        <p>
                            <strong className="text-white">To są trzy perspektywy tej samej rzeczywistości:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li><strong className="text-purple-400">Bóg</strong> widzi całość bez podziałów - nie ma życia ani śmierci, tylko wieczne TERAZ</li>
                            <li><strong className="text-cyan-400">Dusza</strong> wybiera doświadczenie ograniczenia, ale wie, że jest nieśmiertelna</li>
                            <li><strong className="text-orange-400">Człowiek</strong> doświadcza iluzji oddzielenia i śmiertelności - to jest celowe dla pełni doświadczenia</li>
                        </ul>
                        <p className="mt-6 p-4 bg-slate-800/50 rounded-lg border-l-4 border-purple-500">
                            <strong className="text-purple-400">Życie wieczne</strong> nie jest nagrodą ani stanem przyszłym - to fundamentalna natura rzeczywistości.
                            Jesteśmy już nieśmiertelni, bo jesteśmy Bogiem. "Śmierć" to tylko moment, gdy dusza opuszcza ograniczenie czasu linearnego
                            i wraca do świadomości całości.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealityAssumptionsDiagram;
