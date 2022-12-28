let ataquejugador

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego  = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)
    let botonTierra = document.getElementById("boton-Tierra")
    botonTierra.addEventListener("click",ataqueTierra)
}

function seleccionarMascotaJugador(){
    let inputCambur = document.getElementById("Cambur")
    let inputSelene = document.getElementById("Selene")
    let inputBobo = document.getElementById("Bobo")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputCambur.checked) {
        spanMascotaJugador.innerHTML = "Cambur"
    } else if (inputSelene.checked) {
        spanMascotaJugador.innerHTML = "Selene"
    } else if (inputBobo.checked){
        spanMascotaJugador.innerHTML = "Bobo"
    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    
    if (ataqueAleatorio ==  1){
        spanMascotaEnemigo.innerHTML = "Cambur"
    } else if (ataqueAleatorio ==  2){
        spanMascotaEnemigo.innerHTML = "Selene"
    } else if (ataqueAleatorio ==  3){
        spanMascotaEnemigo.innerHTML = "Bobo"
    }
} 

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)