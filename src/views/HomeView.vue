<template class="template">
  <HeaderVue></HeaderVue>
  <BannerVue></BannerVue>
  <PrintVue></PrintVue>
  <BennefitsVue></BennefitsVue>
  
  <ui-container class="template mt-5">

    <ui-row>



      
    </ui-row>

    <ui-row>
      

      

      

      <ui-column class="mt-20 mb-10">
        <ui-h-box center>
          <ui-text class="text-logo" weight="600" large content="Mais de 2.500 clientes" />
          <ui-text class="mx-2 text-logo-span" weight="600" large content="Confiam" />
          <ui-text class="text-logo" large weight="600" content="No DimmiHub" />
        </ui-h-box>
      </ui-column>

      <ui-column class="mt-10 mb-10">
        <ui-h-box class="mx-2 mb-5" nowrap center>
          <ui-v-box>
            <ui-avatar class="justify-center mb-3" size="100"
              src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
            <ui-text weight="700" class="text-center" content="User" />
            <ui-text weight="400" class="text-center" content="User Profession" />
            <ui-text weight="400" col="7" class="text-center user_detail mt-3-"
              content="Estávamos em um momento de extremo foco no atendimento ao cliente e com grande dificuldade de organizar este processo virtualmente. A plataforma ChatGuru veio como a solução perfeita e com maestria atendeu todas as expectativas. Super dinâmico, organizado e com excelente suporte. Indico de olhos fechados." />
          </ui-v-box>
        </ui-h-box>
      </ui-column>

      <ui-column col="8" v-for="(item, key) in review" :key="key">
        <ui-box class="client_box mt-5 mb-3 mx-2 p-3" :shadow="10">
          <ui-v-box>
            <ui-h-box nowrap>
              <ui-avatar class="justify-center mb-3" size="70"
                src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
              <ui-v-box>
                <ui-text class="mt-3 mx-5" weight="600" :content="item.name" />
                <ui-text class=" mx-5" weight="400" :content="item.profession" />
              </ui-v-box>
            </ui-h-box>
            <ui-text class="ml-2 mt-3 mb-3" :content="item.review" small />
          </ui-v-box>
        </ui-box>
      </ui-column>
    </ui-row>

    <ui-row>
      <ui-column col="12" class="mt-15 mb-15">
        <ui-v-box class="mr-12" center>
          <ui-text content="Automação WhatsApp com múltiplos usuários em um único número" class="text-logo text-right"
            weight="500" />
          <ui-text
            content="Com o ChatGuru você tem a opção de utilizar um único número de WhatsApp com múltiplos usuários. Desta forma você concentra os atendimentos e faz o rodízio entre os atendentes da forma que desejar."
            class="text-right mt-10" large />
          <ui-button class="btn_box w-150 mt-10" fill="soft" label="Saber mais" />
        </ui-v-box>
      </ui-column>
      <ui-column col="12" class="mt-10">
        <ui-img height="300" width="550"
          src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
      </ui-column>

      <ui-column col="12" class="mt-10">
        <ui-img height="300" width="550" class="ml-6"
          src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
      </ui-column>

      <ui-column col="12" class="mt-15 mb-15">
        <ui-v-box class="mr-12" center>
          <ui-text content="Automação WhatsApp com múltiplos usuários em um único número" class="text-logo text-lef"
            weight="500" />
          <ui-text
            content="Com o ChatGuru você tem a opção de utilizar um único número de WhatsApp com múltiplos usuários. Desta forma você concentra os atendimentos e faz o rodízio entre os atendentes da forma que desejar."
            class="text-left mt-10" large />
          <ui-button class="btn_box_left w-150 mt-10" fill="soft" label="Saber mais" />
        </ui-v-box>
      </ui-column>


      <ui-column col="12" class="mt-15 mb-15">
        <ui-v-box class="mr-12" center>
          <ui-text content="Automação WhatsApp com múltiplos usuários em um único número" class="text-logo text-right"
            weight="500" />
          <ui-text
            content="Com o ChatGuru você tem a opção de utilizar um único número de WhatsApp com múltiplos usuários. Desta forma você concentra os atendimentos e faz o rodízio entre os atendentes da forma que desejar."
            class="text-right mt-10" large />
          <ui-button class="btn_box w-150 mt-10" fill="soft" label="Saber mais" />
        </ui-v-box>
      </ui-column>
      <ui-column col="12" class="mt-10">
        <ui-img height="300" width="550"
          src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
      </ui-column>

      <ui-column col="12" class="mt-10">
        <ui-img height="300" width="550" class="ml-6"
          src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
      </ui-column>

      <ui-column col="12" class="mt-15 mb-15">
        <ui-v-box class="mr-12" center>
          <ui-text content="Automação WhatsApp com múltiplos usuários em um único número" class="text-logo text-lef"
            weight="500" />
          <ui-text
            content="Com o ChatGuru você tem a opção de utilizar um único número de WhatsApp com múltiplos usuários. Desta forma você concentra os atendimentos e faz o rodízio entre os atendentes da forma que desejar."
            class="text-left mt-10" large />
          <ui-button class="btn_box_left w-150 mt-10" fill="soft" label="Saber mais" />
        </ui-v-box>
      </ui-column>

      <ui-column col="12" class="mt-15 mb-15">
        <ui-v-box class="mr-12" center>
          <ui-text content="Automação WhatsApp com múltiplos usuários em um único número" class="text-logo text-right"
            weight="500" />
          <ui-text
            content="Com o ChatGuru você tem a opção de utilizar um único número de WhatsApp com múltiplos usuários. Desta forma você concentra os atendimentos e faz o rodízio entre os atendentes da forma que desejar."
            class="text-right mt-10" large />
          <ui-button class="btn_box w-150 mt-10" fill="soft" label="Saber mais" />
        </ui-v-box>
      </ui-column>
      <ui-column col="12" class="mt-10">
        <ui-img height="300" width="550"
          src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
      </ui-column>

      <ui-column col="12" class="mt-10">
        <ui-img height="300" width="550" class="ml-6"
          src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
      </ui-column>

      <ui-column col="12" class="mt-15 mb-15">
        <ui-v-box class="mr-12" center>
          <ui-text content="Automação WhatsApp com múltiplos usuários em um único número" class="text-logo text-lef"
            weight="500" />
          <ui-text
            content="Com o ChatGuru você tem a opção de utilizar um único número de WhatsApp com múltiplos usuários. Desta forma você concentra os atendimentos e faz o rodízio entre os atendentes da forma que desejar."
            class="text-left mt-10" large />
          <ui-button class="btn_box_left w-150 mt-10" fill="soft" label="Saber mais" />
        </ui-v-box>
      </ui-column>
    </ui-row>
  </ui-container>
