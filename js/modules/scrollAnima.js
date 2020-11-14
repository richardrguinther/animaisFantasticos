export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.75;
    this.activeClass = "ativo";

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const tamanhoTela = window.innerHeight;
      const tamanhoScroll = tamanhoTela * 0.75;
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= tamanhoScroll) {
        section.classList.add(this.activeClass);
      }

      // else if (section.classList.contains("ativo")) {
      //   section.classList.remove(activeClass);
      // }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll);
  }
}
