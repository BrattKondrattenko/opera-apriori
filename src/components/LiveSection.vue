<template>
  <section class="live reveal-group reveal-group--rich" ref="sectionRef">
    <hr class="divider-full reveal-item reveal-item--line-full" style="--delay: 0s" />

    <div class="live__outer container">
      <div class="live__block">
        <div class="live__bg reveal-item reveal-item--scale-in" style="--delay: 0.06s" aria-hidden="true">
          <img src="/assets/live-banner.png" alt="" loading="lazy" decoding="async" />
        </div>
        <hr class="live__divider-v reveal-item reveal-item--line-v" style="--delay: 0.18s" aria-hidden="true" />

        <div class="live__aside">
          <p class="live__desc body-text reveal-item reveal-item--from-right" style="--delay: 0.12s">
            Прямые трансляции концертов и записи<br />
            событий сезона 2026
          </p>

          <button class="btn-pill btn-pill--small live__btn reveal-item reveal-item--from-right" type="button" style="--delay: 0.24s">
            подробнее о трансляциях
          </button>
        </div>

        <h2 class="live__heading heading-2 reveal-item reveal-item--from-left" style="--delay: 0.2s">в прямом эфире</h2>
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.live__divider-v {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1px;
  height: 100%;
  border: none;
  background: var(--color-black);
  margin: 0;
  z-index: 1;
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
    justify-content: space-between;
    height: auto;
    min-height: clamp(320px, 45vw, 403px);
    padding: clamp(32px, 4vw, 46px) clamp(20px, 3vw, 32px);
  }

  .live__divider-v {
    display: none;
  }

  .live__bg {
    position: absolute;
    inset: 0;
  }

  .live__aside {
    position: relative;
    z-index: 2;
    max-width: none;
    align-items: flex-start;
    gap: 24px;
    margin-bottom: 0;
    padding: 0;
  }

  .live__desc {
    text-align: left;
  }

  .live__heading {
    position: relative;
    z-index: 2;
    margin-top: auto;
    padding-top: clamp(24px, 4vw, 48px);
  }
}

@media (max-width: 768px) {
  .live__desc br {
    display: none;
  }

  .live__btn {
    width: 100%;
    max-width: 100%;
  }
}
</style>
