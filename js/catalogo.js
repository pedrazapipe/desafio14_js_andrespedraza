/* Inicio objetos */

class Plantas  {
    constructor (planta, tierra, tamaño, stock) {

        this.planta = planta;
        this.tierra = tierra;
        this.tamaño = tamaño;
        this.stock = stock;
        this.activo = true;

    }

    datosPlantas () {

        console.log (`La planta ${this.planta} maneja un sustrato de tipo ${this.tierra} es de tamaño ${this.tamaño} y nos quedan un total de: ${this.stock}.`);
    
    }

};

const SuculentaNormal = new Plantas ("Echeveria elegans", "Normal", "Pequeña", 30);

const Cactus = new Plantas ("Cactus Chin", "Normal", "Mediana", 5);

const Minijardin = new Plantas ("Minijardin", "Normal", "Pequeño", 15);

const CarnivoraDrosera = new Plantas ("Drosera", "Peatmoss", "Pequeña", 10);

const SuculentaPachyveria = new Plantas ("Suculenta Pachyveria", "Normal", "Grande", 2);

const CarnivoraMatamoscas = new Plantas ("Carnivota mata moscas", "Peatmoss", "Pequeña", 5);

// console.log (Carnivora);
// Carnivora.datosPlantas ();
// Minijardin.datosPlantas ();

/* Final Objetos */





/* Inicio Arrays */

const catalogoPlantas = [];

catalogoPlantas.push (new Plantas ("Echeveria elegans", "Normal", "Pequeña", 30));
catalogoPlantas.push (new Plantas ("Cactus Chin", "Normal", "Mediana", 5));
catalogoPlantas.push (new Plantas ("Minijardin", "Normal", "Pequeño", 15));
catalogoPlantas.push (new Plantas ("Drosera", "Peatmoss", "Pequeña", 10));
catalogoPlantas.push (new Plantas ("Suculenta Pachyveria", "Normal", "Grande", 2));
catalogoPlantas.push (new Plantas ("Carnivota mata moscas", "Peatmoss", "Pequeña", 5));

// console.log (catalogoPlantas)

// function datosProductos () {

//     for (let i = 0; i < catalogoPlantas.length; i++) {
//         console.log (catalogoPlantas[i]);
        
//     }

// };

// // datosProductos ()

// const cantidadProductos = catalogoPlantas.sort ((a, b) => {

//     return b.stock - a.stock;

// });

// console.log (cantidadProductos);
 
// const ordenProductos = productos.sort ((orn1, orn2) => {

//     return (orn1.nombre < orn2.nombre) ? - 1 : 1;

// });

// console.log (ordenProductos) 

// console.table (productos);

/* Fin Arrays */




/* Inicio LocalStorage */



/* Final LocalStorage */




/* Inicio events y DOM */

const botonesCompra = document.querySelectorAll(`.btn__buy`);
// console.log (botonesCompra)

botonesCompra.forEach (eventoCompra => {
    eventoCompra.addEventListener(`click`, añadirCompra);

});

function añadirCompra (event) {

    const button = event.target;
    const productos = button.closest(`.productos`);

    const titutoProductos = productos.querySelector (`.titulos__productos`).textContent;

    const precioProductos = productos.querySelector (`.precio__productos`).textContent;

    const fotoProducto = productos.querySelector (`img`).src;


    mostrarProductos (titutoProductos, precioProductos, fotoProducto)

}

function mostrarProductos (titutoProductos, precioProductos, fotoProducto) {
    
    console.log (titutoProductos, precioProductos, fotoProducto);

}


// const productosBody = document.querySelector (`.body__productos`)

// const productos = document.querySelector (`.productos`).content

// const fragmentar = document.createDocumentFragment ()

// document.addEventListener (`DOMContentLoaded`, () => {
//     recogerData()
// });

// const recogerData = async () => {

//     try {

//         const respuesta = await fetch (`plantas.json`);
//         const dato = await respuesta.json();
//         tomarProductos(dato)

//     } catch (error) {
//         console.log (error)

//     }

// } 

// const tomarProductos = (dato) => {
//     dato.forEach(producto => {
//         productos.querySelector (`.titulos__productos`).textContent;
//         //     const titutoProductos = productos.querySelector (`.titulos__productos`).textContent;

// //     const precioProductos = productos.querySelector (`.precio__productos`).textContent;

// //     const fotoProducto = productos.querySelector (`img`).src;

//     const clonar = producto.cloneNode(true);    
//         fragmentar.appentChild (clonar)

//     });
//     productosBody.appentChild(fragmentar)

// }

/* Final events y DOM */






