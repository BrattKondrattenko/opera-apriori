<template>
  <div class="visitors-page" ref="pageRef">

    <!-- Intro -->
    <div class="intro heading-2 page-reveal" style="--delay: 0s">
      <p class="mb0">Чтобы посещение концерта прошло комфортно, рекомендуем</p>
      <p class="mb0">заранее ознакомиться с основными правилами. Время начала, адрес площадки и особенности конкретного события всегда указаны</p>
      <p>на странице мероприятия.</p>
    </div>

    <hr class="divider divider--wide divider--1 page-reveal" style="--delay: 0.08s" />

    <!-- Правила посещения -->
    <img class="rules-title-img page-reveal" style="--delay: 0s" src="/assets/visitors-rules-title.svg" alt="" width="186" height="63" />
    <p class="rules-title-tail heading-2 page-reveal" style="--delay: 0.06s">посещения</p>

    <button class="rules-download page-reveal" style="--delay: 0.12s" type="button" aria-label="Скачать правила посещения">
      <img src="/assets/visitors-download-icon.svg" alt="" width="25" height="24" />
    </button>
    <div class="rules-download-text page-reveal" style="--delay: 0.16s">
      <p class="rules-download-label">скачать правила посещения</p>
      <p class="rules-download-meta body-text">pdf, 2.3 MB</p>
    </div>

    <!-- Rules rows -->
    <div class="rules-row rules-row--1 page-reveal" style="--delay: 0s">
      <hr class="rules-row__line" />
      <div class="rules-row__content">
        <p class="rules-row__title">Приходите заранее</p>
        <div class="rules-row__desc body-text">
          <p class="mb0">Рекомендуем приезжать не позднее чем за 20–30 минут</p>
          <p>до начала концерта, чтобы спокойно пройти входной контроль, сдать верхнюю одежду и занять своё место.</p>
        </div>
      </div>
    </div>

    <div class="rules-row rules-row--2 page-reveal" style="--delay: 0.06s">
      <hr class="rules-row__line" />
      <div class="rules-row__content rules-row__content--late">
        <p class="rules-row__title">Опоздание</p>
        <div class="rules-row__desc body-text">
          <p class="mb0">После начала концерта вход в зал может быть ограничен</p>
          <p>в зависимости от регламента площадки и характера программы. Если вы опаздываете, сотрудники площадки подскажут, когда будет возможен вход.</p>
        </div>
      </div>
    </div>

    <div class="rules-row rules-row--3 page-reveal" style="--delay: 0.12s">
      <hr class="rules-row__line" />
      <div class="rules-row__content rules-row__content--etiquette">
        <p class="rules-row__title">Правила хорошего тона</p>
        <div class="rules-row__desc body-text">
          <p class="mb0">Пожалуйста, соблюдайте тишину во время концерта.</p>
          <p class="mb0">Просим воздержаться от разговоров и использования шуршащих предметов, которые могут отвлекать артистов</p>
          <p class="mb0">и зрителей. Перед началом концерта отключите звук</p>
          <p>на мобильных телефонах и других электронных устройствах. Также просим не покидать зал во время исполнения произведения. Если вам необходимо выйти, лучше дождаться паузы между номерами или антракта.</p>
        </div>
      </div>
    </div>

    <div class="rules-row rules-row--4 page-reveal" style="--delay: 0.18s">
      <hr class="rules-row__line" />
      <div class="rules-row__content rules-row__content--photo">
        <p class="rules-row__title">Фото и видеосъёмка</p>
        <p class="rules-row__desc body-text">
          Во время концерта фото- и видеосъёмка может быть ограничена. Просим ориентироваться на правила конкретной площадки и уважать артистов и зрителей.
        </p>
      </div>
    </div>

    <hr class="divider divider--wide divider--2 page-reveal" style="--delay: 0s" />

    <!-- Дресс-код -->
    <p class="dress-heading heading-2 page-reveal" style="--delay: 0.06s">Дресс-код</p>
    <img class="dress-subtitle page-reveal" style="--delay: 0.12s" src="/assets/visitors-dresscode-subtitle.svg" alt="Вечерний коктейльный стиль" />

    <p class="dress-desc body-m page-reveal" style="--delay: 0.18s">
      Дресс-код Opera Apriori предполагает собранный, элегантный и театрально-официальный внешний вид. Повседневная, спортивная, слишком открытая или неформальная одежда не соответствует формату фестиваля.
    </p>

    <div class="dress-hero page-reveal page-reveal--image" style="--delay: 0.1s">
      <img class="dress-hero__photo" src="/assets/visitors-dresscode-hero.jpg" alt="" />
      <img class="dress-hero__overlay" src="/assets/visitors-photo-overlay.png" alt="" />
    </div>

    <p class="dress-label dress-label--women body-m page-reveal" style="--delay: 0s">для женщин</p>
    <img
      class="dress-women-photo page-reveal page-reveal--image"
      style="--delay: 0.08s"
      src="/assets/visitors-women-photo-final.png"
      alt=""
      width="290"
      height="389"
    />
    <div class="dress-women-text body-m page-reveal" style="--delay: 0.14s">
      <p class="mb0">Рекомендуются платья или юбки длиной ниже колена, а также элегантные вечерние или коктейльные образы</p>
      <p class="dress-women-text__tail">сдержанного характера.</p>
    </div>

    <p class="dress-label dress-label--men body-m page-reveal" style="--delay: 0s">для мужчин</p>
    <img
      class="dress-men-photo page-reveal page-reveal--image"
      style="--delay: 0.08s"
      src="/assets/visitors-man-photo-final.png"
      alt=""
      width="290"
      height="389"
    />
    <p class="dress-men-text body-m page-reveal" style="--delay: 0.14s">
      Рекомендуется классический костюм. Образ должен соответствовать формату торжественного вечернего мероприятия.
    </p>

    <!-- Программа лояльности -->
    <p class="loyalty-intro heading-2 page-reveal" style="--delay: 0s">
      <span class="loyalty-intro__spacer" aria-hidden="true"></span>Opera Apriori ценит постоянных зрителей и стремится делать посещение фестиваля ещё более удобным и приятным. Программа лояльности создана для тех, кто возвращается к фестивалю снова, следит за афишей и хочет оставаться ближе к его событиям.
    </p>

    <div class="loyalty-item loyalty-item--1 page-reveal" style="--delay: 0.08s">
      <p class="loyalty-item__title">Ранний доступ</p>
      <p class="loyalty-item__desc body-text">
        Участники программы первыми получают информацию о новых концертах, старте продаж и специальных событиях фестиваля.
      </p>
    </div>

    <div class="loyalty-item loyalty-item--2 page-reveal" style="--delay: 0.14s">
      <p class="loyalty-item__title">Удобство повторных посещений</p>
      <div class="loyalty-item__desc body-text">
        <p class="mb0">Участники программы первыми получают информацию о новых концертах, старте продаж</p>
        <p>и специальных событиях фестиваля.</p>
      </div>
    </div>

    <div class="loyalty-item loyalty-item--3 page-reveal" style="--delay: 0.2s">
      <p class="loyalty-item__title">Персональные предложения</p>
      <p class="loyalty-item__desc body-text">
        Для постоянных зрителей могут быть доступны специальные условия на отдельные события, подборки программ и закрытые анонсы.
      </p>
    </div>

    <!-- Скидки и льготы -->
    <p class="discounts-title heading-2 page-reveal" style="--delay: 0s">скидки и льготы</p>
    <hr class="discounts-line discounts-line--top page-reveal" style="--delay: 0.06s" />
    <hr class="discounts-line discounts-line--bottom page-reveal" style="--delay: 0.18s" />
    <hr class="discounts-vline discounts-vline--1 page-reveal" style="--delay: 0.1s" />
    <hr class="discounts-vline discounts-vline--2 page-reveal" style="--delay: 0.1s" />

    <p class="discounts-col-title discounts-col-title--1 body-l page-reveal" style="--delay: 0.12s">студентам и обучающимся</p>
    <p class="discounts-col-title discounts-col-title--2 body-l page-reveal" style="--delay: 0.16s">пенсионерам и инвалидам</p>
    <p class="discounts-col-title discounts-col-title--3 body-l page-reveal" style="--delay: 0.2s">ветеранам и участникам сво</p>

    <p class="discounts-col-text discounts-col-text--1 body-text page-reveal" style="--delay: 0.24s">
      На отдельные концерты могут быть<br />
      предусмотрены специальные условия для студентов<br />
      при предъявлении студенческого билета.
    </p>
    <p class="discounts-col-text discounts-col-text--2 body-text page-reveal" style="--delay: 0.28s">
      Для пенсионеров и людей с инвалидностью<br />
      на отдельные мероприятия могут быть предусмотрены<br />
      льготные условия посещения.
    </p>
    <p class="discounts-col-text discounts-col-text--3 body-text page-reveal" style="--delay: 0.32s">
      Для ветеранов и участников СВО на отдельные концерты могут действовать специальные условия при предъявлении подтверждающих документов.
    </p>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePageReveal } from '../composables/usePageReveal'

