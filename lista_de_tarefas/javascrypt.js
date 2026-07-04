const input = document.querySelector('input');
const adicionar = document.querySelector('button');
const lista = document.querySelector('.tarefas');

function adicionarTarefa(){

    const valor = input.value.trim(); 

    if (valor !== ""){
        
        const novaTarefa = document.createElement('p'); 

        novaTarefa.textContent = valor; 
      
        lista.appendChild(novaTarefa); 
        
        input.value = ""; 
    }   
    else{
        console.log("A tarefa não foi adicionada porque o campo estava vazio.");
    }
}

adicionar.addEventListener('click', adicionarTarefa);

input.addEventListener('keydown', function(evento) {

    if (evento.key === 'Enter') {
        adicionarTarefa();   
    }
});