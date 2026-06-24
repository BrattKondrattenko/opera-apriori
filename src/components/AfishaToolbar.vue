<template>
  <div class="afisha-toolbar">
    <div class="afisha-toolbar__categories">
      <div class="afisha-toolbar__track">
        <button
          type="button"
          class="afisha-toolbar__tab afisha-toolbar__tab--active"
        >
          все события
        </button>
        <button type="button" class="afisha-toolbar__tab">концерты</button>
        <button type="button" class="afisha-toolbar__tab">мастер-классы</button>
        <button type="button" class="afisha-toolbar__tab">лекции</button>
      </div>
    </div>

    <div class="afisha-toolbar__actions">
      <button type="button" class="afisha-toolbar__calendar" aria-label="Календарь">
        <img src="/assets/icon-calendar.svg" alt="" width="32" height="33" />
      </button>
      <button type="button" class="afisha-toolbar__filters">
        фильтры
        <img src="/assets/icon-filters.svg" alt="" width="32" height="9" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.afisha-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 202px 64px;
}

.afisha-toolbar__track {
  display: inline-flex;
  align-items: center;
  gap: 72px;
  height: 75px;
  border: 2px solid var(--color-black);
  border-radius: 65px;
  padding-right: 47px;
}

.afisha-toolbar__tab {
  font-family: var(--font-heading);
  font-size: 18px;
  line-height: 36px;
  letter-spacing: 0.54px;
  text-transform: uppercase;
  color: var(--color-black);
  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  padding: 0;
}

.afisha-toolbar__tab--active {
  display: inline-flex;
  align-items: center;
  align-self: stretch;
  background: var(--color-black);
  color: var(--color-white);
  border: 2px solid var(--color-black);
  border-radius: 65px;
  padding: 0 47px;
  margin: -2px 0 -2px -2px;
}

.afisha-toolbar__actions {
  display: flex;
  align-items: center;
  gap: 32px;
}

.afisha-toolbar__calendar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border: 2px solid var(--color-black);
  border-radius: 56px;
  background: var(--color-bg);
  cursor: pointer;
  flex-shrink: 0;
}

.afisha-toolbar__filters {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 226px;
  height: 75px;
  border: 2px solid var(--color-black);
  border-radius: 65px;
  background: var(--color-bg);
  font-family: var(--font-heading);
  font-size: 18px;
  line-height: 36px;
  letter-spacing: 0.54px;
  text-transform: uppercase;
  color: var(--color-black);
  cursor: pointer;
  flex-shrink: 0;
}
</style>
