//boton sitio
function sitio() {
    let sitio = document.getElementById('sitio').value;
    if (sitio == 'A') {
        let timerInterval;
        Swal.fire({
            title: "Usted esta siendo redirigido!",
            imageUrl: 'imagenes/carga2.png',
            html: "I will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            } window.location.href = "inicio.html";
        });
    }
}
//boton app
function app() {
    let app = document.getElementById('app').value;
    if (app == 'Z') {
        let timerInterval;
        Swal.fire({
            title: "Usted esta siendo redirigido!",
            imageUrl: 'imagenes/carga2.png',
            html: "I will close in <b></b> milliseconds.",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            } window.location.href = "tour.html";
        });
    }
}

/*el boton de entrar en el index*/
function entrar() {
    Swal.fire({
        title: 'Aviso',

        icon: "warning",
        position: 'center',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,              
        html: '<strong> ¡Usted esta entrando en Super Mora! </strong> '
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        } window.location.href = "login.html";
    });
}
// boton de login
function log() {
    Swal.fire({
        title: '¡Sesión iniciada con exito!',
        icon: "success",
        
       
        imageWidth: 150,
        imageHeight: 190,
        imageAlt: "Custom image",
        position: 'center',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        padding: "3em",
        color: "#716add",
        background: '#dad7d7ff no-repeat',
        }).then((result) => {
            
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            } window.location.href="landing.html"
        })
   
}

/*Swal.fire({
  title: "Custom width, padding, color, background.",
  width: 600,
  padding: "3em",
  color: "#716add",
  background: "#fff url(/images/trees.png)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
}); */

