type PokemonType =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

interface TypeData {
  doubleFrom: PokemonType[];
  doubleTo: PokemonType[];
  halfFrom: PokemonType[];
  halfTo: PokemonType[];
  zeroFrom: PokemonType[];
  zeroTo: PokemonType[];
}

interface TableData {
  multiplier: "double" | "half" | "zero";
  types: PokemonType[];
}
