import ScrollSuave from "./modules/scroll-suave";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";

import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave("a[href^='#']");
scrollSuave.init();

const accordion = new Accordion(".js-accordion dt");
accordion.init();

const navMenus = "[data-tab='animalMenu'] li";
const navContent = "[data-tab='content'] section";
const tabNav = new TabNav(navMenus, navContent);
tabNav.init();

initAnimacaoScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
