<template>
  <section class="hero">
    <div class="hero__media">
      <video
        class="hero__video"
        autoplay
        muted
        loop
        playsinline
        poster="/assets/hero-poster.jpg"
      >
        <source src="/assets/video-opera.mp4" type="video/mp4" />
      </video>
      <div class="hero__gradient"></div>
      <div class="hero__logo hero__logo--enter">
        <img src="/assets/hero-logo.svg" alt="Опера Априори" />
      </div>
    </div>
  </section>
</template>

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
</style>
