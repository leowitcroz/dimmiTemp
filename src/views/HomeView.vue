<template>
    <ui-container class="template mt-5">
        <ui-row>
            <ui-column>
                <ui-h-box>
                    <ui-img class="logo mt-2 ml-3" :src="logo" height="43" width="166" />
                    <ui-button class="ml-12" fill="link" label="Soluçôes" size="lg" />
                    <ui-button class="mx-2" fill="link" label="Soluçôes" size="lg" />
                    <ui-button class="mx-2" fill="link" label="Soluçôes" size="lg" />
                    <ui-button class="mr-12" fill="link" label="Soluçôes" size="lg" />
                    <ui-button label="Soluçôes" size="lg" />
                </ui-h-box>
            </ui-column>

            <ui-column class="mt-20 ">
                <ui-h-box class="mb-5" center>
                    <ui-img class="logo mt-2 ml-3" :src="logo" height="120" width="467" />
                </ui-h-box>
                <ui-h-box center>
                    <ui-text class="mr-2 text-logo-span" large content="Automação WhatsApp " />
                    <ui-text class="text-logo" large content="para vender mais e atender melhor" />
                </ui-h-box>
            </ui-column>
            <ui-column>
                <ui-h-box class="mt-5 mb-7" center>
                    <ui-text class="subtitle-logo" weight="400" large
                        content="Aumente o volume de atendimento e gere mais leads para seus vendedores sem aumentar o custo com pessoal." />
                </ui-h-box>
                <ui-h-box center>
                    <ui-button label="Quero saber mais" size="lg" />
                </ui-h-box>
            </ui-column>
        </ui-row>

        <ui-row>
            <ui-column class="mt-20 mb-20">
                <ui-h-box center>
                    <ui-img :src="print" height="480" width="940" />
                </ui-h-box>
            </ui-column>

            <ui-column>
                <ui-h-box center class="mb-20">
                    <ui-text class="mr-2 text-logo-span" large content="Múltiplos usuários" />
                    <ui-text class="text-logo" large content="com um único número de WhatsApp" />

                    <ui-text class="mt-3 subtitle-logo" weight="400" large
                        content="Um único número de WhatsApp em um sistema automático que lhe permite adicionar a quantidade ideal de atendentes, seja qual for. Isso é mais otimização de recursos!" />

                </ui-h-box>
            </ui-column>

            <ui-column center v-for="(item, key) in benefits" :key="key" col="6">

                <ui-h-box class="mx-2 mb-5" nowrap center>
                    <ui-v-box>
                        <ui-avatar class="justify-center mb-3" size="70"
                            src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
                        <ui-text weight="500" class="text-center" :content="item.text" />
                    </ui-v-box>
                </ui-h-box>
            </ui-column>

            <ui-column class="mt-20 mb-20">
                <ui-h-box center>
                    <ui-text class="text-logo" weight="600" large content="Mais de 2.500 clientes" />
                    <ui-text class="mx-2 text-logo-span" weight="600" large content="Confiam" />
                    <ui-text class="text-logo" large weight="600" content="No DimmiHub" />
                </ui-h-box>
            </ui-column>

            <ui-column class="mt-20">
                <ui-h-box class="mx-2 mb-5" nowrap center>
                    <ui-v-box>
                        <ui-avatar class="justify-center mb-3" size="100"
                            src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
                            <ui-text weight="700" class="text-center" content="User" />
                            <ui-text weight="400" class="text-center" content="User Profession" />
                            <ui-text weight="400" col="7" class="text-center user_detail mt-3-" content="Estávamos em um momento de extremo foco no atendimento ao cliente e com grande dificuldade de organizar este processo virtualmente. A plataforma ChatGuru veio como a solução perfeita e com maestria atendeu todas as expectativas. Super dinâmico, organizado e com excelente suporte. Indico de olhos fechados." />
                    </ui-v-box>
                </ui-h-box>
            </ui-column>
        </ui-row>

    </ui-container>
</template>

<script lang="ts" setup>
import logo from "@/assets/logo_dimmihub.svg";
import print from "@/assets/diimmiprint.png";
import { ref } from "vue";

const benefits = ref([
  {
    text: "Toda a equipe com o mesmo número"
  },
  {
    text: "Anotações e tags nas conversas"
  },
  {
    text: "Mensagens automáticas"
  },
  {
    text: "Relatórios customizáveis"
  },
]);

const review = ref([
  {
    name: "User1",
    profession: "Pro1",
    review: "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação."
  },
  {
    name: "User2",
    profession: "Pro2",
    review: "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação."
  },
  {
    name: "User3",
    profession: "Pro3",
    review: "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação."
  },
  {
    name: "User4",
    profession: "Pro4",
    review: "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação."
  },
  {
    name: "User5",
    profession: "Pro5",
    review: "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação."
  },
  {
    name: "User6",
    profession: "Pro6",
    review: "Estávamos em busca de uma solução flexível, escalável e centralizada que atendesse às necessidades de comunicação dos nossos departamentos e, diante de uma pesquisa ampla de mercado que realizamos, o ChatGuru foi a ferramenta que atendeu prontamente a tudo o que necessitávamos. Estes recursos aumentaram a produtividade e a segurança de nossa comunicação."
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

    .user_detail{
        font-style: italic;
        width: 50%;
        margin-left: 24%;
        margin-top: 10px;
    }
}
</style>