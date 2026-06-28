<template>
  <div class="afisha" ref="pageRef">
    <img
      class="afisha__hero"
      src="/assets/afisha-hero-source.png"
      alt="Афиша — осенний сезон 2026"
      width="1920"
      height="326"
      fetchpriority="high"
      decoding="async"
      loading="eager"
    />

    <hr class="afisha__divider divider-full page-reveal" style="--delay: 0.08s" />

    <div class="page-reveal" style="--delay: 0.12s">
      <AfishaToolbar />
    </div>

    <hr class="afisha__divider divider-full page-reveal" style="--delay: 0.16s" />

    <div class="afisha__list">
      <template v-for="(month, index) in months" :key="month.id">
        <hr v-if="index > 0" class="afisha__divider divider-full page-reveal" />
        <section class="afisha-month">
          <div class="afisha-month__grid">
            <div class="afisha-month__label-col">
              <h2
                class="afisha-month__label heading-2"
                :style="{ color: month.titleColor }"
              >{{ month.title }}</h2>
            </div>
            <div class="afisha-month__events">
              <AfishaEventRow
                v-for="(event, eventIndex) in month.events"
                :key="event.title"
                v-bind="event"
                class="page-reveal"
                :style="{ '--delay': `${eventIndex * 0.08}s` }"
              />
            </div>
          </div>
        </section>
      </template>
    </div>

    <hr class="afisha__divider afisha__divider--before-refund divider-full page-reveal" />

    <section class="afisha-refund page-reveal">
      <h2 class="afisha-refund__title heading-2">если планы изменились</h2>
      <a href="#/vozvrat" class="afisha-refund__btn btn-pill btn-pill--small">вернуть билет</a>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AfishaEventRow from './AfishaEventRow.vue'
import AfishaToolbar from './AfishaToolbar.vue'
import { afishaMonths as months } from '../data/afishaEvents.js'
import { usePageReveal } from '../composables/usePageReveal'

const pageRef = ref(null)

usePageReveal(pageRef)
</script>

<style scoped>
.afisha {
  width: 1920px;
  margin: 0 auto;
  background: var(--color-bg);
}

.afisha__hero {
  display: block;
  width: 1920px;
  height: 326px;
}

.afisha__divider {
  margin: 0;
}

.afisha__list {
  padding-top: 0;
}

.afisha-month__grid {
  display: grid;
  grid-template-columns: 382px 1127px;
  padding-left: 207px;
  align-items: start;
}

.afisha-month__label-col {
  align-self: stretch;
}

.afisha-month__label {
  position: sticky;
  top: 40px;
  margin-top: 40px;
  padding-bottom: 40px;
  background: var(--color-bg);
  z-index: 1;
  font-size: 46px;
  line-height: 52px;
}

.afisha-month + .afisha-month {
  margin-top: 0;
}

.afisha-month__events {
  width: 1127px;
}

.afisha-month__events :deep(.afisha-event:last-child) {
  border-bottom: none;
}

.afisha__divider--before-refund {
  margin-top: 0;
}

.afisha-refund {
  padding: 115px 0 140px;
  text-align: center;
}

.afisha-refund__title {
  color: #1d1d1d;
  margin-bottom: 63px;
  font-size: 46px;
  line-height: 52px;
}

.afisha-refund__btn {
  margin: 0 auto;
}
</style>