const pageRef = ref(null)

usePageReveal(pageRef, {
  useReadyState: true,
  observer: { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
})
</script>

<style scoped>
/* ════════════════════════════════════════════════════════════════
   PAGE — fixed 1920px, Figma coords minus 137px header offset
   ════════════════════════════════════════════════════════════════ */
.visitors-page {
  position: relative;
  width: 1920px;
  height: 4630px;
  background: var(--color-bg);
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.visitors-page.is-ready {
  opacity: 1;
}

.visitors-page .page-reveal {
  opacity: 0;
  transform: translateY(44px);
  filter: blur(8px);
  transition:
    opacity 1.35s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s),
    transform 1.35s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s),
    filter 1.35s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s);
  will-change: opacity, transform, filter;
}

.visitors-page .page-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.visitors-page .page-reveal--image {
  transform: translateY(36px) scale(1.025);
}

.visitors-page .page-reveal--image.is-visible {
  transform: translateY(0) scale(1);
}

.visitors-page .dress-label.page-reveal.is-visible {
  transform: translate(-50%, -50%);
}

.visitors-page .dress-desc.page-reveal.is-visible,
.visitors-page .dress-women-text.page-reveal.is-visible,
.visitors-page .dress-men-text.page-reveal.is-visible {
  transform: translateY(-50%);
}

