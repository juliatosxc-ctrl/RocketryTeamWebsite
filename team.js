const teamTabs = Array.from(document.querySelectorAll('[role="tab"]'));
const teamSlides = teamTabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));
const carouselStatus = document.querySelector('.carousel-status');

function showTeam(index) {
  const activeIndex = (index + teamTabs.length) % teamTabs.length;

  teamTabs.forEach((tab, tabIndex) => {
    const isActive = tabIndex === activeIndex;
    tab.setAttribute('aria-selected', String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
    teamSlides[tabIndex].hidden = !isActive;
  });

  carouselStatus.textContent = `${activeIndex + 1} / ${teamTabs.length}`;
}

teamTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showTeam(index));
  tab.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const nextIndex = (index + 1) % teamTabs.length;
      showTeam(nextIndex);
      teamTabs[nextIndex].focus();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const previousIndex = (index - 1 + teamTabs.length) % teamTabs.length;
      showTeam(previousIndex);
      teamTabs[previousIndex].focus();
    }
  });
});

document.querySelectorAll('.carousel-control').forEach((button) => {
  button.addEventListener('click', () => {
    const activeIndex = teamTabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true');
    showTeam(activeIndex + Number(button.dataset.direction));
  });
});
