<template>
  <nav class="nav flex align-items-center justify-content-between container">
    <div>Logo</div>
    <div>Cart {{ totalItems }}</div>
  </nav>
</template>

<script setup lang="ts">
//con pinia si uso los valores reactivos no puede hacer directamente destructuring
// const { totalItems } = useCartStore();
const cart = useCartStore();
const { totalItems } = storeToRefs(cart);
</script>

<style lang="scss" scoped>
.nav {
  min-height: 80px;
  background-color: rgb(198, 247, 244);
  position: sticky;
  top: 0;
}
</style>
