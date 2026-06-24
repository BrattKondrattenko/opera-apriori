<template>
  <article
    class="afisha-event"
    :class="{ 'afisha-event--start': alignStart }"
  >
    <div class="afisha-event__image-wrap">
      <a v-if="slug" :href="eventHref" class="afisha-event__image-link">
        <img :src="image" :alt="title" class="afisha-event__image" loading="lazy" />
      </a>
      <img v-else :src="image" :alt="title" class="afisha-event__image" loading="lazy" />
    </div>
    <div class="afisha-event__content">
      <div class="afisha-event__main">
        <div class="afisha-event__header">
          <h3 class="afisha-event__title heading-3">
            <a v-if="slug" :href="eventHref" class="afisha-event__title-link">{{ title }}</a>
            <template v-else>{{ title }}</template>
          </h3>
          <p class="afisha-event__date heading-3">{{ date }}</p>
        </div>
        <p class="afisha-event__description">{{ description }}</p>
        <div class="afisha-event__meta-row body-m">
          <span>{{ age }}</span>
          <span>{{ time }}</span>
        </div>
      </div>
      <div class="afisha-event__footer">
        <p class="afisha-event__gathering body-m">{{ gathering }}</p>
        <a href="#" class="afisha-event__btn btn-pill btn-pill--small">купить билет</a>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  age: { type: String, required: true },
  time: { type: String, required: true },
  gathering: { type: String, required: true },
  image: { type: String, required: true },
  slug: { type: String, default: '' },
  alignStart: { type: Boolean, default: false },
})

const eventHref = computed(() => (props.slug ? `#/event/${props.slug}` : ''))
</script>

<style scoped>
.afisha-event {
  display: flex;
  gap: 28px;
  align-items: flex-start;
  padding: 40px 0 92px;
  border-bottom: 1px solid var(--color-black);
}

.afisha-event--start {
  align-items: flex-start;
}

.afisha-event__image-wrap {
  width: 484px;
  height: 294px;
  flex-shrink: 0;
  overflow: hidden;
  background: #d9d9d9;
}

.afisha-event__title-link {
  color: inherit;
  transition: opacity var(--transition);
}

.afisha-event__title-link:hover {
  opacity: 0.6;
}

.afisha-event__image-link {
  display: block;
  width: 100%;
  height: 100%;
}

.afisha-event__image-link:hover .afisha-event__image {
  transform: scale(1.03);
}

.afisha-event__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.afisha-event__content {
  width: 615px;
  height: 294px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.afisha-event__main {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.afisha-event__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.afisha-event__title,
.afisha-event__date {
  color: var(--color-black);
  font-size: 28px;
  line-height: 36px;
}

.afisha-event__description {
  max-width: 483px;
  font-family: var(--font-body);
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: var(--color-black);
  font-variation-settings: 'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750,
    'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 56;
}

.afisha-event__footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.afisha-event__meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 136px;
  color: var(--color-black);
}

.afisha-event__gathering {
  color: var(--color-black);
  margin: 0;
}
</style>
