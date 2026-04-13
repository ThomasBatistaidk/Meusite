function alterarNome() {
    let trocarNome = document.getElementById(`inputName`).
    value;

    if (trocarNome === "") {
        alert (`Digite um Nome`)
    } else {
        document.getElementById(`nomeUsuario`).nnerHTML = trocarNome;
    }
}