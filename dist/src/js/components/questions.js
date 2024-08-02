import{onMounted}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";export default{setup(){onMounted(()=>{console.log("questions")});return{verificaQuestao:(e,a)=>{var e=e.target.value,s=`
        <div class="question-result question-result__correto">
          <img src="/src/img/aula/${a}.webp" alt="correto">
          <p class="body1 flex--align-center">
            <b>Acertou</b>
            <span class="material-symbols-rounded ml-4">sentiment_very_satisfied</span>
          </p>
        </div>
      `;document.querySelector("#"+a).querySelector(".feedback").innerHTML=e==={q1:"b",q2:"d",q3:"a"}[a]?s:`
        <div class="question-result question-result__incorreto">
          <p class="body1 flex--align-center">
            <b>Ops!</b>
            <span class="material-symbols-rounded ml-4">sentiment_very_dissatisfied</span>
          </p>
        </div>
      `}}},template:`
    <!-- Question 1 -->
    <div class="question-radio" id="q1">
      <p class="body1 mt-2"><b>1. Qual é a função das proteínas?</b>​</p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="a" />
          <span><b>a) </b>Fornecer energia ao corpo.</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="b" />
          <span><b>b) </b>Diversas funções, dentre elas a composição do músculo.</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="c" />
          <span><b>c) </b>Formação do tecido adiposo, que é o isolamento específico do corpo.</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q1')">
          <input name="q1" type="radio" value="d" />
          <span><b>d) </b>Regular o volume do sangue.</span>
        </label>
      </p>
      <div class="feedback"></div>
    </div>

    <!-- Question 2  -->
    <div class="question-radio mt-9" id="q2">
      <p class="body1 mt-2"><b>2. Qual a importância dos carboidratos?​</b>​</p>
      <p>
        <label @change="verificaQuestao($event, 'q2')">
          <input name="q2" type="radio" value="a" />
          <span><b>a) </b>Fornecer energia ao corpo.</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q2')">
          <input name="q2" type="radio" value="b" />
          <span><b>b) </b>São responsáveis pelo isolamento térmico do corpo.</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q2')">
          <input name="q2" type="radio" value="c" />
          <span><b>c) </b>São responsáveis pela defesa do nosso organismo (anticorpos).​</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q2')">
          <input name="q2" type="radio" value="d" />
          <span><b>d) </b>Fornecem energia para o organismo realizar suas atividades.</span>
        </label>
      </p>
      <div class="feedback"></div>
    </div>

    <!-- Question 3 -->
    <div class="question-radio mt-9" id="q3">
      <p class="body1 mt-2"><b>3. As gorduras fazem mal?​​</b>​</p>
      <p>
        <label @change="verificaQuestao($event, 'q3')">
          <input name="q3" type="radio" value="a" />
          <span><b>a) </b>Não, pois são essenciais para fornecer energia ao corpo.​</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q3')">
          <input name="q3" type="radio" value="b" />
          <span><b>b) </b>Sim, pois se acumulam no corpo causando problemas sérios.​</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q3')">
          <input name="q3" type="radio" value="c" />
          <span><b>c) </b>Não, pois são responsáveis pela formação dos anticorpos.​</span>
        </label>
      </p>
      <p>
        <label @change="verificaQuestao($event, 'q3')">
          <input name="q3" type="radio" value="d" />
          <span><b>d) </b>Sim, pois não são nutrientes naturais.</span>
        </label>
      </p>
      <div class="feedback"></div>
    </div>
  `};