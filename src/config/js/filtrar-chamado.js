var campoFiltro = document.querySelector(".filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var chamados = document.querySelectorAll(".chamado");

    if (this.value.length > 0) {
        for (var i = 0; i < chamados.length; i++) {

            var chamado = chamados[i];
            var tdTitulo = chamado.querySelector(".titulo");
            var titulo = tdTitulo.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(titulo)) {
                chamado.classList.add("invisivel");
            } else {
                chamado.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < chamados.length; i++) {

            var chamado = chamados[i];
            chamado.classList.remove("invisivel");
            
        }
    }
});
