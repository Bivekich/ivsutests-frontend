<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__section">
        <h4>О нас</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, est? Minima esse
          velit dolorum maxime!
        </p>
      </div>
      <div class="footer__section">
        <h4>Контакты</h4>
        <p>Email: info@example.com</p>
        <p>Телефон: +123 456 7890</p>
      </div>
      <div class="footer__section">
        <h4>Следите за нами</h4>
        <p><a href="">ВКонтакте</a> | <a href="">Telegram</a></p>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; 2024 IVSU Tests. Все права защищены.</p>
      <p>
        Made with ❤️ by
        <a
          href="https://codecrafters-frontend.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodeCrafters.
        </a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #343a40;
  color: #fff;
  padding: 2rem 1rem;
}

.footer__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.footer__section {
  flex: 1;
  min-width: 200px;
  margin: 1rem 0;
}

.footer__section h4 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.footer__section p {
  margin: 0.5rem 0;
  line-height: 1.5;
}

.footer__section a {
  color: #007bff;
  text-decoration: none;
}

.footer__section a:hover {
  text-decoration: underline;
}

.footer__bottom {
  text-align: center;
  border-top: 1px solid #495057;
  padding-top: 1rem;
}

.footer__bottom p {
  margin: 0;
  line-height: 1.5;
}

.footer__bottom a {
  color: #007bff;
  text-decoration: none;
}

.footer__bottom a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer__content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer__section {
    margin: 0.5rem 0;
  }
}

@media (max-width: 480px) {
  .footer__section h4 {
    font-size: 1.1rem;
  }

  .footer__section p {
    font-size: 0.875rem;
  }

  .footer__bottom p {
    font-size: 0.875rem;
  }
}
</style>
