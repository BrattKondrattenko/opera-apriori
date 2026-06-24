import { nextTick, onActivated, onDeactivated, onMounted, onUnmounted } from 'vue'

export function useRevealGroup(ref, options = {}) {
  let observer

  const observerOptions = {
    threshold: 0.28,
    rootMargin: '0px 0px -140px 0px',
    ...options.observer,
  }

  function reset() {
    ref.value?.classList.remove('is-visible')
  }

  async function start() {
    observer?.disconnect()
    reset()
    await nextTick()

    if (!ref.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
          options.onVisible?.()
        }
      },
      observerOptions
    )

    observer.observe(ref.value)
  }

  onMounted(start)
  onActivated(start)
  onDeactivated(() => {
    observer?.disconnect()
    reset()
  })
  onUnmounted(() => observer?.disconnect())
}
