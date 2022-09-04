const baseUrl="https://pokeapi.co/api/v2/pokemon";

function fetchPokemon (data){
    window.fetch(`${baseUrl}/data`)
        .then(response=> response.json())
        .then(()=>{
            return pokemon;
        })
}

pokemon=fetchPokemon(1);