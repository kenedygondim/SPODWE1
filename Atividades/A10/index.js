document.addEventListener('input', function (event) {
    const input = event.target;
    const masktype = input.dataset.mask;

    switch (masktype) {
        case 'cpf':
            replaceCPF(input)
            break;
        case 'telefone':
            replaceTelefone(input)
            break;
        case 'data':
            replaceData(input)
            break;
        case 'hora':
            replaceHora(input)
            break;
        case 'moeda':
            replaceMoeda(input)
            break;
        default:
            break;
    }
})

function replaceCPF(input) {
    let cpf = input.value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    input.value = cpf;
}

function replaceTelefone(input) {
    let telefone = input.value.replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
    input.value = telefone;
}

function replaceData(input) {
    let data = input.value.replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{4})\d+?$/, '$1')
    input.value = data
}

function replaceHora(input) {
    let hora = input.value.replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1:$2')
        .replace(/(:\d{2})\d+?$/, '$1')
    input.value = hora;
}

function replaceMoeda(input) {
    const cleanValue = +input.value.replace(/\D+/g, '')
    const options = { style: 'currency', currency: 'BRL' }
    let moeda = Intl.NumberFormat('pt-br', options).format(cleanValue / 100)
    input.value = moeda;
}

function validarTeclaNumerica(e) {
    const tecla = e.key;
    return /\d/.test(tecla);
}