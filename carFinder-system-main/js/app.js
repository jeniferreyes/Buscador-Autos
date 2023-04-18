// selectores
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

// Datos para la busqieda
const datosBusqueda={
    // colocamos las comillas vacias ya que no sabesmos lo que ingresará el usuario nilas especificaciones
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}
// -----------Crear años----------

// crearme un nuevo elemento en HTML con document.create element, para los años.

const years = document.createElement('option')
// lo que hace es obtener el año usando el tiempo local. (los metodos usan ())
const max = new Date().getFullYear();
const min = max-10

for(let i=max; i>min; i--){
// se usa un decremento para que vaya hacia atrás
// 2023, 2022, 2021...2013 hasta que i sea mayor que que el minimo
    const option = document.createElement('option')
    option.value = i
    // añadimos este texto al html
    option.innerHTML=i //i almacena los años, aqui se agregan los años, información.
    document.querySelector('#year').appendChild(option) //aqui se agregan los espacios o campos
}
// -----Filtrar auto-----
// creando eventos para los input/formulario
marca.addEventListener('input',e=>{
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})
year.addEventListener('input',e=>{
    datosBusqueda.year = Number(e.target.value)
    filtrarAuto()
})
minimo.addEventListener('input',e=>{
    datosBusqueda.minimo = Number(e.target.value);
    filtrarAuto()
})
maximo.addEventListener('input',e=>{
    datosBusqueda.maximo = Number(e.target.value);
    filtrarAuto()
})
puertas.addEventListener('input',e=>{
    datosBusqueda.puertas = Number(e.target.value);
    filtrarAuto() 
})
transmision.addEventListener('input',e=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAuto()
    
})
color.addEventListener('input',e=>{
    datosBusqueda.color = e.target.value;
    filtrarAuto()
    
})

function mostrarAutos(autos){
    const contenedor = document.querySelector('#resultado')

    autos.forEach(auto => {
        const autoHTML = document.createElement('p')
        
        autoHTML.innerHTML=`
        <p>${auto.marca} ${auto.modelo}-${auto.year} - ${auto.puertas} - Puertas - Transmision ${auto.transmision} - Precio ${auto.precio} - Color${auto.color}</p>
        `
        contenedor.appendChild(autoHTML)

        // DOM content load
        // nos permite cargar todos los elementos antes de la pagina funcionar.
        document.addEventListener('DOMContentLoaded'),()=>{
            mostrarAutos(autos)
        }
    });
}
function limpiarHTML(){
    // leemos el elemento resultado
    const contenedor = document.querySelector('#resultado')
    // Limpiamos resultados anteriores.
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild)
    }
}
function noResultado(){
    limpiarHTML()
    const noResultado = document.createElement('div')
    // metodo add
    noResultado.classList.add('alerta', 'error')
    noResultado.appendChild(document.createTextNode('No se obtuvo ningún resulatado'))
    document.querySelector('#resultado').appendChild(noResultado);

}
// Mandamos a llamar una funcion para filtrar todas las propiedades, creando así un solo evento.
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    console.log(resultado)
    if(resultado.length){
        // length indica si hay un resultado
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
}

//--------Funciones para crear los filtros-------
// entrada-proceso-salida
// ponemos el parametro auto
function filtrarMarca(auto){
    datosBusqueda.marca
    // Accedemos a el ojeto datos busqueda y a la posición objeto
    if(datosBusqueda.marca){
        // con el if validamos si existe la propiedad year
        return auto.marca === datosBusqueda.marca
    }else{
        return auto;
        // si no existe la opcion regresamos auto, es decir las opciones existentes.
    }
}

// -----Filtrar años-----
function filtrarYear(auto){
    datosBusqueda.año
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }else{
        return auto;
    }
}
function filtrarMinimo(auto){
    datosBusqueda.minimo
    if(datosBusqueda.minimo){
        return auto.minimo === datosBusqueda.minimo
    }else{
        return auto;
    }
}
function filtrarMaximo(auto){
    datosBusqueda.maximo
    if(datosBusqueda.maximo){
        return auto.maximo === datosBusqueda.maximo
    }else{
        return auto;
    }
}
function filtrarPuertas(auto){
    datosBusqueda.puertas
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas
    }else{
        return auto;
    }
}
function filtrarTransmision(auto){
    datosBusqueda.transmision
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }else{
        return auto;
    }
}
function filtrarColor(auto){
    datosBusqueda.color
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }else{
        return auto;
    }
}