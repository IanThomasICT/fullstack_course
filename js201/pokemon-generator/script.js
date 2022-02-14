const updatePokeCard = ({id, name, sprites}) => {
    let classId = document.getElementById('id')
    let className = document.getElementById('name')
    let classImage = document.getElementById('image')
    classId.innerText = `#${id}`;
    className.innerText = name.toUpperCase();
    classImage.src = `${sprites['front_default']}`;
}

button = document.getElementById('btn')
addEventListener('click', function (){
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 900)}`)
    .then(response => response.json())
    .then(data => updatePokeCard(data));
    }
);

    