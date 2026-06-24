<template>
  <div class="about-page" ref="pageRef">

    <!-- ══════════════════════════════════════════════
         КОНЦЕПЦИЯ ФЕСТИВАЛЯ
    ══════════════════════════════════════════════ -->
    <div class="koncept page-reveal" style="--delay: 0s">
      <p class="koncept__title heading-2">КОНЦЕПЦИЯ фестиваля</p>

      <div class="koncept__text1 body-text">
        <p class="mb0">В основе Opera Apriori лежит идея голоса как первичной формы музыкального высказывания.</p>
        <p class="mb0">До того как музыка становится переживанием в зале, она существует как интонация, слово, дыхание, внутренняя структура. Именно этот переход — от формы</p>
        <p>к звучанию, от замысла к живому присутствию — становится смысловым центром фестиваля.</p>
      </div>

      <p class="koncept__text2 body-text">
        Название Opera Apriori отсылает к самой сущности вокального искусства: к музыке в её исходной, глубинной природе, где голос соединяет слово, эмоцию, мысль и пространство. Поэтому фестиваль строится вокруг программ, в которых важны не только известные произведения, но и редкий репертуар, неожиданные сопоставления, историческая точность и современная чувствительность к материалу.
      </p>

      <div class="koncept__text3 body-text">
        <p class="mb0">Такой подход превращает каждый концерт не просто в событие календаря,</p>
        <p>а в переживание формы — живой, резонирующей и раскрывающейся в настоящем моменте</p>
      </div>
    </div>

    <!-- ══════════════════════════════════════════════
         ФОТОАРХИВ
    ══════════════════════════════════════════════ -->
    <span class="photo-label body-l page-reveal" style="--delay: 0s">фотоархив 2025</span>

    <div class="photos page-reveal page-reveal--image" style="--delay: 0.1s">
      <!-- Photo 1: 354×528, crop from x=343–697 of 792px-wide image -->
      <div class="photo-col photo-col--1"
           :style="{ backgroundImage: `url(${PHOTO_1})` }">
        <img class="photo-overlay" :src="PHOTO_OVERLAY" alt="" />
      </div>
      <!-- Photo 2: 355×528, crop from x=156–511 of 938px-wide image -->
      <div class="photo-col photo-col--2"
           :style="{ backgroundImage: `url(${PHOTO_2})` }">
        <img class="photo-overlay" :src="PHOTO_OVERLAY" alt="" />
      </div>
      <!-- Photo 3: 355×528, crop from x=218–573 of 792px-wide image -->
      <div class="photo-col photo-col--3"
           :style="{ backgroundImage: `url(${PHOTO_3})` }">
        <img class="photo-overlay" :src="PHOTO_OVERLAY" alt="" />
      </div>
    </div>

    <div class="photo-archive-link body-l page-reveal" style="--delay: 0.18s">
      <span>смотреть весь фотоархив</span>
      <img :src="ARROW_ICON" alt="" width="46" height="21" />
    </div>

    <!-- ══════════════════════════════════════════════
         ТРАНСЛЯЦИИ
    ══════════════════════════════════════════════ -->
    <p class="trans-title heading-2 page-reveal" style="--delay: 0s">трансляции</p>

    <p class="trans-text1 body-text page-reveal" style="--delay: 0.08s">
      Фестиваль продолжается за пределами концертного пространства — в записях и трансляциях, которые позволяют услышать избранные программы, вернуться к важным моментам и сохранить связь с музыкальным событием.
    </p>

    <div class="trans-text2 body-text page-reveal" style="--delay: 0.16s">
      <p class="mb0">Раздел объединяет записи концертов, прямые эфиры и медиаматериалы, открывая доступ к фестивалю тем, кто хочет продолжить знакомство с программами, голосами</p>
      <p>и художественным миром Opera Apriori.</p>
    </div>

    <!-- Video player -->
    <div class="video-wrap page-reveal page-reveal--image" style="--delay: 0.08s">
      <div class="video-overlay"></div>
      <img class="video-frame" :src="VIDEO_FRAME" alt="" />
      <div class="video-controls">
        <div class="video-play">
          <img :src="PLAY_ICON" alt="Воспроизвести" />
        </div>
        <span class="video-time video-time--start body-m">00:03</span>
        <div class="video-progress">
          <img class="video-progress__track" :src="PROGRESS_TRACK" alt="" />
          <img class="video-progress__fill" :src="PROGRESS_FILL" alt="" />
          <img class="video-seek-dot" :src="SEEK_DOT" alt="" />
          <img class="video-seek-handle" :src="SEEK_HANDLE" alt="" />
          <img class="video-volume" :src="VOLUME_ICON" alt="" />
          <img class="video-end-track" :src="END_TRACK" alt="" />
          <img class="video-end-fill" :src="END_FILL" alt="" />
        </div>
        <span class="video-time video-time--end body-m">00:32</span>
      </div>
    </div>

    <p class="trans-channel body-text page-reveal" style="--delay: 0.16s">
      Фрагменты концертов, атмосфера площадок и живое звучание фестиваля — ищите на нашем канале Oпера априори
    </p>

    <!-- ══════════════════════════════════════════════
         ПОСЛЕЗВУЧИЯ
    ══════════════════════════════════════════════ -->
    <p class="posle-title page-reveal page-reveal--hero" style="--delay: 0s">ПОСЛЕЗВУЧИя</p>

    <div class="posle-desc body-text page-reveal" style="--delay: 0.14s">
      <p class="mb0">Некоторые программы Opera Apriori продолжают звучать и после концерта —</p>
      <p class="mb0">в записях, выпущенных партнёром фестиваля, фирмой «Мелодия».</p>
      <p>Вы можете познакомиться с изданиями и перейти на сайт партнёра, чтобы узнать больше или приобрести пластинки.</p>
    </div>

    <!-- ══════════════════════════════════════════════
         ALBUM 1
    ══════════════════════════════════════════════ -->
    <div class="album-cover-wrap album-cover-wrap--1 page-reveal page-reveal--vinyl" style="--delay: 0s" data-vinyl>
      <img class="album-cover" :src="RECORD_1" alt="" />
    </div>
    <hr class="album-divider album-divider--1" />
    <div class="album-bg album-bg--1"></div>

    <p class="album-title album-title--1 page-reveal" style="--delay: 0.1s">Мелодия Априори 1. Низкие струнные (Live)</p>
    <div class="album-meta album-meta--1 body-m page-reveal" style="--delay: 0.18s">
      <p class="album-meta__label mb0">Авторы:</p>
      <p>Людвиг ван Бетховен, Альфред Шнитке</p>
    </div>
    <span class="album-year album-year--1 body-m page-reveal" style="--delay: 0.24s">Выпуск: 2017</span>
    <span class="album-catalog album-catalog--1 body-m page-reveal" style="--delay: 0.24s">MEL CD 1002476</span>

    <!-- ══════════════════════════════════════════════
         ALBUM 2
    ══════════════════════════════════════════════ -->
    <div class="album-cover-wrap album-cover-wrap--2 page-reveal page-reveal--vinyl" style="--delay: 0s" data-vinyl>
      <img class="album-cover" :src="RECORD_2" alt="" />
    </div>
    <hr class="album-divider album-divider--2" />
    <div class="album-bg album-bg--2"></div>

    <p class="album-title album-title--2 page-reveal" style="--delay: 0.1s">Мелодия Априори 2. Квинтет+ (Live)</p>
    <div class="album-meta album-meta--2 body-m page-reveal" style="--delay: 0.18s">
      <p class="album-meta__label mb0">Авторы:</p>
      <p class="mb0">Сергей Прокофьев, Дмитрий Шостакович, Николай Метнер</p>
      <p class="album-meta__label mb0">Исполнители:</p>
      <p>Людмила Берлинская, Новый Русский квартет</p>
    </div>
    <span class="album-year album-year--2 body-m page-reveal" style="--delay: 0.24s">Выпуск: 2017</span>
    <span class="album-catalog album-catalog--2 body-m page-reveal" style="--delay: 0.24s">MEL CD 1002486</span>

    <!-- ══════════════════════════════════════════════
         ALBUM 3
    ══════════════════════════════════════════════ -->
    <div class="album-cover-wrap album-cover-wrap--3 page-reveal page-reveal--vinyl" style="--delay: 0s" data-vinyl>
      <img class="album-cover" :src="RECORD_3" alt="" />
    </div>
    <hr class="album-divider album-divider--3" />
    <div class="album-bg album-bg--3"></div>

    <p class="album-title album-title--3 page-reveal" style="--delay: 0.1s">Мелодия Априори 3. 3×3 (Live)</p>
    <div class="album-meta album-meta--3 body-m page-reveal" style="--delay: 0.18s">
      <p class="album-meta__label mb0">Авторы:</p>
      <p class="mb0">Морис Равель</p>
      <p class="album-meta__label mb0">Исполнители:</p>
      <p>Лукас Генюшас, Айлен Притчин, Александр Бузлов</p>
    </div>
    <span class="album-year album-year--3 body-m page-reveal" style="--delay: 0.24s">Выпуск: 2017</span>
    <span class="album-catalog album-catalog--3 body-m page-reveal" style="--delay: 0.24s">MEL CD 1002491</span>
    <hr class="album-divider album-divider--bottom" />

    <!-- ══════════════════════════════════════════════
         CTA
    ══════════════════════════════════════════════ -->
    <p class="cta-title heading-2 page-reveal" style="--delay: 0s">Начните знакомство с ближайших событий</p>
    <div class="cta-subtitle heading-2 page-reveal" style="--delay: 0.1s">
      <p class="mb0">Перейдите в афишу, чтобы выбрать программу по дате, формату, площадке или исполнителю</p>
      <p>и познакомиться с фестивалем через его живое звучание.</p>
    </div>
    <a href="#/afisha" class="btn-pill btn-pill--small cta-btn page-reveal" style="--delay: 0.2s">смотреть афишу</a>

    <!-- ══════════════════════════════════════════════
         ПАРТНЕРЫ
    ══════════════════════════════════════════════ -->
    <p class="partners-heading partners-heading--official page-reveal" style="--delay: 0s">официальные&nbsp;&nbsp;партнеры</p>
    <img :src="LOGO_MARIINSKY"  alt="" class="official-logo official-logo--1 page-reveal" style="--delay: 0.06s" />
    <img :src="LOGO_STARTRAK"  alt="" class="official-logo official-logo--2 page-reveal" style="--delay: 0.1s" />
    <img :src="LOGO_MARRIOTT"   alt="" class="official-logo official-logo--3 page-reveal" style="--delay: 0.14s" />
    <img :src="LOGO_IMPERIAL"  alt="" class="official-logo official-logo--4 page-reveal" style="--delay: 0.18s" />
    <img :src="LOGO_PARTNER_4"  alt="" class="official-logo official-logo--5 page-reveal" style="--delay: 0.22s" />
    <img :src="LOGO_KEMPINSKI"  alt="" class="official-logo official-logo--6 page-reveal" style="--delay: 0.26s" />

    <p class="partners-heading partners-heading--media page-reveal" style="--delay: 0s">медиа партнеры</p>
    <img :src="LOGO_VOGUE"   alt="" class="media-logo media-logo--1 page-reveal" style="--delay: 0.06s" />
    <img :src="LOGO_KULTURA" alt="" class="media-logo media-logo--2 page-reveal" style="--delay: 0.1s" />
    <img :src="LOGO_CULTURE"  alt="" class="media-logo media-logo--3 page-reveal" style="--delay: 0.14s" />
    <img :src="LOGO_GROUP"   alt="" class="media-logo media-logo--4 page-reveal" style="--delay: 0.18s" />

  </div>
