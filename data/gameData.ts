
import type { FactionsData, WaftPartsData } from '../types';

export const factionsData: FactionsData = {
    "Bees": [
      { "creature": "Bee", "spawn_cost": 4, "raw_science": 40 }
    ],
    "Black Ants": [
      { "creature": "Black Ant Worker", "spawn_cost": 2, "raw_science": 20 },
      { "creature": "Black Ant Soldier", "spawn_cost": 4, "raw_science": 40 }
    ],
    "Black Ox Beetles": [
      { "creature": "Black Ox Beetle", "spawn_cost": 7, "raw_science": 140 }
    ],
    "Black Widows": [
      { "creature": "Black Widow", "spawn_cost": 20, "raw_science": 1000 }
    ],
    "Bombardier Beetles": [
      { "creature": "Bombardier Beetle", "spawn_cost": 4, "raw_science": 40 }
    ],
    "Fire Ants": [
      { "creature": "Fire Ant Worker", "spawn_cost": 3, "raw_science": 45 },
      { "creature": "Fire Ant Soldier", "spawn_cost": 5, "raw_science": 75 }
    ],
    "Infected Bugs": [
      { "creature": "Infected Weevil", "spawn_cost": 1, "raw_science": 2 },
      { "creature": "Infected Mite", "spawn_cost": 1, "raw_science": 2 },
      { "creature": "Infected Larva", "spawn_cost": 2, "raw_science": 4 },
      { "creature": "Infected Ladybug", "spawn_cost": 5, "raw_science": 10 },
      { "creature": "Infected Wolf Spider", "spawn_cost": 100, "raw_science": 200 }
    ],
    "Ladybugs": [
      { "creature": "Ladybug", "spawn_cost": 4, "raw_science": 48 },
      { "creature": "Ladybird", "spawn_cost": 15, "raw_science": 180 },
      { "creature": "Infected Ladybug", "spawn_cost": 5, "raw_science": 60 }
    ],
    "Larva": [
      { "creature": "Larva", "spawn_cost": 3, "raw_science": 15 },
      { "creature": "Ladybird Larva", "spawn_cost": 8, "raw_science": 40 },
      { "creature": "Infected Larva", "spawn_cost": 2, "raw_science": 10 }
    ],
    "Mosquitoes": [
      { "creature": "Mosquito", "spawn_cost": 3, "raw_science": 30 },
      { "creature": "Tiger Mosquito", "spawn_cost": 7, "raw_science": 70 }
    ],
    "Moths": [
      { "creature": "Moth", "spawn_cost": 5, "raw_science": 100 }
    ],
    "Ominent": [
      { "creature": "ORC Fire Ant", "spawn_cost": 1, "raw_science": 25 },
      { "creature": "ORC Mite", "spawn_cost": 2, "raw_science": 50 },
      { "creature": "ORC Fire Ant Soldier", "spawn_cost": 3, "raw_science": 75 },
      { "creature": "ORC Firefly", "spawn_cost": 3, "raw_science": 75 },
      { "creature": "ORC Bombardier", "spawn_cost": 4, "raw_science": 100 },
      { "creature": "ORC Orb Weaver", "spawn_cost": 4, "raw_science": 100 },
      { "creature": "TazT", "spawn_cost": 4, "raw_science": 100 },
      { "creature": "ArcR", "spawn_cost": 4, "raw_science": 100 },
      { "creature": "ORC Mosquito", "spawn_cost": 5, "raw_science": 125 },
      { "creature": "ORC Black Ox Beetle", "spawn_cost": 6, "raw_science": 150 },
      { "creature": "ORC Ladybird", "spawn_cost": 6, "raw_science": 150 }
    ],
    "Orb Weavers": [
      { "creature": "Orb Weaver Jr.", "spawn_cost": 2, "raw_science": 20 },
      { "creature": "Orb Weaver", "spawn_cost": 4, "raw_science": 40 }
    ],
    "Red Ants": [
      { "creature": "Red Ant Worker", "spawn_cost": 1, "raw_science": 5 },
      { "creature": "Red Ant Soldier", "spawn_cost": 3, "raw_science": 15 }
    ],
    "Roly Polys": [
      { "creature": "Roly Poly", "spawn_cost": 8, "raw_science": 120 },
      { "creature": "Sickly Roly Poly", "spawn_cost": 8, "raw_science": 120 }
    ],
    "Stinkbugs": [
      { "creature": "Stinkbug", "spawn_cost": 5, "raw_science": 40 },
      { "creature": "Green Shield Bug", "spawn_cost": 15, "raw_science": 120 }
    ],
    "Termites": [
      { "creature": "Termite Worker", "spawn_cost": 2, "raw_science": 20 },
      { "creature": "Termite Soldier", "spawn_cost": 5, "raw_science": 50 },
      { "creature": "Termite King", "spawn_cost": 100, "raw_science": 1000 }
    ],
    "Wasps": [
      { "creature": "Wasp", "spawn_cost": 8, "raw_science": 160 },
      { "creature": "Wasp Drone", "spawn_cost": 12, "raw_science": 240 }
    ],
    "Wolf Spiders": [
      { "creature": "Wolf Spider", "spawn_cost": 5, "raw_science": 100 },
      { "creature": "Infected Wolf Spider", "spawn_cost": 100, "raw_science": 2000 }
    ]
};

