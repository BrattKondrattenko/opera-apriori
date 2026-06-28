<template>
  <section class="hero">
    <div class="hero__media">
      <video
        ref="videoRef"
        class="hero__video"
        :class="{ 'hero__video--ready': videoReady }"
        muted
        loop
        playsinline
        preload="none"
        poster="/assets/hero-poster.jpg"
      >
        <source v-if="shouldLoadVideo" :src="videoSrc" type="video/mp4" />
      </video>
      <div class="hero__gradient"></div>
      <div class="hero__logo hero__logo--enter">
        <img src="/assets/hero-logo.svg" alt="Опера Априори" fetchpriority="high" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const videoRef = ref(null)
const shouldLoadVideo = ref(false)
const videoReady = ref(false)

const MOBILE_BREAKPOINT = '(max-width: 768px)'

function getVideoSrc() {
  if (typeof window === 'undefined') return '/assets/video-opera-desktop.mp4'
  return window.matchMedia(MOBILE_BREAKPOINT).matches
    ? '/assets/video-opera-mobile.mp4'
    : '/assets/video-opera-desktop.mp4'
}

const videoSrc = ref(getVideoSrc())

let cancelled = false

onMounted(() => {
  const startVideo = () => {
    if (cancelled) return
    shouldLoadVideo.value = true

    requestAnimationFrame(() => {
      const video = videoRef.value
      if (!video || cancelled) return

      video.addEventListener(
        'canplay',
        () => {
          if (!cancelled) videoReady.value = true
        },
        { once: true }
      )

      video.load()
      video.play().catch(() => {})
    })
  }

  if ('requestIdleCallback' in window) {
    requestIdleCallback(startVideo, { timeout: 2500 })
  } else {
    setTimeout(startVideo, 1200)
  }
})

onUnmounted(() => {
  cancelled = true
})
</script>

<style scoped>
.hero {
  padding: 24px 24px 113px 24px;
}

.hero__media {
  position: relative;
  width: 100%;
  height: clamp(400px, 54.8vw, 1053px);
  overflow: hidden;
}

.hero__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.hero__video--ready {
  opacity: 1;
}

.hero__gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
  pointer-events: none;
}

.hero__logo {
  position: absolute;
  bottom: 30px;
  left: 58px;
  right: 58px;
  z-index: 1;
}

.hero__logo img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: left bottom;
}

.hero__logo--enter {
  animation: hero-logo-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;
}

@keyframes hero-logo-in {
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 16px 16px 48px;
  }

  .hero__media {
    height: clamp(280px, 70vw, 600px);
  }

  .hero__logo {
    left: 20px;
    right: 20px;
    bottom: 20px;
  }
}
</style>
