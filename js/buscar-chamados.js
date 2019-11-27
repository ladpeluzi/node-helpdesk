function montaTr(chamado) {
    var pacienteTr = document.createElement("tr");
    chamadoTr.classList.add("chamado");

    chamadoTr.appendChild(montaTd(chamado.nome, "info-nome"));
    chamadoTr.appendChild(montaTd(chamado.peso, "info-peso"));
    chamadoTr.appendChild(montaTd(chamado.altura, "info-altura"));
    chamadoTr.appendChild(montaTd(chamado.gordura, "info-gordura"));
    chamadoTr.appendChild(montaTd(chamado.imc, "info-imc"));

    return chamadoTr;
}

function adicionaChamadoNaTabela(chamado) {
    var chamadoTr = montaTr(chamado);
    var tabela = document.querySelector("#tabela-chamados");
    tabela.appendChild(chamadoTr);
}


var botaoAdicionar = document.querySelector("#buscar-chamados");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "chamados.html");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var chamados = JSON.parse(resposta);

            chamados.forEach(function(chamado) {
                adicionaChamadoNaTabela(chamado);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
