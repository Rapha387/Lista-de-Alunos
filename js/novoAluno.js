var botaoNovo = document.querySelector("#btnNovo");
var botaoCancelar = document.querySelector("#btnCancelar")
var botaoAdicionar = document.querySelector("#btnAdicionar");
var telaBloqueio = document.querySelector(".bloqueio");
var telaFormulario = document.querySelector("#pnlNovo");
var formulario = document.querySelector("#frmNovo");
var tabela = document.querySelector("#tblAlunos");
var msg = document.querySelector("#msg");

botaoNovo.addEventListener('click', exibirTelaNovoALuno);
botaoCancelar.addEventListener('click', cancelarNovoAluno);
botaoAdicionar.addEventListener('click', adicionarNovoAluno);

function exibirTelaNovoALuno(event)
{
	event.preventDefault();
	telaBloqueio.classList.remove("escondido");
	telaFormulario.classList.remove("escondido");
}


function cancelarNovoAluno(event)
{
	event.preventDefault();
	fecharFormulario();
}

function fecharFormulario()
{
	formulario.txtNome.value="";	
	formulario.txtRM.value="";
	formulario.txtNota1.value="";
	formulario.txtNota2.value="";
	msg.textContent = "";
	telaBloqueio.classList.add("escondido");
	telaFormulario.classList.add("escondido");
}


function adicionarNovoAluno(event)
{
	event.preventDefault();
	var rm = formulario.txtRM.value;
	var nome = formulario.txtNome.value;
	var nota1 = formulario.txtNota1.value;
	var nota2 = formulario.txtNota2.value;

	if (rm == "")
	{
		msg.textContent = "RM inválido";
		return;
	}
	if (nome == "")
	{
		msg.textContent = "Nome inválido";
		return;
	}
	if (nota1 == "")
	{
		msg.textContent = "Nota 1 não pode ser em branco";
		return;
	}
	nota1 = parseFloat(nota1);
	if (nota1 <0 ||	nota1 >10)
	{
		msg.textContent = "Nota 1 deve ser entre 0 e 10";
		return;
	}
	if (nota2 == "")
	{
		msg.textContent = "Nota 2 não pode ser em branco";
		return;	
	}
	nota2 = parseFloat(nota2);
	if (nota2 <0 ||	nota2 >10)
	{
		msg.textContent = "Nota 2 deve ser entre 0 e 10";
		return;
	}

	msg.textContent = "";

	var mediaNovoAluno = CalcularMedia(comVirgula(nota1), comVirgula(nota2));

	var novaLinha = document.createElement("tr");
	novaLinha.classList.add("aluno")

	var celulaRM = document.createElement("td");
	celulaRM.classList.add("info-rm");
	celulaRM.textContent = rm;
	
	var celulaNome = document.createElement("td");
	celulaNome.classList.add("info-nome");
	celulaNome.textContent = nome.toUpperCase();

	var celulaN1 = document.createElement("td");
	celulaN1.classList.add("info-prova1");
	celulaN1.textContent = FormartarNotaExibicao(nota1);
 
	var celulaN2 = document.createElement("td");
	celulaN2.classList.add("info-prova2");
	celulaN2.textContent = FormartarNotaExibicao(nota2);

	var celulaMedia = document.createElement("td");
	celulaMedia.classList.add("info-media");
	celulaMedia.textContent = FormartarNotaExibicao(mediaNovoAluno);

	var celulaSituacao = document.createElement("td");
	celulaSituacao.classList.add("info-situacao");

	var celulaExcluir = document.createElement("td");
	celulaExcluir.classList.add("excluirAluno");
	var celulaImgX = document.createElement("img");
	celulaImgX.classList.add("imgX")
	celulaImgX.src = "images/X.png"


	novaLinha.appendChild(celulaRM);
	novaLinha.appendChild(celulaNome);
	novaLinha.appendChild(celulaN1);
	novaLinha.appendChild(celulaN2);
	novaLinha.appendChild(celulaMedia);
	novaLinha.appendChild(celulaSituacao);
	celulaExcluir.appendChild(celulaImgX);
	novaLinha.appendChild(celulaExcluir);

	denifinirEventApagar(celulaImgX);
	

	VerificaSituacao(mediaNovoAluno, 5, novaLinha);
	

	tabela.appendChild(novaLinha);

	colorirLinhas();

	fecharFormulario();
}