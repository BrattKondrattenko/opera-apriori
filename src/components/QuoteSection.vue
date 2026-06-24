<template>
  <section class="quote reveal-group" ref="sectionRef">
    <div class="quote__images" aria-hidden="true">
      <img
        src="/assets/quote-piano.png"
        alt=""
        class="quote__img reveal-item"
        style="--delay: 0s"
      />
    </div>
    <blockquote class="quote__text">
      <p class="quote__line quote__line--first reveal-item" style="--delay: 0.12s">
        <span class="quote__indent" aria-hidden="true"></span>«Пусть слово будет госпожой гармонии,
      </p>
      <p class="quote__line reveal-item" style="--delay: 0.22s">а не её служанкой»</p>
    </blockquote>
    <cite class="quote__author reveal-item" style="--delay: 0.34s">Клаудио Монтеверди</cite>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRevealGroup } from '../composables/useRevealGroup'

const sectionRef = ref(null)
useRevealGroup(sectionRef, { observer: { threshold: 0.32 } })
</script>

<style scoped>
.quote {
  position: relative;
  width: 1920px;
  max-width: 100%;
  margin: 0 auto;
  height: 954px;
  background: var(--color-black);
  overflow: hidden;
}

.quote__images {
  position: absolute;
  inset: 0;
}

.quote__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}

.quote__text {
  position: absolute;
  left: 629px;
  top: 676px;
  width: 1133px;
  margin: 0;
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 46px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0;
  text-transform: uppercase;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 75;
}

.quote__line {
  margin: 0;
  white-space: nowrap;
}

.quote__indent {
  display: inline-block;
  width: 196px;
}

.quote__author {
  position: absolute;
  left: 1554px;
  top: 808px;
  margin: 0;
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 22px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.44px;
  font-style: normal;
  white-space: nowrap;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}
</style>
