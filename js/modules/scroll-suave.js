export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    console.log(this.scrollToSection.bind(this));
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((item) => {
      item.addEventListener("click", this.scrollToSection);
    });
  }

  init() {
    if (this.links.length) {
      this.addLinkEvent();
    }
    return this;
  }
}
