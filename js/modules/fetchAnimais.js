import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Cria div do animal especifico e
  // a retorna
  function criarDivAnimal({ specie, total }) {
    const div = document.createElement("div");

    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${specie}</h3>
    <span data-numero>${total}</span>
    `;

    return div;
  }

  // Função que cria o animal
  async function criarAnimal() {
    try {
      // Faz o fetch do url e retorna um JSON,
      // adicionando-o à div criada.
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      const numerosGrid = document.querySelector(target);

      animaisJSON.forEach((animal) => {
        const divAnimal = criarDivAnimal(animal);

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

  return criarAnimal();
}
