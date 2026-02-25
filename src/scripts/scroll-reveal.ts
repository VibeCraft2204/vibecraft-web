export function initScrollReveal(
  selector = '.reveal',
  options?: IntersectionObserverInit
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options }
  );
  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
  return observer;
}
