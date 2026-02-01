let step = 0;

const texts = [
  {
    title: "Toda jornada começa com pessoas",
    text: "E toda história precisa de alguém que acredite nela."
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
  step++;

  if (step < texts.length) {
    const h1 = document.querySelector("h1");
    const p = document.querySelector("p");

    h1.classList.remove("fade");
    p.classList.remove("fade");
    void h1.offsetWidth;

    h1.innerText = texts[step].title;
    p.innerText = texts[step].text;

    h1.classList.add("fade");
    p.classList.add("fade");
  } else {
    document.querySelector(".container").innerHTML = `
      <h1 class="fade">💛 Obrigado, Jeniffer</h1>
      <p class="fade">Sua presença já faz parte da nossa história.</p>
      <p class="fade">Que irá durar exatos:</p>
      <div id="contador" class="fade"></div>

      <button onclick="aceitou()" style="margin-top:20px">
        Aceito 💛
      </button>
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

function aceitou() {
  document.querySelector(".container").innerHTML = `
    <h1 class="fade">🎓 É oficial!</h1>
    <p class="fade">
      A professora Jeniffer agora faz parte da nossa formatura 💛
    </p>
    <p class="fade">
      3º ano • Desenvolvimento de Sistemas • 2026
    </p>
  `;
}
