export const transformIndexById = (pokemonArr = []) => {
  return pokemonArr.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.id]: curr,
    };
  }, {});
};

//reduce is great for changing an array to an object
