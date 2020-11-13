export default function initAnimacaoScroll() {
  const allSections = document.querySelectorAll("[data-anime = 'scroll']");
  const activeClass = "ativo";

  function animaScroll() {
    allSections.forEach((section) => {
      const tamanhoTela = window.innerHeight;
      const tamanhoScroll = tamanhoTela * 0.75;
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop <= tamanhoScroll) {
        section.classList.add(activeClass);
      } 
      
      // else if (section.classList.contains("ativo")) {
      //   section.classList.remove(activeClass);
      // }
    });
  }

  if (allSections.length) {
    allSections.forEach((item) => item.classList.add("js-scroll"));

    allSections[0].classList.add(activeClass);

    window.addEventListener("scroll", animaScroll);
  }
}
