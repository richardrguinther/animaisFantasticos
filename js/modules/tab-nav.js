export default function initTabNav() {
  const activeClass = "ativo";
  const tabMenu = document.querySelectorAll("[data-tab='animalMenu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function activeTab(index) {
    tabContent.forEach((section) => section.classList.remove(activeClass));
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add(activeClass, direcao);
  }

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
