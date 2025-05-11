/** @type {HTMLCanvasElement}*/

(function (){

    const canvas = document.querySelector("#canvas2");
    const ctx = canvas.getContext("2d");
    const CANVAS_WIDTH = canvas.width = window.innerWidth;
    const CANVAS_HEIGHT = canvas.height = 700;
    
    
    let x = 0
    const fondo = new Image();
    fondo.src = "assets/imagenes/fondo.png"
    

    function animate(){
        ctx.reset();
        ctx.strokeStyle = "blue";
        ctx.strokeRect(x, 10, 10, 10);
        ctx.drawImage(fondo, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
        requestAnimationFrame(animate);
        x++
    };
    
    animate()
})()