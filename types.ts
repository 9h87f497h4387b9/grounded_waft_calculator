
export interface Creature {
  creature: string;
  spawn_cost: number;
  raw_science: number;
}

export interface FactionsData {
  [factionName: string]: Creature[];
}

export interface WaftPart {
  item: string;
  faction: string;
  rage: number;
}

export interface WaftPartsData {
    waft_parts: WaftPart[];
}

export interface OutcomeCombination {
  creatures: Record<string, number>;
  count: number;
  totalScience: number;
  leftoverRage: number;
  probability: number;
}
