let dataObject;
let firstPage = document.querySelector('#first-page');
let secondPage = document.querySelector('#second-page');
let views = document.querySelectorAll('.view');
let id;
let hollywood = document.querySelector('hollywood');


fetch('main.json')
.then( data => data.json())
.then(data => {
  dataObject = data;
  
console.log(data);


})



//document.body.style.backgroundImage = "url('https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd6RGXWbIoOHL3daqY8inmYcduPOmeukBFfOpzMJA0yh0ogdbGvekRFLgP1eyZBDFO2Igi5gLPKlusDO9AnqbE_UCIcA.jpg?r=6a0%22')";














