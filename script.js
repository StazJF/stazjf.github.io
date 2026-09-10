const $ = (s, p = document) => p.querySelector(s);

const nav = $('.nav'), toggle = $('.menu-toggle');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.classList.toggle('open', open); toggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }));

const sections = [...document.querySelectorAll('main section[id]')], links = [...document.querySelectorAll('.nav a')];

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const spy = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)); }), { rootMargin: '-35% 0px -55% 0px' }); sections.forEach(s => spy.observe(s));
document.querySelectorAll('.project-plus').forEach(button => button.addEventListener('click', () => button.closest('.project').classList.toggle('expanded')));

const topButton = $('.to-top'); window.addEventListener('scroll', () => topButton.classList.toggle('show', scrollY > 500), { passive:true }); topButton.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
$('.contact-form').addEventListener('submit', e => { e.preventDefault(); const form = e.currentTarget, status = $('.form-status', form); if (!form.checkValidity()) { form.reportValidity(); status.textContent = 'Please complete all fields with a valid email address.'; return; } status.textContent = 'Thanks — your message is ready to send.'; form.reset(); });
$('#year').textContent = new Date().getFullYear();
