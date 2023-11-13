<template>
  <section class="wrapper">
    <div class="flex align-items-center justify-content-between">
      <h1>Products</h1>
      total: {{ totalProducts }}
    </div>

    <input type="text" v-model="textFilter" />

    <ul class="product-list">
      <li v-for="product in filteredList" :key="product.id">
        <ProductListItem :product="product"></ProductListItem>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { Product } from '~/types';

//List of products
const { products } = await useProductsApi();

//Filter
const textFilter = ref('');
const filteredList = computed(() =>
  products.filter((product: Product) =>
    product.title.toLowerCase().includes(textFilter.value.toLowerCase())
  )
);
const totalProducts = computed(() => filteredList.value.length);
</script>

<style lang="scss" scoped>
.product-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
}
</style>
