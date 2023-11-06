<template>
  <div class="pagination__container">
    <button
      type="button"
      @click="pageClick"
      :disabled="disablePrev"
      class="btn btn-secondary"
    >
      Anterior
    </button>
    <p>{{ page }} de {{ totalPage }}</p>
    <button
      type="button"
      @click="pageClick"
      :disabled="disableNext"
      class="btn btn-primary"
    >
      Siguinte
    </button>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{ page: number; totalPage: number }>();

const $emit = defineEmits(['page-click']);

const disablePrev = computed(() => (props.page === 1 ? true : false));
const disableNext = computed(() =>
  props.page === props.totalPage ? true : false
);

const pageClick = (e: any) => {
  if (e.target.textContent.trim().toLowerCase() === 'anterior') {
    $emit('page-click', props.page - 1);
  } else {
    $emit('page-click', props.page + 1);
  }
};
</script>
<style lang="scss">
.pagination {
  &__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: calc(var(--space) * 2);

    @media screen and (max-width: 320px) {
      gap: calc(var(--space) * 1);
    }
  }
}
</style>
