


function checkNumber(n){
    const result = Number(n);
    if(Number.isNaN(result)){
        return false;
    }else{
        return true;
    }
};

const botao = document.querySelector("#validar");

botao.addEventListener("click", function () {
    const cpf = document.getElementById("cpf").value; // Captura o valor dentro do evento

    if (!cpf) {
        throw new Error("Campo em branco");
        console.log("Campo em branco");
        console.log("Digite o valor correto");
        Swal.fire({
            icon: 'error',
            title: `Valor em branco`,
            // text: 'Verifique os campos preenchidos',
            confirmButtonText: 'Fechar'
        });
        return;
    }
    
    if (checkNumber(cpf)) { // Supondo que checkNumber retorne um booleano
        if(cpf.length != 11){
            console.log("Tudo certo");
            Swal.fire({
                icon: 'error',
                title: `Deve conter 11 dígitos`,
                text: 'teste',
                confirmButtonText: 'fechar'
            });
        } else{
            console.log("Tudo certo");
            Swal.fire({
                icon: 'success',
                title: `Valor "${cpf}" está correto`,
                // text: '',
                confirmButtonText: 'fechar'
            });
        }

    } else {
        console.log("Digite o valor correto");
        Swal.fire({
            icon: 'error',
            title: `Valor "${cpf}" está errado`,
            // text: 'Verifique os campos preenchidos',
            confirmButtonText: 'Fechar'
        });
    
    }
});
