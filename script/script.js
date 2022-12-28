

//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];


agregarMonitores();

let midiv = document.getElementById("mostrarPaises");

midiv.addEventListener("click",
function(){
    mostrarPaises();
    alert("Saludos desde JS");
    
})

let Midiv2 = document.getElementById("agregarPais");

Midiv2.addEventListener("click",
function(){
    
    

    
    
    
    
    
    var respuesta = prompt("Ingrese 'Pais'");
    if(respuesta == ''  || respuesta == null){
        console.log("ingrese Nombre")
    } else{ 
        var respuesta1 = prompt("Ingrese 'Moneda'");
        if(respuesta1 == '' || respuesta1 == null){
        console.log("ingrese la moneda")
    }else{ 
        var respuesta2 = prompt("Ingrese 'Capital'");
        if(respuesta2 == '' || respuesta2 == null){
        console.log("Ingrese la capital")
    }else{
        var respuesta3 = prompt("Ingrese 'Idioma'");
        if(respuesta3 == ''|| respuesta3 == null){
        console.log("Ingrese el idioma")
    }else{
        var respuesta4 = prompt("Ingrese 'Bandera'");
        if(respuesta4 == '' || respuesta4 == null){
        console.log("Ingrese la Bandera")
    }else{
    
    let paisNUevo = {
        nombre: respuesta,
        bandera: respuesta4,
        capital: respuesta2,
        idioma_oficial: respuesta3,
        moneda: respuesta1
    }
    paises.unshift(paisNUevo);
    mostrarPaises();
}
}
}
}
} 
}
)

//funcion para agregar listeners a los botones
function agregarMonitores() {
 //TODO

}



//funcion que mostrara las paises en la pagina

function mostrarPaises(){
    

let valores = "";
for(let i = 0; i < paises.length; i++){
    valores += `<div>
    <table class="table">
    <thead>
        <tr class="bg-secondary text-dark bg-opacity-50">
            <th>Nombre:</th>
            <th>Capital:</th>
            <th>Idioma:</th>
            <th>Moneda:</th>
        </tr>
    </thead>
    <tbody> 
        <tr>
            <td>${paises[i].nombre}</td>
            <td>${paises[i].capital}</td>
            <td>${paises[i].idioma_oficial}</td>
            <td>${paises[i].moneda}</td>
        </tr>
    </tbody>  
        
    <tfoot>
        <tr>
            <td colspan="4">
            <center>
            <img src="${paises[i].bandera}" alt="">
            </center>
            </td>
        </tr>
    </tfoot>
    </table>  
</div>`;
}
document.getElementById("paises").innerHTML = valores;


}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
    
}
