
import React, { useState, useMemo, useCallback } from 'react';
import { factionsData, waftPartsData } from './data/gameData';
import type { WaftPart, OutcomeCombination, Creature } from './types';
import { calculateOutcomes } from './services/simulationService';
import ResultsTable from './components/ResultsTable';

const PART_LIMIT = 15;

const Loader: React.FC = () => (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-800 rounded-lg">
        <svg className="animate-spin h-10 w-10 text-purple-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <h2 className="text-xl font-semibold text-slate-100">Calculating Outcomes...</h2>
        <p className="text-slate-400 mt-2">This might take a moment for high rage values.</p>
    </div>
);


const App: React.FC = () => {
    const [selectedFaction, setSelectedFaction] = useState<string>('');
    const [partQuantities, setPartQuantities] = useState<Record<string, number>>({});
    const [results, setResults] = useState<OutcomeCombination[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const availableParts = useMemo(() => {
        if (!selectedFaction) return [];
        return waftPartsData.waft_parts.filter(p => p.faction === selectedFaction);
    }, [selectedFaction]);

    const { totalParts, totalRage } = useMemo(() => {
        let parts = 0;
        let rage = 0;
        for (const item in partQuantities) {
            const quantity = partQuantities[item];
            if (quantity > 0) {
                const partData = waftPartsData.waft_parts.find(p => p.item === item);
                if (partData) {
                    parts += quantity;
                    rage += partData.rage * quantity;
                }
            }
        }
        return { totalParts: parts, totalRage: rage };
    }, [partQuantities]);

    const handleFactionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFaction(e.target.value);
        setPartQuantities({});
        setResults(null);
    };

    const handleQuantityChange = (item: string, newQuantity: number) => {
        const currentQuantity = partQuantities[item] || 0;
        const change = newQuantity - currentQuantity;

        if (totalParts + change > PART_LIMIT) return;

        setPartQuantities(prev => ({
            ...prev,
            [item]: Math.max(0, newQuantity),
        }));
    };

    const handleGenerate = useCallback(async () => {
        if (totalRage === 0 || !selectedFaction) return;

        setIsLoading(true);
        setResults(null);
        
        // Use a timeout to allow the UI to update to the loading state before the heavy calculation starts
        setTimeout(() => {
            const spawnPool = factionsData[selectedFaction];
            const outcomes = calculateOutcomes(totalRage, spawnPool);
            setResults(outcomes);
            setIsLoading(false);
        }, 50);

    }, [totalRage, selectedFaction]);

    const factionCreatures: Creature[] = selectedFaction ? factionsData[selectedFaction] : [];

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-purple-400 tracking-tight">Grounded Waft Emitter Calculator</h1>
                    <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">Calculate raid outcomes by selecting a faction and the parts you want to use.</p>
                </header>

                <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 bg-slate-800/50 p-6 rounded-2xl shadow-lg ring-1 ring-white/10">
                        <h2 className="text-2xl font-semibold mb-4 text-slate-100 border-b border-slate-700 pb-3">1. Configuration</h2>
                        
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="faction-select" className="block text-sm font-medium text-slate-300 mb-2">Select Faction</label>
                                <select 
                                    id="faction-select"
                                    value={selectedFaction} 
                                    onChange={handleFactionChange}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    <option value="">-- Choose a Faction --</option>
                                    {Object.keys(factionsData).sort().map(faction => (
                                        <option key={faction} value={faction}>{faction}</option>
                                    ))}
                                </select>
                            </div>

                            {selectedFaction && (
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-200 mb-3">Select Parts</h3>
                                    <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                                        {availableParts.map(part => (
                                            <div key={part.item} className="flex items-center justify-between bg-slate-700/50 p-3 rounded-lg">
                                                <div>
                                                    <p className="font-medium text-slate-100">{part.item}</p>
                                                    <p className="text-xs text-slate-400">Rage: {part.rage}</p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button onClick={() => handleQuantityChange(part.item, (partQuantities[part.item] || 0) - 1)} className="w-8 h-8 rounded-full bg-slate-600 hover:bg-slate-500 text-slate-100 font-bold transition-colors disabled:opacity-50">-</button>
                                                    <input 
                                                        type="number" 
                                                        value={partQuantities[part.item] || 0}
                                                        readOnly
                                                        className="w-12 h-8 text-center bg-slate-800 border border-slate-600 rounded-md"
                                                    />
                                                    <button 
                                                        onClick={() => handleQuantityChange(part.item, (partQuantities[part.item] || 0) + 1)} 
                                                        disabled={totalParts >= PART_LIMIT}
                                                        className="w-8 h-8 rounded-full bg-slate-600 hover:bg-slate-500 text-slate-100 font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                    >+</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="border-t border-slate-700 pt-4 space-y-3 text-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400">Total Parts:</span>
                                    <span className={`font-semibold ${totalParts > PART_LIMIT ? 'text-red-500' : 'text-slate-100'}`}>{totalParts} / {PART_LIMIT}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-400">Total Rage:</span>
                                    <span className="font-semibold text-purple-300">{totalRage}</span>
                                </div>
                            </div>
                            
                            <button 
                                onClick={handleGenerate} 
                                disabled={isLoading || totalParts === 0 || totalParts > PART_LIMIT}
                                className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Calculating...
                                    </>
                                ) : 'Generate Outcomes'}
                            </button>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-2 bg-slate-800/50 p-6 rounded-2xl shadow-lg ring-1 ring-white/10 min-h-[30rem]">
                        <h2 className="text-2xl font-semibold mb-4 text-slate-100 border-b border-slate-700 pb-3">2. Raid Outcomes</h2>
                        {isLoading && <Loader />}
                        {!isLoading && results && results.length > 0 && <ResultsTable results={results} factionCreatures={factionCreatures} />}
                        {!isLoading && results && results.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-slate-400">No raids possible with the current rage total. Try adding more parts.</p>
                            </div>
                        )}
                        {!isLoading && !results && (
                             <div className="text-center py-16">
                                <p className="text-slate-400">Your simulation results will appear here.</p>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;
