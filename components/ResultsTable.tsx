
import React from 'react';
import type { OutcomeCombination, Creature } from '../types';

interface ResultsTableProps {
  results: OutcomeCombination[];
  factionCreatures: Creature[];
}

const ResultsTable: React.FC<ResultsTableProps> = ({ results, factionCreatures }) => {
  const creatureHeaders = factionCreatures.map(c => c.creature).sort();

  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table className="min-w-full divide-y divide-slate-700">
              <thead className="bg-slate-800">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-100 sm:pl-6">Probability</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-100">Total Science</th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-100">Leftover Rage</th>
                  {creatureHeaders.map(creatureName => (
                    <th key={creatureName} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-slate-100">{creatureName}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900">
                {results.map((result, index) => (
                  <tr key={index} className="hover:bg-slate-700/50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-100 sm:pl-6">{result.probability.toFixed(2)}%</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-300">{result.totalScience}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-300">{result.leftoverRage}</td>
                    {creatureHeaders.map(creatureName => (
                      <td key={creatureName} className="whitespace-nowrap px-3 py-4 text-sm text-slate-300">{result.creatures[creatureName] || 0}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsTable;
