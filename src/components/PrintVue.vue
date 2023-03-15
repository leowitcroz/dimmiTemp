<template>
    <ui-container class="print p-10">
        <ui-h-box center>
            <ui-img class="radius-sm" :src="print" height="480" width="940" />
        </ui-h-box>

        <ui-h-box center class="mt-20">
            <ui-text class="mr-2 title_span" large content="Múltiplos usuários"/>
            <ui-text class="title" large content="com um único número de WhatsApp" />
        </ui-h-box>

        <ui-h-box center class="mt-6">
            <ui-text class="text" weight="400"
                content="Um único número de WhatsApp em um sistema automático que lhe permite adicionar a quantidade ideal de atendentes, seja qual for. Isso é mais otimização de recursos!" />
        </ui-h-box>
    </ui-container>
</template>

<script lang="ts" setup>
import print from "@/assets/diimmiprint.png";
</script>

<style scoped lang="scss">
.print {

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
        font-size: 20px;
    }

}
</style>