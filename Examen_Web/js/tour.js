//variables controladoras 
var panorama, viewer, container, infospot;

//obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama("imagenes/refugio.jpg");


var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// baranda
infospot1.position.set(-56, -285, -500);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('El Rifugio Lagazuoi, situado a 2.752 metros de altitud en la cima del Monte Lagazuoi.', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">UEl Rifugio Lagazuoi, situado a 2.752 metros de altitud en la cima del Monte Lagazuoi.</div>';
panorama.add(infospot1);

//telescopio
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(-156, -50, -500);
infospot2.addHoverText('Telescopio de observación', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Telescopio de observación — permite ver hasta 40 km de distancia.</div>';
panorama.add(infospot2);



// Sunset techo
var infospot3 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infospot3.position.set(-500, -42, -113);
infospot3.addHoverText('',-60)

infospot3.element.innerHTML = `
    <div class="" style="">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/mycjTeNTnjA?si=8IaUoXv-S92f3qRy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        
    </div>
`;

/*infospot3.element.innerHTML = '<div style="background-color: rgba(28, 134, 12, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.</div>';*/
panorama.add(infospot3);



// el mas grande
var infospot4 = new PANOLENS.Infospot(100, PANOLENS.DataImage.Info);
// Crea y agrega el cuarto infospot con un ícono personalizado
//var infospot4 = new PANOLENS.Infospot(200, 'imagenes/info.png');
infospot4.position.set(-500, -156, -369);
//evento hover
infospot4.addHoverText('Temperatura promedio en invierno: -8°C. Velocidad del viento: 25 km/h.', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(7, 36, 58, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Temperatura promedio en invierno: -8°C. Velocidad del viento: 25 km/h.</div>';
panorama.add(infospot4);

//el audio
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

infospot5.position.set(265, 50, 940);

infospot5.addHoverText('', -60);
infospot5.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/refugio.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot5);

//el pdf de la izquierda
var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot7.position.set(374, 116, -500);
infospot7.addHoverText('Entrar al PDF.',-60);
infospot7.element.innerHTML = `
    <div style="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        <iframe src="https://drive.google.com/file/d/1dGVDszID4DiYaCoXKMim_OhJTo_HPZIr/preview" width="640" height="480" allow="autoplay"></iframe>
    </div>
`;

var infospot6 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infospot6.position.set(-200, -106, 499);
infospot6.addHoverText('',-60)
//infospot3.addHoverText('La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.', -60);
//insertar el reproductor de video de YouTube en el Infospot
//agregar el parametro para pantalla completa allowfullscreen
infospot6.element.innerHTML = `
    <div class="" style="">
             <iframe src="https://drive.google.com/file/d/1MXtUT7RrOFOF_TTUyJoBb2LFPgPnCchP/preview" width="640" height="480" allow="autoplay"></iframe> 
    </div>
`;
panorama.add(infospot6);



infospot7.addEventListener('click', function() {
    // Abrir el PDF en una nueva pestaña
    window.open("pdf/tour.pdf", "_blank");
});
panorama.add(infospot7);

//video del refugio
var infospot8 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infospot8.position.set(-500, 33, 360);
infospot8.addHoverText('',-60)
infospot8.element.innerHTML = `
    <div class="" style="">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/L34PRBivGBo?si=QdloCVtKKY2m8Fcz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
`;

/*infospot3.element.innerHTML = '<div style="background-color: rgba(28, 134, 12, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.</div>';*/
panorama.add(infospot8);

//imagen de la montaña
var infospot9 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot9.position.set(500, 113, -284);
infospot9.addHoverText('Entrar al PDF.',-60);
infospot9.element.innerHTML = `
    <div style="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
        <iframe src="https://drive.google.com/file/d/1dZqf5JuS_Qkz-8ofu-zmM9Q0B5quZ4Eu/preview" width="640" height="480" allow="autoplay"></iframe>
    </div>
`;
// Agregar un evento de clic para abrir el PDF
infospot9.addEventListener('click', function() {
    // Abrir el PDF en una nueva pestaña
    window.open("pdf/tour.pdf", "_blank");
});
panorama.add(infospot9);

var infospot10 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infospot10.position.set(-216, 106, 499);
infospot10.addHoverText('',-60)
//infospot3.addHoverText('La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.', -60);
//insertar el reproductor de video de YouTube en el Infospot
//agregar el parametro para pantalla completa allowfullscreen
infospot10.element.innerHTML = `
    <div class="" style="">
       <iframe src="https://drive.google.com/file/d/1XC6ndR43Qaec_nfDgyCJ5008ToeNLmws/preview" width="640" height="480" allow="autoplay"></iframe>        
    </div>
`;
panorama.add(infospot10);

// Agrega la panorámica al visor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);