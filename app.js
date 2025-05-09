/** @type {HTMLCanvasElement}*/

const texto = document.querySelector(".texto");
const pregunta = document.createElement("div");
const respuestaA = document.createElement("div");
const respuestaB = document.createElement("div");
const respuestaC = document.createElement("div");
const respuestaD = document.createElement("div");
let question = 0;

const botonTurno = document.querySelector(".nuevo-turnoBtn");
botonTurno.addEventListener("click", (e) => {
    console.log("my turn");
    searchQuestion();
});

function searchQuestion(){

    const url = "textos.json";
    fetch(url)
    .then( response => response.json())
    .then( data => {
        putQuestion(data);
        reviewAnswer(data)
    });
}

// funcion para poner la pregunta
function putQuestion(data){
    pregunta.textContent = data[question].pregunta;
    texto.appendChild(pregunta)

    respuestaA.classList = "a";
    respuestaA.innerHTML = `<strong>A. </strong>${data[question].a}`;
    texto.appendChild(respuestaA)
    
    respuestaB.classList = "b";
    respuestaB.innerHTML = `<strong>B. </strong>${data[question].b}`;
    texto.appendChild(respuestaB)

    
    respuestaC.classList = "c";
    respuestaC.innerHTML = `<strong>C. </strong>${data[question].c}`;
    texto.appendChild(respuestaC)

    
    respuestaD.classList = "d";
    respuestaD.innerHTML = `<strong>D. </strong>${data[question].d}`;
    texto.appendChild(respuestaD)
};

// funcion para revisar la respuesta
function reviewAnswer(data){
    texto.addEventListener("click", (e) => {
        console.log(e.target.classList[0]);
        if (e.target.classList[0] === data[question].respuesta){
            console.log("correcto");
            console.log("el target:",e.target);
            e.target.style.backgroundColor = "green"
            question++;
            console.log("question: ",question);
            //quitQuestion();
            
        } else {
            console.log("incorrecto");
        };
    });
};

// funcion para quitar la pregunta
function quitQuestion(){
    texto.removeChild(pregunta);
    texto.removeChild(respuestaA);
    texto.removeChild(respuestaB);
    texto.removeChild(respuestaC);
    texto.removeChild(respuestaD);
}






