<script setup>
import { computed, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HomePage from './components/HomePage.vue'
import AfishaPage from './components/AfishaPage.vue'
import EventPage from './components/EventPage.vue'
import AboutPage from './components/AboutPage.vue'
import VisitorsPage from './components/VisitorsPage.vue'
import ContactsPage from './components/ContactsPage.vue'
import LoginPage from './components/LoginPage.vue'
import RefundPage from './components/RefundPage.vue'
import AppFooter from './components/AppFooter.vue'
import { useRoute } from './router'

const route = useRoute()

const pageClass = computed(() => {
  if (route.value === 'afisha' || route.value === 'event' || route.value === 'about' || route.value === 'visitors' || route.value === 'contacts' || route.value === 'login' || route.value === 'refund') return 'page--wide'
  return ''
})

watch(
  route,
  () => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  },
  { flush: 'post' }
)
</script>

<template>
  <div class="app">
    <LoginPage v-if="route === 'login'" />
    <RefundPage v-else-if="route === 'refund'" />
    <template v-else>
      <AppHeader :intro-lines="route === 'home'" />
      <div class="page" :class="pageClass">
        <main>
          <keep-alive>
            <HomePage v-if="route === 'home'" />
            <AfishaPage v-else-if="route === 'afisha'" />
            <EventPage v-else-if="route === 'event'" />
            <AboutPage v-else-if="route === 'about'" />
            <VisitorsPage v-else-if="route === 'visitors'" />
            <ContactsPage v-else-if="route === 'contacts'" />
          </keep-alive>
        </main>
        <AppFooter />
      </div>
    </template>
  </div>
</template>

<style scoped>
.app {
  background: var(--color-bg);
}

.page {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  background: var(--color-bg);
  overflow: hidden;
}

.page--wide {
  min-width: 1920px;
  overflow: visible;
}
</style>
