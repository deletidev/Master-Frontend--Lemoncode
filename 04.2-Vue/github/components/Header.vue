<template>
  <div class="header">
    <div class="container container__header">
      <nuxt-link to="/" v-if="displayAct"> &lt Back</nuxt-link>
      <p v-if="displayAct">{{ item.company }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { item } = useCompanyStore();
const route = useRoute();

const displayAct = computed(() => {
  return route.name === 'member-login' ? true : false;
});
</script>

<style lang="scss">
.header {
  width: 100%;
  background-color: black;
  font-size: 14px;
  height: 42px;
  & p,
  a {
    color: white;
    display: block;
    margin-top: 14px;
    margin-bottom: 14px;
  }
  & p {
    margin-left: auto;
  }
}
.container__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
