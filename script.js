/* ═══════════════════════════════════════════════════════════
   TRADING DASHBOARD PORTFOLIO — script.js
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── Data ─────────────────────────────────────────────────── */

const SKILLS = [
  { symbol: 'JS',  full: 'JavaScript',  pct: 95, color: '#d29922', category: 'Frontend' },
  { symbol: 'TS',  full: 'TypeScript',   pct: 88, color: '#58a6ff', category: 'Frontend' },
  { symbol: 'RCT', full: 'React',        pct: 90, color: '#61dafb', category: 'Frontend' },
  { symbol: 'NODE',full: 'Node.js',      pct: 85, color: '#3fb950', category: 'Backend'  },
  { symbol: 'PY',  full: 'Python',       pct: 78, color: '#bc8cff', category: 'Backend'  },
  { symbol: 'SQL', full: 'PostgreSQL',   pct: 80, color: '#336791', category: 'Backend'  },
  { symbol: 'CSS', full: 'CSS / SCSS',   pct: 92, color: '#f85149', category: 'Frontend' },
  { symbol: 'DCK', full: 'Docker',       pct: 72, color: '#0db7ed', category: 'DevOps'   },
  { symbol: 'GIT', full: 'Git',          pct: 94, color: '#f05032', category: 'DevOps'   },
  { symbol: 'AWS', full: 'AWS',          pct: 68, color: '#ff9900', category: 'DevOps'   },
];

const PROJECTS = [
  {
    name: 'MarketLens',
    pair: 'WEB / FinTech',
    icon: '📊',
    desc: 'Real-time financial data dashboard with live candlestick charts, portfolio tracking, and AI-powered market insights.',
    status: 'open',
    year: '2024',
    category: 'fullstack',
    metrics: { roi: '+340%', users: '2.1K', uptime: '99.9%' },
    tech: ['React', 'Node.js', 'WebSockets', 'Chart.js', 'PostgreSQL'],
    demo: '#',
    code: '#',
  },
  {
    name: 'DevFlow',
    pair: 'APP / Productivity',
    icon: '⚡',
    desc: 'Project management tool built for developers — featuring Kanban boards, GitHub integration, and burndown analytics.',
    status: 'open',
    year: '2024',
    category: 'fullstack',
    metrics: { roi: '+210%', users: '850', uptime: '99.7%' },
    tech: ['TypeScript', 'Next.js', 'Prisma', 'tRPC', 'TailwindCSS'],
    demo: '#',
    code: '#',
  },
  {
    name: 'PixelForge',
    pair: 'UI / Design Tool',
    icon: '🎨',
    desc: 'Browser-based vector editor with layer management, custom gradients, SVG export, and collaborative editing in real time.',
    status: 'open',
    year: '2023',
    category: 'frontend',
    metrics: { roi: '+155%', users: '1.4K', uptime: '100%' },
    tech: ['Canvas API', 'React', 'TypeScript', 'IndexedDB'],
    demo: '#',
    code: '#',
  },
  {
    name: 'NexAPI',
    pair: 'API / Backend',
    icon: '🔌',
    desc: 'Extensible REST & GraphQL API gateway with built-in rate-limiting, authentication middleware, and OpenAPI docs.',
    status: 'open',
    year: '2023',
    category: 'backend',
    metrics: { roi: '+290%', users: '3.2K', uptime: '99.95%' },
    tech: ['Node.js', 'Express', 'GraphQL', 'Redis', 'MongoDB'],
    demo: '#',
    code: '#',
  },
  {
    name: 'SwiftShop',
    pair: 'E-Commerce / Web',
    icon: '🛒',
    desc: 'Full-featured e-commerce platform with Stripe integration, inventory management dashboard, and mobile-first responsive UI.',
    status: 'open',
    year: '2022',
    category: 'fullstack',
    metrics: { roi: '+178%', users: '5.7K', uptime: '99.8%' },
    tech: ['React', 'Django', 'Stripe', 'PostgreSQL', 'Docker'],
    demo: '#',
    code: '#',
  },
  {
    name: 'ChronoLog',
    pair: 'CLI / Developer Tool',
    icon: '📋',
    desc: 'Automated changelog generator that analyzes commit history and produces formatted release notes using NLP classification.',
    status: 'closed',
    year: '2022',
    category: 'backend',
    metrics: { roi: '+130%', users: '420', uptime: 'N/A' },
    tech: ['Python', 'OpenAI API', 'Click', 'Git API'],
    demo: '#',
    code: '#',
  },
  {
    name: 'PulseUI',
    pair: 'Library / Frontend',
    icon: '🧩',
    desc: 'Headless React component library with full accessibility support, dark-mode tokens, and auto-generated Storybook docs.',
    status: 'closed',
    year: '2022',
    category: 'frontend',
    metrics: { roi: '+95%', users: '680', uptime: 'N/A' },
    tech: ['React', 'TypeScript', 'Storybook', 'Radix UI', 'Stitches'],
    demo: '#',
    code: '#',
  },
  {
    name: 'CloudVault',
    pair: 'SaaS / Backend',
    icon: '☁️',
    desc: 'Secure file-storage SaaS with AES-256 encryption, versioning, shareable links, and tiered subscription billing.',
    status: 'closed',
    year: '2021',
    category: 'backend',
    metrics: { roi: '+220%', users: '1.1K', uptime: 'N/A' },
    tech: ['AWS S3', 'Lambda', 'Node.js', 'Stripe', 'DynamoDB'],
    demo: '#',
    code: '#',
  },
];

