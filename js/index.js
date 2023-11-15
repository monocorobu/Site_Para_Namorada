const containerPrincipal = document.getElementById("containerInicio");
const containerText = document.getElementById("containerText");
const text = document.getElementById("text");
const title = document.getElementById("title");

//botoes
const btnComparacao = document.getElementById("btnComparacao");
const btnPoema = document.getElementById("btnPoema");
const btnElogio = document.getElementById("btnElogio");

function voltar() {
  containerPrincipal.style.top = "0%";
  containerText.style.opacity = "0";
}

// pega um texto de comparação

btnComparacao.addEventListener("click", async function () {
  try {
    const response = await fetch("./JSON/comparacao.json");
    const data = await response.json();

    /* const comparacao = await buscarComparacao(); */

    // Gere um número aleatório
    const indexAleatorio = Math.floor(Math.random() * data.comparacoes.length);

    // Pega o poema aleatório
    const comparacaoAleatorio = data.comparacoes[indexAleatorio].texto;
    text.innerHTML = comparacaoAleatorio;
    text.classList.remove('poema')

    // Move o container inicio para fora da visão
    containerPrincipal.style.top = "1000%";
    containerText.style.opacity = "1";

    //move o container texto para a visão

    title.innerHTML = `<i class="fa-solid fa-arrow-left" onclick=" voltar()" style="color: #ffb703"></i> Eu Te Amo  `;
  } catch (error) {
    console.error("Erro ao buscar o texto:", error);
  }
});

//pega um texto poema
btnPoema.addEventListener("click", async function () {
  try {
    const response = await fetch("./JSON/poemas.json");
    const data = await response.json();

    /* const comparacao = await buscarComparacao(); */

    // Gere um número aleatório
    const indexAleatorio = Math.floor(Math.random() * data.poemas.length);

    // Pega o poema aleatório
    const poemaAleatorio = data.poemas[indexAleatorio].texto;
    text.innerHTML = poemaAleatorio;
    text.classList.add('poema')

    // Move o container inicio para fora da visão
    containerPrincipal.style.top = "1000%";
    containerText.style.opacity = "1";

    //move o container texto para a visão
    title.innerHTML = `<i class="fa-solid fa-arrow-left" onclick=" voltar()" style="color: #ffb703"></i> Aqui O Poema `;
  } catch (error) {
    console.error("Erro ao buscar o texto:", error);
  }
});

// pega um elogio
btnElogio.addEventListener("click", async function () {
  try {
    const response = await fetch("./JSON/elogios.json");
    const data = await response.json();

    /* const comparacao = await buscarComparacao(); */

    // Gere um número aleatório
    const indexAleatorio = Math.floor(Math.random() * data.elogios.length);

    // Pega o poema aleatório
    const elogioAleatorio = data.elogios[indexAleatorio].texto;
    text.innerHTML = elogioAleatorio;
    text.classList.remove('poema')

    // Move o container inicio para fora da visão
    containerPrincipal.style.top = "1000%";
    containerText.style.opacity = "1";

    //move o container texto para a visão
    title.innerHTML = `<i class="fa-solid fa-arrow-left" onclick=" voltar()" style="color: #ffb703"></i> Para Minha Vida `;
  } catch (error) {
    console.error("Erro ao buscar o texto:", error);
  }
});

document.addEventListener("load", () => {
  containerPrincipal.style.top = "0px";
});
