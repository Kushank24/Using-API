const url = "http://api.weatherstack.com/current?access_key=dc9867c8d42970bf5290b8a660957fc0&query=New%20York";
const content = document.getElementById('content')

function getdata() {
  fetch(url).then(data => data.json()).then((data) => (content.textContent = data.current.temperature));
}

getdata()