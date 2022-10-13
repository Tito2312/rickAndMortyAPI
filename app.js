const containerCard = document.querySelector('.container-cards');
const searcher = document.getElementById('input');
const URL = 'https://rickandmortyapi.com/api/character'

window.addEventListener("DOMContentLoaded", getApi)
searcher.addEventListener("keypress", search)

function getApi(){
    fetch(URL)
    .then(response => response.json())
    .then(data =>
        createCard(data) 
    )
}

function createCard(data){
    
        data.results.forEach(data => {
            console.log(data)

            const card = document.createElement('div');
            card.classList.add('content')
            
            const name = document.createElement('h2')
            name.textContent = data.name
            name.classList.add('names')
    
            const img = document.createElement('img')
            img.src = data.image
            img.classList.add('images')

            const species = document.createElement('h5')
            species.textContent = data.species

            card.appendChild(name)
            card.appendChild(species)
            card.appendChild(img)
            containerCard.appendChild(card)
        })
}

function search(event){

    containerCard.innerHTML = ""

    let newURL = URL+"?name="+event.target.value

    fetch(newURL)
    .then(
        response => response.json())
    .then(
        data => createCard(data))
}



