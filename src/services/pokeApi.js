export const getPokemon = async () => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`
  );
  if (!res.ok) {
    throw new Error("Could not find Pokemon");
  } else {
    const pokemon = await res.json();
    return await Promise.all(
      pokemon?.results?.map(async ({ url }) => {
        const response = await fetch(url);
        if (!res.ok) {
          throw new Error("Could not find Pokemon");
        } else {
          return await response.json();
        }
      })
    );
  }
};
