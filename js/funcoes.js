function CalcularMedia (n1, n2)
{
	n1 = parseFloat(n1.replace(",","."));
	n2 = parseFloat(n2.replace(",","."));
	return (n1 + n2) / 2; 
}

function VerificaSituacao (notaFinal, notaAprovacao, linha)
{
	var local = linha.querySelector(".info-situacao")
	if(notaFinal >= notaAprovacao)
	{
		local.textContent = "Aprovado(a)"
		linha.classList.add("aprovado")
	}
	else 
	{
		local.textContent = "Reprovado(a)"
		linha.classList.add("reprovado")
	}
}

function FormartarNotaExibicao(nota)
{
	return comVirgula(nota.toFixed(1));
}

function comVirgula(nota)
{
	return nota.toString().replace(".",",");
}


function linhasBrancas()
{
    var aluno = document.querySelectorAll(".aluno");

    for (var indice=0; indice < aluno.length; indice++)
    {
		aluno[indice].classList.remove("linhaImpar");
    }

    colorirLinhas();
}



function colorirLinhas()
{
	var aluno = document.querySelectorAll(".aluno");

	for (var indice=0; indice < aluno.length; indice++)
	{
		if((indice+1) % 2 != 0)
		{
			aluno[indice].classList.add("linhaImpar");
		}
	}
}


function denifinirEventApagar(event)
{
	event.addEventListener('click', apagarLinha);
}

function apagarLinha(apagar)
{
	this.parentNode.parentNode.remove();
	linhasBrancas();
}


