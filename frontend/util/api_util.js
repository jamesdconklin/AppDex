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

export const createPokemon = (data, success, error) => {
  error = error || ((err) => console.log(err));
  let moves = [];

  [1,2,3,4].forEach(
    num => {
      let val = data[`pokemon[moves][${num}]`];
      if (val){
        delete data[`pokemon[moves][${num}]`];
        moves.push(val);
      }
    }
  );
  data["pokemon[moves][]"] = moves;
  console.log("Data Payload:");
  console.log(data);

  $.ajax({
    method: 'POST',
    url: 'api/pokemon',
    data,
    success,
    error
  });
};
