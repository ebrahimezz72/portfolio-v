// Ahmed's Portfolio - Main JavaScript File

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Navbar Background on Scroll =====
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 240, 255, 0.1)';
  } else {
    navbar.style.backgroundColor = 'rgba(5, 5, 5, 0.95)';
    navbar.style.boxShadow = 'none';
  }
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = 'var(--text-primary)';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--neon-cyan)';
    }
  });
});

// ===== Typing Effect for Hero Title =====
const heroTitle = document.querySelector('.hero-title');
const originalText = heroTitle.textContent;
let charIndex = 0;

function typeText() {
  if (charIndex < originalText.length) {
    heroTitle.textContent = originalText.substring(0, charIndex + 1);
    charIndex++;
    setTimeout(typeText, 100);
  }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
  setTimeout(typeText, 500);
});

// ===== Form Submission Handler =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name') || 'Visitor';
    
    // Show success message (in real implementation, you would send this to a server)
    alert(`Thank you ${name}! Your message has been received. I'll get back to you soon.`);
    
    // Reset form
    this.reset();
  });
}

// ===== Project Card Hover Effect Enhancement =====
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// ===== Skill Card Animation on Scroll =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = `all 0.5s ease ${index * 0.1}s`;
  skillObserver.observe(card);
});

// ===== Project Cards Animation on Scroll =====
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.project-card').forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `all 0.6s ease ${index * 0.15}s`;
  projectObserver.observe(card);
});

// ===== Smooth Reveal Animation for Sections =====
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'all 0.8s ease';
  sectionObserver.observe(section);
});

// ===== Mobile Menu Toggle (if needed in future) =====
const createMobileMenu = () => {
  const navbar = document.querySelector('.navbar');
  const mobileMenuBtn = document.createElement('button');
  mobileMenuBtn.className = 'mobile-menu-btn';
  mobileMenuBtn.innerHTML = '☰';
  mobileMenuBtn.style.cssText = `
    display: none;
    background: none;
    border: none;
    color: var(--neon-cyan);
    font-size: 1.5rem;
    cursor: pointer;
  `;
  
  navbar.appendChild(mobileMenuBtn);
  
  mobileMenuBtn.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.flexDirection = 'column';
    navLinks.style.backgroundColor = 'var(--bg-secondary)';
    navLinks.style.padding = '1rem';
    navLinks.style.textAlign = 'center';
  });
};

// Initialize mobile menu on small screens
if (window.innerWidth <= 768) {
  createMobileMenu();
}

// ===== Console Welcome Message =====
console.log('%c Welcome to Ahmed\'s Portfolio! ', 'background: #00f0ff; color: #000; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%c Frontend Developer - HTML, CSS, JavaScript ', 'color: #00f0ff; font-size: 12px;');
// رقمك على واتساب مع كود الدولة (مصر: 20)
const phoneNumber = '+201015066288';

// حدد الفورم والزر
const form = document.querySelector('form'); // الفورم كله
const sendBtn = form.querySelector('.submit-btn'); // الزر بالـ class

sendBtn.addEventListener('click', function(e) {
  e.preventDefault(); // يمنع الفورم من الإرسال التقليدي

  // نجيب القيم من الفورم
  const name = form.querySelector('input[name="name"]')?.value || 'No Name';
  const email = form.querySelector('input[name="email"]')?.value || 'No Email';
  const message = form.querySelector('textarea[name="message"]')?.value || 'No Message';
  const Subject = form.querySelector(`input[name = "subject"]`)?.value ||'No subject'
  // نص الرسالة للواتساب
  const whatsappMessage = `Hi, my name is ${name}. Email: ${email}.Subject:${Subject} . Message: ${message}`;

  // رابط واتساب
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // يفتح رابط الواتساب في تبويب جديد
  window.open(whatsappURL, '_blank');
});
