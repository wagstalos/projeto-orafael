async function getNumeroDoSheets() {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLGN7ZLDakT55LAY6EsPV2NfMXYiQoCdKD3PyjtvmwySbLOfe5DNO7VEF5s4j6f8s3AS-nObkIjsom/pub?output=csv";
  const response = await fetch(url);
  const text = await response.text();
  const linhas = text.split("\n");
  const valor = parseInt(linhas[1].split(",")[0].replace(/[^\d]/g, "")); // ajusta se tiver mais colunas
  animarContador(valor);
}

function animarContador(final) {
  let atual = 0;
  const passo = Math.ceil(final / 100);
  const elemento = document.getElementById("contador");
  const intervalo = setInterval(() => {
    atual += passo;
    if (atual >= final) {
      atual = final;
      clearInterval(intervalo);
    }
    elemento.textContent = atual.toLocaleString("pt-BR");
  }, 20);
}

getNumeroDoSheets();
