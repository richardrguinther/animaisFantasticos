import ScrollSuave from "./modules/scroll-suave";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import fetchAnimais from "./modules/fetchAnimais.js";

import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";

const scrollSuave = new ScrollSuave("a[href^='#']");
scrollSuave.init();

const accordion = new Accordion(".js-accordion dt");
accordion.init();

const navMenus = "[data-tab='animalMenu'] li";
const navContent = "[data-tab='content'] section";
const tabNav = new TabNav(navMenus, navContent);
tabNav.init();

const modal = new Modal(
  "[href^='login.html']",
  "[data-modal='fechar']",
  ".modal-container"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initAnimacaoScroll();
initDropdownMenu();
initMenuMobile();
initFuncionamento();

fetchAnimais("/animais-fantasticos/json/animalAPI.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
