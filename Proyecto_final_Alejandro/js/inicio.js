//pestanas


function opciones(evt, info) {

  //*declaracion de variables
  //i controla el for
  //tabcontent controla el contenido de los TABS
  //tablinks controla los enlaces de los TABS
  var i, tabcontent, tablinks;


  // Obtener todos los elementos con class = "tabcontent" y ocúltelos
  //los elementos representan el contenido de cada pestaña.
  //se obtienen todos los elementos con la clase "tabcontent" y se almacenan en la variable tabcontent. 
  tabcontent = document.getElementsByClassName("secini");
  for (i = 0; i < tabcontent.length; i++) {
    //se itera sobre todos los elementos en tabcontent y se establece su estilo de visualización como "none", oculta a todos.
    tabcontent[i].style.display = "none";
  }


 // Apunta a todos los elementos con class = "tablinks" y elimine la clase "active"
 //Obtener todos los elementos con la clase "tablinks" y se almacenan en la variable tablinks. 
 //los elementos representan los enlaces o botones que activan cada pestaña.
 tablinks = document.getElementsByClassName("tablinks");
 //se itera sobre todos los elementos en tablinks y se reemplaza la clase "active" en su nombre de clase por una cadena vacía, 
 //lo que desactiva todos los enlaces o botones.
 for (i = 0; i < tablinks.length; i++) {
   tablinks[i].className = tablinks[i].className.replace(" active", "");
 }


//muestre la pestaña actual y agregue una clase "activa" al botón que abrió la pestaña.
//luego se muestra el contenido de la pestaña correspondiente al elemento con el ID especificado por info estableciendo 
//su estilo de visualización como "block".
document.getElementById(info).style.display = "block";
//Finalmente, se agrega la clase "active" al enlace o botón actualmente activo mediante la propiedad className,
//lo que resalta visualmente la pestaña activa.
 evt.currentTarget.className += " active";
}

//lightbox


//obtener el modal
var modal = document.getElementById("modal1");

//obtener la imagen y agregarla dentro del modal - 
//Usar el texto alternativo "alt" como subtítulo

//imagen
var img = document.getElementById("myImg");
//contenido
var modalImg = document.getElementById("img01");
//titulo 
var captionText = document.getElementById("caption");


//al dar clic a la foto en pequeño 
img.onclick = function() {
    //desplegar la foto
    modal.style.display = "block";
    //apunta el contenido del modal
    modalImg.src = this.src;
    //asigna el ALT debabo de la imagen
    captionText.innerHTML = this.alt;
}

//obtenga el elemento <span> que cierra el modal
var cerrar = document.getElementsByClassName("close")[0];

//cuando el usuario hace clic en <span> (x), cierre el modal
cerrar.onclick = function() {
    modal.style.display = "none";
}

//carrusel