const EXPERIENCE = [
  {
    period: '2023 — Present',
    type: 'Full-time',
    role: 'Senior Full-Stack Developer',
    company: 'TechVenture Inc.',
    desc: 'Leading a team of 5 engineers to build scalable SaaS products. Architected a microservices platform handling 10M+ requests/day. Mentoring junior developers and running bi-weekly code reviews.',
    kpis: ['+340% performance', '10M req/day', 'Team lead'],
    icon: '🚀',
  },
  {
    period: '2021 — 2023',
    type: 'Full-time',
    role: 'Full-Stack Developer',
    company: 'DigitalCraft Agency',
    desc: 'Built custom web applications for 15+ clients across FinTech, e-commerce, and media. Delivered all projects on time with >98% client satisfaction score.',
    kpis: ['15+ clients', '98% satisfaction', 'On-time delivery'],
    icon: '💼',
  },
  {
    period: '2020 — 2021',
    type: 'Freelance',
    role: 'Frontend Developer',
    company: 'Self-employed',
    desc: 'Designed and built responsive React applications for startups and small businesses. Specialised in performance optimisation and converting Figma designs to pixel-perfect code.',
    kpis: ['+60% conversions', 'Lighthouse 95+', '12 projects'],
    icon: '🧪',
  },
  {
    period: '2019 — 2020',
    type: 'Internship',
    role: 'Junior Developer',
    company: 'StartupHub Ltd.',
    desc: 'First professional role — contributed features to a React/Node.js SaaS product. Wrote unit tests, fixed bugs, and participated in agile sprints.',
    kpis: ['React / Node', 'Agile team', '100+ commits'],
    icon: '🌱',
  },
];

/* ── Chart defaults ──────────────────────────────────────── */
Chart.defaults.color = '#8b949e';
Chart.defaults.font.family = "'JetBrains Mono', monospace";
Chart.defaults.font.size = 11;

/* ── Utility helpers ─────────────────────────────────────── */
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return Array.from(ctx.querySelectorAll(sel)); }

function animateCount(el, target, duration = 1400) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function observeOnce(el, cb, options = {}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cb(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, ...options });
  observer.observe(el);
}

function observeAll(selector, cb, options = {}) {
  $$(selector).forEach(el => observeOnce(el, cb, options));
}

