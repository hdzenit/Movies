let jsondata = "";
let apiUrl = "main.json";

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}


async function main() {
   jsondata = await getJson(apiUrl)
    console.log(jsondata);

};

main();


window.addEventListener('DOMContentLoaded', function() {
    displayMovieItems(jsondata);

});


let sectionMovies = document.querySelector('.section-movies');


function displayMovieItems(movieItems){
    let displayMovie = movieItems.map(function(item){
        return `<img src="${item.background-image}" class="photo" alt="movie item">
        <div class="item-info">
            <header>
                <h4>${item.name}</h4>
                
            </header>
        </div></div>`
    });
displayMovie = displayMovie.join("");
sectionMovies.innerHTML = displayMovie;
};













