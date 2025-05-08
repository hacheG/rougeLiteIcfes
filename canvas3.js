/** @type {HTMLCanvasElement}*/

(function (){

    const canvas = document.querySelector("#canvas3");
    const ctx = canvas.getContext("2d");
    const CANVAS_WIDTH = canvas.width = window.innerWidth;
    const CANVAS_HEIGHT = canvas.height = window.innerHeight;
    

    function animate(){
        ctx.strokeStyle = "green";
        // ctx.strokeRect(x, 10, 10, 10);

        requestAnimationFrame(animate);
        
    };

    animate()
})()