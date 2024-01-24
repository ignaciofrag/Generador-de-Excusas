function generarExcusa() {
    let quien = ['El perro', 'Mi abuela', 'Su tortuga', 'Mi pájaro'];
    let accion = ['se comió', 'orinó', 'aplastó', 'rompió'];
    let que = ['mi tarea', 'las llaves', 'el auto'];
    let cuando = ['antes de la clase', 'justo a tiempo', 'cuando terminé', 'durante mi almuerzo', 'mientras cenaba'];

    let indiceQuien = Math.floor(Math.random() * quien.length);
    let indiceAccion = Math.floor(Math.random() * accion.length);
    let indiceQue = Math.floor(Math.random() * que.length);
    let indiceCuando = Math.floor(Math.random() * cuando.length);

    return quien[indiceQuien] + ' ' + accion[indiceAccion] + ' ' + que[indiceQue] + ' ' + cuando[indiceCuando];
}

window.onload = function() {
    document.getElementById('excusa').innerHTML = generarExcusa();
};