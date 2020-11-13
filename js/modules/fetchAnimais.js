import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  const $ = document.querySelector.bind(document);

  function createAnimal({ specie, total }) {
    const div = document.createElement("div");

    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${specie}</h3>
    <span data-numero>${total}</span>
    `;

    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      const numerosGrid = $(".numeros-grid");

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);

        numerosGrid.appendChild(divAnimal);
      });

      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais("./animaisApi.json");
}
