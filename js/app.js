const url = "https://restcountries.com/v2/all";


// Function to fetch URL data

let country_data = (url) => {
  fetch(url, {
    method: "GET",
  })
    .then((data) => data.json())
    .then((response) => {
      f_c_data(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
// document.cre

country_data(url);

function f_c_data(data) {
  for (let i = 0; i < data.length; i++) {
   //img
    const img = new Image()
    img.src = data[i].flags.svg
    let fdiv=document.createElement('div');
    fdiv.className='gallery';
    document.getElementsByClassName('container')[0].appendChild(fdiv);
    document.getElementsByClassName('gallery')[i].appendChild(img);

    //data
    let l=document.createElement('div');
    let p1=document.createElement('p');
    let p2=document.createElement('p');
    let d1=document.createTextNode(data[i].name)
    let d2=document.createTextNode(data[i].capital)
    p1.appendChild(d1);
    p2.appendChild(d2);
    l.appendChild(p1);
    l.appendChild(p2);
    l.className='desc'
    document.getElementsByClassName('gallery')[i].appendChild(l);

    //button
    document.getElementsByClassName('gallery')[i].addEventListener("click",function(){
    let apiCall = "https://api.openweathermap.org/data/2.5/weather?q="+data[i].capital+"&units=metric&appid=d74ec0ddc35a388cf3575ae2a467504c";
    let weatherData = (apiCall) => {
        fetch(apiCall,{
            method : "GET"
        })
        .then((wData) => wData.json())
        .then((response) => {
            document.getElementById('h').innerHTML="Country: "+data[i].name;
            document.getElementById('cap').innerHTML="Capital: "+response.name;
            document.getElementById('wet').innerHTML="Weather: "+response.weather[0].description;
            document.getElementById('tep').innerHTML="Temperature: "+response.main.pressure;
            document.getElementById('hum').innerHTML="Humidity: "+response.main.temp;
        })
        .catch((error) => {
            console.log(error);
        });
    }
    weatherData(apiCall);
    })
  }
}


