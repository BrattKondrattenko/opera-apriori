import { ref } from 'vue'

const route = ref(parseHash())

function parseHash() {
  const path = window.location.hash.replace(/^#\/?/, '')
  if (path === 'afisha') return 'afisha'
  if (path === 'event' || path.startsWith('event/')) return 'event'
  if (path === 'about') return 'about'
  if (path === 'posetitelyam') return 'visitors'
  if (path === 'kontakty') return 'contacts'
  if (path === 'login') return 'login'
  if (path === 'vozvrat') return 'refund'
  return 'home'
}

export function useRoute() {
  return route
}

export function navigate(to) {
  window.location.hash = to === 'home' ? '' : `#/${to}`
}

window.addEventListener('hashchange', () => {
  route.value = parseHash()
})
