//let sectionMovies = document.querySelector('.section-movies');
//let jsondata = "";
//let apiUrl = "main.json";

//async function getJson(url) {
//    let response = await fetch(url);
//    let data = await response.json()
//    return data;
//}


//async function main() {
//   jsondata = await getJson(apiUrl)
  

//};

//main();

const movies = [ 
      
    { 
       id: 01, 
       name: "Don't Look Up", 
       year: "2021",
       duration:"2h18",
       backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd6RGXWbIoOHL3daqY8inmYcduPOmeukBFfOpzMJA0yh0ogdbGvekRFLgP1eyZBDFO2Igi5gLPKlusDO9AnqbE_UCIcA.jpg?r=6a0%22)",
       description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
       actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
}, 
   
    { 
     id: 02, 
     name: "Back to the Outback", 
     year: 2021,
     duration:"2h18",
     backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABcpFGB8j2mmUIdLNIJaZ-GMNL58-eQFBihnSRcOvHNGXz0sS7JvBAPvhxo1dLmFPshSDy1eKBdOqNHbSYSLqSOOAF5XW.jpg?r=de8",
     description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
     actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
},
    { 
     id: 03, 
     name: "Red Notice", 
     year: 2020,
     duration: "2h18",
     backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZsT2bdvYhDgBRNH-QmuiQwJ9p7hjcduBLNFrVBepJYsVBmJT0Dyi7no8vlWESvKalMsakP12WzonaigvxKsXHjvKtXW.jpg?r=590%22)",
     description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
     actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
} ];




let sectionMovies = document.querySelector('.section-movies');

window.addEventListener('DOMContentLoaded', function() {
    displayMovieItems(movies);

});




function displayMovieItems(movieItems){
    let displayMovie = movieItems.map(function(item){
        return `<article class="section-movies">

        <div class="item-info">
            <header>
                <h4>${item.name}</h4>
                 <img src="${item.backgroundimage}" class="photo" alt="movie item">
            </header>
        </div>
        </div>
        </article>`
    });
displayMovie = displayMovie.join("");
sectionMovies.innerHTML = displayMovie;
};













