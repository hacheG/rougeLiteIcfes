/** @type {HTMLCanvasElement}*/
(function (){

    const canvas = document.querySelector("#canvas1");
    const ctx = canvas.getContext("2d");
    const CANVAS_WIDTH = canvas.width = window.innerWidth;
    const CANVAS_HEIGHT = canvas.height = 200;
    
    let x = 0
    
    function animate(){
        ctx.reset();
        ctx.strokeStyle = "red";
        ctx.strokeRect(x, 10, 10, 10);
    
        requestAnimationFrame(animate);
        x++;
    };
    
    animate();
})()