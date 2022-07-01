// let container = document.querySelector('.container');
// let productData = [];

// // https://dummyjson.com/products

// fetch('https://dummyjson.com/products').then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data.products[0]);
//     productData = data.products;
//     console.log(productData.length);
//     let block = `
//                 <div>
//                     <p>${data.products[0].title}</p>
//                 </div>
//                 `;

//     for( let i = 0; i <= productData.length; i++ ) {
//         console.log(data.products[i].title);
//         let block = `
//                 <div>
//                     <p>${data.products[i].brand}</p>
//                     <p>${data.products[i].title}</p>
//                     <p>${data.products[i].category}</p>
//                     <p>${data.products[i].description}</p>
//                     <img src="${data.products[i].images}"></img>
//                 </div>
//                 `;
//                 container.insertAdjacentHTML('beforeend', block);
//     }

//     container.insertAdjacentHTML('beforeend', block);
// })

let weatherData = [];
let container = document.querySelector('.container');
let container2 = document.querySelector('.container2');
let container3 = document.querySelector('.container3');

weather();

function weather () {

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.996363&lon=24.189597&appid=102410833a4f02e4b5c3d710078eea46').then(response => {
        return response.json();
    }).then(data => {

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        weatherData = data;
        // console.log(weatherData);
        // console.log(weatherData.wind.speed);

        let city = weatherData.name;
        let weather = weatherData.weather[0].description;
        let temp = Math.trunc(weatherData.main.temp - 271);
        let windSpeed = Math.trunc(weatherData.wind.speed * 3.6); 
        let icon = data.weather[0].icon;

        window.localStorage.setItem("city", city);
        window.localStorage.setItem("weather", weather);
        window.localStorage.setItem("temp", temp);
        window.localStorage.setItem("wind", windSpeed);
        window.localStorage.setItem("icon", icon);

        let block = `
                <div>
                    <p>Curent city: ${city}</p>
                    <p>Curent weather: ${weather}</p>
                    <p>Curent temp: ${temp} C</p>
                    <p>Wind speed: ${windSpeed} km/h</p>
                    <img src="https://api.openweathermap.org/img/w/${icon}.png"></img>
                </div>
                `;
        container.insertAdjacentHTML('beforeend', block);
        // console.log('zakhar');
    })
    /////////////////////////
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.5085300&lon=-0.1257400&appid=102410833a4f02e4b5c3d710078eea46').then(response => {
        return response.json();
    }).then(data => {

        while (container2.firstChild) {
            container2.removeChild(container2.firstChild);
        }

        weatherData = data;
        // console.log(weatherData);
        // console.log(weatherData.wind.speed);

        let city = weatherData.name;
        let weather = weatherData.weather[0].description;
        let temp = Math.trunc(weatherData.main.temp - 271);
        let windSpeed = Math.trunc(weatherData.wind.speed * 3.6); 
        let icon = data.weather[0].icon;

        window.localStorage.setItem("city", city);
        window.localStorage.setItem("weather", weather);
        window.localStorage.setItem("temp", temp);
        window.localStorage.setItem("wind", windSpeed);
        window.localStorage.setItem("icon", icon);

        let block = `
                <div>
                    <p>Curent city: ${city}</p>
                    <p>Curent weather: ${weather}</p>
                    <p>Curent temp: ${temp} C</p>
                    <p>Wind speed: ${windSpeed} km/h</p>
                    <img src="https://api.openweathermap.org/img/w/${icon}.png"></img>
                </div>
                `;
        container2.insertAdjacentHTML('beforeend', block);
        // console.log('zakhar');
    })
    /////////////////////////
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=64.1834700&lon=-51.7215700&appid=102410833a4f02e4b5c3d710078eea46').then(response => {
        return response.json();
    }).then(data => {

        while (container3.firstChild) {
            container3.removeChild(container3.firstChild);
        }

        weatherData = data;
        // console.log(weatherData);
        // console.log(weatherData.wind.speed);

        let city = weatherData.name;
        let weather = weatherData.weather[0].description;
        let temp = Math.trunc(weatherData.main.temp - 271);
        let windSpeed = Math.trunc(weatherData.wind.speed * 3.6); 
        let icon = data.weather[0].icon;

        window.localStorage.setItem("city", city);
        window.localStorage.setItem("weather", weather);
        window.localStorage.setItem("temp", temp);
        window.localStorage.setItem("wind", windSpeed);
        window.localStorage.setItem("icon", icon);

        let block = `
                <div>
                    <p>Curent city: ${city}</p>
                    <p>Curent weather: ${weather}</p>
                    <p>Curent temp: ${temp} C</p>
                    <p>Wind speed: ${windSpeed} km/h</p>
                    <img src="https://api.openweathermap.org/img/w/${icon}.png"></img>
                </div>
                `;
        container3.insertAdjacentHTML('beforeend', block);
        console.log('zakhar');
    })
}

setInterval(weather, 10000);

