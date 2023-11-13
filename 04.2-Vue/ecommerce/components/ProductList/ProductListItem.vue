<template>
  <article
    class="grid product-container card"
    :class="{
      'product-container--has-discount': hasDiscount
    }"
  >
    <nuxtLink :to="`/product/${product.id}`" class="grid product-link">
      <div class="image">
        <img :src="product.images[0]" alt="" loading="lazy" />
      </div>
      <div class="product-container__content">
        <h2>
          {{ product.title }}
        </h2>
        <p>
          <span class="grey-text">Description: </span>
          <strong>{{ product.description }}</strong>
        </p>
        <p>
          <span class="grey-text">Brand: </span>
          {{ product.brand }}
        </p>
        <p><span class="grey-text">Category: </span>{{ product.category }}</p>
      </div>
    </nuxtLink>
    <div class="flex product-container__aside">
      <div class="text-align-end aside__price">
        <StaticPrice :quantity="product.price" />
      </div>
      <AddToCartButton :product="product" @addItem="onAddItem" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { Product } from '~/types';

//necesaria la const props para usar las props en script
const props = defineProps<{ product: Product }>();

//Cart
const { addToCart } = useCartStore();

const onAddItem = (product: Product) => {
  addToCart(product);
};

//buena practica quitar las cosas de js de template a aqui
const hasDiscount = computed(() => props.product.discountPercentage > 15);
</script>

<style lang="scss">
.product-container {
  align-items: flex-start;
  grid-template-columns: 1fr 100px;
}
.product-link {
  grid-template-columns: 210px 1fr;
}

.product-container--has-discount {
  background-color: rgba(yellow, 0.2);
}

.product-container__content {
  padding: 0 1em;
}

.product-container__aside {
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.image {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}
</style>
