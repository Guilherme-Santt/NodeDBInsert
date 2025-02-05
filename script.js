function checkNumber(n){
    const result = Number(n);
    if(Number.isNaN(result)){
        return false;
    }else{
        return true;
    }
};

const sweetAlert = (descricao) => {

    Swal.fire({
        icon: 'error',
        title: `${descricao}`,
        // text: 'Verifique os campos preenchidos',
        confirmButtonText: 'Fechar'})
};
const sweetAlertSucess = (descricao) => {

    Swal.fire({
        icon: 'success',
        title: `${descricao}`,
        // text: 'Verifique os campos preenchidos',
        confirmButtonText: 'Fechar'})
};

const botao = document.querySelector("#validar");
botao.addEventListener("click", function () {
const cpf = document.getElementById("cpf").value; // Captura o valor dentro do evento

    if (!cpf) {
        sweetAlert("Campo em branco")
        throw new Error("Campo em branco");
    }
    if (checkNumber(cpf)) { // Supondo que checkNumber retorne um booleano
        if(cpf.length != 11){
            sweetAlert("Deve conter 11 dígitos")
        } else{
            console.log("Tudo certo");
            sweetAlertSucess('Valor "${cpf}" está correto')
        }
    } else {
        console.log("Digite o valor correto");
        sweetAlert(`Valor "${cpf}" está errado`)  
    
    }
});
