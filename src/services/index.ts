import { calculateMultipliers, convertTableData } from "@/lib";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseConfig } from "./firebase";
import data from "./data.json";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function logger(name: string, payload: Record<string, any>) {
  logEvent(analytics, name, payload);
}

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
