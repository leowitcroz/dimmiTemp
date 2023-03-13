<template>
 
    <router-view class="intro-x" v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>

</template>

<script lang="ts" setup>
</script>

<style lang="scss">
nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>