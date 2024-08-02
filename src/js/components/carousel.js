import { onMounted } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// Só funciona 1 componente por página
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: "src/img/aula/image 14app.jpg",
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Perfil</b></p>
            <br>
            <p>
            Para que o aplicativo gere suas necessidades diárias, é preciso colocar alguns dados sobre você, como os mostrados ao lado.
            <br><br>
            Ajuste os itens de acordo com suas características e seu estilo de vida.
            <br><br>
            Obs.: na altura, se você tem 1,40m, coloque 140cm.
            </p>
            `,
        },
        {
          id: 2,
          img: "src/img/aula/image 15app.jpg",
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Perfil</b></p>
            <br>
            <p>
            Você perceberá, logo abaixo, que o programa já ajustará os seguintes itens:
            <br><br>
            Taxa metabólica basal: o quanto de energia você gasta para manter seu corpo funcionando.
            <br><br>
            Requisitos de água: quantidade de água que você deve consumir.
            <br><br>
            Índice de Massa Corporal: deixaremos este item para um nutricionista.

            </p>
            `,
        },
        {
          id: 3,
          img: "src/img/aula/image 16app.jpg", 
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Atividade física</b></p>
            <br>
            <p>
            É possível ajustar a intensidade da atividade física clicando na seta ao lado do item “Atividade” e, depois, selecionando o que melhor representa sua rotina.

            </p>
            `,
        },
        {
          id: 4,
          img: "src/img/aula/image 18app.jpg",
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Objetivo</b></p>
            <br>
            <p>
            Clicando no campo “Objetivo”, é possível modificar os seus objetivos. Porém, escolha sempre manter o peso, já que somente um nutricionista ou médico pode avaliar se você deve ganhar ou perder peso.

            </p>
            `,
        },
        {
          id: 5,
          img: "src/img/aula/image 19app.jpg",
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Continuando…</b></p>
            <br>
            <p>
            Agora, clique no gráfico no menu acima.
            <br><br>
Nesta aba, você conseguirá verificar a quantidade de nutrientes consumidos, assim como inserir seus alimentos.

            </p>
            `,
        },
        {
          id: 6,
          img: "src/img/aula/image 20app.jpg",
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Distribuição dos nutrientes</b></p>
            <br>
            <p>
            Ao clicar na segunda aba, é possível observar a quantidade de calorias recomendada para você, assim como a quantidade de nutrientes que deve consumir.

            </p>
            `,
        },
        {
          id: 7,
          img: "src/img/aula/image 21app.jpg",
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Como colocar os alimentos?</b></p>
            <br>
            <p>
            A terceira aba será utilizada para inserir os alimentos consumidos em cada refeição.
            <br><br>
            Por exemplo, para inserir o café da manhã, clique em “ + Adicionar alimentos”.

            </p>
            `,
        },
        {
          id: 8,
          img: "src/img/aula/image 22app.jpg",
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Inserindo o alimento…</b></p>
            <br>
            <p>
            A página ao lado abrirá para que você pesquise um alimento. No exemplo, eu inseri pão francês. Então é só pesquisar, clicando em “procurar “pão francês” na biblioteca”.
            
            <br> <br>
            Observe também, na área de pesquisa, que é possível buscar o produto pelo código de barras presente na embalagem.
            
            </p>
            `,
        },
        {
          id: 9,
          img: "src/img/aula/image 23app.jpg",
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Inserindo o alimento…</b></p>
            <br>
            <p>
            Várias opções aparecerão. Logo, você deve escolher a que mais se assemelha à sua refeição.
            <br><br>
            Aqui, eu escolhi o pão com manteiga (terceiro item).
            
            </p>
            `,
        },
        {
          id: 10,
          img: "src/img/aula/image 24app.jpg",
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Inserindo o alimento…</b></p>
            <br>
            <p>
            Em seguida, uma página se abrirá perguntando a quantidade consumida do alimento. No caso, ele oferece a opção de unidades. Em outros casos, aparecerá a quantidade em gramas, em colheres, copos, mililitros (ml) etc.
            <br><br>
            Após escolher, clique em adicionar.

            </p>
            `,
        },
        {
          id: 11,
          img: "src/img/aula/image 25app.jpg",
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Inserindo o alimento…</b></p>
            <br>
            <p>
            Voilá! Você conseguiu inserir seu café da manhã! Repare que as quantidades de nutrientes já se modificaram.
            <br><br>
            Ao clicar em “Detalhes”, você conseguirá ver as informações mais detalhadas.

            </p>
            `,
        },
        {
          id: 12,
          img: "src/img/aula/image 26app.jpg",
          alt: "Aplicativo Macros",
          html: //html
            `
            <p><b>Objetivo x real</b></p>
            <br>
            <p>
            Nesta aba, você verá uma comparação entre o que foi consumido e o que você deveria consumir.
             <br><br>
             Neste exemplo, já simulei outras refeições além do café da manhã. Perceba que a quantidade de gordura foi maior do que o recomendado.

            </p>
            `,
        },
      ],
      instances: null, // Declare instances as a reactive variable
      qtdSlides: 0,
      ordem: 0,
    };
  },
  methods: {
    next() {
      document.querySelector(".previous").style.display = "flex";

      this.ordem++;
      if (this.ordem >= this.qtdSlides) {
        this.ordem = 0;
        document.querySelector(".previous").style.display = "none";
      }
      this.instances[0].next(); // Access the first carousel instance
      console.log(this.ordem);
    },
    previous() {
      console.log(this.ordem);

      this.ordem--;
      if (this.ordem < 0) {
        this.ordem = 0;
        console.log(123);
        document.querySelector(".previous").style.display = "none";
      } else if (this.ordem === 0) {
        this.instances[0].prev(); // Access the first carousel instance
        document.querySelector(".previous").style.display = "none";
      } else {
        this.instances[0].prev(); // Access the first carousel instance
      }

      console.log(this.ordem);
    },
  },
  mounted() {
    var elems = document.querySelectorAll(".carousel");
    this.instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      shift: 20,
    });
    this.qtdSlides = this.instances[0].count; // Set qtdSlides after initialization
    document.querySelector(".previous").style.display = "none";
  },
  
  template://html
   `
    <!-- Carousel -->
    <div class="carousel carousel-slider carousel-02 center">
      <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="previous flex--align-center card card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_left
          </span>
        </a>
        <a @click="next" class="next flex--align-center card ml-4 card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_right
          </span>
        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item card">
        <div class="row card-content">
          <img :src="item.img" :alt="item.alt" class="col s12 m6 img--round">
          <div class="col s12 m6 left-align" v-html="item.html"></div>
        </div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
