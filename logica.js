  // Navbar scroll effect
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Animate stats on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.stat, .service-card, .testi').forEach(el => observer.observe(el));

  // Simple form handler
  function handleSubmit() {
    const inputs = document.querySelectorAll('input, textarea, select');
    let filled = true;
    inputs.forEach(i => { if (!i.value) filled = false; });
    if (!filled) {
      alert('Por favor completa todos los campos antes de enviar.');
      return;
    }
    alert('¡Gracias! Hemos recibido tu solicitud. Te contactaremos en menos de 24 horas. 🏠');
  }
