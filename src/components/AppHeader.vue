<template>
  <header
    ref="headerRef"
    class="header"
    :class="{
      'header--line-intro': introLines,
      'header--line-intro-active': introLines && linesActive,
      'header--menu-open': menuOpen,
    }"
  >
    <a href="#" class="header__logo" @click="closeMenu">
      <img src="/assets/logo-header.png" alt="Опера Априори" width="314" height="33" />
    </a>
    <div class="header__nav-wrap">
      <hr class="header__line header__line--top divider-full" />
      <div class="header__nav container">
        <button class="header__lang body-l" type="button">
          <img src="/assets/icon-lang.svg" alt="" width="16" height="15" />
          ru
        </button>
        <nav class="header__links body-l" aria-label="Основная навигация">
          <a href="#/afisha">афиша</a>
          <a href="#/about">о фестивале</a>
          <a href="#/posetitelyam">посетителям</a>
          <a href="#/kontakty">контакты</a>
        </nav>
        <div class="header__actions">
          <div class="header__icons">
            <button type="button" aria-label="Поиск">
              <img src="/assets/Button.svg" alt="" width="21" height="21" />
            </button>
            <button type="button" aria-label="Войти" @click="navigate('login')">
              <img src="/assets/icon-search.svg" alt="" width="21" height="21" />
            </button>
          </div>
          <button
            class="header__burger"
            type="button"
            :aria-expanded="menuOpen"
            aria-controls="header-mobile-menu"
            aria-label="Меню"
            @click="toggleMenu"
          >
            <span class="header__burger-line"></span>
            <span class="header__burger-line"></span>
            <span class="header__burger-line"></span>
          </button>
        </div>
      </div>
      <hr class="header__line header__line--bottom divider-full" />

      <div
        id="header-mobile-menu"
        class="header__mobile-menu"
        :class="{ 'header__mobile-menu--open': menuOpen }"
        :aria-hidden="!menuOpen"
      >
        <nav class="header__mobile-links body-l" aria-label="Мобильная навигация">
          <a href="#/afisha" @click="closeMenu">афиша</a>
          <hr class="header__mobile-divider" />
          <a href="#/about" @click="closeMenu">о фестивале</a>
          <hr class="header__mobile-divider" />
          <a href="#/posetitelyam" @click="closeMenu">посетителям</a>
          <hr class="header__mobile-divider" />
          <a href="#/kontakty" @click="closeMenu">контакты</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { navigate, useRoute } from '../router'

const props = defineProps({
  introLines: { type: Boolean, default: false },
})

const route = useRoute()
const headerRef = ref(null)
const linesActive = ref(false)
const menuOpen = ref(false)

function updateHeaderOffset() {
  if (!headerRef.value) return
  const height = headerRef.value.getBoundingClientRect().height
  headerRef.value.style.setProperty('--header-mobile-offset', `${height}px`)
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function onKeydown(event) {
  if (event.key === 'Escape') closeMenu()
}

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

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) updateHeaderOffset()
})

watch(route, closeMenu)

onMounted(() => {
  updateHeaderOffset()
  window.addEventListener('resize', updateHeaderOffset)
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateHeaderOffset)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
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

.header__actions {
  flex: 0 0 82px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
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

.header__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  padding: 0;
  flex-shrink: 0;
}

.header__burger-line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-black);
  transition:
    transform var(--transition),
    opacity var(--transition);
  transform-origin: center;
}

.header--menu-open .header__burger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.header--menu-open .header__burger-line:nth-child(2) {
  opacity: 0;
}

.header--menu-open .header__burger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.header__mobile-menu {
  display: none;
}

@media (max-width: 1100px) {
  .header__nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px 36px;
  }

  .header__lang,
  .header__links,
  .header__actions {
    flex: unset;
  }

  .header__links {
    order: -1;
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;
  }
}

@media (max-width: 768px) {
  .header {
    overflow: visible;
  }

  .header__logo img {
    height: 26px;
  }

  .header__nav-wrap {
    gap: 12px;
    position: relative;
  }

  .header__nav {
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 12px;
  }

  .header__links {
    display: none;
  }

  .header__lang {
    font-size: 14px;
    line-height: 18px;
    gap: 8px;
  }

  .header__actions {
    gap: 16px;
  }

  .header__icons {
    gap: 20px;
  }

  .header__burger {
    display: flex;
  }

  .header__mobile-menu {
    display: block;
    position: fixed;
    inset: 0;
    top: var(--header-mobile-offset, 120px);
    z-index: 100;
    background: var(--color-bg);
    padding: 0 var(--side-padding) 48px;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition:
      opacity var(--transition),
      visibility var(--transition);
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .header__mobile-menu--open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .header__mobile-links {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
  }

  .header__mobile-links a {
    display: block;
    padding: 20px 0;
    color: var(--color-black);
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0;
    text-transform: uppercase;
    transition: opacity var(--transition);
  }

  .header__mobile-links a:hover {
    opacity: 0.6;
  }

  .header__mobile-divider {
    border: none;
    height: 1px;
    margin: 0;
    background: var(--color-black);
  }
}
</style>
