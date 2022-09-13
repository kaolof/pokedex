//Search function

const search= document.querySelector('#search-input');
const searchButton =document.querySelector('.searchButton');
const container=document.querySelector('.container');
const cardsCont=document.querySelector('#cards-container');
const back=document.createElement('button');
back.classList.add("accent" ,"block");
back.textContent="Go Back";

function createCardSearch(pokemon){
    
    const flipCard=document.createElement('div');
    flipCard.classList.add('wrapper','block','flip-card')

    const card=document.createElement('div');
    card.classList.add('card-pokemon','card-search');
    
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
    cardsCont.append(flipCard,back);
    container.appendChild(cardsCont);
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

function fetchPokemonSearch (data){
    window.fetch(`${baseUrl}/${data}`)
        .then(response=> response.json())
        .then((pokemon)=>{
            createCardSearch(pokemon);
        })
        .catch(err=>console.log(err))
}

searchButton.addEventListener('click', ()=>{
    removeChildNodes(container);
    removeChildNodes(cardsCont);
    fetchPokemonSearch(search.value);
    cardsCont.classList.add('search');

    
});

back.addEventListener('click',()=>{
    window.location.href ="index.html";
})
