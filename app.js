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



function listaSorteo(){
    let  = document.getElementById("myP").innerHTML;
    for (let i = 0; i < amigos.length; i++) {
    text += amigos[i] + "<br>";

    document.getElementById("demo").innerHTML = text;
    }

}

function sortearAmigo(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
}

// nuevoAmigo.innerHTML = ;
