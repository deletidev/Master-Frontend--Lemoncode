<template>
  <div class="neumorphism search">
    <form @submit.prevent="formSubmit" class="search__container">
      <input
        type="search"
        name="search"
        id="search"
        aria-label="Buscar"
        v-model="inputValue"
        class="neumorphism-inner search__input"
      />
      <button type="submit" class="btn btn-primary search__btn">Buscar</button>
    </form>
  </div>
</template>

<script setup type="ts">
import { ref } from 'vue';

const { item } = useCompanyStore();
const inputValue = ref(item.company)

const $emit = defineEmits(['form-submit']);

const formSubmit =()=>{
$emit('form-submit', inputValue.value );
}
</script>

<style lang="scss">
.search {
  padding: 0em;
  width: 100%;
  max-width: 900px;
  padding: calc(var(--space) * 2);
  @media screen and (min-width: 600px) {
    padding: calc(var(--space) * 3);
  }
  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--space) * 2);
  }
  &__input {
    --border-radius: var(--inner-border-radius);
    flex: 1;
    height: 100%;
    background-color: inherit;
    border: none;
    color: inherit;

    padding: calc(var(--space) * 1.5);
    padding-left: 20px;
    border: 1px solid transparent;

    &:focus {
      outline: none;
      border: 1px solid var(--primary-color);
    }
  }
  &__btn {
    min-width: 120px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
