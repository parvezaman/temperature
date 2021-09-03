// const API_KEY =`b39dc387d93a200d9ccdb0f17964b6e2`;
const cityNameInput = document.getElementById('city-name');

const searchTemperature = () =>{

    const cityName = cityNameInput.value;

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b39dc387d93a200d9ccdb0f17964b6e2&units=metric`;
    // console.log(url);

    cityNameInput.value = '';
    fetch(url)
    .then(res => res.json())
    .then(data => displayTempetature(data))
}

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTempetature = temperature =>{
    // console.log(temperature);
    setInnerText('place',temperature.name); //.name is used to get API locaton name
    setInnerText('temperature',temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    // set weather icon by id
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
};