<template>
  <article class="event-card">
    <p class="event-card__title body-l">{{ title }}</p>
    <div class="event-card__meta">
      <div class="event-card__tags body-l">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
      <div class="event-card__date" aria-hidden="true">
        <img :src="dateDay" alt="" class="event-card__date-day" />
        <img src="/assets/event-date-slash.svg" alt="" class="event-card__date-slash" />
        <img src="/assets/event-date-09.svg" alt="" class="event-card__date-month" />
      </div>
    </div>
    <div class="event-card__image-wrap">
      <img :src="image" :alt="title" class="event-card__image" loading="lazy" />
    </div>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  dateDay: { type: String, required: true },
  tags: { type: Array, required: true },
  image: { type: String, required: true },
})
</script>

<style scoped>
.event-card {
  display: flex;
  flex-direction: column;
  padding-top: 28px;
}

.event-card__title {
  margin-bottom: clamp(48px, 7.3vw, 141px);
  color: var(--color-black);
}

.event-card__date {
  display: flex;
  align-items: flex-end;
  height: 94px;
}

.event-card__date-day {
  height: 93px;
  width: 95px;
  flex-shrink: 0;
}

.event-card__date-slash {
  height: 94px;
  width: 17.5px;
  flex-shrink: 0;
  margin-left: 8px;
  margin-right: 7px;
}

.event-card__date-month {
  height: 93px;
  width: 95px;
  flex-shrink: 0;
}

.event-card__meta {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
}

.event-card__tags {
  display: flex;
  gap: 64px;
  color: var(--color-black);
}

.event-card__image-wrap {
  width: 100%;
  height: 286px;
  overflow: hidden;
  position: relative;
}

.event-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.event-card:hover .event-card__image {
  transform: scale(1.05);
}

@media (max-width: 1100px) {
  .event-card__meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .event-card__tags {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .event-card__title {
    margin-bottom: 32px;
  }

  .event-card__tags {
    gap: 24px;
    flex-wrap: wrap;
  }

  .event-card__date {
    height: auto;
  }

  .event-card__date-day,
  .event-card__date-month {
    height: 64px;
    width: 65px;
  }

  .event-card__date-slash {
    height: 64px;
    width: 12px;
  }

  .event-card__image-wrap {
    height: clamp(200px, 55vw, 286px);
  }
}
</style>
