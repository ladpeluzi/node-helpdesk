var botaoAdicionar = document.querySelector("#adicionarChamado");

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    alert('vaiiiiii');
    
    var form = document.querySelector("#form-adicionaChamado");
    var chamado = obtemPacienteDoFormulario(form);
    // var erros = validaPaciente(paciente);

    // if (erros.length > 0) {
    //     exibeMensagensDeErro(erros);

    //     return;
    // }

    // adicionaPacienteNaTabela(paciente);

    // form.reset();

    // var mensagensErro = document.querySelector("#mensagens-erro");
    // mensagensErro.innerHTML = "";

});
