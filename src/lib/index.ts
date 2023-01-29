export const colors: Record<PokemonType, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export function convertTableData(data: TypeData): {
  from: TableData[];
  to: TableData[];
} {
  return {
    from: [
      {
        multiplier: 2,
        types: data.doubleFrom,
      },
      {
        multiplier: 0.5,
        types: data.halfFrom,
      },
      {
        multiplier: 0,
        types: data.zeroFrom,
      },
    ],
    to: [
      {
        multiplier: 2,
        types: data.doubleTo,
      },
      {
        multiplier: 0.5,
        types: data.halfTo,
      },
      {
        multiplier: 0,
        types: data.zeroTo,
      },
    ],
  };
}

function createInitialCalc(): Record<PokemonType, number> {
  const initial = {} as Record<PokemonType, number>;
  Object.keys(colors).forEach((e) => {
    initial[e as PokemonType] = 1;
  });
  return initial;
}

export function calculateMultipliers(datas: TableData[][]): TableData[] {
  const initial = createInitialCalc();
  datas.forEach((data) => {
    data.forEach(({ multiplier, types }) => {
      types.forEach((type) => {
        initial[type] *= multiplier;
      });
    });
  });

  const result = [] as TableData[];
  Object.keys(initial).forEach((e) => {
    const multiplier = initial[e as PokemonType];
    if (multiplier !== 1) {
      const exist = result.find((e) => e.multiplier === multiplier);
      if (exist) {
        exist.types.push(e as PokemonType);
      } else {
        result.push({
          multiplier,
          types: [e as PokemonType],
        });
      }
    }
  });

  result.sort((a, b) => b.multiplier - a.multiplier);
  return result;
}

export function isFunction(functionToCheck: unknown) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}