/* ── Navbar ──────────────────────────────────────────────── */
function initNavbar() {
  const navbar = $('#navbar');
  const toggle = $('#navToggle');
  const navLinks = $('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Active link on scroll
  const sections = $$('section[id]');
  const links = $$('.nav-link');
  const onScroll = () => {
    const offset = 100;
    sections.forEach(sec => {
      const top = sec.offsetTop - offset;
      const bottom = top + sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        links.forEach(l => l.classList.toggle('active', l.dataset.section === sec.id));
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Close mobile nav on link click
  $$('.nav-link').forEach(l => l.addEventListener('click', () => {
    navLinks.classList.remove('open');
  }));
}

/* ── Counter animations (hero stats) ─────────────────────── */
function initCounters() {
  $$('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    observeOnce(el, target => animateCount(target, parseInt(target.dataset.count, 10)));
  });
}

/* ── Activity Chart (Hero) ───────────────────────────────── */
function buildActivityData(range) {
  const labels = [];
  const data = [];
  let count, step;
  if (range === '1W')  { count = 7;  step = 'day'; }
  else if (range === '1M') { count = 30; step = 'day'; }
  else { count = 52; step = 'week'; }

  const now = new Date();
  for (let i = count - 1; i >= 0; i--) {
    const d = new Date(now);
    if (step === 'day') {
      d.setDate(d.getDate() - i);
      labels.push(d.toLocaleDateString('en', { month: 'short', day: 'numeric' }));
    } else {
      d.setDate(d.getDate() - i * 7);
      labels.push(`W${count - i}`);
    }
    data.push(Math.round(20 + Math.random() * 60 + Math.sin(i / 3) * 20));
  }
  return { labels, data };
}

let activityChart = null;
function initActivityChart(range = '1W') {
  const ctx = $('#activityChart');
  if (!ctx) return;

  const { labels, data } = buildActivityData(range);
  const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 140);
  gradient.addColorStop(0, 'rgba(88,166,255,0.35)');
  gradient.addColorStop(1, 'rgba(88,166,255,0)');

  if (activityChart) activityChart.destroy();
  activityChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data,
        borderColor: '#58a6ff',
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: { legend: { display: false }, tooltip: {
        backgroundColor: '#1c2128',
        borderColor: '#30363d',
        borderWidth: 1,
        padding: 10,
        titleColor: '#8b949e',
        bodyColor: '#e6edf3',
      }},
      scales: {
        x: { grid: { color: 'rgba(48,54,61,0.5)' }, ticks: { maxTicksLimit: 6 } },
        y: { grid: { color: 'rgba(48,54,61,0.5)' }, ticks: { maxTicksLimit: 4 } },
      },
    },
  });
}

function initChartControls() {
  $$('.chart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.chart-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      initActivityChart(btn.dataset.range);
    });
  });
}

/* ── Holdings list (Skills) ──────────────────────────────── */
function initHoldings() {
  const list = $('#holdingsList');
  if (!list) return;

  SKILLS.forEach(skill => {
    const row = document.createElement('div');
    row.className = 'holding-row fade-in';
    const barColor = skill.color;
    row.innerHTML = `
      <div class="holding-name">
        <span class="holding-symbol">${skill.symbol}</span>
        <span class="holding-full">${skill.full}</span>
      </div>
      <div class="holding-bar-wrap">
        <div class="holding-bar" style="background:${barColor};width:0%"
             data-width="${skill.pct}%"></div>
      </div>
      <span class="holding-pct" style="color:${barColor}">${skill.pct}%</span>
    `;
    list.appendChild(row);

    observeOnce(row, el => {
      el.classList.add('visible');
      const bar = el.querySelector('.holding-bar');
      setTimeout(() => {
        bar.style.width = bar.dataset.width;
      }, 100);
    });
  });
}

