var username = "Аккаунт";
var navbar = `<header class="header">
<nav class="navbar">
  <div class="nav-wrapper">
    <nav class="login-navbar">
      <li><a class="nav-login" href="#0">${username}</a></li>
    </nav>
    <div class="nav-name"></div>
    <div class="hamburger">
      <span class="bar" style="background-color: #FFB27B"></span>
      <span class="bar" style="background-color: #6F4D35"></span>
      <span class="bar" style="background-color: #20150D"></span>
    </div>
  </div>
  <div class="nav-menu">
    <div class="nav-column">
      <div class="nav-header"><a href="pages/Beading.html" class="nav-header-link">Бисероплетение</a></div>
      <ul class="nav-content">
        <li class="nav-item">
          <a href="pages/Schemes_beading.html" class="nav-link">Cхемы</a>
        </li>
        <li class="nav-item">
          <a href="pages/Ideas_beading.html" class="nav-link">Идеи</a>
        </li>
        <li class="nav-item">
          <a href="https://leonardo.ru/ishop/tree_1452786462/" class="nav-link">Магазин</a>
        </li>
        <li class="nav-item">
          <a href="pages/Articles_beading.html" class="nav-link">Статьи</a>
        </li>
      </ul>
    </div>
    <div class="nav-column">
      <div class="nav-header"><a href="pages/Macrame.html" class="nav-header-link">Макраме</a></div>
      <ul class="nav-content">
        <li class="nav-item">
          <a href="pages/Schemes_macrame.html" class="nav-link">Схемы</a>
        </li>
        <li class="nav-item">
          <a href="pages/Lessons.html" class="nav-link">Видеоуроки</a>
        </li>
        <li class="nav-item">
          <a href="https://leonardo.ru/ishop/tree_1453399262/" class="nav-link">Магазин</a>
        </li>
        <li class="nav-item">
          <a href="pages/Articles_macrame.html" class="nav-link">Статьи</a>
        </li>
      </ul>
    </div>
    <div class="nav-column">
      <div class="nav-header"><a href="pages/Embroidery.html" class="nav-header-link">Вышивание</a></div>
      <ul class="nav-content">
        <li class="nav-item">
          <a href="pages/Schemes_embroidery.html" class="nav-link">Схемы</a>
        </li>
        <li class="nav-item">
          <a href="pages/Ideas_embroidery.html" class="nav-link">Идеи</a>
        </li>
        <li class="nav-item">
          <a href="https://leonardo.ru/ishop/tree_1436906062/" class="nav-link">Магазин</a>
        </li>
        <li class="nav-item">
          <a href="pages/Articles_embroidery.html" class="nav-link">Статьи</a>
        </li>
      </ul>
    </div>
    <div class="nav-column">
      <div class="nav-header"><a href="pages/Knitting.html" class="nav-header-link">Вязание</a></div>
      <ul class="nav-content">
        <li class="nav-item">
          <a href="pages/Schemes_knitting.html" class="nav-link">Схемы</a>
        </li>
        <li class="nav-item">
          <a href="pages/Lessons.html" class="nav-link">Видеоуроки</a>
        </li>
        <li class="nav-item">
          <a href="https://leonardo.ru/ishop/tree_1444732062/" class="nav-link">Магазин</a>
        </li>
        <li class="nav-item">
          <a href="pages/Articles_knitting.html" class="nav-link">Статьи</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
<div class="cd-user-modal">
<div class="cd-user-modal-container">
  <ul class="cd-switcher">
    <li><a href="#0">Вход</a></li>
    <li><a href="#0">Регистрация</a></li>
  </ul>

  <div id="cd-login">
    <form class="cd-form">
      <p class="fieldset">
        <label class="image-replace cd-username" for="signup-username">Имя пользователя</label>
        <input class="full-width has-padding has-border" id="signup-username" type="text"
        placeholder="Имя пользователя">
      </p>

      <p class="fieldset">
        <label class="image-replace cd-password" for="signin-password">Пароль</label>
        <input class="full-width has-padding has-border" id="signin-password" type="password" placeholder="Пароль">
        <a href="#0" class="hide-password">Показать</a>
      </p>

      <p class="fieldset">
        <input type="checkbox" id="remember-me">
        <label for="remember-me" style="font-family: 'Comfortaa'">Запомнить меня</label>
      </p>

      <p class="fieldset">
      <a href="" class="floating-button">Войти</a>
      </p>
    </form>

    <p class="cd-form-bottom-message"><a href="#0">Забыли пароль?</a></p>
  </div>

  <div id="cd-signup">
    <form class="cd-form">
      <p class="fieldset">
        <label class="image-replace cd-username" for="signup-username">Имя пользователя</label>
        <input class="full-width has-padding has-border" id="signup-username" type="text"
          placeholder="Имя пользователя">
      </p>

      <p class="fieldset">
        <label class="image-replace cd-email" for="signup-email">E-mail</label>
        <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="E-mail">
      </p>

      <p class="fieldset">
        <label class="image-replace cd-password" for="signup-password">Пароль</label>
        <input class="full-width has-padding has-border" id="signup-password" type="password" placeholder="Пароль">
        <a href="#0" class="hide-password">Показать</a>
      </p>

      <p class="fieldset">
        <input type="checkbox" id="accept-terms">
        <label for="accept-terms" style="font-family: 'Comfortaa'">Я согласен с <a href="#0">Условиями</a></label>
      </p>

      <p class="fieldset">
      <a href="" class="floating-button">Создать</a>
      </p>
    </form>

  </div>

  <div id="cd-reset-password">
    <p class="cd-form-message" style="font-family: 'Comfortaa'">Забыли пароль? Пожалуйста, введите адрес своей электронной почты. Вы получите ссылку,
      чтобы создать новый пароль.</p>

    <form class="cd-form">
      <p class="fieldset">
        <label class="image-replace cd-email" for="reset-email">E-mail</label>
        <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="E-mail">
      </p>

      <p class="fieldset">
        <a href="" class="floating-button">Восстановить</a>
      </p>
    </form>

    <p class="cd-form-bottom-message"><a href="#0">Вернуться к входу</a></p>
  </div> 
  <a href="#0" class="cd-close-form">Закрыть</a>
</div> 
</div> 
`
document.body.insertAdjacentHTML("afterbegin", navbar);