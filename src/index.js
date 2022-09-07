const baseUrl="https://pokeapi.co/api/v2/pokemon";
const cardContainer= document.querySelector('#cards-container');

let offset=1;
let limit=8;
cardsArray=[];

for(let i=0; i<9; i++){
    const card=document.createElement('div');
    card.classList.add('wrapper', 'block');
    cardsArray.push(card);
}



function createCard(pokemon,card){
    
    const imagen=document.createElement('img');
    imagen.src= pokemon.sprites.front_default;

    /*const id= document.createElement('h3');
    id.textContent=data.id;

    const imagen=document.createElement('img');
    imagen.src= data.sprites.front_default;*/

    

    cardsArray[card].append(imagen);
    cardContainer.appendChild(cardsArray[card]);
}

function fetchPokemon (data,card){
    window.fetch(`${baseUrl}/${data}`)
        .then(response=> response.json())
        .then((pokemon)=>{
            createCard(pokemon,card);
        });
}

fetchPokemons= (offset,limit)=>{
    console.log(offset);
    console.log(limit);
    card=0;
    for(let i=offset; i<=offset+limit; i++){
        fetchPokemon(i,card)
        card+=1;
        
    }
}

previusButton=document.querySelector('#previus-button');
previusButton.addEventListener('click', ()=>{
    offset-=9;
    fetchPokemons(offset,limit);
})

nextButton=document.querySelector('#next-button');
nextButton.addEventListener('click',()=>{
    offset+=9;
    fetchPokemons(offset,limit);

})

fetchPokemons(offset,limit);