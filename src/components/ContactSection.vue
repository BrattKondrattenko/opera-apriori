<template>
  <section class="contact reveal-group reveal-group--rich" ref="sectionRef">
    <div class="contact__inner container">
      <h2 class="contact__heading heading-2 reveal-item reveal-item--scale-in" style="--delay: 0s">остались вопросы?</h2>
      <p class="contact__sub body-text reveal-item" style="--delay: 0.1s">Связаться с нами</p>
      <form class="contact__form" @submit.prevent>
        <label class="contact__field reveal-item" style="--delay: 0.18s">
          <span class="contact__label">Сообщение</span>
          <textarea class="contact__input" rows="1" placeholder=" "></textarea>
          <span class="contact__line reveal-item reveal-item--line" style="--delay: 0.28s"></span>
        </label>
        <button class="btn-pill btn-pill--submit contact__btn reveal-item reveal-item--scale-in" type="submit" style="--delay: 0.34s">
          отправить
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRevealGroup } from '../composables/useRevealGroup'

const sectionRef = ref(null)
useRevealGroup(sectionRef, { observer: { threshold: 0.32 } })
</script>

<style scoped>
.contact {
  padding: 80px 0 80px;
}

.contact__inner {
  padding: 0 !important;
  max-width: 742px;
  margin: 0 auto;
  text-align: center;
}

.contact__heading {
  color: var(--color-grey-text);
  margin-bottom: 22px;
}

.contact__sub {
  color: var(--color-grey-text);
  opacity: 0.6;
  margin-bottom: 58px;
}

.contact__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
}

.contact__field {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 56px;
  text-align: left;
}

.contact__label {
  font-family: var(--font-mono);
  font-size: 15.9px;
  line-height: 16px;
  letter-spacing: 1.91px;
  text-transform: uppercase;
  color: var(--color-grey-text);
  opacity: 0.6;
}

.contact__input {
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--font-body);
  font-size: 18px;
  color: var(--color-grey-text);
  resize: none;
  min-height: 24px;
}

.contact__line {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-grey-text);
}

.contact__btn {
  margin-top: 0;
}
</style>
