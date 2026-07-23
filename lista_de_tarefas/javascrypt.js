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

//função para deletar

const Delete = document.querySelector('.delete');

let modoDeletar = false; 

Delete.addEventListener('click', function(){
    modoDeletar = !modoDeletar; 
    
    Delete.classList.toggle('btn-ativo', modoDeletar);
});

lista.addEventListener('click', function(evento){
    if (modoDeletar === true && evento.target.tagName === 'P'){
        evento.target.remove(); 
    
        modoDeletar = false; 
        
        Delete.classList.remove('btn-ativo');
    }
});

//função editar

const Editar = document.querySelector('.editar');
let modeditar = false;

Editar.addEventListener('click', function(){
    modeditar = !modeditar; 
    Editar.classList.toggle('btn-ativo', modeditar);
});

lista.addEventListener('click', function(evento){
    
    if (modeditar === true && evento.target.tagName === 'P'){
        
        const tarefaclick = evento.target;

        tarefaclick.contentEditable = true;
        
        tarefaclick.focus();

        modeditar = false; 
        Editar.classList.remove('btn-ativo');
      
        tarefaclick.addEventListener('blur', function() {
            tarefaclick.contentEditable = false;
        }, { once: true });

        tarefaclick.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();

                tarefaclick.blur();
            }
        });
    }
});






