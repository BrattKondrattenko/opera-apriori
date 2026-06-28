<template>
  <section class="events reveal-group reveal-group--rich" ref="sectionRef">
    <div class="events__inner container">
      <h2 class="events__heading heading-2 reveal-item" style="--delay: 0s">БЛИЖАЙШИЕ СОБЫТИЯ</h2>
      <hr class="events__divider divider-content reveal-item reveal-item--line" style="--delay: 0.1s" />
      <div class="events__grid">
        <EventCard
          v-for="(event, index) in events"
          :key="event.title"
          v-bind="event"
          class="reveal-item"
          :class="cardRevealVariants[index]"
          :style="{ '--delay': `${0.18 + index * 0.12}s` }"
        />
      </div>
      <hr class="events__divider divider-content reveal-item reveal-item--line" style="--delay: 0.54s" />
      <div class="events__footer">
        <a href="#/afisha" class="events__link body-l reveal-item reveal-item--from-right" style="--delay: 0.64s">
          смотреть афишу мероприятий
          <img src="/assets/arrow-link.svg" alt="" width="46" height="21" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import EventCard from './EventCard.vue'
import { useRevealGroup } from '../composables/useRevealGroup'

const sectionRef = ref(null)

const events = [
  {
    title: 'ОТ РЕПЕРТУАРА К СЦЕНЕ',
    dateDay: '/assets/event-date-04.svg',
    tags: ['лекция', '12+'],
    image: '/assets/event-1.jpg',
  },
  {
    title: 'МОЛИТВА',
    dateDay: '/assets/event-date-07.svg',
    tags: ['концерт', '12+'],
    image: '/assets/event-2.jpg',
  },
  {
    title: 'ГОЛОСА ИТАЛЬЯНСКОГО БАРОККО',
    dateDay: '/assets/event-date-12.svg',
    tags: ['концерт', '12+'],
    image: '/assets/event-3.jpg',
  },
]

useRevealGroup(sectionRef)

const cardRevealVariants = [
  'reveal-item--from-left',
  'reveal-item--image',
  'reveal-item--from-right',
]
</script>

<style scoped>
.events {
}

.events__heading {
  color: var(--color-grey);
  margin-bottom: 37px;
  padding-top: 148px;
}

.events__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  position: relative;
  margin-top: 26px;
}

.events__grid::before,
.events__grid::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--color-black);
  transform: scaleY(0);
  transform-origin: top center;
  transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal-group--rich.is-visible .events__grid::before {
  transform: scaleY(1);
  transition-delay: 0.42s;
}

.reveal-group--rich.is-visible .events__grid::after {
  transform: scaleY(1);
  transition-delay: 0.52s;
}

.events__grid::before {
  left: calc(33.333% - 0.5px);
}

.events__grid::after {
  left: calc(66.666% - 0.5px);
}

.events__grid > :not(:last-child) {
  padding-right: 32px;
}

.events__grid > :not(:first-child) {
  padding-left: 32px;
}

.events__grid + .events__divider {
  margin-top: 28px;
}

.events__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 54px;
}

.events__link {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  color: var(--color-black);
  transition: gap var(--transition);
}

.events__link:hover {
  gap: 32px;
}

@media (max-width: 1100px) {
  .events__grid {
    grid-template-columns: 1fr;
  }

  .events__grid::before,
  .events__grid::after {
    display: none;
  }

  .events__grid > :not(:last-child) {
    padding-right: 0;
    border-bottom: 1px solid var(--color-black);
    padding-bottom: 60px;
    margin-bottom: 60px;
  }

  .events__grid > :not(:first-child) {
    padding-left: 0;
  }

  .events__footer {
    justify-content: center;
  }

  .events__heading {
    padding-top: clamp(60px, 10vw, 148px);
  }
}

@media (max-width: 768px) {
  .events__heading {
    padding-top: 48px;
    margin-bottom: 24px;
  }

  .events__footer {
    margin-top: 32px;
  }

  .events__link {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
}
</style>
