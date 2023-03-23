
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


// https://www.openweathermap.org/appid 
// apik = "495a8019b74646b994189f6049e8d909";
// apik = "9d16f6550e414f5ee0f9f457835e5a55";
apik = "d411ca88a4b881ac9c751b324ddde3f0";
//Kelvin->Celsius
function convertion(val) {
    return (val - 273).toFixed(2)
}

//fetch
btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&APPID=' + apik)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']

            city.innerHTML = `City: ${nameval}`
            temp.innerHTML = `Temperature: ${convertion(tempature)} C`
            description.innerHTML = `Conditions: ${descrip}`
            wind.innerHTML = `Wind Speed: ${wndspd} km/h`

        })
        .catch(err => alert('You entered Wrong city name'))
})

