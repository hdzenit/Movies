let jsondata = "";
let apiUrl = "main.json";

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}


async function main() {
    //OPTION 1
    getJson(apiUrl)
        .then(data => console.log(data));

    //OPTION 2
    jsondata = await getJson(apiUrl)
    console.log(jsondata);
}

main();

console.log(jsondata);













