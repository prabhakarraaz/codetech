const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {

    const APIKey = '8468e78d1b86f6e486e97eeb3dd7fbf4';
    const city = document.querySelector('.search-box input').Value;

    if (city == '')
        return;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric$ appid=${APIKey}`).then(response => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'https://purepng.com/public/uploads/thumbnail//purepng.com-sunnaturehotcartoonsummerspringsun-961524676783yizne.png';
                break;

            case 'Rain':
                image.src = 'https://purepng.com/public/uploads/thumbnail//weather-forecast-symbol-k9i.png';
                break;

            case 'Cloud':
                image.src = 'https://purepng.com/public/uploads/thumbnail//purepng.com-cloudcloudwateraerosolfrozen-crystal-1411526923937psgdj.png';
                break;
        
            default:
                image.src = 'https://purepng.com/public/uploads/large/purepng.com-weather-icon-ios-7symbolsiconsapple-iosiosios-7-iconsios-7-721522596694capb5.png';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>℃</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

    });

});