const url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=2178b874708b487c9f4901ceeeee9b77";

function getdata() {
  fetch(url).then(data => data.json()).then(data => console.log(data));
}