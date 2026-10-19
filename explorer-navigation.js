document.querySelectorAll('[data-history-navigation]').forEach(button => {
  button.addEventListener('click', () => {
    if (button.dataset.historyNavigation === 'back') {
      window.history.back();
    } else if (button.dataset.historyNavigation === 'forward') {
      window.history.forward();
    }
  });
});
