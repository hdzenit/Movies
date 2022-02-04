let sectionMovies = document.querySelector('.section-movies');
let jsondata = "";
let apiUrl = "main.json";

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}


async function main() {
   jsondata = await getJson(apiUrl)
   

};

main();


window.addEventListener('DOMContentLoaded', function() {
    displayMovieItems(jsondata);

});




function displayMovieItems(movieItems){
    let displayMovie = movieItems.map(function(item){
        return `<article class="section-movies">
        <img src="${item.jsondata.background-image}" class="photo" alt="movie item">
        <div class="item-info">
            <header>
                <h4>${item.json.name}</h4>
                
            </header>
        </div>
        </div>
        </article>`
    });
displayMovie = displayMovie.join("");
sectionMovies.innerHTML = displayMovie;
};













