<template>
  <div class="event-page" ref="pageRef">
    <section class="event-hero">
      <div class="event-hero__grid">
        <a href="#/afisha" class="event-hero__back page-reveal">
          <img src="/assets/icon-back.svg" alt="" width="24" height="24" class="event-hero__back-icon" />
          <span>назад</span>
        </a>

        <div class="event-hero__date-col page-reveal" style="--delay: 0.08s">
          <p class="event-hero__date">{{ event.date }}</p>
          <div class="event-hero__meta">
            <span class="event-hero__day-time">{{ event.dayTime }}</span>
            <span class="event-hero__age body-m">{{ event.age }}</span>
          </div>
        </div>

        <div class="event-hero__info page-reveal" style="--delay: 0.16s">
          <div class="event-hero__head">
            <h1 class="event-hero__title">{{ event.title }}</h1>
            <p class="event-hero__subtitle body-text">{{ event.subtitle }}</p>
          </div>
          <div class="event-hero__cta">
            <a href="#" class="event-hero__btn btn-pill btn-pill--small">купить билет</a>
            <div class="event-hero__price">
              <span>цена:</span>
              <span>{{ event.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr class="divider-full page-reveal" style="--delay: 0.2s" />

    <div class="event-meta-bar page-reveal" style="--delay: 0.1s">
      <div class="event-meta-bar__address body-m">
        <span>Адрес:</span>
        <span>{{ event.address }}</span>
      </div>
      <a href="#" class="event-meta-bar__loyalty">
        <span>программа лояльности</span>
        <img src="/assets/icon-loyalty-arrow.svg" alt="" width="48" height="21" />
      </a>
    </div>

    <div class="event-hero-image page-reveal page-reveal--image">
      <img :src="event.heroImage" :alt="event.title" width="1920" height="729" />
    </div>

    <section class="event-about page-reveal">
      <img
        class="event-about__text-svg"
        :src="event.about.textSvg"
        alt="О программе — Великий Монтеверди"
        width="1919"
        height="496"
      />
    </section>

    <section class="event-details">
      <aside class="event-details__sidebar page-reveal">
        <div class="event-details__sidebar-inner">
          <div class="event-details__sidebar-top">
            <div class="event-details__sidebar-date" aria-hidden="true">
              <img
                src="/assets/event-card-sidebar-date.png"
                alt=""
                width="223"
                height="95"
                class="event-details__date-image"
              />
            </div>
            <div class="event-details__sidebar-meta body-l">
              <span class="event-details__venue">{{ event.sidebar.venue }}</span>
              <span>{{ event.sidebar.dayTime }}</span>
            </div>
            <hr class="event-details__sidebar-line" />
          </div>
          <a href="#" class="event-details__calendar btn-pill btn-pill--small">добавь в календарь</a>
        </div>
      </aside>

      <div class="event-details__main">
        <section class="event-awaits">
          <h2 class="event-awaits__title heading-3 page-reveal">что вас ждет</h2>
          <div class="event-awaits__labels page-reveal" style="--delay: 0.08s">
            <span class="event-awaits__label body-m">{{ event.awaits.items[1].label }}</span>
            <span class="event-awaits__label body-m">{{ event.awaits.items[2].label }}</span>
          </div>
          <div class="event-awaits__grid">
            <div class="event-awaits__item page-reveal" style="--delay: 0s">
              <div class="event-awaits__image-wrap event-awaits__image-wrap--short">
                <img :src="event.awaits.items[0].image" alt="" loading="lazy" />
              </div>
              <p class="event-awaits__text body-text">{{ event.awaits.text }}</p>
            </div>
            <div class="event-awaits__item page-reveal" style="--delay: 0.1s">
              <div class="event-awaits__image-wrap event-awaits__image-wrap--tall">
                <img :src="event.awaits.items[1].image" alt="" loading="lazy" />
              </div>
            </div>
            <div class="event-awaits__item page-reveal" style="--delay: 0.2s">
              <div class="event-awaits__image-wrap event-awaits__image-wrap--short">
                <img :src="event.awaits.items[2].image" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section class="event-cast">
          <h2 class="event-cast__title heading-3 page-reveal">исполнительский состав</h2>
          <div class="event-cast__scroll">
            <div class="event-cast__track">
              <article
                v-for="(performer, index) in event.performers"
                :key="performer.name"
                class="event-cast__card page-reveal"
                :style="{ '--delay': `${index * 0.1}s` }"
              >
                <div class="event-cast__photo">
                  <img :src="performer.image" :alt="performer.name" loading="lazy" />
                </div>
                <div class="event-cast__info">
                  <h3 class="event-cast__name heading-3">{{ performer.name }}</h3>
                  <p class="event-cast__role body-m">{{ performer.role }}</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { eventMonteverdi as event } from '../data/eventMonteverdi.js'
import { usePageReveal } from '../composables/usePageReveal'

const pageRef = ref(null)

usePageReveal(pageRef)
</script>

<style scoped>
.event-page {
  width: 1920px;
  margin: 0 auto;
  background: var(--color-bg);
  color: var(--color-black);
}

/* ── Hero ── */

.event-hero {
  position: relative;
  height: 421px;
  padding: 93px 202px 37px;
  background: url('/assets/bgbg2.png') center / 100% 100% no-repeat;
}

.event-hero__grid {
  display: grid;
  grid-template-columns: 387px 387px 555px;
  align-items: start;
}

.event-hero__back {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding-top: 2px;
  font-family: var(--font-heading);
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  color: var(--color-black);
}

.event-hero__back-icon {
  transform: scaleX(-1);
}

.event-hero__date-col {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.event-hero__date {
  flex-shrink: 0;
  font-family: var(--font-body);
  font-size: 46px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: var(--color-grey);
  font-variation-settings: 'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750,
    'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 75;
}

.event-hero__meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 6px;
}

.event-hero__day-time {
  font-family: var(--font-heading);
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.32px;
  text-transform: uppercase;
}

.event-hero__age {
  color: var(--color-black);
}

.event-hero__info {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.event-hero__head {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.event-hero__title {
  font-family: var(--font-body);
  font-size: 46px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: var(--color-grey);
  font-variation-settings: 'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750,
    'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 75;
}

.event-hero__subtitle {
  color: var(--color-black);
  font-variation-settings: 'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750,
    'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 56;
}

.event-hero__cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 485px;
}

.event-hero__price {
  display: flex;
  align-items: center;
  gap: 37px;
  font-family: var(--font-heading);
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.32px;
  text-transform: uppercase;
}

/* ── Meta bar ── */

.event-meta-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1058px;
  margin: 37px 0 0 204px;
  padding-bottom: 28px;
}

.event-meta-bar__address {
  display: flex;
  align-items: center;
  gap: 75px;
  color: var(--color-black);
}

.event-meta-bar__loyalty {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: var(--font-mono);
  font-size: 15.875px;
  line-height: 16px;
  letter-spacing: 1.905px;
  text-transform: uppercase;
  opacity: 0.5;
  color: var(--color-black);
}

/* ── Hero image ── */

.event-hero-image {
  width: 1920px;
  height: 729px;
  overflow: hidden;
}

.event-hero-image img {
  width: 1920px;
  height: 729px;
  object-fit: cover;
}

/* ── About ── */

.event-about {
  position: relative;
  padding: 168px 0 0;
}

.event-about__label {
  position: absolute;
  left: 202px;
  top: 168px;
  width: 387px;
  z-index: 1;
  color: var(--color-grey);
  font-size: 28px;
  line-height: 36px;
}

.event-about__text-svg {
  display: block;
  width: 1920px;
  height: 496px;
}

.event-about__line {
  width: 1138px;
  margin: 90px 0 0;
  border: none;
  height: 1px;
  background: var(--color-black);
}

/* ── Details (sidebar + main) ── */

.event-details {
  display: grid;
  grid-template-columns: 488px 1fr;
  padding-bottom: 120px;
}

.event-details__sidebar {
  position: relative;
}

.event-details__sidebar-inner {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 40px;
  width: 488px;
  padding: 159px 0;
}

.event-details__sidebar-top {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  width: 256px;
}

.event-details__sidebar-date {
  height: 95px;
}

.event-details__date-image {
  height: 95px;
  width: auto;
}

.event-details__sidebar-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 121px;
  color: var(--color-black);
}

.event-details__venue {
  opacity: 0.5;
}

.event-details__sidebar-line {
  width: 256px;
  border: none;
  height: 1px;
  background: var(--color-black);
  margin: 0;
}

.event-details__calendar {
  width: 256px;
  padding-left: 0;
  padding-right: 0;
}

.event-details__main {
  width: 1432px;
  padding-left: 101px;
  padding-right: 0;
}

/* ── What awaits ── */

.event-awaits {
  padding-top: 159px;
}

.event-awaits__title {
  color: var(--color-grey);
  font-size: 28px;
  line-height: 36px;
  margin-bottom: 48px;
}

.event-awaits__labels {
  display: grid;
  grid-template-columns: 355px 355px 355px;
  column-gap: 32px;
  margin-bottom: 12px;
}

.event-awaits__labels .event-awaits__label:nth-child(1) {
  grid-column: 2;
  justify-self: center;
}

.event-awaits__labels .event-awaits__label:nth-child(2) {
  grid-column: 3;
  justify-self: center;
}

.event-awaits__label {
  color: var(--color-black);
  white-space: nowrap;
}

.event-awaits__grid {
  display: grid;
  grid-template-columns: 355px 355px 355px;
  column-gap: 32px;
  align-items: start;
}

.event-awaits__item {
  position: relative;
}

.event-awaits__image-wrap {
  width: 355px;
  overflow: hidden;
  background: #d9d9d9;
}

.event-awaits__image-wrap--short {
  height: 216px;
}

.event-awaits__image-wrap--tall {
  height: 358px;
}

.event-awaits__image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-awaits__text {
  width: 355px;
  color: #41413e;
  margin-top: 36px;
  font-variation-settings: 'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750,
    'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 56;
}

/* ── Cast ── */

.event-cast {
  margin-top: 120px;
}

.event-cast__title {
  color: var(--color-grey);
  font-size: 28px;
  line-height: 36px;
  margin-bottom: 42px;
}

.event-cast__scroll {
  width: 1363px;
  margin-left: -32px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
}

.event-cast__track {
  display: flex;
  gap: 32px;
  width: max-content;
  padding: 30px 32px 0;
}

.event-cast__card {
  flex: 0 0 484px;
  width: 484px;
}

.event-cast__photo {
  width: 484px;
  height: 714px;
  overflow: hidden;
  background: #d9d9d9;
}

.event-cast__photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-cast__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 37px;
  text-align: center;
}

.event-cast__name {
  color: var(--color-black);
  font-size: 28px;
  line-height: 36px;
  white-space: nowrap;
}

.event-cast__role {
  color: var(--color-black);
}
</style>
