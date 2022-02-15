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
       year: 2021,
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
} ,
{ 
    id: 04, 
    name: "How the Grinch Stole Christmas", 
    year: 2021,
    duration:"2h18",        
    backgroundimage:"https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUxuDzOVcY6FjzsROdO9oD595VQo_S6by2cO2LCbiCBm_g76GdaFn4OeUAffrECj1WACLfVNksUOT0mYe5tt3BtIfwTu.jpg?r=768",
    description:"Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
    actors:"Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
   trailer:"https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
} ,
   { 
    id:05, 
    name: "The Christmas Chronicles", 
    year: 2020,
    duration:"2h18",        
    backgroundimage:"https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQjEKFozjtOmKWNvvz07rGpNXvwpsRtHZXsCu7elzJ0_maMRj7dWbaxZ4zJ5Liwdm_9jpTlcp7DVL_KBUDBgBvd1pzVa.jpg?r=6a2",
    description:"Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
    actors:"Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
   trailer:"https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
} ,
   { 
    id: 06, 
    name: "The Amazing Spider-Man", 
    year: 2021,
    duration:"2h18",        
    backgroundimage:"https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABdP1JHNw5gw5JTkct3wNDCl3X5osZ13FYqJbCK36iZ_QgpEtrlkFnWjaerCQvy13Va6W5W0TKyTT1ReWX_MlkQB8HPYA.jpg?r=e8b",
    description:"Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
    actors:"Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer:"https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
} ,
{ 
    id: 07, 
    name: "White Chicks", 
    year: 2021,
    duration: "2h18",        
    backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABa0H2l8eK4RiLS6FdGcjxcHQ61YIK7nkJU70qBHQR-cUJVzksOVfW8PcT6LTEr-Vrmjnq-P5IIsCuLFnNGdgaOjlTFuW.jpg?r=e03",
    description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
    actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
} ,
   { 
    id: 08, 
    name: "A Bad Moms Christmas", 
    year: 2019,
    duration: "2h18",        
    backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABV5NEl7gCjNHk0Tr93kDO0nrotVARVsqSpok01VlYGBDuitIpBHYvrmLJQj19fNHshQvlkGfwvJvRGLZHEAJOIYWM-mW.jpg?r=cad",
    description:"Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
    actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer:"https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
} ,
   { 
    id: 09, 
    name: "Scary Movie", 
    year: 2019 ,
    duration: "2h18",        
    backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeDx7YpKOouUIOnB3wS2kfNNtnI-u_esyHTyeJeofhJFZJp9dMH9UBEtwuxqKjcVSAtkxQLANjsJf2LsSQV5P1AHUEzw.jpg?r=df5",
    description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
    actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
} ,
   { 
    id: 10, 
    name: "Friday", 
    year: 2019,
    duration: "2h18",        
    backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYxmf-YOniYd0jPEjTOkitCmKreR9tKZw81zDjvUQHL3lxSXivDh4KV0jvqJEENkwHmHJkeuuZzJVw9YMmQwexL_-g2c.jpg?r=f0c",
    description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
    actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
} ,
   { 
    id: 11, 
    name: "Bad Moms", 
    year: 2019,
    duration: "2h18",        
    backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABWKiTJRNQjc0B3ezB57N0tCDVXTjErU-lVx_cQXBd_CSRUWbCKjWbZufwy3-vXFIGE7Ie-8wP2Ri4rNss8PXHEDh6vXW.jpg?r=96e",
    description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
    actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
    trailer: "https://www.youtube.com/watch?v=Pj0wz7zu3Ms&ab_channel=Netflix"
} ,
   { 
    id: 12, 
    name: "Little Man", 
    year: 2019,
    duration: "2h18",        
    backgroundimage: "https://occ-0-6146-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRqZnHpGir15iaQIUNGCzbKYQaJDM0U0wF_D9OS-50HWZ979Yw3UvKBjnpNvjDOsiEd6-BW4eDhUprUbyl5HQCtwK9Cq.jpg?r=94a",
    description: "Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh",
    actors: "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep"
   }  
];



let firstPage = document.querySelector('.first-page');
let secondPage = document.querySelector('.second-page');
let sectionMovies1 = document.querySelector('.section-movies1');
let sectionMovies2 = document.querySelector('.section-movies2');
let movie;
let currentItem;


let trailerButton = document.querySelector('#movie.id');


window.addEventListener('DOMContentLoaded', function() {
    hollywoodMovie(movies);
    comediesMovie(movies);
    displayMovieBtn(movies);
   
});

function hollywoodMovie(){
    let hollywood = movies.filter(movie => movie.id < 7);
    let movie1 = hollywood.map(function(item){
          return `<article class="section-movies1">
        <div class="item-info">
            <header>
                 <img src="${item.backgroundimage}" class="photo" alt="movie item">
                 <h6>${item.name}</h6>
            </header>
        </div>
        </div>
        </article>`
    });
    movie1 = movie1.join("");
    sectionMovies1.innerHTML = movie1;
}

function comediesMovie(){
    let comedies = movies.filter(movie => movie.id > 6);
    let movie2 = comedies.map(function(item){
          return `<article class="section-movies2">
        <div class="item-info">
            <header>
                 <img src="${item.backgroundimage}" class="photo" alt="movie item">
                 <h6>${item.name}</h6>
            </header>
        </div>
        </div>
        </article>`
    });
    movie2 = movie2.join("");
    sectionMovies2.innerHTML = movie2;
}


let imageButton = document.querySelectorAll('.photo');


function displayMovieBtn(){


    //filter items
imageButton.forEach(function(btn){
    btn.addEventListener('click', function(e){
const id = e.currentTarget.id;
const movieCategory = movies.filter(function(moviesItem){
   console.log(moviesItem.id);
   if (moviesItem.id = id) {
        return currentItem = id
    }
});

movie = movies[currentItem - 1];
console.log(movieCategory);

});
let displayInfo = movies.map(function(movie) {
    return `<div class="second-page">
    <img src="${movie.backgroundimage}" class="background" id="${movie.id}" alt="movie-item">
    <div class ="text">
    <h1>${movie.name}</h1>
    <p>${movie.year}</p>
    <p>${movie.duration}</p>
    <p>${movie.description}</p>
    <p>${movie.actors}</p>
    <p>${movie.trailer}</p>
    <div class="btn-container">
    <button class="filter-btn watch" type="button" id="${movie.id}">Watch trailer</button>
    <button class="filter-btn add" type="button" id="${movie.id}">Add favorite</button>
    </div>
    </div>
    </div>`
   });
   secondPage.innerHTML = displayInfo;
});

};

