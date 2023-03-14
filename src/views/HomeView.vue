<template>
    <ui-container fluid class="template pt-5">
        <ui-row>
            <ui-column>
                <ui-h-box class=" mx-5 justify-between">
                    <ui-img class="logo mt-2 ml-3" :src="logo" height="43" width="166" />
                    <ui-button class="ml-12 btn_link" fill="link" label="Soluçôes" size="lg" />
                    <ui-button class="mx-2 btn_link" fill="link" label="Soluçôes" size="lg" />
                    <ui-button class="mx-2 btn_link" fill="link" label="Soluçôes" size="lg" />
                    <ui-button class="mr-12 btn_link" fill="link" label="Soluçôes" size="lg" />
                    <ui-button class="btn_dimmi" label="Soluçôes" size="lg" />
                </ui-h-box>
            </ui-column>

            <ui-column class="mt-20">
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
                    <ui-button class="btn_dimmi" label="Quero saber mais" size="lg" />
                </ui-h-box>
            </ui-column>
        </ui-row>

        <ui-row>
            <ui-column class="mt-20 mb-20">
                <ui-h-box center>
                    <ui-img class="radius-sm" :src="print" height="480" width="940" />
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
                <ui-h-box class="mx-10 mb-5" nowrap center>
                    <ui-v-box>
                        <ui-avatar class="justify-center mb-3" size="70"
                            src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
                        <ui-text weight="500" class="text-center" :content="item.text" />
                    </ui-v-box>
                </ui-h-box>
            </ui-column>

            <ui-column class="mt-20 mb-10">
                <ui-h-box center>
                    <ui-text class="text-logo" weight="600" large content="Mais de 2.500 clientes" />
                    <ui-text class="mx-2 text-logo-span" weight="600" large content="Confiam" />
                    <ui-text class="text-logo" large weight="600" content="No DimmiHub" />
                </ui-h-box>
            </ui-column>

            <ui-column class="mt-10 mb-10">
                <ui-h-box class="mx-10 mb-5" nowrap center>
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
                <ui-box class="client_box m-5 p-3" :shadow="10">
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
                <ui-v-box class="mr-12 ml-6" center>
                    <ui-text content="Automação WhatsApp com múltiplos usuários em um único número"
                        class="text-logo-box text-right mt-2" weight="500" />
                    <ui-text
                        content="Com o ChatGuru você tem a opção de utilizar um único número de WhatsApp com múltiplos usuários. Desta forma você concentra os atendimentos e faz o rodízio entre os atendentes da forma que desejar."
                        class="text-right mt-10" large />
                    <ui-button class="btn_box w-150 mt-10" fill="soft" label="Saber mais" />
                </ui-v-box>
            </ui-column>
            <ui-column col="12" class="mt-13">
                <ui-img height="300" width="550"
                    src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
            </ui-column>


            <ui-column col="12" class="mt-13">
                <ui-img height="300" width="550" class=" ml-6"
                    src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
            </ui-column>
            <ui-column col="12" class="mt-15 mb-15">
                <ui-v-box class="ml-12" center>
                    <ui-text content="Automação WhatsApp com múltiplos usuários em um único número"
                        class="text-logo-box text-left mt-2" weight="500" />
                    <ui-text
                        content="Com o ChatGuru você tem a opção de utilizar um único número de WhatsApp com múltiplos usuários. Desta forma você concentra os atendimentos e faz o rodízio entre os atendentes da forma que desejar."
                        class="text-left mt-10" large />
                    <ui-button class="btn_box_left w-150 mt-10" fill="soft" label="Saber mais" />
                </ui-v-box>
            </ui-column>

            <ui-column col="12" class="mt-15 mb-15">
                <ui-v-box class="mr-12  ml-6" center>
                    <ui-text content="Automação WhatsApp com múltiplos usuários em um único número"
                        class="text-logo-box text-right mt-2" weight="500" />
                    <ui-text
                        content="Com o ChatGuru você tem a opção de utilizar um único número de WhatsApp com múltiplos usuários. Desta forma você concentra os atendimentos e faz o rodízio entre os atendentes da forma que desejar."
                        class="text-right mt-10" large />
                    <ui-button class="btn_box w-150 mt-10" fill="soft" label="Saber mais" />
                </ui-v-box>
            </ui-column>
            <ui-column col="12" class="mt-13">
                <ui-img height="300" width="550" class=""
                    src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
            </ui-column>


            <ui-column col="12" class="mt-13">
                <ui-img height="300" width="550" class=" ml-6"
                    src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
            </ui-column>
            <ui-column col="12" class="mt-15 mb-15">
                <ui-v-box class="ml-12" center>
                    <ui-text content="Automação WhatsApp com múltiplos usuários em um único número"
                        class="text-logo-box text-left mt-2" weight="500" />
                    <ui-text
                        content="Com o ChatGuru você tem a opção de utilizar um único número de WhatsApp com múltiplos usuários. Desta forma você concentra os atendimentos e faz o rodízio entre os atendentes da forma que desejar."
                        class="text-left mt-10" large />
                    <ui-button class="btn_box_left w-150 mt-10" fill="soft" label="Saber mais" />
                </ui-v-box>
            </ui-column>

            <ui-column col="12" class="mt-15 mb-15">
                <ui-v-box class="mr-12 ml-6" center>
                    <ui-text content="Automação WhatsApp com múltiplos usuários em um único número"
                        class="text-logo-box text-right mt-2" weight="500" />
                    <ui-text
                        content="Com o ChatGuru você tem a opção de utilizar um único número de WhatsApp com múltiplos usuários. Desta forma você concentra os atendimentos e faz o rodízio entre os atendentes da forma que desejar."
                        class="text-right mt-10" large />
                    <ui-button class="btn_box w-150 mt-10" fill="soft" label="Saber mais" />
                </ui-v-box>
            </ui-column>
            <ui-column col="12" class="mt-13">
                <ui-img height="300" width="550"
                    src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
            </ui-column>
        </ui-row>

        <ui-row>

            <ui-column class="footer px-8 pt-10" col="24">
                <ui-h-box nowrap center>
                    <ui-img class="logo mt-2 ml-3" :src="logo" height="43" width="166" />


                    <ui-column col="8">
                        <ui-v-box class="ml-20 mt-2">
                            <ui-text class="mb-1" weight="600" content="Institucional" />
                            <ui-button class="mb-1 btn_footer justify-start " fill="link" label="Sobre a ChatGuru" />
                            <ui-button class="mb-1 btn_footer justify-start " fill="link" label="Privacidade e Segurança" />
                            <ui-button class="mb-1 btn_footer justify-start" fill="link" label="Termos de Uso" />
                        </ui-v-box>
                    </ui-column>
                    <ui-column col="8">
                        <ui-v-box class="ml-20 mt-2">
                            <ui-text class="mb-1 btn_footer text-left" weight="600" content="Atendimento" />
                            <ui-button class="mb-1 btn_footer justify-start" fill="link" label="Contato" />
                            <ui-button class="mb-1 btn_footer justify-start" fill="link" label="Planos e Preços" />
                            <ui-button class="mb-1 btn_footer justify-start" fill="link" label="Programa de Parcerias" />
                            <ui-button class="mb-1 btn_footer justify-start" fill="link" label="Atualizações do Sistema " />
                            <ui-button class="mb-1 btn_footer justify-start" fill="link" label="Wiki Guru" />
                            <ui-button class="mb-1 btn_footer justify-start" fill="link" label="API" />
                        </ui-v-box>
                    </ui-column>
                    <ui-column col="8">
                        <ui-v-box class="ml-20 mt-2">
                            <ui-text class="mb-2" weight="600" content="Aprenda mais" />
                            <ui-button class="mb-2 btn_footer justify-start" fill="link"
                                label="Como Captar Emails Pelo WhatsApp" />
                            <ui-button class="mb-2 btn_footer justify-start" fill="link"
                                label="Como Usar Múltiplos Usuários no WhatsApp" />
                            <ui-button class="mb-2 btn_footer justify-start" fill="link"
                                label="Como Ultilizar Recados no WhatsApp" />
                            <ui-button class="mb-2 btn_footer justify-start" fill="link"
                                label="Como Ultilizar Recados no WhatsApp" />
                            <ui-button class="mb-2 btn_footer justify-start" fill="link" label="Como Usar WhatsApp Business" />
                            <ui-button class="mb-2 btn_footer justify-start" fill="link"
                                label="Como Fazer Campanha de WhatsApp com DimmiHub" />
                            <ui-button class="mb-2 btn_footer justify-start" fill="link" label="Como Reduzir link WhatsApp" />
                        </ui-v-box>
                    </ui-column>

                </ui-h-box>
                <ui-h-box class="">
                    <ui-img class="ml-5 mt-2" :src="instagram" height="30" width="30" />
                    <ui-img class="ml-5 mt-2" :src="twitter" height="30" width="30" />
                    <ui-img class="logo_face ml-5 mb-3" :src="facebook" height="44" width="30" />
                </ui-h-box>
                <ui-divider />
                <ui-text class="py-5" tiny
                    content="Todos os direitos reservados DimmiHub. Copyright ©2023 Dimmihub. CNPJ: 17.878.549/0001-86" />
            </ui-column>
        </ui-row>
    </ui-container>
</template>

<script lang="ts" setup>
import logo from "@/assets/logo_dimmihub.svg";
import print from "@/assets/diimmiprint.png";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";
import facebook from "@/assets/facebook.svg";
import { ref } from "vue";

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
    background: rgb(219, 193, 242);
    background: linear-gradient(348deg, rgba(219, 193, 242, 1) 0%, rgba(254, 245, 255, 1) 93%);



    .btn_link {
        color: #9333ea;
    }

    .btn_dimmi {
        background-color: #9333ea;
    }

    .btn_dimmi:hover {
        background-color: #7813d6;
    }

    .text-logo {
        font-size: 30px !important;
    }

    .text-logo-span {
        color: #9333ea !important;
        font-size: 30px;
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
        margin-left: 67%;
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

    .text-logo-box {
        font-size: 26px !important;
    }

    .footer {
        border-top: 1px solid #d7b4f8;
        background-color: #dbc1f2;

        .logo_face {
            margin-top: 1px;
        }

        .btn_footer {
            color: black;
        }
    }


}
</style>
