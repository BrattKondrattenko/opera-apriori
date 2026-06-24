<template>
  <section class="marquee reveal-group" ref="sectionRef" aria-label="О фестивале">
    <hr class="divider-full reveal-item" style="--delay: 0s" />
    <div class="marquee__track reveal-item" style="--delay: 0.08s">
      <div class="marquee__content" v-for="n in 2" :key="n">
        <div v-for="(item, i) in items" :key="`${n}-${i}`" class="marquee__item">
          <img
            v-if="item.logo"
            :src="item.logo"
            :alt="item.alt"
            class="marquee__logo"
          />
          <div v-if="item.text" class="marquee__text body-text">
            <span>{{ item.text[0] }}</span>
            <span>{{ item.text[1] }}</span>
          </div>
          <img
            v-if="item.star"
            src="/assets/icon-star.svg"
            alt=""
            class="marquee__star"
            width="37"
            height="46"
          />
          <p v-if="item.heading" class="marquee__heading heading-3">
            {{ item.heading }}
          </p>
        </div>
      </div>
    </div>
    <hr class="divider-full reveal-item" style="--delay: 0.12s" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRevealGroup } from '../composables/useRevealGroup'

const sectionRef = ref(null)
useRevealGroup(sectionRef)

const items = [
  { logo: '/assets/marquee-logo-1.svg', alt: 'Опера Априори' },
  {
    text: ['Фестиваль вокальной', 'музыки 2014 – 2026'],
  },
  { star: true },
  { heading: 'ЖИВОЙ ЗВУК' },
  { logo: '/assets/marquee-logo-2.svg', alt: 'Опера Априори' },
  {
    text: ['Фестиваль вокальной', 'музыки 2014 – 2026'],
  },
  { star: true },
  { heading: 'кураторский подход' },
  { logo: '/assets/marquee-logo-1.svg', alt: 'Опера Априори' },
  {
    text: ['Фестиваль вокальной', 'музыки 2014 – 2026'],
  },
  { star: true },
  { heading: 'редкий репертуар' },
]
</script>

<style scoped>
.marquee {
  overflow: hidden;
}

.marquee__track {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
  padding: 52px 0;
}

.marquee__content {
  display: flex;
  align-items: center;
  gap: 46px;
  padding-right: 46px;
  flex-shrink: 0;
}

.marquee__item {
  display: flex;
  align-items: center;
  gap: 46px;
  flex-shrink: 0;
}

.marquee__logo {
  height: 36px;
  width: auto;
}

.marquee__text {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.4px;
  white-space: nowrap;
}

.marquee__star {
  flex-shrink: 0;
}

.marquee__heading {
  white-space: nowrap;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
