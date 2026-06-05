// Hero title character animation
const heroTitle = document.querySelector('.p-hero__title');
if (heroTitle) {
  let charIndex = 0;

  const wrapChars = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.textContent.trim()) return;
      const fragment = document.createDocumentFragment();
      for (const char of node.textContent) {
        const span = document.createElement('span');
        span.className = 'p-hero__title-char';
        span.style.setProperty('--i', charIndex++);
        span.textContent = char;
        fragment.appendChild(span);
      }
      node.parentNode.replaceChild(fragment, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'BR') {
      Array.from(node.childNodes).forEach(wrapChars);
    }
  };

  Array.from(heroTitle.childNodes).forEach(wrapChars);

  const mark = heroTitle.querySelector('.p-hero__title-mark');
  if (mark) {
    const markChars = mark.querySelectorAll('.p-hero__title-char');
    if (markChars.length) {
      const lastI = parseInt(markChars[markChars.length - 1].style.getPropertyValue('--i'));
      const delay = (lastI * 0.03 + 0.4).toFixed(2);
      mark.style.setProperty('--mark-delay', `${delay}s`);
    }
  }
}

// Scroll fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.js-fadeIn').forEach((el) => {
  const siblings = el.parentElement
    ? Array.from(el.parentElement.children).filter((c) => c.classList.contains('js-fadeIn'))
    : [];
  const sibIndex = siblings.indexOf(el);
  if (sibIndex > 0) {
    el.style.transitionDelay = `${sibIndex * 0.12}s`;
  }
  observer.observe(el);
});

// FAQ accordion
document.querySelectorAll('.p-faq__question button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const answer = btn.closest('.p-faq__item').querySelector('.p-faq__answer');

    btn.setAttribute('aria-expanded', String(!expanded));
    answer.classList.toggle('is-open', !expanded);
  });
});

// To top button
const totop = document.querySelector('.js-totop');
if (totop) {
  window.addEventListener('scroll', () => {
    totop.classList.toggle('is-visible', window.scrollY > 300);
  });

  totop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Hamburger menu (SP)
const hamburger = document.querySelector('.l-header__hamburger');
const nav = document.querySelector('.l-header__nav');

if (hamburger && nav) {
  const closeMenu = () => {
    hamburger.classList.remove('is-open');
    nav.classList.remove('is-open');
    hamburger.setAttribute('aria-label', 'メニュー');
  };

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = hamburger.classList.toggle('is-open');
    nav.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-label', isOpen ? '閉じる' : 'メニュー');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('is-open')) return;
    if (nav.contains(e.target) || hamburger.contains(e.target)) return;
    closeMenu();
  });
}
