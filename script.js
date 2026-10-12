const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// 영업시간: 평일 08–21시, 주말 10–22시 (한국 시간 기준)
function isOpenNow() {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
  const day = now.getDay();
  const hour = now.getHours();
  const weekend = day === 0 || day === 6;
  return weekend ? hour >= 10 && hour < 22 : hour >= 8 && hour < 21;
}

document.getElementById('open-status').textContent = isOpenNow()
  ? '지금 영업 중이에요'
  : '지금은 준비 중이에요';

document.getElementById('year').textContent = new Date().getFullYear();
