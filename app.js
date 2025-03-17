// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[]; //Crea un array

//Implementa una función para agregar amigos
function agregarAmigo(){
    //Capturar el valor del campo de entrada
    const nuevoAmigo = document.getElementById('amigo').value;
  
    //Validar que la entrada no esté vacía
    if (nuevoAmigo ===''){
        alert("Por favor, inserte un nombre.");
        return;
    }
   
    //Actualizar el array de amigos
    amigos.push(nuevoAmigo);
    //Limpiar el campo de entrada
    document.querySelector('#amigo').value ='';


// Actualizar la lista de amigos
actualizarListaAmigos();
    
// Limpiar el resultado previo si existe
document.getElementById('resultado').innerHTML = '';
}

function actualizarListaAmigos(){
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = '';

    //Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
    //Crea un nuevo elemento de lista
    const itemLista = document.createElement('li');
        
    // Añadir el nombre del amigo al elemento de lista
    itemLista.textContent = amigos[i];
    
    // Agregar el elemento a la lista
    listaAmigos.appendChild(itemLista);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('Por favor, añade al menos un amigo a la lista.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre del amigo seleccionado
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la lista de resultados y limpiar la lista
    const resultado = document.getElementById('resultado');
    document.getElementById('listaAmigos').innerHTML = '';
    resultado.innerHTML = `¡${amigoSeleccionado} es tu amigo secreto!`;

}

// Agregar evento para manejar la tecla Enter en el campo de entrada
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
})