</template>

<script setup>
import { nextTick, onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'
import { usePageReveal } from '../composables/usePageReveal'

const pageRef = ref(null)
let vinylObserver

async function startVinylSpin() {
  vinylObserver?.disconnect()
  await nextTick()

  const root = pageRef.value
  if (!root) return

  vinylObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-spinning')
        vinylObserver.unobserve(entry.target)
      })
    },
    { threshold: 0, rootMargin: '0px 0px 120% 0px' }
  )

  root.querySelectorAll('[data-vinyl]').forEach((el) => vinylObserver.observe(el))
}

usePageReveal(pageRef, {
  useReadyState: true,
  observer: { threshold: 0.1, rootMargin: '0px 0px -80px 0px' },
})

onMounted(startVinylSpin)
onActivated(startVinylSpin)
onDeactivated(() => vinylObserver?.disconnect())
onUnmounted(() => vinylObserver?.disconnect())

/* ──────────────────────────────────────────────────────────────────
   Figma asset URLs (valid ~7 days from generation).
   Replace with permanent local copies when available.
   ────────────────────────────────────────────────────────────────── */

// Photos (фотоархив 2025)
const PHOTO_1       = 'https://www.figma.com/api/mcp/asset/b3f39410-0634-4a10-9de5-f7756413dd2a'
const PHOTO_2       = 'https://www.figma.com/api/mcp/asset/78ac0b37-9a07-4085-acba-285de6a98771'
const PHOTO_3       = 'https://www.figma.com/api/mcp/asset/2e662483-e063-44bb-b389-8c7f271aa7bb'
const PHOTO_OVERLAY = 'https://www.figma.com/api/mcp/asset/002f5b55-9957-46f2-a759-2c8f5ad2aadd'

