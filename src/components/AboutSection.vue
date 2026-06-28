<template>
  <section class="about reveal-group" ref="sectionRef">
    <hr class="divider-full" />

    <div class="about__box">
      <div class="about__bg" aria-hidden="true">
        <img src="/assets/bg1.jpg" alt="" loading="lazy" decoding="async" />
      </div>
      <div class="about__glow" aria-hidden="true">
        <img src="/assets/about-glow.png" alt="" loading="lazy" decoding="async" />
      </div>

      <div class="about__content container">
        <div class="about__top">
          <img
            class="about__opera reveal-item"
            style="--delay: 0s"
            src="/assets/opera-title.png"
            alt="Опера"
            width="642"
            height="289"
            loading="lazy"
            decoding="async"
          />
          <div class="about__date body-text reveal-item" style="--delay: 0.1s">
            <img src="/assets/icon-dot.svg" alt="" width="11" height="11" />
            <span>с 5 июня по 31 октября 2026</span>
          </div>
        </div>

        <h2 class="about__subtitle heading-2 reveal-item" style="--delay: 0.18s">
          которая случается здесь
        </h2>

        <p class="about__desc heading-2">
          <span class="about__desc-line reveal-item" style="--delay: 0.26s">
            фестиваль&nbsp;&nbsp;вокальной музыки, объединяющий редкий репертуар,
          </span>
          <span class="about__desc-line about__desc-indent reveal-item" style="--delay: 0.34s">
            и кураторский подход к программе
          </span>
        </p>
      </div>
    </div>

    <hr class="divider-full" />

    <div class="about__lower container">
      <p class="about__tagline body-text reveal-item" style="--delay: 0.1s">
        Пространство,&nbsp;&nbsp;где классическая музыка выходит за привычные рамки
      </p>
      <a
        href="#/afisha"
        class="btn-pill btn-pill--glass about__cta reveal-item"
        style="--delay: 0.2s"
      >смотреть афишу</a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRevealGroup } from '../composables/useRevealGroup'

const sectionRef = ref(null)
useRevealGroup(sectionRef)
</script>

<style scoped>
.about {
  position: relative;
}

.about__box {
  position: relative;
  height: 627px;
  overflow: hidden;
}

.about__box::after {
  content: '';
  position: absolute;
  right: var(--side-padding);
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--color-black);
  pointer-events: none;
}

.about__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.about__bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about__glow {
  position: absolute;
  top: 64px;
  left: 227px;
  width: 290px;
  pointer-events: none;
}

.about__glow img {
  position: absolute;
  top: -84.26%;
  right: -58.69%;
  bottom: -84.26%;
  left: -58.69%;
  width: 100%;
  height: 100%;
  max-width: none;
}

.about__content {
  position: relative;
  z-index: 1;
  height: 627px;
  padding-top: 53px;
  box-sizing: border-box;
}

.about__top {
  position: relative;
  min-height: 289px;
}

.about__opera {
  display: block;
  width: min(642px, 60%);
  height: auto;
}

.about__date {
  position: absolute;
  top: 2px;
  align-items: baseline;
  right: 4%;
  display: flex;
  gap: 16px;
  white-space: nowrap;
}

.about__subtitle {
  text-align: center;
  opacity: 0.9;
  margin-top: -40px;
  margin-bottom: 50px;
}

.about__desc {
  opacity: 0.9;
  line-height: 1.13;
}

.about__desc-line {
  display: block;
  white-space: nowrap;
}

.about__desc-indent {
  padding-left: clamp(40px, 20vw, 280px);
}

.about__lower {
  padding-top: 85px;
  padding-bottom: 77px;
}

.about__tagline {
  text-align: center;
  max-width: 427px;
  margin: 0 auto 51px;
  mix-blend-mode: multiply;
}

.about__cta {
  display: flex;
  margin: 0 auto;
}

.reveal-group.is-visible .about__subtitle.reveal-item,
.reveal-group.is-visible .about__desc-line.reveal-item {
  opacity: 0.9;
}

@media (max-width: 1100px) {
  .about__box::after {
    display: none;
  }

  .about__top {
    min-height: unset;
  }

  .about__date {
    position: static;
    margin-top: 16px;
  }

  .about__subtitle {
    margin-top: 32px;
  }

  .about__desc-indent {
    padding-left: 0;
  }

  .about__lower {
    padding-top: 60px;
  }
}

@media (max-width: 768px) {
  .about__box,
  .about__content {
    height: auto;
    min-height: clamp(420px, 110vw, 627px);
  }

  .about__glow {
    display: none;
  }

  .about__opera {
    width: min(642px, 90%);
  }

  .about__date {
    flex-wrap: wrap;
    white-space: normal;
    font-size: clamp(16px, 4vw, 22px);
  }

  .about__subtitle {
    margin-top: 24px;
    margin-bottom: 32px;
  }

  .about__desc-line {
    white-space: normal;
  }

  .about__lower {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .about__tagline {
    max-width: none;
    margin-bottom: 32px;
  }
}
</style>
