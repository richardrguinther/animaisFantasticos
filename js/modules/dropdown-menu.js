import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdown = document.querySelectorAll("[data-dropdown]");

  function handleClick(e) {
    e.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("active");
    });
  }

  dropdown.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
