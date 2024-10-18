window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const scrollPos = window.scrollY;

  // Change header background on scroll
  if (scrollPos > 50) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }

  // Reveal elements on scroll
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
          section.classList.add('visible');
      }
  });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
  } else {
      alert('Message sent successfully!');
      this.reset(); // Reset form fields
  }
});

// Smooth scroll behavior for navigation
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});
