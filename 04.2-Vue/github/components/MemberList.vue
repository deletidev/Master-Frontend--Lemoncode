<template>
  <div
    class="neumorphism members"
    ref="containerScroll"
    @scroll="scrollMembers"
  >
    <ul class="members__container">
      <li v-if="errors" class="error">
        <p>{{ errors }}</p>
      </li>

      <li
        v-for="member in memberListItem"
        :key="member.id"
        class="members__item"
      >
        <nuxt-link
          :to="`/member/${member.login}`"
          class="neumorphism-hov members__link"
          ><img class="members__img" :src="member.avatarUrl" />
          {{ member.login }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import type { MemberList } from '~/types';
const { item, setCompanyScroll } = useCompanyStore();
const containerScroll = ref<HTMLDivElement | null>(null);

defineProps<{
  memberListItem: MemberList[];
  errors: string;
}>();

const scrollMembers = (e: any) => {
  setCompanyScroll(e.target.scrollTop);
};
onMounted(() => {
  if (containerScroll.value) {
    containerScroll.value.scroll({
      top: item.scroll,
      behavior: 'smooth'
    });
  }
});
onUpdated(() => {
  if (containerScroll.value) {
    containerScroll.value.scroll({
      top: item.scroll,
      behavior: 'smooth'
    });
  }
});
</script>
<style lang="scss">
.members {
  height: 200px;
  flex-grow: 1;
  max-width: 900px;
  width: 100%;
  overflow-y: scroll;

  &__container {
    padding: calc(var(--space) * 2);
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: calc(var(--space) * 2);
    overflow-x: scroll;
    @media screen and (min-width: 600px) {
      padding: calc(var(--space) * 3);
      gap: calc(var(--space) * 3);
    }
    @media screen and (min-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__link {
    --border-radius: var(--inner-border-radius);
    display: flex;
    align-items: center;
    gap: calc(var(--space) * 2.5);
    padding: calc(var(--space) * 2);
    padding-inline: calc(var(--space) * 2.5);
    color: var(--primary-color);
    font-weight: 600;
    letter-spacing: 0.5px;
    text-decoration: underline;
    word-break: break-word;
  }

  &__img {
    height: 48px;
    width: 48px;
    border-radius: 100%;
    border: 1.5px solid var(--primary-color);
  }
}
.error {
  grid-column: 1 / 3;
  grid-row: 1;
  height: 1000px;
}
</style>
