export default function fetchBitcoin(url, target) {
  if (document.querySelector(target)) {
    fetch(url)
    // Transforma a resposta em JSON
      .then((response) => response.json())
    // Coloca o valor dentro de JSON no target
      .then((json) => {
        const btcPrice = json.BRL.sell;
        const btcNumber = document.querySelector(target);

        const donationValue = (100 / btcPrice).toFixed(4);

        btcNumber.innerText = donationValue;
      })
      .catch((erro) => console.log(Error(erro)));
  }
}
