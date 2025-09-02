
import type { Creature, OutcomeCombination } from '../types';

const memo = new Map<number, string[][]>();

const findPermutations = (currentRage: number, spawnPool: Creature[]): string[][] => {
  if (memo.has(currentRage)) {
    return memo.get(currentRage)!;
  }

  const spawnableCreatures = spawnPool.filter(c => c.spawn_cost <= currentRage);

  if (spawnableCreatures.length === 0) {
    return [[]]; 
  }

  let allPermutations: string[][] = [];

  for (const creature of spawnableCreatures) {
    const remainingRage = currentRage - creature.spawn_cost;
    const subsequentPermutations = findPermutations(remainingRage, spawnPool);

    for (const p of subsequentPermutations) {
      allPermutations.push([creature.creature, ...p]);
    }
  }
  
  memo.set(currentRage, allPermutations);
  return allPermutations;
};


export const calculateOutcomes = (totalRage: number, spawnPool: Creature[]): OutcomeCombination[] => {
    memo.clear(); 
    const allPermutations = findPermutations(totalRage, spawnPool);
    
    // This case handles when totalRage is too low to spawn anything.
    if (!allPermutations.length || (allPermutations.length === 1 && allPermutations[0].length === 0)) {
        return [];
    }
    
    const totalPermutationsCount = allPermutations.length;

    const combinations = new Map<string, {
        creatures: Record<string, number>;
        count: number;
        totalScience: number;
        leftoverRage: number;
    }>();

    for (const perm of allPermutations) {
        if (perm.length === 0) continue;

        const sortedPerm = [...perm].sort();
        const key = sortedPerm.join(',');

        if (combinations.has(key)) {
            const existing = combinations.get(key)!;
            existing.count++;
        } else {
            const creatureCounts: Record<string, number> = {};
            let spentRage = 0;
            let totalScience = 0;

            for(const creatureName of sortedPerm) {
                creatureCounts[creatureName] = (creatureCounts[creatureName] || 0) + 1;
                const creatureData = spawnPool.find(c => c.creature === creatureName)!;
                spentRage += creatureData.spawn_cost;
                totalScience += creatureData.raw_science;
            }
            
            combinations.set(key, {
                creatures: creatureCounts,
                count: 1,
                totalScience: totalScience,
                leftoverRage: totalRage - spentRage,
            });
        }
    }

    const results: OutcomeCombination[] = Array.from(combinations.values()).map(combo => ({
        ...combo,
        probability: (combo.count / totalPermutationsCount) * 100,
    }));
    
    results.sort((a, b) => b.probability - a.probability);

    return results;
};
