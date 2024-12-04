const nomeInserido = []
let linhas = ''

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()

    const inputName = document.getElementById('name')
    const inputTel = document.querySelector('input#phone')
    const nome = inputName.value.trim()
    const telefone = inputTel.value.trim()
    const erroNome = document.getElementById('erroNome')
    const erroTel = document.getElementById('erroTel')
    const tabela = document.querySelector('tbody')

    if (!/^[\p{L}\s]+$/u.test(nome)) {
        inputName.style.marginBottom = '5px'
        inputTel.style.marginTop = '10px'
        erroNome.innerHTML = `Verifique se o nome foi inserido corretamente.`
        return
    }
    erroNome.innerHTML = ''
    inputName.style.marginBottom = '20px'
    inputTel.style.marginTop = '0px'

    if (!/^\d+$/.test(telefone)) {
        inputTel.style.marginBottom = '5px'
        erroTel.innerHTML = 'Digite apenas números para o telefone.'
        return
    }
    erroTel.innerHTML = ''

    if (telefone.length !== 10 && telefone.length !== 11) {
        inputTel.style.marginBottom = '5px'
        erroTel.innerHTML = 'Digite um número válido com seu DDD (apenas números).'
        return
    }
    erroTel.innerHTML = ''

    const telefoneFormatado = telefone.length === 10 
    ? `(${telefone.substring(0, 2)}) ${telefone.substring(2, 6)}-${telefone.substring(6)}` 
    : `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7)}`

    if (nomeInserido.includes(nome)) {
        alert(`O nome "${nome}" já foi inserido.`)
    } else {
        nomeInserido.push(nome)
        
        let linha = '<tr>'
        linha += `<td>${nome}</td>`
        linha += `<td>${telefoneFormatado}</td>`
        linha += '<tr>'

        linhas += linha
        tabela.innerHTML = linhas
    }
    
    inputName.value = ''
    inputTel.value = ''
})
