//variable de arreglo
let micarrusel = {};
let foto = 0;
let total = 0;

//arreglo para cargar las imagenes y titulo de cada foto.
micarrusel = [{ imageurl: "imagenes/coca1.png", titulo: "Foto #1" },
    { imageurl: "imagenes/fanta1.webp", titulo: "Foto #2" },
    { imageurl: "imagenes/delvalle1.webp", titulo: "Foto #3" },
    { imageurl: "imagenes/deporte.jpg", titulo: "Foto #4" },
    { imageurl: "imagenes/5.jpg", titulo: "Foto #5" },
    { imageurl: "imagenes/6.jpg", titulo: "Foto #6" },
    { imageurl: "imagenes/7.jpg", titulo: "Foto #7" }
];


//funcion que permite cambiar las imagenes (anterior y siguiente)

function cambiar(mas){
    //almacena la cantidad total de imagenes
    total = micarrusel.length;
    //almacena la proxima foto
    foto = foto + mas;
    //condicionales para determinar la imagen a presentar
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        //tiene la cantidad total de imagenes
        foto = total;
    }
    titulo = document.getElementById('titulo');
    //asignacion del arreglo para para referenciar la foto con el titulo
    titulo.innerText = micarrusel[foto - 1].titulo;
    //instrucciones que apuntan a cada imagen y titulo que brinda cada logotipo
    //permite apuntar al arreglo de las fotos con la ruta da cada una
    document.thumb.src = micarrusel[foto - 1].imageurl;
    //asignacion del ID titulo 

}