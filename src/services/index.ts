import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { firebaseConfig } from "./firebase";
import data from "./data.json";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function logger(name: string, payload: Record<string, any>) {
  logEvent(analytics, name, payload);
}

export async function getType(name: PokemonType) {
  logger("type-search", { name });
  return data[name] as TypeData;
}