// UI icons
const ARROW_ICON = 'https://www.figma.com/api/mcp/asset/0078d3f2-2f8b-498d-919e-5ba51a2172d7'

// Video
const VIDEO_FRAME    = 'https://www.figma.com/api/mcp/asset/08f7197b-959d-4664-936e-8c86a52126e9'
const PLAY_ICON      = 'https://www.figma.com/api/mcp/asset/d853a00c-f167-489f-9229-3038c7e3c40b'
const PROGRESS_TRACK = 'https://www.figma.com/api/mcp/asset/2c17a614-b675-4fcc-90dd-87a2cf7113bc'
const PROGRESS_FILL  = 'https://www.figma.com/api/mcp/asset/9cbb9bfc-1786-4d61-b025-4b4d4ba95388'
const END_TRACK      = 'https://www.figma.com/api/mcp/asset/d15ef171-b377-4439-9a94-766222068c89'
const END_FILL       = 'https://www.figma.com/api/mcp/asset/438f6bcb-d1a4-4809-916b-55f65fbef11a'
const VOLUME_ICON    = 'https://www.figma.com/api/mcp/asset/6b7938b3-9f41-4c55-952c-7474d54467fa'
const SEEK_HANDLE    = 'https://www.figma.com/api/mcp/asset/b5fc8b5a-c8bb-45d0-b0ff-f43b006ebf79'
const SEEK_DOT       = 'https://www.figma.com/api/mcp/asset/ce34d742-ab4a-43cb-9f11-bc101747bdf2'

