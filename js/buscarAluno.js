var barraBuscar = document.querySelector("#txtFiltro");
var botaoBuscar = document.querySelector("#btnBuscar");

//botaoBuscar.addEventListener('click', buscar);
barraBuscar.addEventListener('input', buscar);

function buscar (event)
{
    event.preventDefault();
 
    var pegarLetrasBarra = txtFiltro.value.toUpperCase();
    var quantidadeLetrasBarra = pegarLetrasBarra.length;

    var alunos = document.querySelectorAll(".info-nome");

    for (var indice=0; indice < alunos.length; indice++)
    {
        var nomesAlunos = alunos[indice].textContent;
        nomesAlunos = nomesAlunos.substring(0, quantidadeLetrasBarra).toUpperCase();

        if (nomesAlunos != pegarLetrasBarra)
        {
            alunos[indice].parentNode.classList.add("escondido");
        }
        else
        {
            alunos[indice].parentNode.classList.remove("escondido");
        }
    }
}




