 //Se consigna nombre
 const getValueInput = () =>{
    let nombre = document.getElementById("domTextElement").value; 
    document.getElementById("valueInput").innerHTML = nombre; 
} 
let nombreUsuario = "Tu"
//Valor aleatorio de piedra, papel o tijera
function generateRandom(min = 1, max = 4){
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}
//función para sumar para pc
var sumapc = parseInt(0);
function incrementarpc()
    {
    var n = 0; 
    var num;
    while (n < 1)
    {
    num = 1;
    sumapc = sumapc + num;
    n = n + 1;
    }
}
//función para sumar para usuario
var sumausuario = parseInt(0);
function incrementarusuario()
    {
    var n = 0;
    var num;
    while (n < 1)
    {
    num = 1;
    sumausuario = sumausuario + num;
    n = n + 1;
    }
}
//Si elección es piedra
function opcionPiedra(){
        var cambio = document.getElementById("resultado");
        let imagen1 = document.getElementById('imagen1');
        let opcionPc = (generateRandom())
        {
            if (opcionPc==1)
            {
            cambio.textContent ="Eligiste piedra, yo también, empatamos! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
            cambio.classList.add('animate__animated', "animate__bounceInLeft");
            cambio.addEventListener('animationend', () => {
            cambio.classList.remove('animate__animated', "animate__bounceInLeft")
  
            });
        }
            else if (opcionPc==2)  
            {
            incrementarpc()
            cambio.textContent = "Elegiste piedra, yo papel.. gané! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
            cambio.classList.add('animate__animated', "animate__bounceInLeft");
            cambio.addEventListener('animationend', () => {
            cambio.classList.remove('animate__animated', "animate__bounceInLeft")
  
            });
        }
            else
            {
            incrementarusuario()
            cambio.textContent = ("Elegiste piedra, yo tijera.. ganaste! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc);
            cambio.classList.add('animate__animated', "animate__bounceInLeft");
            cambio.addEventListener('animationend', () => {
            cambio.classList.remove('animate__animated', "animate__bounceInLeft")
  
            });
        }    
        }
        if((sumapc === parseInt(2)) || (sumausuario === parseInt (2))){
            var cambiofinal = document.getElementById("resultadofinal");
            const hoy = new Date
            let fecha = (hoy.toLocaleString())
            cambiofinal.textContent ="El resultado final es: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc+" ";
            cambiofinal.classList.add('animate__animated', "animate__flip");
            cambiofinal.addEventListener('animationend', () => {
            cambiofinal.classList.remove('animate__animated', "animate__flip")
            let fechas = fecha
            let antecedente = nombreUsuario+": "+sumausuario+" "+"yo "+sumapc
            if(sessionStorage.getItem(fechas,antecedente))
                { "none"}
                else{
                    sessionStorage.setItem(fechas,antecedente)
                    sumapc = sumapc - sumapc
                    sumausuario = sumausuario - sumausuario
                }
            
            })
        }    
}
//Si la elección es papel
function opcionPapel(){
        var cambio = document.getElementById("resultado");
        let imagen2 = document.getElementById('imagen2');
        let opcionPc = (generateRandom())
        
        {
            if (opcionPc==1)
            {
                incrementarusuario()
                cambio.textContent = "Eligiste papel, yo piedra, ganaste! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
                cambio.classList.add('animate__animated', "animate__bounceInLeft");
                cambio.addEventListener('animationend', () => {
                cambio.classList.remove('animate__animated', "animate__bounceInLeft")
      
                });
            }
            else if (opcionPc==2)
            {cambio.textContent ="Elegiste papel, yo también, empatamos! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
            cambio.classList.add('animate__animated', "animate__bounceInLeft");
            cambio.addEventListener('animationend', () => {
            cambio.classList.remove('animate__animated', "animate__bounceInLeft")
  
            });
        }
            else
            {
                incrementarpc()
                cambio.textContent ="Elegiste papel, yo tijera.. gané! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
                cambio.classList.add('animate__animated', "animate__bounceInLeft");
                cambio.addEventListener('animationend', () => {
                cambio.classList.remove('animate__animated', "animate__bounceInLeft")
      
                });
            }
        }

        if((sumapc === parseInt(2)) || (sumausuario === parseInt (2))){
            var cambiofinal = document.getElementById("resultadofinal");
            const hoy = new Date
            let fecha = (hoy.toLocaleString())
            cambiofinal.textContent ="El resultado final es: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc+" ";
            cambiofinal.classList.add('animate__animated', "animate__flip");
            cambiofinal.addEventListener('animationend', () => {
            cambiofinal.classList.remove('animate__animated', "animate__flip")
            let fechas = fecha
            let antecedente = nombreUsuario+": "+sumausuario+" "+"yo "+sumapc
            if(sessionStorage.getItem(fechas,antecedente))
                { "none"}
                else{
                    sessionStorage.setItem(fechas,antecedente)
                    sumapc = sumapc - sumapc
                    sumausuario = sumausuario - sumausuario
                }
            
            })
        }    
}
//Si la elección es tijera
function opcionTijera(){
        var cambio = document.getElementById("resultado");
        let imagen3 = document.getElementById('imagen3');
        let opcionPc = (generateRandom())
        {
            if (opcionPc==1)
                {
                    incrementarpc()
                    cambio.textContent = "Eligiste tijera, yo piedra, gané! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
                    cambio.classList.add('animate__animated', "animate__bounceInLeft");
                    cambio.addEventListener('animationend', () => {
                    cambio.classList.remove('animate__animated', "animate__bounceInLeft")
          
                    });
                }
                else if (opcionPc==2)
                {
                    incrementarusuario()
                    cambio.textContent ="Elegiste tijera, yo papel, ganaste! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
                    cambio.classList.add('animate__animated', "animate__bounceInLeft");
                    cambio.addEventListener('animationend', () => {
                    cambio.classList.remove('animate__animated', "animate__bounceInLeft")
          
                    });
                }
                else
                {cambio.textContent ="Elegiste tijera, yo también, empatamos! Resultado: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc;
                cambio.classList.add('animate__animated', "animate__bounceInLeft");
                cambio.addEventListener('animationend', () => {
                cambio.classList.remove('animate__animated', "animate__bounceInLeft")
      
                });
            }
        }
  
        if((sumapc === parseInt(2)) || (sumausuario === parseInt (2))){
            var cambiofinal = document.getElementById("resultadofinal");
            const hoy = new Date
            let fecha = (hoy.toLocaleString())
            cambiofinal.textContent ="El resultado final es: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc+" ";
            cambiofinal.classList.add('animate__animated', "animate__flip");
            cambiofinal.addEventListener('animationend', () => {
            cambiofinal.classList.remove('animate__animated', "animate__flip")
            let fechas = fecha
            let antecedente = nombreUsuario+": "+sumausuario+" "+"yo "+sumapc
            if(sessionStorage.getItem(fechas,antecedente))
                { "none"}
                else{
                    sessionStorage.setItem(fechas,antecedente)
                    sumapc = sumapc - sumapc
                    sumausuario = sumausuario - sumausuario
                }
            
            })
        } 
       
           
}
//Para mostar historial usamos el storage
function mostrar(){

    const datos = document.getElementById("datos");
    let tabla = document.createElement("table")
        for (let index= 0; index < sessionStorage.length; index++) {
            
            let clave = sessionStorage.key(index)
            let fila = document.createElement("tr")
            fila.innerHTML =  `<td>${sessionStorage.getItem(clave)}</td> 
                                <td>${clave}</td>`
            tabla.append(fila)
            datos.append(tabla)
        } 
          
} 
///Vaciar el storage
function vaciar(){
    sessionStorage.clear();
    location. reload()
}
//


var retrievedObject = localStorage.getItem(clave);

console.log('retrievedObject: ', JSON.parse(retrievedObject));

/**
let registros = [];
let registros2 = [];
let registros3 = [];

var cambio = document.getElementById("saludo");
let extract = registros3.filter(registros3 => registros3 = Math.max());
let indice = registros2.indexOf(5);
cambio.textContent = "Hola "+nombreUsuario+", gracias por jugar al piedra, papel o tijera. Las diferencias de games en cada juego que has obtenido es: "+extract 

    if (((indice)+1)<=2 && ((indice)+1)>0)
    {
    alert("Alcanzaste los 5 puntos en el juego: " +((indice)+1)+". Ganaste una estrella!");


}


function Antecedente (juego) {
    this.juego = juego;
   
}
//creamos los objetos
const antecedente1 = new Antecedente(" Juego 1: ");
const antecedente2 = new Antecedente(" Juego 2: ");
const antecedente3 = new Antecedente(" Juego 3: ");
const antecedente4 = new Antecedente(" Juego 4: ");
const antecedente5 = new Antecedente(" Juego 5: ");
const antecedente6 = new Antecedente(" Juego 6: ");
const antecedente7 = new Antecedente(" Juego 7: ");
const antecedente8 = new Antecedente(" Juego 8: ");
const antecedente9 = new Antecedente(" Juego 9: ");
const antecedente10 = new Antecedente(" Juego 10: ");

//creamos la fecha y arrays de los juegos    
let iterable = [antecedente1.juego, antecedente2.juego, antecedente3.juego, antecedente4.juego, antecedente5.juego, antecedente6.juego, antecedente7.juego, antecedente8.juego, antecedente9.juego, antecedente10.juego];
let registros = [];
let registros2 = [];
let registros3 = [];

//operacion final
for (let value of iterable) {
    let opcionfinal = prompt(nombreUsuario+", presiona 1 para continuar o 2 para salir del juego");
    if(opcionfinal == "1"){
    const hoy = new Date
    let fecha = (hoy.toLocaleString())
    operación()
    alert(value+"El resultado acumulado es: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc+" "+fecha);
    registros.push(value+"El resultado acumulado es: "+nombreUsuario+": "+sumausuario+" "+"yo "+sumapc+" "+fecha);
    registros2.push(sumausuario)
    registros3.push(sumausuario-sumapc)
    
}
    else if (opcionfinal == "2"){
    break;
}
}


//creamos el historial de diferenciales con un filtro     
//hacemos busqueda y damos estrella en caso de objetivo logrado .. objetivo = llegar a 5 puntos antes del segundo juego            
window.onload = function() {
                var cambio = document.getElementById("saludo");
                let extract = registros3.filter(registros3 => registros3 = Math.max());
                let indice = registros2.indexOf(5);
                cambio.textContent = "Hola "+nombreUsuario+", gracias por jugar al piedra, papel o tijera.Tu has realizado "+registros.length+" juegos y tus registros han sido: "+registros+". Las diferencias de games en cada juego que has obtenido es: "+extract 


    if (((indice)+1)<=2 && ((indice)+1)>0)
            {
            alert("Alcanzaste los 5 puntos en el juego: " +((indice)+1)+". Ganaste una estrella!");
}

}


*/   

           