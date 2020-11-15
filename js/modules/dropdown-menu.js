import outsideClick from "./outsideclick.js";

export default class initDropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    this.activeClass = "active";
    // Defina touchstart e clique como eventos
    // padroes de events
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;

    this.addDropdownEvents = this.addDropdownEvents.bind(this);
    this.activeDropdown = this.activeDropdown.bind(this);
  }

  // Ativa o dropdown e adiciona a funçao
  // que observa o clique fora dele
  activeDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adicina os eventos a cada menu do dropdown
  addDropdownEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdown);
      });
    });
  }

  // Inicia a funçao
  init() {
    this.addDropdownEvents();
  }
}
