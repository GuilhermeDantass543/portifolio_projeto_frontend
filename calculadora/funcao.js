const visor = document.getElementById('visor');
const botoes = document.querySelectorAll('.botoes button');

//adicionar valor ao visor
function adicionarAoVisor(valor) {

  if (visor.value === 'Erro') {
    visor.value = '';
  }
  visor.value += valor;
}

//limpa o visor
function limparVisor() {
  visor.value = '';
}

//função de calculo
function calcular() {
  if (!visor.value) return;
  
  //calcula o que foi escrito no visor usando a função eval(use com cuidado)
  try {
    let expressao = visor.value.replace(/%/g, '/100');
    let resultado = eval(expressao);

    //testa se é um numero infinito e invalido, se não for entra no else e mostra o resultado
    if (!isFinite(resultado)) {
      visor.value = 'Erro';
    } else {
      visor.value = resultado;
    }

  } catch (error) {
    visor.value = 'Erro';
  }
}

// os eventos que podem ser ativados
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    if (botao.classList.contains('limpar')){
      limparVisor();
    } 
   
    else if (botao.classList.contains('igual')) {
      calcular();
    } 
    
    else {

      adicionarAoVisor(botao.innerText);
    }
  });
});