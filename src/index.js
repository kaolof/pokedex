const baseUrl="https://pokeapi.co/api/v2/pokemon";
const cardsContainer= document.querySelector('#cards-container');

let offset=1;
let limit=8;

function createCard(pokemon){
    
    const flipCard=document.createElement('div');
    flipCard.classList.add('wrapper','block','flip-card')

    const card=document.createElement('div');
    card.classList.add('card-pokemon');
    
    const image=document.createElement('img');
    image.src=pokemon.sprites.front_default;

    const id=document.createElement('p');
    id.textContent=`#${pokemon.id}`;

    const name=document.createElement('h2');
    name.textContent=pokemon.name;

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-pokemon-back");

    cardBack.append(progressBars(pokemon.stats))
    card.append(image,id,name, cardBack);
    flipCard.appendChild(card)
    cardsContainer.appendChild(flipCard);

}

function progressBars(stats) {
    const statsContainer = document.createElement("div");
    statsContainer.classList.add("stats-container");
  
    for (let i = 0; i < 3; i++) {
      const stat = stats[i];
  
      const statPercent = stat.base_stat / 2 + "%";
      const statContainer = document.createElement("stat-container");
      statContainer.classList.add("stat-container");
  
      const statName = document.createElement("p");
      statName.textContent = stat.stat.name;
  
      const progress = document.createElement("div");
      progress.classList.add("progress");
  
      const progressBar = document.createElement("div");
      progressBar.classList.add("progress-bar");
      progressBar.setAttribute("aria-valuenow", stat.base_stat);
      progressBar.setAttribute("aria-valuemin", 0);
      progressBar.setAttribute("aria-valuemax", 200);
      progressBar.style.width = statPercent;
  
      progressBar.textContent = stat.base_stat;
  
      progress.appendChild(progressBar);
      statContainer.appendChild(statName);
      statContainer.appendChild(progress);
  
      statsContainer.appendChild(statContainer);
    }
  
    return statsContainer;
  }

function fetchPokemon (data){
    window.fetch(`${baseUrl}/${data}`)
        .then(response=> response.json())
        .then((pokemon)=>{
            createCard(pokemon);
        });
}

fetchPokemons= (offset,limit)=>{
    console.log(offset);
    console.log(limit);
    for(let i=offset; i<=offset+limit; i++){
        fetchPokemon(i)
        
        
    }
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

previusButton=document.querySelector('#previus-button');
previusButton.addEventListener('click', ()=>{
    if (offset>1){
        offset-=9;
        removeChildNodes(cardsContainer);
        fetchPokemons(offset,limit);
    }
    
})

nextButton=document.querySelector('#next-button');

nextButton.addEventListener('click',()=>{
    offset+=9;
    removeChildNodes(cardsContainer);
    fetchPokemons(offset,limit);

})



fetchPokemons(offset,limit);