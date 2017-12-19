/*
Botão Buscar:
------------
1. Limpar resultados e rodapé;
2. Executar o web service com página 1;
3. Montar o rodapé com a quantidade de páginas de acordo com a quantidade retornada e quantidade selecionada na tela;
4. Montar a página de resultados de acordo com a quantidade selecionada na tela.

Link Próximo:
------------
1.;

Link Anterior:
-------------
1.;


*/

function search() {
  var boletoListarResponse;

  // Limpa tabela de resultados e rodapé
  $('#results-table tbody').empty();
  $('#results-table tfoot').empty();
  executeWebService(1, boletoListarResponse);

  if(boletoListarResponse == null)
    return;

  // Monta o rodapé da tabela de resultados (quantidade de registros e paginador)
  setResultsFooter(boletoListarResponse);

  // Monta a tabela de resultados
  $.each(boletoListarResponse.boletos, function() {
    addResult(this);

  });

}

function executeWebService(pagina, boletoListarResponse) {}

function setResultsFooter(boletoListarResponse) {
  // Adiciona link Anterior
  $('#paginator').append('<li class="page-item disabled" data-link="true"><a class="page-link" href="#" tabindex="-1">Anterior</a></li>');

  // Adiciona as páginas no paginador

  var page = 1; // Página
  var j = 0; // Registros
  $.each(boletoListarResponse.boletos, function() {
    j++;
    if(j == resultsByPage) {
      page++;
      j = 0;

    }

  });

  for(var i = 0; i < page; i++)
    $('#paginator').append('<li class="page-item" data-page="' + i + '"><a class="page-link" href="#" onclick="toPage(' + i + ')">' + i + '</a></li>');

  if(boletoListarResponse.total_de_paginas == 1)
    $('#paginator').append('<li class="page-item disabled" data-link="true" id="next-link"><a class="page-link" href="#" onclick="next(' + page + ')">Próximo</a></li><li class="page-item" data-link="true"><a class="page-link" href="#">Gerar boletos</a></li>');

  else
    $('#paginator').append('<li class="page-item" data-link="true" id="next-link"><a class="page-link" id="next-link" href="#" onclick="next(' + page + ')">Próximo</a></li><li class="page-item" data-link="true"><a class="page-link" href="#">Gerar boletos</a></li>');

}

function addResult(boleto) {
  var resultsByPage = $('select[class="custom-select"]').val();
  if(resultsByPage != 5 || resultsByPage != 20 || resultsByPage != 50)
    resultsByPage = 5;

  var page = 1; // Página
  var j = 0; // Registros
  $.each($('#results-table tbody tr'), function() {
    j++;
    if(j == resultsByPage) {
      page++;
      j = 0;

    }

  });

  $('#results-table tbody').append('<tr data-page="' + page + '">' +
                                   '<th scope="row" style="width: 10%;">' +
                                   '<label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">' +
                                   '<input type="checkbox" class="custom-control-input"/>' +
                                   '<span class="custom-control-indicator"></span>' +
                                   '</label>' +
                                   '<input type="hidden" value="' + boleto + '"/>' +
                                   '</th>' +
                                   '<td style="width: 10%;"><a href="#" data-toggle="modal" data-target="#boleto-modal">'+ boleto.cNumero + '</a></td>' +
                                   '<td style="width: 50%;">' + boleto.DadosPagador.cNome + '</td>' +
                                   '<td style="width: 15%;">' + boleto.dDataDoc + '</td>' +
                                   '<td style="width: 15%;">' + boleto.nValorDoc + '</td>' +
                                   '</tr>');

}