/* ── Skill Radar chart ───────────────────────────────────── */
function initSkillRadar() {
  const ctx = $('#skillRadar');
  if (!ctx) return;

  const categories = [...new Set(SKILLS.map(s => s.category))];
  const avgByCategory = categories.map(cat => {
    const items = SKILLS.filter(s => s.category === cat);
    return Math.round(items.reduce((sum, s) => sum + s.pct, 0) / items.length);
  });

  // also include top 6 individual skills for radar
  const radarSkills = SKILLS.slice(0, 8);

  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: radarSkills.map(s => s.full),
      datasets: [{
        label: 'Proficiency',
        data: radarSkills.map(s => s.pct),
        borderColor: '#58a6ff',
        backgroundColor: 'rgba(88,166,255,0.15)',
        pointBackgroundColor: '#58a6ff',
        pointBorderColor: '#0d1117',
        pointHoverBackgroundColor: '#58a6ff',
        borderWidth: 2,
        pointRadius: 4,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        r: {
          min: 50,
          max: 100,
          ticks: { stepSize: 10, backdropColor: 'transparent', color: '#484f58' },
          grid: { color: 'rgba(48,54,61,0.6)' },
          pointLabels: { color: '#8b949e', font: { size: 10 } },
          angleLines: { color: 'rgba(48,54,61,0.6)' },
        },
      },
    },
  });
}

/* ── Skill Donut chart ───────────────────────────────────── */
function initSkillDonut() {
  const ctx = $('#skillDonut');
  const legendEl = $('#donutLegend');
  if (!ctx || !legendEl) return;

  const categories = [...new Set(SKILLS.map(s => s.category))];
  const colours = ['#58a6ff', '#3fb950', '#d29922', '#bc8cff', '#f78166'];
  const counts = categories.map(cat => SKILLS.filter(s => s.category === cat).length);

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: categories,
      datasets: [{
        data: counts,
        backgroundColor: colours.slice(0, categories.length),
        borderColor: '#1c2128',
        borderWidth: 3,
        hoverBorderWidth: 4,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1c2128',
          borderColor: '#30363d',
          borderWidth: 1,
          padding: 10,
          titleColor: '#8b949e',
          bodyColor: '#e6edf3',
          callbacks: {
            label: ctx => ` ${ctx.label}: ${ctx.raw} skill${ctx.raw !== 1 ? 's' : ''}`,
          },
        },
      },
    },
  });

  // Legend
  categories.forEach((cat, i) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `
      <span class="legend-dot" style="background:${colours[i]}"></span>
      <span>${cat} (${counts[i]})</span>
    `;
    legendEl.appendChild(item);
  });
}

/* ── Projects / Positions ────────────────────────────────── */
function renderProjects(filter = 'all') {
  const grid = $('#positionsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  filtered.forEach((project, i) => {
    const card = document.createElement('div');
    card.className = `position-card`;
    card.dataset.category = project.category;
    card.style.animationDelay = `${i * 60}ms`;

    card.innerHTML = `
      <div class="pos-header">
        <div class="pos-symbol-group">
          <div class="pos-icon">${project.icon}</div>
          <div>
            <div class="pos-name">${project.name}</div>
            <div class="pos-pair">${project.pair}</div>
          </div>
        </div>
        <div class="pos-status">
          <span class="pos-badge ${project.status}">${project.status === 'open' ? 'LIVE' : 'ARCHIVED'}</span>
          <span class="pos-year">${project.year}</span>
        </div>
      </div>
      <p class="pos-desc">${project.desc}</p>
      <div class="pos-metrics">
        <div class="pos-metric">
          <div class="pos-metric-label">ROI</div>
          <div class="pos-metric-value positive">${project.metrics.roi}</div>
        </div>
        <div class="pos-metric">
          <div class="pos-metric-label">Users</div>
          <div class="pos-metric-value">${project.metrics.users}</div>
        </div>
        <div class="pos-metric">
          <div class="pos-metric-label">Uptime</div>
          <div class="pos-metric-value">${project.metrics.uptime}</div>
        </div>
      </div>
      <div class="pos-tech-stack">
        ${project.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
      <div class="pos-actions">
        <a href="${project.demo}" class="pos-btn primary" target="_blank" rel="noopener">↗ Live Demo</a>
        <a href="${project.code}" class="pos-btn" target="_blank" rel="noopener">{ } Source</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function initProjects() {
  renderProjects();

  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
}

/* ── Experience / Timeline ───────────────────────────────── */
function initTimeline() {
  const tl = $('#timeline');
  if (!tl) return;

  EXPERIENCE.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
      <div class="timeline-dot">${exp.icon}</div>
      <div class="timeline-content">
        <div class="timeline-meta">
          <span class="timeline-period">${exp.period}</span>
          <span class="timeline-type">${exp.type}</span>
        </div>
        <div class="timeline-role">${exp.role}</div>
        <div class="timeline-company">${exp.company}</div>
        <p class="timeline-desc">${exp.desc}</p>
        <div class="timeline-kpis">
          ${exp.kpis.map((k, i) => `<span class="kpi-badge ${i === 0 ? 'positive' : 'accent'}">${k}</span>`).join('')}
        </div>
      </div>
    `;
    tl.appendChild(item);

    observeOnce(item, el => {
      setTimeout(() => el.classList.add('visible'), 100);
    });
  });
}