.visitors-page .divider.page-reveal.is-visible {
  transform: translateX(-50%);
}

.visitors-page .discounts-line.page-reveal.is-visible {
  transform: translateX(-50%);
}

.mb0 { margin-bottom: 0; }

/* ── Intro ─────────────────────────────────────────────────────── */
.intro {
  position: absolute;
  top: 92px;
  left: calc(50% - 753px);
  width: 1528px;
  line-height: 52px;
  color: var(--color-grey);
  white-space: pre-wrap;
}

/* ── Dividers ──────────────────────────────────────────────────── */
.divider {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2308px;
  height: 1px;
  border: none;
  margin: 0;
  background: var(--color-black);
}

.divider--1 { top: 415px; }
.divider--2 { top: 1191px; }

/* ── Правила посещения — left column ─────────────────────────── */
.rules-title-img {
  position: absolute;
  top: 479px;
  left: 202px;
  width: 186px;
  height: 63px;
  pointer-events: none;
}

.rules-title-tail {
  position: absolute;
  top: 541px;
  left: calc(50% - 759px);
  line-height: 52px;
  color: var(--color-grey);
  white-space: nowrap;
}

.rules-download {
  position: absolute;
  top: 615px;
  left: 201px;
  width: 75px;
  height: 75px;
  border: 2px solid var(--color-black);
  border-radius: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px;
}

.rules-download-text {
  position: absolute;
  top: 635px;
  left: 295px;
}

.rules-download-label {
  font-family: var(--font-heading);
  font-size: 16px;
  line-height: 16px;
  letter-spacing: -0.32px;
  text-transform: uppercase;
  color: var(--color-black);
  white-space: nowrap;
}

.rules-download-meta {
  margin-top: 16px;
  color: var(--color-grey);
  opacity: 0.5;
}

/* ── Rules rows ────────────────────────────────────────────────── */
.rules-row {
  position: absolute;
  left: 716px;
  width: 1000px;
}

.rules-row--1 { top: 479px; }
.rules-row--2 { top: 634px; }
.rules-row--3 { top: 809px; }
.rules-row--4 { top: 1064px; }

.rules-row__line {
  width: 1000px;
  height: 1px;
  border: none;
  margin: 0 0 12px;
  background: var(--color-black);
}

.rules-row__content {
  display: flex;
  gap: 258px;
  align-items: flex-start;
}

.rules-row__content--late {
  justify-content: space-between;
}

.rules-row__content--late .rules-row__desc {
  width: 488px;
}

.rules-row__content--etiquette {
  gap: 197px;
}

.rules-row__content--photo {
  gap: 233px;
}

.rules-row__content--photo .rules-row__desc {
  width: 488px;
}

.rules-row__title {
  flex-shrink: 0;
  font-family: var(--font-body);
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.56px;
  text-transform: uppercase;
  color: var(--color-grey);
  white-space: nowrap;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 70, "opsz" 38;
}

.rules-row__desc {
  width: 484px;
  color: #41413e;
  letter-spacing: -0.44px;
}

/* ── Дресс-код ─────────────────────────────────────────────────── */
.dress-heading {
  position: absolute;
  top: 1304px;
  left: calc(50% - 242px);
  line-height: 52px;
  color: var(--color-grey);
  white-space: nowrap;
}

