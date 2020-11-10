export default function initFuncionamento() {
  const funcionamento = document.querySelector(`[data-semana]`);
  const diasSemanas = funcionamento.dataset.semana.split(`,`).map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(`,`).map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemanas.includes(diaAgora);

  const horarioAberto =
    horarioSemana[0] >= horarioAgora && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add(`aberto`);
  }
}
