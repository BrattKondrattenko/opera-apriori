import { nextTick, onActivated, onDeactivated, onMounted, onUnmounted } from 'vue'

export function usePageReveal(pageRef, options = {}) {
  let observer

  const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px 120px 0px',
    ...options.observer,
  }

  function resetRevealState() {
    const root = pageRef.value
    if (!root) return

    root.classList.remove('is-ready')
    root.querySelectorAll('.page-reveal').forEach((el) => {
      el.classList.remove('is-visible', 'is-spinning')
    })
  }

  async function startReveal() {
    observer?.disconnect()

    const root = pageRef.value
    if (!root) return

    resetRevealState()
    await nextTick()

    if (options.useReadyState) {
      requestAnimationFrame(() => {
        root.classList.add('is-ready')
      })
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('is-visible')
        options.onReveal?.(entry.target)
        observer.unobserve(entry.target)
      })
    }, observerOptions)

    root.querySelectorAll('.page-reveal').forEach((el) => observer.observe(el))
  }

  onMounted(startReveal)
  onActivated(startReveal)
  onDeactivated(() => {
    observer?.disconnect()
    resetRevealState()
  })
  onUnmounted(() => observer?.disconnect())
}
