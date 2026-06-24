<template>
  <footer class="footer">
    <hr class="footer__line divider-full" />

    <div class="footer__main">
      <div class="footer__col footer__col--newsletter">
        <p class="footer__heading body-l">подпишитесь на рассылку</p>
        <div class="footer__subscribe">
          <div class="footer__subscribe-row">
            <input
              type="email"
              class="footer__email body-l"
              placeholder="youremail@website.com"
              readonly
            />
            <button class="footer__subscribe-btn body-l" type="button">подписаться</button>
          </div>
          <hr class="footer__subscribe-line" />
        </div>
      </div>

      <div class="footer__col footer__col--contacts">
        <p class="footer__heading body-l">[ контакты ]</p>
        <div class="footer__contacts body-m">
          <div class="footer__contact-row">
            <span class="footer__contact-label">email</span>
            <span>operaapriori.org</span>
          </div>
          <div class="footer__contact-row">
            <span class="footer__contact-label">vk</span>
            <span>vk.com/operaapriori</span>
          </div>
          <div class="footer__contact-row">
            <span class="footer__contact-label">rutube</span>
            <span>rutube.ru/apriori</span>
          </div>
        </div>
      </div>

      <div class="footer__col footer__col--menu">
        <p class="footer__heading body-l">[ меню ]</p>
        <nav class="footer__menu body-m">
          <a href="#">главная</a>
          <a href="#/afisha">афиша</a>
          <a href="#/about">о фестивале</a>
          <a href="#/posetitelyam">посетителям</a>
          <a href="#/kontakty">контакты</a>
        </nav>
      </div>

      <img
        class="footer__logo"
        src="/assets/logo.svg"
        alt="Опера Априори"
        width="97"
        height="98"
      />
    </div>

    <div class="footer__bottom">
      <p class="footer__legal-text">
        © 2014-2026 Международный фестиваль вокальной музыки ОПЕРА АПРИОРИ
      </p>
      <a href="#" class="footer__legal-text">политика конфиденциальности</a>
      <a href="#" class="footer__legal-text">пользовательское соглашение</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 1920px;
  margin: 0 auto;
  background: #000;
  color: var(--color-white);
}

.footer__line {
  margin: 0;
  background: rgba(255, 255, 255, 0.2);
}

.footer__main {
  position: relative;
  display: grid;
  grid-template-columns: 483px 483px 295px;
  column-gap: 53px;
  padding: 45px 202px 0;
}

.footer__heading {
  margin-bottom: 68px;
  color: var(--color-white);
}

.footer__subscribe-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 16px;
}

.footer__email {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: none;
  padding: 0;
  color: var(--color-white);
  opacity: 0.4;
  outline: none;
}

.footer__email::placeholder {
  color: var(--color-white);
  opacity: 1;
}

.footer__subscribe-btn {
  flex-shrink: 0;
  color: var(--color-white);
  transition: opacity var(--transition);
}

.footer__subscribe-btn:hover {
  opacity: 0.7;
}

.footer__subscribe-line {
  margin: 0;
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
}

.footer__contacts,
.footer__menu {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.footer__contact-row {
  display: grid;
  grid-template-columns: 80px 1fr;
  column-gap: 50px;
  color: var(--color-white);
}

.footer__menu a {
  color: var(--color-white);
  transition: opacity var(--transition);
}

.footer__menu a:hover,
.footer__legal-text:hover {
  opacity: 0.7;
}

.footer__logo {
  position: absolute;
  top: 45px;
  right: 202px;
  width: 97px;
  height: 98px;
}

.footer__bottom {
  display: grid;
  grid-template-columns: 483px 483px 295px;
  column-gap: 53px;
  padding: 80px 202px 60px;
}

.footer__legal-text {
  font-family: var(--font-body);
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: var(--color-white);
  opacity: 0.5;
  font-variation-settings: 'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79,
    'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 40;
}
</style>
