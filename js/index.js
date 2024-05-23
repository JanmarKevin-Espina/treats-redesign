const navItems = document.querySelectorAll('.js-nav-toggle');
const navUser = document.querySelectorAll('.js-user-toggle');
const navList = document.querySelectorAll('.header__nav-list');

if (navUser) {
  /**
   * Closes all sub lists
   */
  const removeOpenClassUser = () => {
    navUser.forEach(items => {
      items.classList.remove('block');
    });
  }

  navUser.forEach(items => {
    items.addEventListener('click', () => {
      /**
       * Close sub list if already open
       */
      if (navUser.classList.contains('block')) {
        navUser.classList.remove('block');
        return;
      }

      /**
       * Close all sub lists
       * Open sub list of clicked toggle items
       */
      removeOpenClassUser();
      items.classList.add('block');
      console.log(items)
    });
  });

  /**
   * Close sub-lists if clicked outside the toggle items
   */
  document.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('js-user-toggle')) {
      removeOpenClassUser();
    }
  });
}

if (navItems) {
  /**
   * Closes all sub lists
   */
  const removeOpenClass = () => {
    navItems.forEach(item => {
      item.classList.remove('open');
    });
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      /**
       * Close sub list if already open
       */
      if (item.classList.contains('open')) {
        item.classList.remove('open');
        return;
      }

      /**
       * Close all sub lists
       * Open sub list of clicked toggle item
       */
      removeOpenClass();
      item.classList.add('open');
    });
  });

  /**
   * Close sub-lists if clicked outside the toggle item
   */
  document.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('js-nav-toggle')) {
      removeOpenClass();
    }
  });
}

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("open", window.scrollY > 0);
})