// Records (пластинки Мелодия)
const RECORD_1 = 'https://www.figma.com/api/mcp/asset/b363e368-34e1-428e-ad9b-0c67191e89ff'
const RECORD_2 = 'https://www.figma.com/api/mcp/asset/e3e472f1-3925-4362-90ac-55363c62432f'
const RECORD_3 = 'https://www.figma.com/api/mcp/asset/ab196b3c-5dee-41f7-946d-b491235f3f40'

// Official partner logos
const LOGO_MARIINSKY = 'https://www.figma.com/api/mcp/asset/909e4d06-bc7c-4831-a25a-eea258067183'
const LOGO_STARTRAK  = 'https://www.figma.com/api/mcp/asset/8e226cb7-f2bd-4586-9e67-78581d79159e'
const LOGO_MARRIOTT  = '/assets/mariot.png'
const LOGO_IMPERIAL  = '/assets/imperial.png'
const LOGO_PARTNER_4 = 'https://www.figma.com/api/mcp/asset/67c84758-ee25-4547-9794-10815408f4b4'
const LOGO_KEMPINSKI = 'https://www.figma.com/api/mcp/asset/c518909e-15ff-4d50-9043-ec549b28b6b0'

// Media partner logos
const LOGO_VOGUE   = 'https://www.figma.com/api/mcp/asset/9580d64e-eb1d-4f68-a91b-0b0b7342a04e'
const LOGO_KULTURA = 'https://www.figma.com/api/mcp/asset/9ca6b6de-bc01-4fa4-933b-84d0774e592d'
const LOGO_CULTURE = '/assets/culture.png'
const LOGO_GROUP   = 'https://www.figma.com/api/mcp/asset/dd982d83-f008-4e6d-ae35-a4517fa23adc'
</script>

<style scoped>
/* ════════════════════════════════════════════════════════════════
   PAGE CONTAINER  — fixed 1920px, pixel-perfect layout
   All coordinates: Figma_y − 137  (subtract the 131px header + 6px top)
   ════════════════════════════════════════════════════════════════ */
.about-page {
  position: relative;
  width: 1920px;
  /* Height: last media-logo bottom 5261px + 172px gap to footer */
  height: 5433px;
  background: var(--color-bg);
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.about-page.is-ready {
  opacity: 1;
}

.about-page .page-reveal {
  opacity: 0;
  transform: translateY(44px);
  filter: blur(8px);
  transition:
    opacity 1.35s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s),
    transform 1.35s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s),
    filter 1.35s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s);
  will-change: opacity, transform, filter;
}

.about-page .page-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.about-page .official-logo.page-reveal,
.about-page .media-logo.page-reveal {
  --logo-opacity: 0.3;
}

.about-page .official-logo.page-reveal.is-visible,
.about-page .media-logo.page-reveal.is-visible {
  opacity: var(--logo-opacity);
}

.about-page .official-logo--3.page-reveal,
.about-page .official-logo--4.page-reveal,
.about-page .media-logo--3.page-reveal {
  --logo-opacity: 1;
}

.about-page .official-logo--3.page-reveal.is-visible,
.about-page .official-logo--4.page-reveal.is-visible,
.about-page .media-logo--3.page-reveal.is-visible {
  opacity: 1;
}

.about-page .btn-pill.page-reveal {
  transition:
    opacity 1.35s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s),
    transform 1.35s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s),
    filter 1.35s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s),
    background-color var(--transition),
    color var(--transition),
    border-color var(--transition);
}

.about-page .page-reveal--image {
  transform: translateY(36px) scale(1.025);
}

.about-page .page-reveal--image.is-visible {
  transform: translateY(0) scale(1);
}

.about-page .page-reveal--hero {
  transform: translateY(72px);
  filter: blur(0);
  transition-duration: 1.6s;
}

.about-page .page-reveal--hero.is-visible {
  transform: translateY(0);
}

.about-page .page-reveal--vinyl {
  transform: translateY(48px) scale(0.94) rotate(-8deg);
  filter: blur(6px);
  transition:
    opacity 1.5s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s),
    transform 1.5s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s),
    filter 1.5s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s);
}

.about-page .page-reveal--vinyl.is-visible {
  transform: translateY(0) scale(1) rotate(0deg);
  filter: blur(0);
}

.about-page .partners-heading.page-reveal.is-visible {
  transform: translateX(-50%) translateY(0);
}

.about-page .cta-btn.page-reveal.is-visible {
  transform: translateX(-50%) translateY(0);
}

/* ──────────────────────────────────────────────────────────────
   Utility
   ────────────────────────────────────────────────────────────── */
.mb0 { margin-bottom: 0; }

/* ════════════════════════════════════════════════════════════════
   КОНЦЕПЦИЯ ФЕСТИВАЛЯ
   Figma: top 137 → component top 0, h 611, overflow clip
   ════════════════════════════════════════════════════════════════ */
.koncept {
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  height: 611px;
  overflow: hidden;
}

/* title: Figma top 261 (124+137)? No — within the section, top:124 */
.koncept__title {
  position: absolute;
  top: 124px;
  left: calc(50% - 756px); /* = 204px at 1920 */
  mix-blend-mode: multiply;
  white-space: nowrap;
}

