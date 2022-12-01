import { calculateMultipliers, convertTableData } from "@/lib";
import data from "./data.json";

export async function getType(names: PokemonType[]): Promise<{
  from: TableData[];
  to?: TableData[];
}> {
  if (names.length === 1) {
    return convertTableData(data[names[0]] as TypeData);
  }
  return {
    from: calculateMultipliers(
      names.map((e) => convertTableData(data[e] as TypeData)).map((e) => e.from)
      // good luck with that
    ),
  };
}
