// Implementar el código aqui

// Escuchar el evento 'submit'
let calcular = document.forms["calculator"];
console.log(calcular);

calcular.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("hola");

    let height = document.querySelector("#height").value;
    console.log(height);

    let weight = document.querySelector("#weight").value;
    console.log(weight);

    let imc = (weight / ((height*height)/10000)).toFixed(2);
    console.log(imc);

    document.querySelector("#results").textContent = imc
})