<template>
  <div class="contacts-page" ref="pageRef">

    <h1 class="contacts-title heading-2 page-reveal" style="--delay: 0s">контакты</h1>

    <div class="contacts-info body-text page-reveal" style="--delay: 0.08s">
      <div class="contacts-info__block">
        <p class="contacts-info__label">По вопросам посещения и билетов:</p>
        <p class="contacts-info__value contacts-info__value--upper">tickets@operaapriori.com</p>
        <p class="contacts-info__value">+7 (495) 274-18-24</p>
      </div>

      <div class="contacts-info__block">
        <p class="contacts-info__label">Телефон:</p>
        <p class="contacts-info__value">+7 (495) 274-18-24</p>
      </div>

      <div class="contacts-info__block">
        <p class="contacts-info__label">Email:</p>
        <p class="contacts-info__value contacts-info__value--upper">info@operaapriori.com</p>
      </div>

      <div class="contacts-info__block">
        <p class="contacts-info__label">Понедельник — пятница</p>
        <p class="contacts-info__value contacts-info__value--upper">11:00 – 19:00</p>
      </div>
    </div>

    <form class="contacts-form page-reveal" style="--delay: 0.16s" @submit.prevent>
      <label class="contacts-field">
        <span class="contacts-field__label">эл.почта</span>
        <input class="contacts-field__input" type="email" />
      </label>

      <label class="contacts-field">
        <span class="contacts-field__label">номер телефона</span>
        <span class="contacts-field__phone">
          <input class="contacts-field__input" type="tel" />
          <span class="contacts-field__hint">Телефон в формате +7 (999) 999-XX-XX</span>
        </span>
      </label>

      <label class="contacts-field contacts-field--message">
        <span class="contacts-field__label">сообщение</span>
        <textarea class="contacts-field__input contacts-field__textarea" rows="1"></textarea>
      </label>

      <div class="contacts-checks">
        <label class="contacts-check">
          <input v-model="checks.offer" class="contacts-check__input" type="checkbox" />
          <span class="contacts-check__box" aria-hidden="true"></span>
          <span class="contacts-check__text">
            Подтверждаю ознакомление условий <strong>Оферты*</strong>
          </span>
        </label>

        <label class="contacts-check">
          <input v-model="checks.privacy" class="contacts-check__input" type="checkbox" />
          <span class="contacts-check__box" aria-hidden="true"></span>
          <span class="contacts-check__text">
            Даю согласие на обработку персональных данных в соответствии с
            <strong>Политикой конфиденциальности*</strong>
          </span>
        </label>

        <label class="contacts-check">
          <input v-model="checks.consent" class="contacts-check__input" type="checkbox" />
          <span class="contacts-check__box" aria-hidden="true"></span>
          <span class="contacts-check__text">
            Подтверждаю и даю <strong>Согласие на обработку персональных данных*</strong>
          </span>
        </label>
      </div>

      <button class="contacts-submit btn-pill btn-pill--submit" type="submit">отправить</button>
    </form>

    <div class="contacts-bottom page-reveal page-reveal--image" style="--delay: 0.24s">
      <hr class="contacts-divider" />

      <div class="contacts-social">
        <p class="contacts-social__label">Следите за нами:</p>
        <div class="contacts-social__links body-l">
          <a href="#">vk</a>
          <a href="#">rutube</a>
          <a href="#">instagram</a>
        </div>
      </div>

      <hr class="contacts-divider" />

      <div class="contacts-deco" aria-hidden="true">
        <img src="/assets/b2.png" alt="" width="1920" height="356" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { usePageReveal } from '../composables/usePageReveal'

const pageRef = ref(null)

const checks = reactive({
  offer: false,
  privacy: false,
  consent: false,
})

usePageReveal(pageRef)
</script>

<style scoped>
.contacts-page {
  position: relative;
  width: 1920px;
  height: 1376px;
  background: var(--color-bg);
  overflow: hidden;
}

/* ── Title ─────────────────────────────────────────────────────── */
.contacts-title {
  position: absolute;
  top: 137px;
  left: 202px;
  margin: 0;
  color: var(--color-black);
  white-space: nowrap;
}

/* ── Left column info ──────────────────────────────────────────── */
.contacts-info {
  position: absolute;
  top: 221px;
  left: 202px;
  width: 520px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: var(--color-black);
}

.contacts-info__label {
  font-weight: 700;
  margin-bottom: 8px;
}

.contacts-info__value {
  margin: 0;
  font-weight: 400;
}

.contacts-info__value + .contacts-info__value {
  margin-top: 4px;
}

.contacts-info__value--upper {
  text-transform: uppercase;
}

/* ── Form ──────────────────────────────────────────────────────── */
.contacts-form {
  position: absolute;
  top: 137px;
  left: 957px;
  width: 761px;
  display: flex;
  flex-direction: column;
  z-index: 1;
}

.contacts-field {
  display: block;
}

.contacts-field + .contacts-field {
  margin-top: 48px;
}

.contacts-field__label {
  display: block;
  font-family: var(--font-mono);
  font-size: 15.9px;
  line-height: 16px;
  text-transform: uppercase;
  color: var(--color-black);
}

.contacts-field__input {
  height: 11px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--color-black);
  outline: none;
  background: transparent;
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 11px;
  color: var(--color-grey-text);
  resize: none;
  margin: 0;
  min-height: 0;
  box-sizing: border-box;
}

.contacts-field__phone {
  display: block;
}

.contacts-field__textarea {
  padding-top: 148px;
  min-height: 149px;
}

.contacts-field__hint {
  display: block;
  margin-top: 12px;
  font-family: var(--font-body);
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0;
  text-transform: none;
  color: var(--color-grey-text);
  opacity: 0.6;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

/* ── Checkboxes ────────────────────────────────────────────────── */
.contacts-checks {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contacts-check {
  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: 14px;
  align-items: start;
  cursor: pointer;
}

.contacts-check__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.contacts-check__box {
  width: 18px;
  height: 18px;
  border: 1px solid var(--color-black);
  margin-top: 2px;
}

.contacts-check__input:checked + .contacts-check__box {
  background: var(--color-black);
  box-shadow: inset 0 0 0 3px var(--color-bg);
}

.contacts-check__text {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  text-transform: none;
  color: var(--color-black);
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

.contacts-check__text strong {
  font-weight: 700;
}

/* ── Submit ────────────────────────────────────────────────────── */
.contacts-submit {
  margin-top: 48px;
  flex-shrink: 0;
}

/* ── Bottom: social + background ───────────────────────────────── */
.contacts-bottom {
  position: absolute;
  top: 940px;
  left: 0;
  width: 1920px;
}

.contacts-divider {
  height: 1px;
  border: none;
  margin: 0 auto;
  background: var(--color-black);
}

.contacts-social {
  display: flex;
  align-items: center;
  padding: 28px 207px;
}

.contacts-social__label {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0;
  text-transform: none;
  color: var(--color-black);
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

.contacts-social__links {
  display: flex;
  gap: 48px;
  padding-left: 466px;
}

.contacts-social__links a {
  color: var(--color-black);
  transition: opacity var(--transition);
}

.contacts-social__links a:hover {
  opacity: 0.6;
}

.contacts-deco {
  width: 1920px;
  height: 356px;
  overflow: hidden;
}

.contacts-deco img {
  display: block;
  width: 1920px;
  height: 356px;
  max-width: none;
  object-fit: cover;
  object-position: center;
}
</style>
