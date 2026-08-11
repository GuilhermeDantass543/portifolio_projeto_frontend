const inputCep = document.getElementById('cep');

inputCep.addEventListener('keypress', function(event) {
    
    if (event.key === 'Enter') {
        
        const cep = inputCep.value.replace(/\D/g, '');

        if (cep.length === 8) {
            
            const url = `https://viacep.com.br/ws/${cep}/json/`;

            fetch(url)
                
                .then(resposta => resposta.json())
                
                .then(dados => {
                    
                    if (!dados.erro) {
                        
                        document.getElementById('rua').value = dados.logradouro;            
            
                        document.getElementById('bairro').value = dados.bairro;
                        
                        document.getElementById('cidade').value = dados.localidade;
                        
                        document.getElementById('estado').value = dados.uf;
                        
                    } else {
                        alert('CEP não encontrado!');
                    }
                })

                .catch(erro => {
                    alert('Erro ao buscar o CEP.');
                });
                
        } else {
            alert('Por favor, digite os 8 números do CEP.');
        }
    }
});