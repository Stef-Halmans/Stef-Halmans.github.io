const test = document.getElementById('peoplelist')

fetch('try.json')
 .then(response => response.json())
 .then(data => jsononscreen(data))


 function jsononscreen(data){
    console.log(data);
    data.forEach(element => {
        
        console.log(element)

        test.innerHTML += `
        <li>
            <p> ${element.name} </p>
            <img src="${element.picture}" />

        </li>
        
        `;


    });
 }

fetch('https://api.open-meteo.com/v1/forecast?latitude=51.44&longitude=5.48&current_weather=true')
.then(response => response.json())
.then(data => apiweather(data))

function apiweather(wdata){

    const frikandel = document.getElementById("frikandel");

    frikandel.innerHTML += `
    <p> ${wdata.current_weather.temperature}    </p>`;
}