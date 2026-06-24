<template>
  <header
    class="header"
    :class="{
      'header--line-intro': introLines,
      'header--line-intro-active': introLines && linesActive,
    }"
  >
    <a href="#" class="header__logo">
      <img src="/assets/logo-header.png" alt="Опера Априори" width="314" height="33" />
    </a>
    <div class="header__nav-wrap">
      <hr class="header__line header__line--top divider-full" />
      <div class="header__nav container">
        <button class="header__lang body-l" type="button">
          <img src="/assets/icon-lang.svg" alt="" width="16" height="15" />
          ru
        </button>
        <nav class="header__links body-l">
          <a href="#/afisha">афиша</a>
          <a href="#/about">о фестивале</a>
          <a href="#/posetitelyam">посетителям</a>
          <a href="#/kontakty">контакты</a>
        </nav>
        <div class="header__icons">
          <button type="button" aria-label="Поиск">
            <img src="/assets/Button.svg" alt="" width="21" height="21" />
          </button>
          <button type="button" aria-label="Меню" @click="navigate('login')">
            <img src="/assets/icon-search.svg" alt="" width="21" height="21" />
          </button>
        </div>
      </div>
      <hr class="header__line header__line--bottom divider-full" />
    </div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { navigate } from '../router'

const props = defineProps({
  introLines: { type: Boolean, default: false },
})

const linesActive = ref(false)

watch(
  () => props.introLines,
  (enabled) => {
    linesActive.value = false
    if (!enabled) return

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        linesActive.value = true
      })
    })
  },
  { immediate: true }
)
</script>

<style scoped>
.header {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding-top: 6px;
  background: var(--color-bg);
  overflow: hidden;
}

.header__logo {
  display: flex;
  justify-content: center;
  padding: 18px 5px 24px;
}

.header__logo img {
  height: 33px;
  width: auto;
}

.header__nav-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header__line {
  margin: 0;
}

.header--line-intro .header__line {
  clip-path: inset(0 100% 0 0);
  transition: clip-path 1.15s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: clip-path;
}

.header--line-intro .header__line--bottom {
  clip-path: inset(0 0 0 100%);
}

.header--line-intro.header--line-intro-active .header__line--top {
  clip-path: inset(0 0 0 0);
  transition-delay: 0.18s;
}

.header--line-intro.header--line-intro-active .header__line--bottom {
  clip-path: inset(0 0 0 0);
  transition-delay: 0.34s;
}

.header--line-intro.header--line-intro-active .header__line {
  will-change: auto;
}

.header__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 22px;
}

.header__lang {
  flex: 0 0 112px;
}

.header__links {
  flex: 0 0 640px;
}

.header__icons {
  flex: 0 0 82px;
}

.header__lang {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-black);
}

.header__links {
  display: flex;
  justify-content: center;
  gap: 36px;
}

.header__links a {
  transition: opacity var(--transition), color var(--transition);
}

.header__links a:hover {
  opacity: 0.6;
}

.header__icons {
  display: flex;
  gap: 33px;
  justify-content: flex-end;
}

.header__icons button {
  display: flex;
  transition: opacity var(--transition);
}

.header__icons button:hover {
  opacity: 0.6;
}

@media (max-width: 1100px) {
  .header__nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px 36px;
  }

  .header__lang,
  .header__links,
  .header__icons {
    flex: unset;
  }

  .header__links {
    order: -1;
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>
