// Lab 3
const icons = {
    clear: '☀',
    rain: '️🌧',
    storm: '⛈',
    snow: '🌨',
    mist: '🌫',
    clouds: '☁',
  };

$(document).ready()  
axios({
    method: 'get',
    url: 'https://api.unsplash.com/photos/random/?topics=nature&client_id=wu_n5tSSdadbp4YJ6As0zhC0Kn47q_R7FBX0GplWPHw'
})
.then(response =>{
//    $('body').append(`<img src=${response.data.urls.full} />`)
    $('body').css('background-image', `url("${response.data.urls.regular}")`)
})
.catch(error => {
    console.log(error)
})
        let lat = 26.2235041
        let lon = 50.5822436
axios({
    method: 'get',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=manama&appid=c0185d0b02348b98e2d84519a3b19f0f'
})
.then(response =>{
    let temp = response.data.main.temp - 273.15
    let cond = response.data.weather[0].main
    console.log(cond);
    $('.weather').append(`<h4>${icons[cond.toLowerCase()]} ${parseInt(temp)} &#8451 </h4>`);
    $('.city').append(`<p>${response.data.name}</p>`);
})
.catch(error => {
    console.log(error)
})

axios({
    method: 'get',
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    
})
.then(response =>{

    $('.quote').append(`<p>"${response.data.quoteText}" by ${response.data.quoteAuthor} </p>`);
    
})
.catch(error => {
    console.log(error)
})
// $('.quote').append(`<p> Quote Here </p>`);

console.log(moment().format('HH:mm'));

$('.time').append(`<h1> ${moment().format('HH:mm:ss')} </h1>`);
$('.date').append(`<h1> ${moment().format('DD/MMYYYY')} </h1>`);

let greeting = ""
let h = parseInt(moment().format('HH'))
if(3 <= h && h < 12){
    greeting = "Good Morning";    
}
else if(12<= h && h < 15){
    greeting = "Good Afternoon";    
}
else if(15 <= h && h < 22){
    greeting = "Good Evening";    
}
else if(22 <= h | h < 3){
    greeting = "Good Night";    
}
$('.greetings').text(greeting);

console.log(3 >= parseInt(moment().format('HH')) < 12)
