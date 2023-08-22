const navItems = document.querySelectorAll('.js-nav-toggle');

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