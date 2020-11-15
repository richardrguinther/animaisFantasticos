import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.5;
    this.activeClass = "ativo";

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Define a distancia de cada div em
  // relacao ao topo da tela e retorna
  // um objeto com offset e o elemento
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;

      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Checa a distancia do scroll e ativa o item
  // casa seja maior que o offset
  checkDistance() {
    this.distance.forEach(({ element, offset }) => {
      if (window.pageYOffset > offset) element.classList.add(this.activeClass);
    });
  }

  // Para a funcao, removendo o evento de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }

  // Inicia o objeto
  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }

    return this;
  }
}
