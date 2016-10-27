export const fetchAllPokemon = (success, error) => {
  error = error || ((err) => console.log(err));
  $.ajax(
    {method: 'GET',
    url: '/api/pokemon',
    success,
    error}
  );
};

export const fetchPokemonDetail = (id, success, error) => {
  error = error || ((err) => console.log(err));
  $.ajax(
    {method: 'GET',
    url: `/api/pokemon/${id}`,
    success,
    error}
  );
};