/* ── Growth Chart (Experience) ───────────────────────────── */
function initGrowthChart() {
  const ctx = $('#growthChart');
  if (!ctx) return;

  const years = ['2019', '2020', '2021', '2022', '2023', '2024'];
  const skillLevel     = [30, 45, 60, 72, 85, 95];
  const responsibility = [20, 30, 48, 63, 82, 92];
  const impact         = [10, 20, 38, 57, 78, 95];

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Skill Level',
          data: skillLevel,
          borderColor: '#58a6ff',
          backgroundColor: 'rgba(88,166,255,0.08)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          borderWidth: 2,
        },
        {
          label: 'Responsibility',
          data: responsibility,
          borderColor: '#3fb950',
          backgroundColor: 'rgba(63,185,80,0.08)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          borderWidth: 2,
        },
        {
          label: 'Impact',
          data: impact,
          borderColor: '#d29922',
          backgroundColor: 'rgba(210,153,34,0.08)',
          fill: true,
          tension: 0.4,
          pointRadius: 4,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1c2128',
          borderColor: '#30363d',
          borderWidth: 1,
          padding: 10,
          titleColor: '#8b949e',
          bodyColor: '#e6edf3',
        },
      },
      scales: {
        x: { grid: { color: 'rgba(48,54,61,0.5)' } },
        y: {
          min: 0,
          max: 100,
          grid: { color: 'rgba(48,54,61,0.5)' },
          ticks: { callback: v => `${v}%` },
        },
      },
    },
  });
}

/* ── Contact form ─────────────────────────────────────────── */
function initContactForm() {
  const form = $('#contactForm');
  const success = $('#formSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      const firstEmpty = [form.name, form.email, form.message].find(f => !f.value.trim());
      if (firstEmpty) {
        firstEmpty.focus();
        firstEmpty.style.borderColor = 'var(--red)';
        setTimeout(() => firstEmpty.style.borderColor = '', 1500);
      }
      return;
    }

    // Simulate submission
    form.style.opacity = '0.5';
    form.style.pointerEvents = 'none';

    setTimeout(() => {
      form.classList.add('hidden');
      success.classList.remove('hidden');
    }, 800);
  });
}

/* ── Scroll fade-in (generic) ────────────────────────────── */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.fade-in').forEach(el => observer.observe(el));
  $$('.stat-card, .panel, .section-header').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

/* ── Footer year ─────────────────────────────────────────── */
function initFooter() {
  const el = $('#footerYear');
  if (el) el.textContent = new Date().getFullYear();
}

/* ── Ticker tape (pause on hover) ────────────────────────── */
function initTicker() {
  const track = $('#tickerTrack');
  if (!track) return;

  const tape = track.closest('.ticker-tape');
  tape.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
  tape.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
}

/* ── Init ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCounters();
  initActivityChart('1W');
  initChartControls();
  initHoldings();
  initSkillRadar();
  initSkillDonut();
  initProjects();
  initTimeline();
  initGrowthChart();
  initContactForm();
  initScrollAnimations();
  initFooter();
  initTicker();
});
