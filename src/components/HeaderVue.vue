<template>
  <ui-container class="HeaderVue mb-10">
    <ui-column>
      <ui-h-box class="justify-around p-5" nowrap>
        <ui-img class="mt-2" :src="logo" height="43" width="166" />
        <ui-button class="btn_link" v-for="(item, key) in btn_link" :key="key" size="lg" :label="item.label"
          fill="link" />
        <ui-button class="btn_header" label="Soluçôes" size="lg" />
      </ui-h-box>
    </ui-column>
  </ui-container>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import logo from "@/assets/logo_dimmihub.svg";

defineProps({
  msg: { type: String, default: "" },
});

const store = useStore();

const count = computed(() => store.state.counter.count);

const btn_link = ref([
  { label: "Soluçôes" },
  { label: "Soluçôes" },
  { label: "Soluçôes" },
  { label: "Soluçôes" },
  { label: "Soluçôes" },
]);
</script>

<style lang="scss" scoped>
.HeaderVue {
  .btn_link {
    color: #9333ea;
  }

  .btn_header {
    background-color: #9333ea;
    border: 1px solid #9333ea;
    color: white;
  }

  .btn_header:hover {
    background-color: #9a42eb;
    text-decoration: underline;
  }
}
</style>