export default function initFetchBitcoin() {
  if (document.querySelector(".btc-preco")) {
    const url = "https://blockchain.info/ticker";

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const btcPrice = json.BRL.sell;
        const btcNumber = document.querySelector(".btc-preco");

        const donationValue = (100 / btcPrice).toFixed(4);

        btcNumber.innerText = donationValue;
      })
      .catch((erro) => console.log(Error(erro)));
  }
}
