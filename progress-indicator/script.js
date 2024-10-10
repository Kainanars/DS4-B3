const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressText = document.getElementById('progress');

let progress = 0;

/**
 * Atualiza a barra de progresso e o texto exibido.
 * Modifica a largura da barra de progresso de acordo com o valor atual do progresso.
 * Atualiza o texto para exibir a porcentagem correspondente.
 * Se o progresso chegar a 100%, ele chama a função de jogar confetes.
 */
function updateProgress() {
  progressBar.style.width = progress + '%';
  progressText.textContent = progress + '%';

  if (progress === 100) {
    launchConfetti();
  }
}

/**
 * Event listener para o botão "Próximo".
 * Aumenta o valor do progresso em 10, até o limite de 100%, e chama `updateProgress`.
 */
nextBtn.addEventListener('click', () => {
  if (progress < 100) {
    progress += 10;
    updateProgress();
  }
});

/**
 * Event listener para o botão "Anterior".
 * Diminui o valor do progresso em 10, até o mínimo de 0%, e chama `updateProgress`.
 */
prevBtn.addEventListener('click', () => {
  if (progress > 0) {
    progress -= 10;
    updateProgress();
  }
});

/**
 * Lança os confetes quando o progresso atinge 100%.
 * Usa uma biblioteca externa de confetes para gerar partículas coloridas.
 * Configura a quantidade de partículas, a dispersão e a origem do lançamento.
 */
function launchConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}
