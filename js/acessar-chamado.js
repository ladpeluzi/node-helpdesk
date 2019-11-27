var pacientes = document.querySelectorAll(".chamado");

var tabela = document.querySelector("#tabela-chamados");

tabela.addEventListener("dblclick", function(event) {
    chamado = event.target.parentNode.id;
    window.open("index.html?id="+chamado, '_self'); 


    // setTimeout(function() {
    //     event.target.parentNode.remove();
    // }, 500);

});