</template>

<script lang="ts" setup>
import logo from "@/assets/logo_dimmihub.svg";
import print from "@/assets/diimmiprint.png";
import { ref } from "vue";
import HeaderVue from "../components/HeaderVue.vue";
import BannerVue from "../components/BannerVue.vue";
import PrintVue from "../components/PrintVue.vue";
import BennefitsVue from "../components/BenefitsVue.vue";


const benefits = ref([
  {
    text: "Toda a equipe com o mesmo número",
  },
  {
    text: "Anotações e tags nas conversas",
  },
  {
    text: "Mensagens automáticas",
  },
  {
    text: "Relatórios customizáveis",
  },
]);

const review = ref([
  {
    name: "User1",
    profession: "Pro1",
    review:
      "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação.",
  },
  {
    name: "User2",
    profession: "Pro2",
    review:
      "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação.",
  },
  {
    name: "User3",
    profession: "Pro3",
    review:
      "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação.",
  },
  {
    name: "User4",
    profession: "Pro4",
    review:
      "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação.",
  },
  {
    name: "User5",
    profession: "Pro5",
    review:
      "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação.",
  },
  {
    name: "User6",
    profession: "Pro6",
    review:
      "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação.",
  },
]);

</script>

<style lang="scss" scoped>
.template {
 

  .ui-button.ui-button--primary-link {
    color: #9333ea !important;
  }

  .ui-button.ui-button--primary {
    background-color: #9333ea !important;
  }

  .ui-button.ui-button--primary:hover:not(:disabled) {
    text-decoration: underline;
  }

  .text-logo-span {
    color: #9333ea !important;
    font-size: 30px;
  }

  .text-logo {
    font-size: 30px !important;
  }

  .subtitle-logo {
    text-align: center;
    width: 60%;
  }

  .user_detail {
    font-style: italic;
    width: 50%;
    margin-left: 24%;
    margin-top: 10px;
  }

  .client_box {
    background-color: #e1dce6;
  }

  .btn_box {
    background-color: #9333ea;
    border: 1px solid #9333ea;
    color: white;
    margin-left: 75%;
  }

  .btn_box:hover {
    background-color: #9a42eb;
    text-decoration: underline;
  }

  .btn_box_left {
    background-color: #9333ea;
    border: 1px solid #9333ea;
    color: white;

  }

  .btn_box_left:hover {
    background-color: #9a42eb;
    text-decoration: underline;
  }
}
</style>
