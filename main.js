let dataObject;
let hollywood = document.querySelector('hollywood');


fetch('main.json')
.then( data => data.json())
.then(data => {
  dataObject = data;
  

})

movie = { 
  "id": 1, 
  "name": "Don't Look Up", 
  "year": "2021" ,
  "duration":"2h18",
  "background-image":"https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd6RGXWbIoOHL3daqY8inmYcduPOmeukBFfOpzMJA0yh0ogdbGvekRFLgP1eyZBDFO2Igi5gLPKlusDO9AnqbE_UCIcA.jpg?r=6a0%22)",
  "description":"Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
  "actors":"Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
"trailer":"https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
};

if( movie.id === 1) {
document.body.style.backgroundImage = "url('https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd6RGXWbIoOHL3daqY8inmYcduPOmeukBFfOpzMJA0yh0ogdbGvekRFLgP1eyZBDFO2Igi5gLPKlusDO9AnqbE_UCIcA.jpg?r=6a0%22')";
}











