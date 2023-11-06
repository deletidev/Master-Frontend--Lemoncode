<template>
  <div class="container">
    <div class="member__container neumorphism">
      <div>
        <h1>{{ memberNameSpaced }}</h1>
        <p class="text-center">Company: {{ item.company }}</p>
      </div>
      <div class="member__images">
        <img
          :src="member.avatarUrl"
          alt="{{ member.login }}"
          class="member__img"
        />
        <a
          :href="member.htmlUrl"
          target="_blank"
          class="member__icon"
          :aria-label="memberLinkAria"
          title="Ver Github"
        ></a>
      </div>
      <div v-if="member.bio || member.email" class="member__text">
        <p v-if="member.bio">
          <span class="member__span">Bio:</span> {{ member.bio }}
        </p>
        <p v-if="member.email">
          <span class="member__span">Email:</span> {{ member.avatarUrl }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { memberService } from '~/services/member-list';

const { item } = useCompanyStore();
const route = useRoute();
const login = route.params.login as string;
const member = mapMemberToVM(await memberService.getMemberByLogin(login));
let memberNameSpaced = member.login;
let memberLinkAria = member.login;

if (member.name) {
  memberNameSpaced = member.name.split(/(?=[A-Z])/).join(' ');
  memberLinkAria = `Ir a Github de ${memberNameSpaced}`;
}
</script>

<style lang="scss">
.member {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.3;
    gap: calc(var(--space) * 2);
    padding: calc(var(--space) * 2);

    @media screen and (min-width: 600px) {
      padding: calc(var(--space) * 3);
    }
  }
  &__span {
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-color);
  }
  &__images {
    position: relative;
  }
  &__img {
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: 1px solid var(--primary-color);
  }

  &__icon {
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    border: 1px solid var(--primary-color);
    background-color: var(--primary-color);
    background-image: url('~/assets/icon/github-icon.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__text p:last-child {
    margin-bottom: 0;
  }
}
</style>
