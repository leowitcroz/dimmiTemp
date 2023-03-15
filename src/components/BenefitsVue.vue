<template>
  <ui-container class="banner p-10">
    <ui-box class="px-5 py-10" :shadow="10" >
      <ui-h-box>
        <ui-column center v-for="(item, key) in benefits" :key="key" col="6">
          <ui-h-box class="mx-2" nowrap center>
            <ui-v-box>
              <ui-avatar class="justify-center mb-3" size="70"
                src="https://media.gettyimages.com/id/184927564/pt/foto/close-up-de-ma%C3%A7%C3%A3s-vermelho-royal-gala.jpg?s=612x612&w=gi&k=20&c=s5vgwQDk4VezjZYV-E6OTN3th_An0bs3EnkLV8aBo4E=" />
              <ui-text weight="600" small class="my-3 text-center" :content="item.text" />
            </ui-v-box>
          </ui-h-box>
        </ui-column>
      </ui-h-box>
    </ui-box>

  </ui-container>
</template>

<script lang="ts" setup>
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

</script>

<style scoped lang="scss">
.banner {}
</style>