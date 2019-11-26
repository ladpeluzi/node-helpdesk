// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/chamados$1.0.0/src/app/views/chamados/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html><meta charset=\"utf-8\"><head><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"><script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js\"></script><script src=\"js/validaChamado.js\"></script><link type=\"text/css\" rel=\"stylesheet\" href=\"./css/materialize.min.css\" media=\"screen,projection\"><link type=\"text/css\" rel=\"stylesheet\" href=\"./css/materialize.css\" media=\"screen,projection\"><link type=\"text/css\" rel=\"stylesheet\" href=\"./css/smiticket.css\" media=\"screen,projection\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"></head><body>");

  component_globals_tag({}, out);

  out.w("<nav><div class=\"nav-wrapper\"><a href=\"#!\" class=\"brand-logo mleft10\"><img src=\"../../images/smi_logo.png\"></a><a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a><ul class=\"right hide-on-med-and-down\"><li><a href=\"principal.html\">Principal</a></li><li><a href=\"estatisticas.html\">Estatisticas</a></li><li><a href=\"configuracoes.html\">Configurações</a></li><li><a href=\"sair.html\">Sair</a></li></ul></div></nav><ul class=\"sidenav\" id=\"mobile-demo\"><li><a href=\"principal.html\">Principal</a></li><li><a href=\"estatisticas.html\">Estatisticas</a></li><li><a href=\"configuracoes.html\">Configurações</a></li><li><a href=\"sair.html\">Sair</a></li></ul><div class=\"clear-15\"></div><div class=\"clear-15\"></div><a class=\"waves-effect waves-light btn-small black mright10 right modal-trigger\" href=\"#abrirChamado\"><i class=\"material-icons left\">add</i>Abrir Chamado</a><div class=\"clear-10\"></div><div class=\"clear-10\"></div><div class=\"row\"><table id=\"tabela-chamados\" class=\"striped col m10 offset-m1\"><thead><tr class=\"chamado\"><th>Data / Hora</th><th>Título</th><th>Responsável</th><th>Status</th><th>Prioridade</th></tr></thead><tbody>");

  var for__51 = 0;

  marko_forEach(data.chamados, function(chamado) {
    var keyscope__52 = "[" + ((for__51++) + "]");

    out.w("<tr><td>" +
      marko_escapeXml(chamado.data_abertura) +
      "</td><td>" +
      marko_escapeXml(chamado.titulo) +
      "</td><td>" +
      marko_escapeXml(chamado.responsavel) +
      "</td><td>" +
      marko_escapeXml(chamado.status) +
      "</td><td>" +
      marko_escapeXml(chamado.prioridade) +
      "</td></tr>");
  });

  out.w("</tbody></table></div><div id=\"abrirChamado\" class=\"modal\"><div class=\"modal-content\"><h4>Abrir Chamado</h4><div class=\"row\"><form class=\"col s12\"><div class=\"row\"><div class=\"input-field col s12 l6\"><i class=\"material-icons prefix\">title</i><input id=\"icon_prefix\" type=\"text\" name=\"titulo\"><label for=\"icon_prefix\">Digite o títudo do chamado</label></div><div class=\"input-field col s12 l6\"><i class=\"material-icons prefix\">group</i><select><option value=\"\" disabled selected>Selecione o departamento</option><option value=\"eFactory\">E. Factory</option><option value=\"processVault\">Process Vault</option><option value=\"creativeLab\">Creative Lab</option><option value=\"thePowerhouse\">The Powerhouse</option></select><label>Departamento</label></div></div><div class=\"row\"><div class=\"input-field col s12 l6\"><i class=\"material-icons prefix\">low_priority</i><select><option value=\"\" disabled selected>Selecione a prioridade</option><option value=\"1\">Baixa</option><option value=\"2\">Média</option><option value=\"3\">Alta</option></select><label>Prioridade</label></div><div class=\"input-field col s12 l6\"><i class=\"material-icons prefix\">widgets</i><select><option value=\"\" disabled selected>Selecione a categoria</option><option value=\"1\">Email</option><option value=\"2\">Europcaragents</option><option value=\"3\">Aenpro</option></select><label>Categoria</label></div></div><div class=\"row\"><div class=\"input-field col s12\"><textarea id=\"textarea2\" class=\"materialize-textarea\" data-length=\"1200\"></textarea><label for=\"textarea2\">Descrição do chamado</label></div></div><div class=\"file-field input-field\"><div class=\"waves-effect waves-light btn-small black\"><span>Arquivo(s)</span><input type=\"file\" multiple></div><div class=\"file-path-wrapper\"><input class=\"file-path validate\" type=\"text\" placeholder=\"Anexar aquivos\"></div></div></form></div></div><div class=\"modal-footer mright15\"><button id=\"adicionarChamado\" class=\"waves-effect waves-light btn-small black right modal-trigger\" href=\"#\">Abrir</button></div></div><script type=\"text/javascript\" src=\"js/materialize.min.js\"></script><script type=\"text/javascript\">\r\n        document.addEventListener('DOMContentLoaded', function() {\r\n            var elemsSidenav = document.querySelectorAll('.sidenav');\r\n            var instances = M.Sidenav.init(elemsSidenav, {});\r\n            var elemsModal = document.querySelectorAll('.modal');\r\n            var instances = M.Modal.init(elemsModal, {});\r\n            var elemsSelect = document.querySelectorAll('select');\r\n            var instances = M.FormSelect.init(elemsSelect, {});\r\n            $('input#input_text, textarea#textarea2').characterCounter();\r\n            // adicionar chamado\r\n            var botaoAdicionarChamado = document.querySelector('#adicionarChamado');\r\n\r\n            botaoAdicionarChamado.addEventListener(\"click\", function() {\r\n                validaChamado();\r\n            });\r\n\r\n        });\r\n    </script><script src=\"./js/acessar-chamado.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "110");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/chamados$1.0.0/src/app/views/chamados/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };