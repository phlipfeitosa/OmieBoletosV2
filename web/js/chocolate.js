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

var resultsByPage;

$('#buscar').click(function() {
  search();

});

function search() {
//  var boletoListarResponse;

  // Grava quantidade de resultados por página
  resultsByPage = $('select[class="custom-select"]').val();
  resultsByPage = 5;

  // Limpa tabela de resultados e rodapé
  $('#results-table tbody').empty();
  $('#results-table tfoot #paginator').empty();
  executeWebService(1, boletoListarResponse);

  if (boletoListarResponse == null)
    return;

  // Monta o rodapé da tabela de resultados (quantidade de registros e paginador)
  setResultsFooter(boletoListarResponse);

  // Monta a tabela de resultados
  $.each(boletoListarResponse.boletos, function() {
    addResult(boletoListarResponse.pagina, this);

  });

  toPage(1);

}

function executeWebService(pagina, boletoListarResponse) {

}

function setResultsFooter(boletoListarResponse) {
  // Adiciona link Anterior
  $('#paginator').append('<li class="page-item disabled" data-link="true"><a class="page-link" href="#" tabindex="-1">Anterior</a></li>');

  // Adiciona as páginas no paginador
  var j; // Registros
  for (var i = 0; i < boletoListarResponse.total_de_paginas; i++) {
    j = i + 1;
    $('#paginator').append('<li class="page-item" data-result-page="' + boletoListarResponse.pagina + '" data-page="' + j + '"><a class="page-link" href="#" onclick="toPage(' + j + ')">' + j + '</a></li>');

  }

  if (boletoListarResponse.total_de_paginas == 1)
    $('#paginator').append('<li class="page-item disabled" data-link="true" id="next-link"><a class="page-link" href="#">Próximo</a></li><li class="page-item" data-link="true"><a class="page-link" href="#">Gerar boletos</a></li>');

  else
    $('#paginator').append('<li class="page-item" data-link="true" id="next-link"><a class="page-link" id="next-link" href="#">Próximo</a></li><li class="page-item" data-link="true"><a class="page-link" href="#">Gerar boletos</a></li>');

}

function addResult(pagina, boleto) {
  if (resultsByPage != 5 || resultsByPage != 20 || resultsByPage != 50)
    resultsByPage = 5;

  var page = 1; // Página
  var j = 0; // Registros
  $.each($('#results-table tbody tr'), function() {
    j++;
    if (j == resultsByPage) {
      page++;
      j = 0;

    }

  });

  $('#results-table tbody').append('<tr data-result-page="' + pagina + '" data-page="' + page + '">' +
    '<th scope="row" style="width: 10%;">' +
    '<label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">' +
    '<input type="checkbox" class="custom-control-input"/>' +
    '<span class="custom-control-indicator"></span>' +
    '</label>' +
    '<input type="hidden" value="' + boleto + '"/>' +
    '</th>' +
    '<td style="width: 10%;"><a href="#" data-toggle="modal" data-target="#boleto-modal">' + boleto.cNumero + '</a></td>' +
    '<td style="width: 50%;">' + boleto.DadosPagador.cNome + '</td>' +
    '<td style="width: 15%;">' + boleto.dDataDoc + '</td>' +
    '<td style="width: 15%;">' + boleto.nValorDoc + '</td>' +
    '</tr>');

}

function toPage(page) {
  // Exibe somente a página
  $.each($('#results-table tbody tr'), function() {
    if($(this).data('page') == page)
      $(this).show();

    else
      $(this).hide();

  });

  $.each($('#paginator li'), function() {
    if($(this).data('result-page') == page)
      $(this).show();

    else
      $(this).hide();

  });

}

function next(page) {
  var toPage = page + resultsByPage;
  var exist = false;

  $.each($('#results-table tbody tr'), function() {
    if($(this).data('page') == page)
      exist = true;

  });



}


































var boletoListarResponse =
{
	"pagina": 1,
	"total_de_paginas": 43,
	"registros": 20,
	"total_de_registros": 860,
	"boletos": [
	{
		"DadosPagador": {
			"cBairro": "CAMPO GRANDE",
			"cCEP": "23059001",
			"cCNPJ": "",
			"cCPF": "54178452720",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "BL 4 AP 202",
			"cEndereco": "AV. CESÁRIO DE MELO",
			"cEstado": "RJ",
			"cNome": "ROBERTO DA SILVA",
			"cNumero": "7800"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01000.601011 7 73130000059000",
		"cNossoNumero": "0000000010006",
		"cNumero": "1000",
		"cObservacoes": "Nota Fiscal LT 133,  parcela 005/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/10/2017",
		"nCodTitulo": 910240141,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "CAMPO GRANDE",
			"cCEP": "23059001",
			"cCNPJ": "",
			"cCPF": "54178452720",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "BL 4 AP 202",
			"cEndereco": "AV. CESÁRIO DE MELO",
			"cEstado": "RJ",
			"cNome": "ROBERTO DA SILVA",
			"cNumero": "7800"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01001.401015 1 73440000059000",
		"cNossoNumero": "0000000010014",
		"cNumero": "1001",
		"cObservacoes": "Nota Fiscal LT 133,  parcela 006/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/11/2017",
		"nCodTitulo": 910240143,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "CAMPO GRANDE",
			"cCEP": "23059001",
			"cCNPJ": "",
			"cCPF": "54178452720",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "BL 4 AP 202",
			"cEndereco": "AV. CESÁRIO DE MELO",
			"cEstado": "RJ",
			"cNome": "ROBERTO DA SILVA",
			"cNumero": "7800"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01002.201018 9 73740000059000",
		"cNossoNumero": "0000000010022",
		"cNumero": "1002",
		"cObservacoes": "Nota Fiscal LT 133,  parcela 007/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/12/2017",
		"nCodTitulo": 910240145,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "CAMPO GRANDE",
			"cCEP": "23059001",
			"cCNPJ": "",
			"cCPF": "54178452720",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "BL 4 AP 202",
			"cEndereco": "AV. CESÁRIO DE MELO",
			"cEstado": "RJ",
			"cNome": "ROBERTO DA SILVA",
			"cNumero": "7800"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01003.001011 1 74050000059000",
		"cNossoNumero": "0000000010030",
		"cNumero": "1003",
		"cObservacoes": "Nota Fiscal LT 133,  parcela 008/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/01/2018",
		"nCodTitulo": 910240148,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "CAMPO GRANDE",
			"cCEP": "23059001",
			"cCNPJ": "",
			"cCPF": "54178452720",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "BL 4 AP 202",
			"cEndereco": "AV. CESÁRIO DE MELO",
			"cEstado": "RJ",
			"cNome": "ROBERTO DA SILVA",
			"cNumero": "7800"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01004.901011 4 74360000059000",
		"cNossoNumero": "0000000010049",
		"cNumero": "1004",
		"cObservacoes": "Nota Fiscal LT 133,  parcela 009/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/02/2018",
		"nCodTitulo": 910240150,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "CAMPO GRANDE",
			"cCEP": "23059001",
			"cCNPJ": "",
			"cCPF": "54178452720",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "BL 4 AP 202",
			"cEndereco": "AV. CESÁRIO DE MELO",
			"cEstado": "RJ",
			"cNome": "ROBERTO DA SILVA",
			"cNumero": "7800"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01005.701014 1 74640000059000",
		"cNossoNumero": "0000000010057",
		"cNumero": "1005",
		"cObservacoes": "Nota Fiscal LT 133,  parcela 010/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/03/2018",
		"nCodTitulo": 910240152,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "CAMPO GRANDE",
			"cCEP": "23059001",
			"cCNPJ": "",
			"cCPF": "54178452720",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "BL 4 AP 202",
			"cEndereco": "AV. CESÁRIO DE MELO",
			"cEstado": "RJ",
			"cNome": "ROBERTO DA SILVA",
			"cNumero": "7800"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01006.501017 5 74950000059000",
		"cNossoNumero": "0000000010065",
		"cNumero": "1006",
		"cObservacoes": "Nota Fiscal LT 133,  parcela 011/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/04/2018",
		"nCodTitulo": 910240154,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "CAMPO GRANDE",
			"cCEP": "23059001",
			"cCNPJ": "",
			"cCPF": "54178452720",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "BL 4 AP 202",
			"cEndereco": "AV. CESÁRIO DE MELO",
			"cEstado": "RJ",
			"cNome": "ROBERTO DA SILVA",
			"cNumero": "7800"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01007.301011 1 75250000059000",
		"cNossoNumero": "0000000010073",
		"cNumero": "1007",
		"cObservacoes": "Nota Fiscal LT 133,  parcela 012/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/05/2018",
		"nCodTitulo": 910240156,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Santa Cruz",
			"cCEP": "23575150",
			"cCNPJ": "",
			"cCPF": "97931870344",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "QD 12",
			"cEndereco": "Rua Ituiutaba",
			"cEstado": "RJ",
			"cNome": "ROSAMARA DOMINGUES",
			"cNumero": "LT 20"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01013.801012 9 73440000059000",
		"cNossoNumero": "0000000010138",
		"cNumero": "1013",
		"cObservacoes": "Nota Fiscal LT 190,  parcela 006/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/11/2017",
		"nCodTitulo": 910240593,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Santa Cruz",
			"cCEP": "23575150",
			"cCNPJ": "",
			"cCPF": "97931870344",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "QD 12",
			"cEndereco": "Rua Ituiutaba",
			"cEstado": "RJ",
			"cNome": "ROSAMARA DOMINGUES",
			"cNumero": "LT 20"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01014.601015 7 73740000059000",
		"cNossoNumero": "0000000010146",
		"cNumero": "1014",
		"cObservacoes": "Nota Fiscal LT 190,  parcela 007/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/12/2017",
		"nCodTitulo": 910240595,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Santa Cruz",
			"cCEP": "23575150",
			"cCNPJ": "",
			"cCPF": "97931870344",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "QD 12",
			"cEndereco": "Rua Ituiutaba",
			"cEstado": "RJ",
			"cNome": "ROSAMARA DOMINGUES",
			"cNumero": "LT 20"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01015.401019 9 74050000059000",
		"cNossoNumero": "0000000010154",
		"cNumero": "1015",
		"cObservacoes": "Nota Fiscal LT 190,  parcela 008/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/01/2018",
		"nCodTitulo": 910240597,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Santa Cruz",
			"cCEP": "23575150",
			"cCNPJ": "",
			"cCPF": "97931870344",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "QD 12",
			"cEndereco": "Rua Ituiutaba",
			"cEstado": "RJ",
			"cNome": "ROSAMARA DOMINGUES",
			"cNumero": "LT 20"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01016.201012 2 74360000059000",
		"cNossoNumero": "0000000010162",
		"cNumero": "1016",
		"cObservacoes": "Nota Fiscal LT 190,  parcela 009/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/02/2018",
		"nCodTitulo": 910240599,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Santa Cruz",
			"cCEP": "23575150",
			"cCNPJ": "",
			"cCPF": "97931870344",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "QD 12",
			"cEndereco": "Rua Ituiutaba",
			"cEstado": "RJ",
			"cNome": "ROSAMARA DOMINGUES",
			"cNumero": "LT 20"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01017.001015 1 74640000059000",
		"cNossoNumero": "0000000010170",
		"cNumero": "1017",
		"cObservacoes": "Nota Fiscal LT 190,  parcela 010/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/03/2018",
		"nCodTitulo": 910240601,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Santa Cruz",
			"cCEP": "23575150",
			"cCNPJ": "",
			"cCPF": "97931870344",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "QD 12",
			"cEndereco": "Rua Ituiutaba",
			"cEstado": "RJ",
			"cNome": "ROSAMARA DOMINGUES",
			"cNumero": "LT 20"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01018.901015 3 74950000059000",
		"cNossoNumero": "0000000010189",
		"cNumero": "1018",
		"cObservacoes": "Nota Fiscal LT 190,  parcela 011/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/04/2018",
		"nCodTitulo": 910240603,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Santa Cruz",
			"cCEP": "23575150",
			"cCNPJ": "",
			"cCPF": "97931870344",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "QD 12",
			"cEndereco": "Rua Ituiutaba",
			"cEstado": "RJ",
			"cNome": "ROSAMARA DOMINGUES",
			"cNumero": "LT 20"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01019.701018 1 75250000059000",
		"cNossoNumero": "0000000010197",
		"cNumero": "1019",
		"cObservacoes": "Nota Fiscal LT 190,  parcela 012/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/05/2018",
		"nCodTitulo": 910240605,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Paciência",
			"cCEP": "23573260",
			"cCNPJ": "",
			"cCPF": "15809255701",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "CA 1",
			"cEndereco": "Rua Zizinha Pereira",
			"cEstado": "RJ",
			"cNome": "TAMINE LIMA DE SOUZA",
			"cNumero": "41"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01026.001014 1 73740000059000",
		"cNossoNumero": "0000000010260",
		"cNumero": "1026",
		"cObservacoes": "Nota Fiscal LT 244,  parcela 007/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/12/2017",
		"nCodTitulo": 910240908,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Paciência",
			"cCEP": "23573260",
			"cCNPJ": "",
			"cCPF": "15809255701",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "CA 1",
			"cEndereco": "Rua Zizinha Pereira",
			"cEstado": "RJ",
			"cNome": "TAMINE LIMA DE SOUZA",
			"cNumero": "41"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01027.801016 7 74050000059000",
		"cNossoNumero": "0000000010278",
		"cNumero": "1027",
		"cObservacoes": "Nota Fiscal LT 244,  parcela 008/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/01/2018",
		"nCodTitulo": 910240910,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Paciência",
			"cCEP": "23573260",
			"cCNPJ": "",
			"cCPF": "15809255701",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "CA 1",
			"cEndereco": "Rua Zizinha Pereira",
			"cEstado": "RJ",
			"cNome": "TAMINE LIMA DE SOUZA",
			"cNumero": "41"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01028.601019 1 74360000059000",
		"cNossoNumero": "0000000010286",
		"cNumero": "1028",
		"cObservacoes": "Nota Fiscal LT 244,  parcela 009/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/02/2018",
		"nCodTitulo": 910240912,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Paciência",
			"cCEP": "23573260",
			"cCNPJ": "",
			"cCPF": "15809255701",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "CA 1",
			"cEndereco": "Rua Zizinha Pereira",
			"cEstado": "RJ",
			"cNome": "TAMINE LIMA DE SOUZA",
			"cNumero": "41"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 01029.401013 8 74640000059000",
		"cNossoNumero": "0000000010294",
		"cNumero": "1029",
		"cObservacoes": "Nota Fiscal LT 244,  parcela 010/060.",
		"dDataDoc": "11/06/2017",
		"dDataVenc": "15/03/2018",
		"nCodTitulo": 910240914,
		"nValorDoc": 590
	},
	{
		"DadosPagador": {
			"cBairro": "Santa Cruz",
			"cCEP": "23570392",
			"cCNPJ": "",
			"cCPF": "03441757742",
			"cCidade": "Rio de Janeiro",
			"cComplemento": "A",
			"cEndereco": "Rua Rubem Medina",
			"cEstado": "RJ",
			"cNome": "EDSON DE LIMA FILHO",
			"cNumero": "3"
		},
		"cAgencia": "3350-2",
		"cBanco": "033",
		"cBeneficiario": "TERRA NOVA DE BANGU EMPREENDIMENTOS LTDA - ME",
		"cCodIntTitulo": "",
		"cContaCorrente": "13003469-9",
		"cInstrucoes": "- Sr. Caixa, receber até 10 dias após o vencimento.",
		"cLinhaDig": "03399.81805 03200.000002 00103.101010 1 72830000053941",
		"cNossoNumero": "0000000001031",
		"cNumero": "103",
		"cObservacoes": "Nota Fiscal LT 174,  parcela 012/100.",
		"dDataDoc": "27/01/2017",
		"dDataVenc": "15/09/2017",
		"nCodTitulo": 515211761,
		"nValorDoc": 539.41
	}
	]
};
