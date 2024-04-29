const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const temprature = document.querySelector(".hi-low");

const searchBox = document.querySelector("#serachInput");

searchBox.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2`)
        .then(data=>data.json())
        .then(function(data) {
            if(data != null) {
                city.innerText = `${data.name}, ${data.sys.country}` ;
                date.innerText = getDate();
                temp.innerText = `${Math.round(data.main.temp)}°c`;
                weather.innerText = data.weather[0].main ;
                temprature.innerText = `${Math.round(data.main.temp_min)}°c / ${Math.round(data.main.temp_max)}°c`;
            }
        }).catch(function(error) {
            console.error("Error occurred:", error);
        });
      
    }
  });

  function getDate() {
    let months =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    let currentDate = new Date();
    return `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`

  }
