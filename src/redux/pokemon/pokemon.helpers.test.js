import { transformIndexById } from "./pokemon.helpers";

describe("transformIndexById", () => {
  it("should take an array and return an object where the keys are the id", () => {
    const pokemonArray = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ];

    const output = {
      [1]: { id: 1 },
      [2]: { id: 2 },
      [3]: { id: 3 },
    };

    expect(transformIndexById(pokemonArray)).toEqual(output);
  });

  it("should be able to handle undefined as an perameter", () => {
    expect(transformIndexById(undefined)).toEqual({});
  });
});
