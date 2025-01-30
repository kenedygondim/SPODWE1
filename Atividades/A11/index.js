// Evento para verificar validade do CEP
document.getElementById('cep').addEventListener('blur', async () => {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
            alert('CEP não encontrado.');
            return
        }   
        document.getElementById('uf').value = data.uf;
        document.getElementById('municipio').value = data.localidade;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('uf').disabled = true;
        document.getElementById('municipio').disabled = true;
        document.getElementById('bairro').disabled = true;
        document.getElementById('logradouro').disabled = true;

    } catch (error) {
        alert('Erro ao buscar o CEP. ');
    }
});