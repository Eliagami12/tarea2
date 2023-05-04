function pasoPorNel(){
    console.log("se paso")
    let contenedorNel = document.getElementById("contenedorNel")
    let arriba = Math.random()*(600-1)+1
    let abajo = Math.random()*(1200-1)+1
    contenedorNel.style.top = `${arriba}px`
    contenedorNel.style.left = `${abajo}px`
}


