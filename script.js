let step = 0;

const texts = [
  {
    title: "Toda jornada precisa de alguém que acredita",
    text: "E nenhum ciclo importante se constrói sozinho."
  },
  {
    title: "Este ano ganhou um novo significado para todos nós.",
    text: "Com palavras, cuidado e presença."
  },
  {
    title: "Professora Jeniffer",
    text: "Você aceitaria caminhar conosco até o final deste ano?"
  },
  {
    title: "E fazer parte da nossa formatura como a conselheira",
    text: "Do 3º ano de Desenvolvimento de Sistemas • 2026"
  }
];

function next() {

  // Inicia música e animação no primeiro clique
  if (step === 0) {
    const musica = document.getElementById("musica");
    musica.volume = 0;
    musica.play();

    // Fade in suave
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        musica.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);

    document.body.classList.add("animando");
  }

  step++;

  if (step < texts.length) {
    document.querySelector("h1").innerText = texts[step].title;
    document.querySelector("p").innerText = texts[step].text;
  } else {
    document.querySelector(".container").innerHTML = `
      <h1>💛 É oficial!</h1>
      <p>A professora Jeniffer agora faz parte da nossa formatura.</p>
      <p>Esse momento vai durar exatamente:</p>
      <div id="contador"></div>
    `;
    iniciarContador();
  }
}

function iniciarContador() {
  const contador = document.getElementById("contador");

  function atualizar() {
    const agora = new Date();
    const fimDoAno = new Date(agora.getFullYear(), 11, 31, 23, 59, 59);

    const diff = fimDoAno - agora;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);

    contador.innerHTML = `
      ⏳ <strong>${dias}</strong> dias,
      <strong>${horas}</strong> horas e
      <strong>${minutos}</strong> minutos
    `;
  }

  atualizar();
  setInterval(atualizar, 60000);
}
