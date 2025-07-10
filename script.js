// Modal functionality
document.querySelectorAll('.portfolio-item').forEach(item => {
  item.addEventListener('click', () => {
    const modalId = item.getAttribute('data-modal');
    document.getElementById(modalId).classList.add('active');
  });
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const modalId = item.getAttribute('data-modal');
      document.getElementById(modalId).classList.add('active');
    }
  });
});
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.remove('active');
  });
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.closest('.modal').classList.remove('active');
    }
  });
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
  }
});
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
});

// Tooltip accessibility (keyboard focus)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('focus', () => {
    link.classList.add('show-tooltip');
  });
  link.addEventListener('blur', () => {
    link.classList.remove('show-tooltip');
  });
});

// Optional: Smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior: 'smooth'});
    }
  });
});