/* text1: Figma section-relative top 193, left calc(50%-756px), w 1383 */
.koncept__text1 {
  position: absolute;
  top: 193px;
  left: calc(50% - 756px);
  width: 1383px;
  line-height: 26px;
  letter-spacing: -0.44px;
  mix-blend-mode: multiply;
  color: #41413e;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

/* text2: Figma section-relative top 271, left calc(50%-371px), w 1126 */
.koncept__text2 {
  position: absolute;
  top: 271px;
  left: calc(50% - 371px);
  width: 1126px;
  line-height: 26px;
  letter-spacing: -0.44px;
  mix-blend-mode: multiply;
  color: #41413e;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

/* text3: Figma section-relative top 380, left calc(50%-371px), w 791 */
.koncept__text3 {
  position: absolute;
  top: 380px;
  left: calc(50% - 371px);
  width: 791px;
  line-height: 26px;
  letter-spacing: -0.44px;
  mix-blend-mode: multiply;
  color: #41413e;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

/* ════════════════════════════════════════════════════════════════
   ФОТОАРХИВ
   ════════════════════════════════════════════════════════════════ */

/* "фотоархив 2025" — Figma page 754.5 → component 617.5 (center)
   translate(-50%, -50%) means left:279.5 top:617.5 are the CENTRE */
.photo-label {
  position: absolute;
  top: 617.5px;
  left: 279.5px;
  transform: translate(-50%, -50%);
  text-align: center;
  white-space: nowrap;
  color: var(--color-black);
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 40;
  letter-spacing: 0.54px;
}

/* Photos container — Figma page 749 → component 612 */
.photos {
  position: absolute;
  top: 612px;
  left: 590px;
  display: flex;
  gap: 32px;
  align-items: flex-start;
}

/* Each photo column — rectangular crop */
.photo-col {
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  background-repeat: no-repeat;
}

/* Photo 1: 354 × 528  |  crop x=343–697 of a 792px-wide source image */
.photo-col--1 {
  width: 354px;
  height: 528px;
  background-size: 792px 528px;
  background-position: -343px 0;
}

/* Photo 2: 355 × 528  |  crop x=156–511 of a 938px-wide source image */
.photo-col--2 {
  width: 355px;
  height: 528px;
  background-size: 938px 528px;
  background-position: -156px 0;
}

/* Photo 3: 355 × 528  |  crop x=218–573 of a 792px-wide source image */
.photo-col--3 {
  width: 355px;
  height: 528px;
  background-size: 792px 528px;
  background-position: -218px 0;
}

/* Overlay layer (lighten blend, opacity 0.3) — stays as an img on top */
.photo-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: lighten;
  opacity: 0.3;
  pointer-events: none;
}

/* "смотреть весь фотоархив" — Figma page 1324 → component 1187 */
.photo-archive-link {
  position: absolute;
  top: 1187px;
  left: 1405px;
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--color-black);
  letter-spacing: 0.54px;
  cursor: pointer;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 40;
}

/* ════════════════════════════════════════════════════════════════
   ТРАНСЛЯЦИИ
   ════════════════════════════════════════════════════════════════ */

/* Title — Figma page 1605 → component 1468 */
.trans-title {
  position: absolute;
  top: 1468px;
  left: calc(50% - 758px); /* = 202px at 1920 */
  white-space: nowrap;
  color: var(--color-grey);
}

/* Text1 — Figma page 1607 → component 1470, left 588, w 1127 */
.trans-text1 {
  position: absolute;
  top: 1470px;
  left: calc(50% - 372px); /* = 588px */
  width: 1127px;
  line-height: 26px;
  letter-spacing: -0.44px;
  color: #41413e;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

/* Text2 — Figma page 1660 → component 1523, left calc(50%+7px), w 748 */
.trans-text2 {
  position: absolute;
  top: 1523px;
  left: calc(50% + 7px); /* = 967px at 1920 */
  width: 748px;
  line-height: 26px;
  letter-spacing: -0.44px;
  color: #41413e;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

/* Video container — Figma page 1807 → component 1670, w 1127, h 685 */
.video-wrap {
  position: absolute;
  top: 1670px;
  left: 588px;
  width: 1127px;
  height: 685px;
  background: #000;
  overflow: hidden;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1;
}

.video-frame {
  position: absolute;
  top: 60.755px;
  left: 0;
  width: 100%;
  height: 563.873px;
  object-fit: cover;
  pointer-events: none;
}

/* Controls bar — Figma page 2445 → component 2308, relative to video-wrap: 2308-1670 = 638 */
.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 47px;
  display: flex;
  align-items: center;
  padding: 0 22px;
  gap: 18px;
  z-index: 2;
  color: var(--color-white);
}

.video-play {
  flex-shrink: 0;
  width: 22px;
  height: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
}

.video-play img {
  width: 100%;
  height: 100%;
}

.video-time {
  flex-shrink: 0;
  white-space: nowrap;
  color: var(--color-white);
  font-size: 16.889px;
  line-height: 21.112px;
  letter-spacing: 0.3378px;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100;
}

.video-progress {
  flex: 1;
  position: relative;
  height: 16px;
  display: flex;
  align-items: center;
}

.video-progress__track {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 5px;
  object-fit: fill;
}

.video-progress__fill {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 25%;
  height: 5px;
  object-fit: fill;
}

.video-end-track {
  position: absolute;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
  width: 81px;
  height: 5px;
  object-fit: fill;
}

.video-end-fill {
  position: absolute;
  right: 80px;
  top: 50%;
  transform: translateY(-50%);
  width: 45px;
  height: 5px;
  object-fit: fill;
}

.video-seek-handle {
  position: absolute;
  left: calc(25% - 7px);
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  width: 13px;
  height: 6.6px;
}

.video-seek-dot {
  position: absolute;
  left: calc(25% - 3px);
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  width: 6.6px;
  height: 3.3px;
}

.video-volume {
  position: absolute;
  right: 11px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 16.5px;
}

/* "Фрагменты концертов..." — Figma page 2571 → component 2434 */
.trans-channel {
  position: absolute;
  top: 2434px;
  left: calc(50% - 372px);
  width: 704px;
  line-height: 26px;
  letter-spacing: -0.44px;
  color: #41413e;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

/* ════════════════════════════════════════════════════════════════
   ПОСЛЕЗВУЧИЯ
   Figma page 2823 → component 2686
   Font: Panama (commercial display font). Fallback: serif.
   ════════════════════════════════════════════════════════════════ */
.posle-title {
  position: absolute;
  top: 2686px;
  left: calc(50% - 767px); /* = 193px at 1920 */
  font-family: 'Panama Regular', serif;
  font-size: 283.766px;
  font-weight: 400;
  line-height: 331.06px;
  letter-spacing: -11.35px;
  text-transform: uppercase;
  color: rgba(17, 17, 17, 0.99);
  white-space: nowrap;
  pointer-events: none;
}

/* Subtitle — Figma page 3132 → component 2995, centred, w 709 */
.posle-desc {
  position: absolute;
  top: 2995px;
  left: 50%;
  transform: translateX(-50%);
  width: 709px;
  text-align: center;
  line-height: 26px;
  letter-spacing: -0.44px;
  color: #41413e;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
  white-space: pre-wrap;
}

/* ════════════════════════════════════════════════════════════════
   ALBUM ROWS  — 3 records with Мелодия info
   Each row: record image (left) + info stripe (full width) + divider
   ════════════════════════════════════════════════════════════════ */

/* ── Album cover images ─────────────────────────────────── */
.album-cover-wrap {
  position: absolute;
  left: 153px;
  width: 609px;
  overflow: hidden;
  transform-origin: center center;
}

.album-cover-wrap--1 { top: 3120px; height: 305px; }
.album-cover-wrap--2 { top: 3443px; height: 303px; }
.album-cover-wrap--3 { top: 3764px; height: 305px; }

.album-cover {
  display: block;
  width: 609px;
  height: 609px;
  object-fit: cover;
  pointer-events: none;
  transform-origin: center center;
  will-change: transform;
}

.album-cover-wrap.is-spinning .album-cover {
  animation: vinyl-spin 20s linear infinite;
}

.album-cover-wrap--2.is-spinning .album-cover {
  animation-duration: 24s;
  animation-direction: reverse;
}

.album-cover-wrap--3.is-spinning .album-cover {
  animation-duration: 28s;
}

@keyframes vinyl-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ── Dividers & stripe backgrounds ─────────────────────── */
.album-divider {
  position: absolute;
  left: 0;
  width: 1920px;
  height: 1px;
  background: var(--color-black);
  border: none;
  margin: 0;
  z-index: 2;
}

/* Album 1 top divider: Figma page 3562 → component 3425 */
.album-divider--1   { top: 3425px; }
/* Album 2 top divider: Figma page 3883 → component 3746 */
.album-divider--2   { top: 3746px; }
/* Album 3 top divider: Figma page 4206 → component 4069 */
.album-divider--3   { top: 4069px; }
/* Bottom divider: Figma page 4207 → component 4070 */
.album-divider--bottom { top: 4070px; }

.album-bg {
  position: absolute;
  left: 0;
  width: 1920px;
  background: #fdfcfa;
}

/* Album 1 stripe: Figma page 3562 → component 3425, h 323 */
.album-bg--1 { top: 3425px; height: 323px; }
/* Album 2 stripe: Figma page 3883 → component 3746, h 323 */
.album-bg--2 { top: 3746px; height: 323px; }
/* Album 3 stripe: Figma page 4206 → component 4069, h 273 */
.album-bg--3 { top: 4069px; height: 273px; }

/* ── Album titles ───────────────────────────────────────── */
.album-title {
  position: absolute;
  left: calc(50% - 113px); /* = 847px at 1920 */
  font-family: var(--font-body);
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.56px;
  text-transform: uppercase;
  color: var(--color-grey);
  white-space: nowrap;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 70,
    "opsz" 38;
}

/* Album 1 title: Figma page 3317 → component 3180 */
.album-title--1 { top: 3180px; }
/* Album 2 title: Figma page 3638 → component 3501 */
.album-title--2 { top: 3501px; }
/* Album 3 title: Figma page 3962 → component 3825 */
.album-title--3 { top: 3825px; }

/* ── Album metadata (авторы/исполнители) ───────────────── */
.album-meta {
  position: absolute;
  left: 847px;
  color: var(--color-black);
  letter-spacing: 0.64px;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 40;
}

.album-meta__label {
  color: var(--color-black);
}

/* Album 1 meta: Figma page 3379.5 → component 3242.5 (top is centre → subtract half line-height)
   line-height 24px → top = 3242.5 - 12 = 3230.5 */
.album-meta--1 { top: 3231px; }
/* Album 2 meta: Figma page 3700.5 → component 3563.5 - 12 = 3551.5 */
.album-meta--2 { top: 3552px; }
/* Album 3 meta: Figma page 4024.5 → component 3887.5 - 12 = 3875.5 */
.album-meta--3 { top: 3876px; }

/* ── Year / Catalog labels ──────────────────────────────── */
/* Year: right-aligned at left:952, so ends at 952px from left */
.album-year {
  position: absolute;
  right: calc(100% - 952px); /* = right edge at 952px from left */
  text-align: right;
  color: var(--color-black);
  letter-spacing: 0.64px;
  white-space: nowrap;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 40;
}

/* Catalog: right-aligned at left:1718 */
.album-catalog {
  position: absolute;
  right: calc(100% - 1718px); /* right edge at 1718px from left */
  text-align: right;
  color: var(--color-black);
  letter-spacing: 0.64px;
  white-space: nowrap;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 40;
}

/* Figma: top is the CENTRE of the text, line-height 24 → subtract 12 */
/* Album 1: Figma page 3532.5 → component 3395.5 - 12 = 3383.5 */
.album-year--1,
.album-catalog--1  { top: 3384px; }
/* Album 2: Figma page 3853.5 → component 3716.5 - 12 = 3704.5 */
.album-year--2,
.album-catalog--2  { top: 3705px; }
/* Album 3: Figma page 4177.5 → component 4040.5 - 12 = 4028.5 */
.album-year--3,
.album-catalog--3  { top: 4029px; }

/* ════════════════════════════════════════════════════════════════
   CTA SECTION
   ════════════════════════════════════════════════════════════════ */

/* Title — Figma page 4360 → component 4223, w 1516 */
.cta-title {
  position: absolute;
  top: 4223px;
  left: calc(50% - 759px); /* = 201px at 1920 */
  width: 1516px;
  color: var(--color-grey);
  white-space: nowrap;
}

/* Subtitle — Figma page 4427 → component 4290, left calc(50%-372px), w 1130 */
.cta-subtitle {
  position: absolute;
  top: 4290px;
  left: calc(50% - 372px); /* = 588px at 1920 */
  width: 1130px;
  color: var(--color-grey);
  line-height: 52px;
  white-space: pre-wrap;
}

/* Button — Figma page 4678 → component 4541, centred */
.cta-btn {
  position: absolute;
  top: 4541px;
  left: 50%;
  transform: translateX(-50%);
  /* override global btn-pill sizing to match Figma: 262×53, padding 20px 42px */
  width: 262px;
  max-width: none;
  height: 53px;
  padding: 20px 42px;
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 36px;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 75;
}

/* ════════════════════════════════════════════════════════════════
   PARTNERS
   Button bottom: 4594px. Gap: 136px → official heading TOP = 4730px.
   Figma proportions preserved from there downward.
   ════════════════════════════════════════════════════════════════ */

.partners-heading {
  position: absolute;
  font-family: var(--font-body);
  font-size: 28px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.56px;
  text-transform: uppercase;
  color: var(--color-grey);
  white-space: nowrap;
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 70,
    "opsz" 38;
}

/* Official heading — 136px below button bottom (4594 + 136 = 4730) */
.partners-heading--official {
  top: 4730px;
  left: 50%;
  transform: translateX(-50%);
}

/* Media heading — 304px below official heading bottom (4730+32+304 = 5066 → top: 5034) */
.partners-heading--media {
  top: 5034px;
  left: 50%;
  transform: translateX(-50%);
}

/* ── Official partner logos ─────────────────────────────────────
   Official heading bottom: 4762px.
   Figma spacing from official heading bottom to logo bottoms:
     imgImage419: +190px  imgImage442: +158px  imgImage417: +191px
     imgImage410: +196px  imgImage445: +174px  imgImage448: +179px
   Logo top = heading_bottom + spacing_to_logo_bottom - logo_height
   ──────────────────────────────────────────────────────────────── */
.official-logo {
  position: absolute;
  --logo-opacity: 0.3;
  opacity: var(--logo-opacity);
  object-fit: contain;
}

/* imgImage419 (Mariinsky): h:101, bottom offset 190 → top: 4762+190-101=4851, left:202 */
.official-logo--1 { top: 4851px; left: 202px;   height: 101px; width: 112px; }
/* Lyapinak: h:32, bottom offset 158 → top: 4762+158-32=4888, left:696 */
.official-logo--2 { top: 4888px; left: 696px;   height: 32px;  width: 185px; }
/* Marriott: h:103, bottom offset 191 → top: 4762+191-103=4850, left:421 */
.official-logo--3 { top: 4850px; left: 421px;   height: 103px; width: 166px; --logo-opacity: 1; }
/* Imperial: h:107, bottom offset 196 → top: 4762+196-107=4851, left:1573 */
.official-logo--4 { top: 4851px; left: 1573px;  height: 107px; width: 145px; --logo-opacity: 1; }
/* imgImage445 (partner 4): h:64, bottom offset 174 → top: 4762+174-64=4872, left:1311 */
.official-logo--5 { top: 4872px; left: 1311px;  height: 64px;  width: 155px; }
/* Kempinski: h:85, bottom offset 179 → top: 4762+179-85=4856, left:988 */
.official-logo--6 { top: 4856px; left: 988px;   height: 85px;  width: 216px; }

/* ── Media partner logos ────────────────────────────────────────
   Media heading bottom: 5066px.
   Figma spacing from official heading bottom to media logo bottoms:
     imgImage446: +486px  imgImage447: +498px
     imgImage443: +499px  imgGroup: +498.5px
   Media logo top = official_heading_bottom + spacing - logo_height
   ──────────────────────────────────────────────────────────────── */
.media-logo {
  position: absolute;
  --logo-opacity: 0.3;
  opacity: var(--logo-opacity);
  object-fit: contain;
}

/* imgImage446 (VOGUE): h:54, offset 486 → top: 4762+486-54=5194, left:481 */
.media-logo--1 { top: 5194px; left: 481px;  height: 54px;  width: 204px; }
/* imgImage447 (Kultura): h:100, offset 498 → top: 4762+498-100=5160, left:801 */
.media-logo--2 { top: 5160px; left: 801px;  height: 100px; width: 110px; }
/* culture.png: h:74, offset 499 → top: 4762+499-74=5187, left:978 */
.media-logo--3 { top: 5187px; left: 978px;  height: 74px;  width: 258px; --logo-opacity: 1; }
/* imgGroup: h:101, offset 498.5 → top: 4762+498.5-100.5=5160, left:1318 */
.media-logo--4 { top: 5160px; left: 1318px; height: 101px; width: 121px; }
</style>
