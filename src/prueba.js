const baseUrl="https://pokeapi.co/api/v2/pokemon";

const appNode= document.querySelector('#app');

window
    .fetch(`${baseUrl}/8`)
    .then(respuesta=>respuesta.json())
    .then((data)=>{
        
        const name=document.createElement('h2');
        name.textContent=data.name;

        const id= document.createElement('h3');
        id.textContent=data.id;

        const imagen=document.createElement('img');
        imagen.src= data.sprites.front_default;

        const tituloAbilities=document.createElement('h3');
        tituloAbilities.textContent="Abilities:";

        const abilities= document.createElement('ul');
        //let abilitiesArray=[];
        data.abilities.forEach(item=>{
            let li=document
            abilities.append(li)
        });
        
        const container=document.createElement('div')
        container.append(name,id, imagen, tituloAbilities ,abilities)
        appNode.append(container);
    });