export const waftPartsData: WaftPartsData = {
  "waft_parts": [
    { "item": "Bee Fuzz", "faction": "Bees", "rage": 13 },
    { "item": "Bee Stinger", "faction": "Bees", "rage": 16 },
    { "item": "Black Ant Egg", "faction": "Black Ants", "rage": 8 },
    { "item": "Black Ant Head", "faction": "Black Ants", "rage": 5 },
    { "item": "Black Ant Part", "faction": "Black Ants", "rage": 3 },
    { "item": "Black Ant Mandibles", "faction": "Black Ants", "rage": 7 },
    { "item": "Black Ox Part", "faction": "Black Ox Beetles", "rage": 10 },
    { "item": "Black Ox Horn", "faction": "Black Ox Beetles", "rage": 20 },
    { "item": "Black Widow Fang", "faction": "Black Widows", "rage": 10 },
    { "item": "Super Spider Venom", "faction": "Black Widows", "rage": 25 },
    { "item": "Bombardier Part", "faction": "Bombardier Beetles", "rage": 5 },
    { "item": "Boiling Gland", "faction": "Bombardier Beetles", "rage": 10 },
    { "item": "Fire Ant Egg", "faction": "Fire Ants", "rage": 8 },
    { "item": "Fire Ant Head", "faction": "Fire Ants", "rage": 7 },
    { "item": "Fire Ant Part", "faction": "Fire Ants", "rage": 5 },
    { "item": "Fire Ant Mandibles", "faction": "Fire Ants", "rage": 10 },
    { "item": "Fungal Growth", "faction": "Infected Bugs", "rage": 2 },
    { "item": "Ladybug Part", "faction": "Ladybugs", "rage": 4 },
    { "item": "Ladybug Head", "faction": "Ladybugs", "rage": 7 },
    { "item": "Ladybird Shell", "faction": "Ladybugs", "rage": 10 },
    { "item": "Larva Spike", "faction": "Larva", "rage": 8 },
    { "item": "Mosquito Beak", "faction": "Mosquitoes", "rage": 10 },
    { "item": "Mosquito Blood Sack", "faction": "Mosquitoes", "rage": 13 },
    { "item": "Tiger Mosquito Beak", "faction": "Mosquitoes", "rage": 20 },
    { "item": "Moth Fuzz", "faction": "Moths", "rage": 8 },
    { "item": "Moth Scale", "faction": "Moths", "rage": 10 },
    { "item": "O.R.C. Receiver", "faction": "Ominent", "rage": 10 },
    { "item": "Spider Chunk", "faction": "Orb Weavers", "rage": 4 },
    { "item": "Red Ant Egg", "faction": "Red Ants", "rage": 8 },
    { "item": "Red Ant Head", "faction": "Red Ants", "rage": 5 },
    { "item": "Red Ant Mandibles", "faction": "Red Ants", "rage": 7 },
    { "item": "Red Ant Part", "faction": "Red Ants", "rage": 3 },
    { "item": "Roly Poly Part", "faction": "Roly Polys", "rage": 10 },
    { "item": "Roly Poly Shell", "faction": "Roly Polys", "rage": 15 },
    { "item": "Stinkbug Gas Sack", "faction": "Stinkbugs", "rage": 5 },
    { "item": "Stinkbug Part", "faction": "Stinkbugs", "rage": 2 },
    { "item": "Green Shield Bug Parts", "faction": "Stinkbugs", "rage": 10 },
    { "item": "Super Stink Sack", "faction": "Stinkbugs", "rage": 15 },
    { "item": "Termite Chompers", "faction": "Termites", "rage": 6 },
    { "item": "Termite Part", "faction": "Termites", "rage": 6 },
    { "item": "Termite King Carapace", "faction": "Termites", "rage": 10 },
    { "item": "Spider Fang", "faction": "Wolf Spiders", "rage": 8 },
    { "item": "Wasp Shell", "faction": "Wasps", "rage": 4 },
    { "item": "Wasp Leg", "faction": "Wasps", "rage": 6 },
    { "item": "Wasp Paper", "faction": "Wasps", "rage": 4 },
    { "item": "Wasp Queen Chunk", "faction": "Wasps", "rage": 8 },
    { "item": "Wasp Queen Head", "faction": "Wasps", "rage": 10 }
  ]
};
