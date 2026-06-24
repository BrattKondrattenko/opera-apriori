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
        <h1 class="login-form__title page-reveal page-reveal--scale-in" style="--delay: 0.22s">
          вход в<br />личный кабинет
        </h1>

        <label class="login-field page-reveal" style="--delay: 0.3s">
          <span class="login-field__label">электронная почта</span>
          <input
            v-model="email"
            class="login-field__input"
            type="email"
            autocomplete="email"
          />
          <span class="login-field__line page-reveal page-reveal--line" style="--delay: 0.38s" aria-hidden="true"></span>
        </label>

        <label class="login-field login-field--password page-reveal" style="--delay: 0.36s">
          <span class="login-field__label-row">
            <span class="login-field__label">пароль</span>
            <button
              class="login-field__toggle"
              type="button"
              :aria-label="showPassword ? 'Скрыть пароль' : 'Показать пароль'"
              @click="showPassword = !showPassword"
            >
              <img
                :src="showPassword ? '/assets/icon-eye.svg' : '/assets/icon-eye-off.svg'"
                alt=""
                width="24"
                height="24"
              />
            </button>
          </span>
          <input
            v-model="password"
            class="login-field__input"
            :type="showPassword ? 'text' : 'password'"
            autocomplete="current-password"
          />
          <span class="login-field__line page-reveal page-reveal--line" style="--delay: 0.44s" aria-hidden="true"></span>
        </label>

        <div class="login-form__links page-reveal" style="--delay: 0.46s">
          <a href="#" class="login-form__link">Забыли пароль</a>
          <a href="#" class="login-form__link login-form__link--register">Регистрация</a>
        </div>

        <button class="login-form__submit page-reveal page-reveal--scale-in" type="submit" style="--delay: 0.54s">
          войти
        </button>
      </form>
    </main>

    <footer class="login-page__footer">
      <p class="login-page__footer-text page-reveal page-reveal--from-left" style="--delay: 0.58s">
        используйте режим инкогнито на чужом компьютере
      </p>
      <a href="#" class="login-page__footer-text page-reveal" style="--delay: 0.64s">служба поддержки</a>
      <p class="login-page__footer-text login-page__footer-text--right page-reveal page-reveal--from-right" style="--delay: 0.7s">
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
const email = ref('')
const password = ref('')
const showPassword = ref(false)

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

.login-field__label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-top: 0;
  background: var(--color-black);
}

.login-field--password .login-field__input {
  margin-top: 0;
}

.login-field__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: var(--color-black);
  opacity: 0.7;
  transition: opacity var(--transition);
}

.login-field__toggle:hover {
  opacity: 1;
}

.login-form__links {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
}

.login-form__link {
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  text-transform: none;
  color: var(--color-grey-text);
  opacity: 0.6;
  transition: opacity var(--transition);
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

.login-form__link:hover {
  opacity: 0.9;
}

.login-form__link--register {
  color: var(--color-black);
  opacity: 1;
}

.login-form__link--register:hover {
  opacity: 0.7;
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

.login-page__footer-text {
  margin: 0;
  font-family: var(--font-body);
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: var(--color-grey-text);
  opacity: 0.5;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 40;
}

.login-page__footer-text--right {
  text-align: right;
}
</style>
