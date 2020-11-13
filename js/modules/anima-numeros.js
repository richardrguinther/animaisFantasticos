export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    // Faz o bindo de this do objeto
    // a mutacao
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do dom com numero em seu texto,
  // incrementando de 0 ao numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);

    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start >= total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // Ativa a incrementaçao de numero para cada
  // numero selecionado no dom
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  // Funcao que ocorre sempre que a mutacao
  // do objeto ocorreu
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o objeto que ira observar a mutacao, verificando
  // se a classe foi adicionada ao target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, {
      attributes: true,
    });
  }

  // Inicia o objeto
  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }

    return this;
  }
}
