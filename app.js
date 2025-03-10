// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if(nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;

    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";

}

function actualizarLista()  {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index)  => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });


 }

 function sortearAmigo() {
    if (amigos.lengh === 0) {
        alert("Debe haber al menos un nombre en la lista para hacer el sorteo.");
        return;

    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es:
    <strong>${amigoSecreto}</strong></li>`;

 }



