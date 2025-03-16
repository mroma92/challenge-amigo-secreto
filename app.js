// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos=[];


function agregarAmigo(){
    const nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo)
    if (nuevoAmigo ===''){
        alert("Por favor, inserte un nombre.");
        
    } else{  
        
        amigos.push(nuevoAmigo);
        document.querySelector('#amigo').value ='';
    }
    console.log(amigos);
    
    return;
}

// Actualizar la lista visible
actualizarListaAmigos();
    
// Limpiar el resultado previo si existe
document.getElementById('resultado').innerHTML = '';


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
    
    // Mostrar el resultado en la lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡${amigoSeleccionado} es tu amigo secreto!`;
}

// Agregar evento para manejar la tecla Enter en el campo de entrada
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
})