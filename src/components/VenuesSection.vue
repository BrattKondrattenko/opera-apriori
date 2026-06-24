<template>
  <section class="venues reveal-group reveal-group--rich" ref="sectionRef">
    <div class="venues__inner container">
      <h2 class="venues__heading heading-2 reveal-item" style="--delay: 0s">ПЛОЩАДКИ</h2>
      <hr class="venues__divider divider-content reveal-item reveal-item--line" style="--delay: 0.1s" />

      <div class="venues__layout">
        <ul class="venues__list">
          <li
            v-for="(venue, index) in venues"
            :key="venue.name"
            class="venues__item reveal-item reveal-item--from-left"
            :style="{ '--delay': `${0.16 + index * 0.09}s` }"
          >
            <p class="venues__name heading-3">{{ venue.name }}</p>
            <p class="venues__address">{{ venue.address }}</p>
          </li>
        </ul>

        <hr class="venues__divider-v reveal-item reveal-item--line-v" style="--delay: 0.28s" aria-hidden="true" />

        <div class="venues__featured">
          <div class="venues__image reveal-item reveal-item--image" style="--delay: 0.36s">
            <img src="/assets/mmm.jpg" alt="Концертный зал им. Чайковского" />
          </div>
          <div class="venues__featured-footer reveal-item reveal-item--from-right" style="--delay: 0.5s">
            <div class="venues__featured-info">
              <p class="venues__featured-name heading-2">КОНЦЕРТНЫЙ ЗАЛ ИМ. ЧАЙКОВСКОГО</p>
              <p class="venues__featured-address">Москва, Триумфальная площадь, 4</p>
            </div>
            <a href="#" class="venues__link body-l">
              все площадки
              <img src="/assets/arrow-link.svg" alt="" width="46" height="21" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRevealGroup } from '../composables/useRevealGroup'

const sectionRef = ref(null)

const venues = [
  {
    name: 'МАЛЫЙ ЗАЛ «ЗАРЯДЬЕ»',
    address: 'Москва, Варварка, 6',
  },
  {
    name: 'ДОМ КУЛЬТУРЫ «ГЭС-2»',
    address: 'Москва, Болотная набережная, 15',
  },
  {
    name: 'АНГЛИКАНСКАЯ ЦЕРКОВЬ СВ. АНДРЕЯ',
    address: 'Москва, Вознесенский переулок, 8/5с3',
  },
  {
    name: 'ДОМ СМИРНОВА',
    address: 'Москва, Тверской бульвар, 18',
  },
]

useRevealGroup(sectionRef)
</script>

<style scoped>
.venues {
  background: var(--color-bg);
}

.venues__inner {
  padding-bottom: clamp(80px, 10vw, 160px);
}

.venues__heading {
  color: var(--color-grey);
  margin-bottom: 37px;
  padding-top: clamp(60px, 8vw, 150px);
}

.venues__layout {
  display: grid;
  grid-template-columns: minmax(240px, 1fr) 1px minmax(0, 2.15fr);
  align-items: start;
  margin-top: 80px;
}

.venues__list {
  list-style: none;
  padding-right: clamp(24px, 2.5vw, 48px);
}

.venues__divider-v {
  width: 1px;
  height: 100%;
  min-height: 100%;
  border: none;
  background: var(--color-black);
  margin: 0;
  align-self: stretch;
}

.venues__item {
  position: relative;
  padding: clamp(20px, 2vw, 32px) 0;
}

.venues__item::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: var(--color-black);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0s);
}

.reveal-group--rich.is-visible .venues__item::after {
  transform: scaleX(1);
  transition-delay: calc(var(--delay, 0s) + 0.12s);
}

.venues__item:first-child {
  padding-top: 0;
}

.venues__item:last-child::after {
  display: none;
}

.venues__name {
  color: var(--color-grey);
  margin-bottom: 8px;
}

.venues__address {
  font-family: var(--font-body);
  font-size: clamp(16px, 1.15vw, 22px);
  line-height: 1.18;
  color: var(--color-grey);
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

.venues__featured {
  padding-left: clamp(24px, 2.5vw, 48px);
}

.venues__image {
  width: 100%;
  overflow: hidden;
}

.venues__image img {
  width: 100%;
  height: clamp(220px, 28vw, 538px);
  object-fit: cover;
  object-position: center;
}

.venues__featured-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-top: clamp(24px, 2.5vw, 40px);
}

.venues__featured-name {
  color: var(--color-grey);
  margin-bottom: 12px;
}

.venues__featured-address {
  font-family: var(--font-body);
  font-size: clamp(16px, 1.15vw, 22px);
  line-height: 1.18;
  color: var(--color-grey);
  font-variation-settings: "GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79,
    "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 56;
}

.venues__link {
  display: inline-flex;
  align-items: center;
  gap: 24px;
  color: var(--color-black);
  flex-shrink: 0;
  white-space: nowrap;
  transition: gap var(--transition);
}

.venues__link:hover {
  gap: 32px;
}

@media (max-width: 1100px) {
  .venues__layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .venues__divider-v {
    display: none;
  }

  .venues__list {
    padding-right: 0;
  }

  .venues__featured {
    padding-left: 0;
  }

  .venues__featured-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
