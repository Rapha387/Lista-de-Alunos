var aluno = document.querySelectorAll(".aluno");

for (var indice=0; indice < aluno.length; indice++)
{
	var nota_01 = aluno[indice].querySelector(".info-prova1");
	var nota_02 = aluno[indice].querySelector(".info-prova2");

	var media_aluno = CalcularMedia(nota_01.textContent, nota_02.textContent);

	var media = aluno[indice].querySelector(".info-media");
	media.textContent = FormartarNotaExibicao(media_aluno);
	var localSituacao = aluno[indice].querySelector(".info-situacao");

    VerificaSituacao(media_aluno, 5, aluno[indice]);

	var imgX = aluno[indice].querySelector(".imgX");
	
	denifinirEventApagar(imgX);
}

colorirLinhas();