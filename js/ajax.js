/* Inicio Ajax */

const urlDigimon = 'https://digimon-api.vercel.app/api/digimon'



$("body").prepend("<button id='btn'>Lista de Digimons y evoluciones</button>");

$.get(urlDigimon, (response, status) =>{
    var contador = 0;
    if(status === "success"){
        $("#btn").click(function () { 
            $("body").append(
            `<div><tr>${contador+1}</tr>            
            ${response[contador].name}<br>
                ${response[contador].img} <br>
                ${response[contador].level}<br>
                </div>`);
            contador++;
        });
    }
} 

);

/* Final Ajax */
