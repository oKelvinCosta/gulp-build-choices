
// import {
//   createApp,
// } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import {
  createApp,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js";


import Carousel from "./components/carousel.js";
import Sidebar from "./components/sidebar.js";
import Questions from "./components/questions.js";
import Teste from "./components/teste.js";
import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import ImgSideCard from "./components/img-side-card.js";
import AppFooter from "./components/app-footer.js";
import Concluir from "./components/concluir.js";

const app = createApp({
  components: {
    Carousel,
    Sidebar,
    Questions,
    Teste,
    Navbar,
    Hero,
    ImgSideCard,
    AppFooter,
    Concluir,
  },

  // Quando o componente estiver montado, executa o código
  /**
   * Inicializa a funcionalidade de scrollspy e adiciona um ouvinte de evento de scroll.
   *
   * Esta função é chamada quando o componente é montado. Ela seleciona todos os elementos
   * com a classe "scrollspy" usando `document.querySelectorAll` e inicializa o scrollspy
   * usando `M.ScrollSpy.init`. A função `M.ScrollSpy.init` recebe dois parâmetros: os elementos
   * a serem inicializados e um objeto de opções opcional.
   *
   * Após inicializar o scrollspy, a função adiciona um ouvinte de evento de scroll à janela
   * usando `window.addEventListener`. O ouvinte de evento chama o método `handleScroll`
   * do componente atual.
   *
   * @return {void} Esta função não retorna um valor.
   */
  mounted() {
    // scrollspy -----------------------------------------------------
    // Para a ancoragem de links de funcionar de modo animado
    var elems = document.querySelectorAll(".scrollspy");
    var instances = M.ScrollSpy.init(elems, {
      scrollOffset: -600
      // specify options here
    });

    // Adiciona o evento de scroll
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // Barra de progresso Scroll -----------------------------------------------------

    /**
     * Atualiza a barra de progresso e exibe a porcentagem rolada.
     *
     * Esta função calcula a porcentagem rolada com base na posição de rolagem do usuário. Em seguida, atualiza a largura da barra de progresso e exibe a porcentagem rolada na caixa de progresso.
     *
     * @return {void} Esta função não retorna nenhum valor.
     */
    handleScroll() {
      
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      var barras = document.querySelectorAll(".determinate");

      barras.forEach((barra) => {
        barra.style.width = scrolled + "%";
      });

      document.querySelector(".progress-box__number").innerHTML =
        Math.round(scrolled) + "%";
    },
  },
});

app.mount("#app");