.dress-subtitle {
  position: absolute;
  top: 1346px;
  left: 37.4%;
  width: 30.16%;
  height: 53px;
  pointer-events: none;
}

.dress-desc {
  position: absolute;
  top: 1468px;
  left: calc(50% - 371px);
  width: 805px;
  transform: translateY(-50%);
  color: var(--color-black);
}

.dress-hero {
  position: absolute;
  top: 1473px;
  left: 716px;
  width: 489px;
  height: 650px;
  overflow: hidden;
  -webkit-mask-image: url('/assets/visitors-dresscode-hero-mask.png');
  mask-image: url('/assets/visitors-dresscode-hero-mask.png');
  -webkit-mask-size: 489px 650px;
  mask-size: 489px 650px;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.dress-hero__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
}

.dress-hero__overlay {
  position: absolute;
  top: -24px;
  left: -1px;
  width: 496px;
  height: 739px;
  object-fit: cover;
  mix-blend-mode: screen;
  opacity: 0.3;
  pointer-events: none;
}

.dress-label {
  position: absolute;
  transform: translate(-50%, -50%);
  color: var(--color-black);
  white-space: nowrap;
}

.dress-label--women {
  top: 2161px;
  left: 384px;
}

.dress-label--men {
  top: 2649px;
  left: 382px;
}

.dress-women-photo {
  position: absolute;
  top: 2198px;
  left: 815px;
  width: 290px;
  height: 389px;
  pointer-events: none;
}

.dress-women-text {
  position: absolute;
  top: 2173px;
  left: 718px;
  transform: translateY(-50%);
  color: var(--color-black);
  white-space: pre-wrap;
}

.dress-women-text__tail {
  display: block;
  padding-left: 520px;
}

.dress-men-photo {
  position: absolute;
  top: 2686px;
  left: 814px;
  width: 290px;
  height: 389px;
  pointer-events: none;
}

.dress-men-text {
  position: absolute;
  top: 2661px;
  left: 976px;
  transform: translateY(-50%);
  width: 725px;
  color: var(--color-black);
}

/* ── Программа лояльности ──────────────────────────────────────── */
.loyalty-intro {
  position: absolute;
  top: 3287px;
  left: calc(50% - 758px);
  width: 1516px;
  line-height: 52px;
  color: var(--color-grey);
  white-space: pre-wrap;
}

.loyalty-intro__spacer {
  display: inline-block;
  width: 645px;
}

.loyalty-item__title {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: 0.36px;
  color: #41413e;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100;
}

.loyalty-item__desc {
  color: #41413e;
  letter-spacing: -0.44px;
}

.loyalty-item--1 {
  position: absolute;
  top: 3677px;
  left: 847px;
  width: 342px;
}

.loyalty-item--1 .loyalty-item__desc {
  margin-top: 8px;
}

.loyalty-item--2 {
  position: absolute;
  top: 3677px;
  left: 1331px;
  width: 387px;
}

.loyalty-item--2 .loyalty-item__desc {
  margin-top: 8px;
}

.loyalty-item--3 {
  position: absolute;
  top: 3833px;
  left: 1331px;
  width: 387px;
}

.loyalty-item--3 .loyalty-item__desc {
  margin-top: 8px;
}

/* ── Скидки и льготы ───────────────────────────────────────────── */
.discounts-title {
  position: absolute;
  top: 4147px;
  left: 202px;
  line-height: 52px;
  color: #1d1d1b;
  white-space: nowrap;
}

.discounts-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1516px;
  height: 1px;
  border: none;
  margin: 0;
  background: var(--color-black);
}

.discounts-line--top { top: 4217px; }
.discounts-line--bottom { top: 4567px; }

.discounts-vline {
  position: absolute;
  top: 4245px;
  width: 1px;
  height: 308px;
  border: none;
  margin: 0;
  background: var(--color-black);
}

.discounts-vline--1 { left: calc(50% - 258px); }
.discounts-vline--2 { left: calc(50% + 258px); }

.discounts-col-title {
  position: absolute;
  top: 4271px;
  color: var(--color-black);
  white-space: nowrap;
}

.discounts-col-title--1 { left: 202px; }
.discounts-col-title--2 { left: 718px; }
.discounts-col-title--3 { left: 1234px; }

.discounts-col-text {
  position: absolute;
  bottom: 92px;
  margin: 0;
  color: var(--color-black);
  letter-spacing: -0.44px;
}

.discounts-col-text--1 { left: 202px; width: 457px; }
.discounts-col-text--2 { left: 718px; width: 469px; }
.discounts-col-text--3 { left: 1234px; width: 460px; }
</style>
