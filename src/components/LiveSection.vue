<template>
  <section class="live reveal-group reveal-group--rich" ref="sectionRef">
    <hr class="divider-full reveal-item reveal-item--line-full" style="--delay: 0s" />

    <div class="live__outer container">
      <div class="live__block">
        <div class="live__bg reveal-item reveal-item--scale-in" style="--delay: 0.06s" aria-hidden="true">
          <picture>
            <source media="(min-width: 1101px)" srcset="/assets/live-banner.png" />
            <img alt="" />
          </picture>
        </div>

        <h2 class="live__heading heading-2 reveal-item reveal-item--from-left" style="--delay: 0.2s">в прямом эфире</h2>

        <div class="live__aside">
          <p class="live__desc body-text reveal-item reveal-item--from-right" style="--delay: 0.12s">
            Прямые трансляции концертов и записи<br />
            событий сезона 2026
          </p>

          <button class="btn-pill btn-pill--small live__btn reveal-item reveal-item--from-right" type="button" style="--delay: 0.24s">
            подробнее о трансляциях
          </button>
        </div>
      </div>
    </div>

    <hr class="divider-full reveal-item reveal-item--line-full" style="--delay: 0.1s" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRevealGroup } from '../composables/useRevealGroup'

const sectionRef = ref(null)
useRevealGroup(sectionRef, { observer: { threshold: 0.32 } })
</script>

<style scoped>
.live {
  position: relative;
}

.live__outer {
  display: flex;
  justify-content: center;
}

.live__block {
  position: relative;
  height: 403px;
  width: 100%;
  max-width: 1512px;
  overflow: hidden;
}

.live__bg {
  position: absolute;
  inset: 0;
}

.live__bg img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.live__aside {
  position: absolute;
  top: 46px;
  bottom: 46px;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 427px;
}

.live__desc {
  text-align: right;
  mix-blend-mode: multiply;
}

.live__btn {
  flex-shrink: 0;
}

.live__heading {
  position: absolute;
  top: 324px;
  left: 49px;
  z-index: 2;
  opacity: 0.9;
}

.reveal-group--rich.is-visible .live__heading.reveal-item {
  opacity: 0.9;
}

@media (max-width: 1100px) {
  .live__block {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    height: auto;
    min-height: 0;
    padding: clamp(32px, 5vw, 44px) clamp(24px, 4vw, 40px) clamp(56px, 10vw, 80px);
    background: var(--color-bg);
    gap: clamp(20px, 4vw, 28px);
    overflow: visible;
  }

  .live__block::after {
    content: 'live';
    position: absolute;
    right: clamp(12px, 3vw, 24px);
    bottom: clamp(8px, 2vw, 16px);
    font-family: var(--font-body);
    font-size: clamp(88px, 24vw, 140px);
    font-weight: 700;
    line-height: 0.85;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(15, 15, 15, 0.1);
    pointer-events: none;
    z-index: 0;
    font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
      "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 75;
  }

  .live__bg {
    display: none;
  }

  .live__heading {
    position: relative;
    top: auto;
    left: auto;
    z-index: 1;
    margin: 0;
    padding: 0;
    opacity: 1;
  }

  .reveal-group--rich.is-visible .live__heading.reveal-item {
    opacity: 1;
  }

  .live__aside {
    position: relative;
    z-index: 1;
    max-width: none;
    align-items: flex-start;
    gap: clamp(24px, 5vw, 32px);
    margin-bottom: 0;
    padding: 0 0 clamp(8px, 2vw, 12px);
  }

  .live__desc {
    text-align: left;
    mix-blend-mode: normal;
  }
}

@media (max-width: 768px) {
  .live__block {
    padding: 32px 20px 64px;
  }

  .live__block::after {
    font-size: clamp(72px, 20vw, 100px);
    bottom: 12px;
  }

  .live__desc br {
    display: none;
  }

  .live__btn {
    width: 100%;
    max-width: 100%;
  }
}
</style>
