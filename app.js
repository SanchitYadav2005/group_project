let btn = document.querySelector(".btn");
let input = document.querySelector('#search');
let temp = document.querySelector(".temp")
let api_key = "67ca48d558fa4143a9600726230708";
let city = document.querySelector('.city')
function getData() {
    let city_name = input.value;
    fetch(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city_name}&aqi=no`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Process the fetched data here
            temp.innerHTML= data.current.temp_c + " °C"
            city.innerHTML= data.location.name
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

btn.addEventListener('click', getData);
