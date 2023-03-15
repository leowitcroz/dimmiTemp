<template>
    <ui-container fluid class="banner p-10">
        <ui-column>
            <ui-h-box center>
                <ui-img :src="logo" height="140" width="557" />
            </ui-h-box>

            <ui-h-box center class="mt-7">
                <ui-text class="mr-2 title_span" large content="Automação WhatsApp " />
                <ui-text class="title" large content="para vender mais e atender melhor" />
            </ui-h-box>

            <ui-h-box center class="mt-6">
                <ui-text class="text" weight="400" content="Aumente o volume de atendimento e gere mais leads para seus vendedores sem aumentar o custo com pessoal."/>
            </ui-h-box>

            <ui-h-box center class="mt-10">
                <ui-button class="btn_banner" size="lg" label="Quero saber mais"/>
            </ui-h-box>
            
        </ui-column>
    </ui-container>
</template>

<script lang="ts" setup>
import logo from "@/assets/logo_dimmihub.svg";
</script>

<style scoped lang="scss">
.banner {

    .title{
        font-size: 30px;
    }

    .title_span{
        font-size: 30px;
        color: #9333ea;
    }

    .text{
        width: 70%;
        text-align: center;
        font-size: 22px;
    }

    .btn_banner {
    background-color: #9333ea;
    border: 1px solid #9333ea;
    color: white;
  }

  .btn_banner:hover {
    background-color: #9a42eb;
    text-decoration: underline;
  }
}
</style>