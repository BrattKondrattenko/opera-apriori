<template>
  <section class="faq reveal-group reveal-group--rich" ref="sectionRef">
    <div class="faq__inner container">
      <div class="faq__header body-l">
        <span class="reveal-item reveal-item--from-left" style="--delay: 0s">что важно знать перед посещением</span>
        <span class="reveal-item reveal-item--from-right" style="--delay: 0.08s">faq</span>
      </div>
      <hr class="divider-content faq__divider reveal-item reveal-item--line" style="--delay: 0.14s" />
      <div class="faq__list">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="faq__item reveal-item"
          :class="[
            index % 2 === 0 ? 'reveal-item--from-left' : 'reveal-item--from-right',
            { 'faq__item--open': openIndex === index },
          ]"
          :style="{ '--delay': `${0.2 + index * 0.08}s` }"
        >
          <button
            class="faq__question"
            type="button"
            :aria-expanded="openIndex === index"
            @click="toggle(index)"
          >
            <span class="faq__question-text heading-3">{{ item.question }}</span>
            <span class="faq__icon" :class="{ 'faq__icon--open': openIndex === index }">
              <img src="/assets/icon-plus.svg" alt="" width="22" height="22" />
            </span>
          </button>
          <div class="faq__answer-wrap">
            <p class="faq__answer body-text">{{ item.answer }}</p>
          </div>
          <hr class="divider-content faq__divider" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRevealGroup } from '../composables/useRevealGroup'

const sectionRef = ref(null)
const openIndex = ref(null)

const items = [
  {
    question: 'Сколько в среднем длится концерт?',
    answer:
      'Продолжительность концерта зависит от программы и обычно составляет от 1,5 до 2,5 часов с учётом антракта.',
  },
  {
    question: 'За какое время до начала лучше прийти?',
    answer:
      'Рекомендуем прибыть за 30–40 минут до начала, чтобы спокойно занять место и ознакомиться с программой.',
  },
  {
    question: 'Что делать, если я опаздываю?',
    answer:
      'Вход в зал во время выступления возможен только в антракте. Просим планировать визит заранее.',
  },
  {
    question: 'Какой дресс-код действует на концертах?',
    answer:
      'Дресс-код свободный, но приветствуется элегантный повседневный или вечерний стиль.',
  },
  {
    question: 'Где посмотреть адрес и детали площадки?',
    answer:
      'Адрес и подробности о площадке указаны на странице каждого мероприятия в разделе «Афиша».',
  },
]

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}

useRevealGroup(sectionRef)
</script>

<style scoped>
.faq {
  padding: 80px 0 80px;
}

.faq__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-grey);
  margin-bottom: 63px;
  flex-wrap: wrap;
  gap: 16px;
}

.faq__divider {
  margin: 0;
}

.faq__list {
  margin-top: 40px;
}

.faq__item {
  margin-bottom: 0;
}

.faq__question {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 24px;
  padding: 0 0 21px;
  text-align: left;
  color: var(--color-grey);
}

.faq__question-text {
  flex: 1;
}

.faq__icon {
  flex-shrink: 0;
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--transition);
}

.faq__icon--open {
  transform: rotate(45deg);
}

.faq__answer-wrap {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s ease;
}

.faq__item--open .faq__answer-wrap {
  grid-template-rows: 1fr;
}

.faq__answer {
  overflow: hidden;
  opacity: 0;
  padding-bottom: 0;
  transition: opacity 0.3s ease 0.1s, padding 0.4s ease;
  color: var(--color-grey);
  text-transform: none;
  max-width: 900px;
}

.faq__item--open .faq__answer {
  opacity: 0.7;
  padding-bottom: 28px;
}

.faq__item .faq__divider {
  margin-bottom: 35px;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.95s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s);
}

.reveal-group--rich.is-visible .faq__item .faq__divider {
  transform: scaleX(1);
  transition-delay: calc(var(--delay, 0s) + 0.14s);
}

.faq__item:last-child .faq__divider {
  margin-bottom: 0;
}
</style>
