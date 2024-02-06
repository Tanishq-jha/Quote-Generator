const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(url);
    var result = await response.json();
    
    quote.innerHTML= result.content;
    author.innerHTML= result.author;
}
getquote(api_url);