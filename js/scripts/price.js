// let contadorAtivado = false;

// function animarContador(elemento, final) {
//   let atual = 0;
//   const passo = Math.ceil(final / 100);
//   const intervalo = setInterval(() => {
//     atual += passo;
//     if (atual >= final) {
//       atual = final;
//       clearInterval(intervalo);
//     }
//     elemento.textContent = `+ ${atual.toLocaleString("pt-BR")}`;
//   }, 20);
// }

// async function getNumerosDoSheets(callback) {
//   const url =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLGN7ZLDakT55LAY6EsPV2NfMXYiQoCdKD3PyjtvmwySbLOfe5DNO7VEF5s4j6f8s3AS-nObkIjsom/pub?output=csv";

//   try {
//     const response = await fetch(url);
//     const text = await response.text();
//     const linhas = text.trim().split("\n");
//     const headers = linhas[0].split(",");
//     const valores = linhas[1].split(",");

//     const dados = {};
//     headers.forEach((header, i) => {
//       dados[header.trim()] = parseInt(valores[i].replace(/[^\d]/g, ""));
//     });

//     callback(dados);
//   } catch (error) {
//     console.error("Erro ao carregar dados do Sheets:", error);
//   }
// }

// // 1. Dispara imediatamente LinkedInHome
// getNumerosDoSheets((dados) => {
//   const home = document.querySelector('[data-key="LinkedInHome"]');
//   if (home && dados.LinkedInHome) {
//     animarContador(home, dados.LinkedInHome);
//   }
// });

// // 2. Dispara o restante ao rolar até a seção
// const observer = new IntersectionObserver(
//   (entries, obs) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting && !contadorAtivado) {
//         contadorAtivado = true;
//         getNumerosDoSheets((dados) => {
//           for (const key in dados) {
//             if (key === "LinkedInHome") continue; // Já animado
//             const el = document.querySelector(`h3[data-key="${key}"]`);
//             if (el) {
//               animarContador(el, dados[key]);
//             }
//           }
//         });
//         obs.unobserve(entry.target);
//       }
//     });
//   },
//   {
//     threshold: 0.5,
//   }
// );

// const secao = document.getElementById("numbers");
// if (secao) {
//   observer.observe(secao);
// }

let contadorAtivado = false;

// VALORES PADRÕES — usados se o CSV falhar
const valoresPadrao = {
  LinkedInHome: 20980,
  Visualizações: 4000,
  Inscritos: 1740,
  Vídeos: 160,
  "Visualizações Canal": 35200
};

function animarContador(elemento, final) {
  let atual = 0;
  const passo = Math.ceil(final / 100);
  const intervalo = setInterval(() => {
    atual += passo;
    if (atual >= final) {
      atual = final;
      clearInterval(intervalo);
    }
    elemento.textContent = `+ ${atual.toLocaleString("pt-BR")}`;
  }, 20);
}

async function getNumerosDoSheets(callback) {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLGN7ZLDakT55LAY6EsPV2NfMXYiQoCdKD3PyjtvmwySbLOfe5DNO7VEF5s4j6f8s3AS-nObkIjsom/pub?output=csv";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro ao acessar CSV");
    const text = await response.text();
    const linhas = text.trim().split("\n");
    const headers = linhas[0].split(",");
    const valores = linhas[1].split(",");

    const dados = {};
    headers.forEach((header, i) => {
      dados[header.trim()] = parseInt(valores[i].replace(/[^\d]/g, ""));
    });

    callback(dados);
  } catch (error) {
    console.warn("Falha ao carregar CSV, usando valores padrão:", error);
    callback(valoresPadrao); // usa fallback
  }
}

// 1. LinkedInHome no início
getNumerosDoSheets((dados) => {
  const home = document.querySelector('[data-key="LinkedInHome"]');
  if (home && dados.LinkedInHome) {
    animarContador(home, dados.LinkedInHome);
  }
});

// 2. Demais na seção id="numbers"
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !contadorAtivado) {
      contadorAtivado = true;
      getNumerosDoSheets((dados) => {
        for (const key in dados) {
          if (key === "LinkedInHome") continue;
          const el = document.querySelector(`h3[data-key="${key}"]`);
          if (el) {
            animarContador(el, dados[key]);
          }
        }
      });
      obs.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

const secao = document.getElementById("numbers");
if (secao) {
  observer.observe(secao);
}

