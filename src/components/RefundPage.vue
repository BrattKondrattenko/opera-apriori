<template>
  <div class="login-page" ref="pageRef">
    <header class="login-page__header">
      <a href="#" class="login-page__back page-reveal page-reveal--from-left" style="--delay: 0.08s" @click.prevent="goBack">
        <img
          src="/assets/icon-back.svg"
          alt=""
          width="24"
          height="24"
          class="login-page__back-icon"
        />
        <span>назад</span>
      </a>

      <a href="#" class="login-page__logo page-reveal page-reveal--scale-in" style="--delay: 0.14s">
        <img
          src="/assets/logo-header.png"
          alt="Опера Априори"
          width="314"
          height="33"
        />
      </a>
    </header>

    <main class="login-page__main">
      <form class="login-form" @submit.prevent>
        <h1 class="login-form__title login-form__title--single page-reveal page-reveal--scale-in" style="--delay: 0.22s">
          возврат билетов
        </h1>

        <p class="login-form__desc body-text page-reveal" style="--delay: 0.28s">
          Укажите номер заказа, телефон или адрес электронной почты, который вы
          использовали при покупке билета
        </p>

        <label class="login-field page-reveal" style="--delay: 0.34s">
          <span class="login-field__label">номер заказа</span>
          <input
            v-model="orderNumber"
            class="login-field__input"
            type="text"
            autocomplete="off"
          />
          <span class="login-field__line page-reveal page-reveal--line" style="--delay: 0.42s" aria-hidden="true"></span>
        </label>

        <label class="login-field page-reveal" style="--delay: 0.4s">
          <span class="login-field__label">номер телефона или эл.почта</span>
          <input
            v-model="contact"
            class="login-field__input"
            type="text"
            autocomplete="tel email"
          />
          <span class="login-field__line page-reveal page-reveal--line" style="--delay: 0.48s" aria-hidden="true"></span>
          <span class="login-field__hint page-reveal" style="--delay: 0.52s">Телефон в формате +7 (999) 999-XX-XX</span>
        </label>

        <button class="login-form__submit page-reveal page-reveal--scale-in" type="submit" style="--delay: 0.56s">
          перейти к возврату
        </button>
      </form>
    </main>

    <footer class="login-page__footer login-page__footer--refund">
      <div class="login-page__footer-links page-reveal page-reveal--from-left" style="--delay: 0.6s">
        <a href="#" class="login-page__footer-text">правила возврата билетов</a>
        <a href="#" class="login-page__footer-text">служба поддержки</a>
      </div>
      <p class="login-page__footer-text login-page__footer-text--right page-reveal page-reveal--from-right" style="--delay: 0.66s">
        © 2014-2026 международный фестиваль вокальной музыки опера априори
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { navigate } from '../router'
import { usePageReveal } from '../composables/usePageReveal'

const pageRef = ref(null)
const orderNumber = ref('')
const contact = ref('')

usePageReveal(pageRef, { useReadyState: true })

function goBack() {
  if (window.history.length > 1) {
    window.history.back()
  } else {
    navigate('home')
  }
}
</script>

<style scoped>
.login-page {
  position: relative;
  width: 1920px;
  min-height: 100vh;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
}

/* ── Header ────────────────────────────────────────────────────── */
.login-page__header {
  position: relative;
  flex-shrink: 0;
  height: 144px;
}

.login-page__back {
  position: absolute;
  top: 111px;
  left: 202px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-heading);
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  color: var(--color-black);
  transition: opacity var(--transition);
}

.login-page__back:hover {
  opacity: 0.6;
}

.login-page__back-icon {
  transform: scaleX(-1);
}

.login-page__logo {
  position: absolute;
  top: 111px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
}

.login-page__logo img {
  height: 33px;
  width: auto;
}

/* ── Main form ─────────────────────────────────────────────────── */
.login-page__main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0 80px;
}

.login-form {
  width: 484px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.login-form__title {
  margin: 0 0 64px;
  font-family: var(--font-body);
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-black);
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 75;
}

.login-form__title--single {
  margin-bottom: 13px;
}

.login-form__desc {
  margin: 0 0 48px;
  text-align: center;
  color: var(--color-grey-text);
}

.login-field {
  display: block;
  width: 100%;
}

.login-field + .login-field {
  margin-top: 48px;
}

.login-field__label {
  display: block;
  font-family: var(--font-mono);
  font-size: 15.9px;
  line-height: 16px;
  text-transform: uppercase;
  color: var(--color-black);
}

.login-field__input {
  display: block;
  width: 100%;
  height: 12px;
  padding: 0;
  border: none;
  border-bottom: none;
  outline: none;
  background: transparent;
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 24px;
  color: var(--color-grey-text);
  box-sizing: border-box;
}

.login-field__line {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-black);
}

.login-field__hint {
  display: block;
  margin-top: 30px;
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  text-transform: none;
  color: var(--color-grey-text);
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

.login-form__submit {
  margin-top: 48px;
  width: 100%;
  padding: 24px 0;
  border: 1px solid var(--color-black);
  border-radius: 65px;
  background: transparent;
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: var(--color-black);
  transition:
    background-color var(--transition),
    color var(--transition),
    border-color var(--transition);
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 75;
}

.login-form__submit:hover {
  background-color: var(--color-black);
  color: var(--color-white);
}

/* ── Footer ────────────────────────────────────────────────────── */
.login-page__footer {
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: end;
  gap: 24px;
  padding: 0 202px 48px;
}

.login-page__footer--refund {
  grid-template-columns: 1fr 1fr;
}

.login-page__footer-links {
  display: flex;
  align-items: center;
  gap: 48px;
}

.login-page__footer-text {
  margin: 0;
  font-family: var(--font-body);
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: var(--color-grey-text);
  opacity: 0.5;
  transition: opacity var(--transition);
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 40;
}

a.login-page__footer-text:hover {
  opacity: 0.8;
}

.login-page__footer-text--right {
  text-align: right;
}
</style>
