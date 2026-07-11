/* =========================================================
   ANAS ALFURAYDI — PORTFOLIO
   Site data + interactivity
   ========================================================= */

/* ---------------------------------------------------------
   1. DATA
   To add a new project: add one object to `projectsData`.
   To add a new gallery screenshot: add one object to `galleryData`.
   --------------------------------------------------------- */

const projectsData = [
  {
  title: "AdventureWorks Sales Intelligence Dashboard",
  description:
    "Interactive Power BI dashboard analyzing sales, product performance, customer behavior, and geographic revenue trends using DAX, Power Query, and data modeling.",
  businessValue:
    "Provides executives with a clear view of revenue, profit, orders, returns, top products, customer performance, and country-level sales insights.",
  image: "assets/images/adventureworks-executive.png",
  tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
  category: "Power BI",
links: {
github: "https://github.com/AnasAlfuraydi/AdventureWorks-Sales-Intelligence-Dashboard",
  demo: null,
  powerbi: "https://github.com/AnasAdnan03/AdventureWorks-Sales-Intelligence-Dashboard/raw/main/AdventureWorks-Sales-Intelligence.pbix"
},
},
  {
  title: "Sales Performance Analytics — End-to-End Data Project",
  description:
    "End-to-end sales analytics project where Python, Pandas, NumPy, and Matplotlib were used to clean, transform, and explore the data before building an interactive Power BI dashboard with DAX measures, data modeling, and business insights.",
  businessValue:
    "Transforms raw sales data into reliable analysis and actionable recommendations by combining Python-based data preparation with interactive Power BI reporting.",
  image: "assets/images/sales-executive-overview.png",
  tech: [
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Power BI",
    "DAX",
    "Power Query"
  ],
  category: "Power BI",
 links: {
  github: "https://github.com/AnasAlfuraydi/Sales-Performance-Power-BI-Dashboard",
  demo: null,
  powerbi: "https://github.com/AnasAlfuraydi/Sales-Performance-Power-BI-Dashboard/raw/main/sales-performance-dashboard.pbix"
},
},
{
  title: "Discover Madinah — Graduation GIS & Database Project",
  description:
    "Graduation project: a web-based interactive GIS map for exploring attractions in Madinah, supported by a structured relational database, location data, search filters, place details, reviews, and chatbot assistance.",
  businessValue:
    "Helps users discover religious, cultural, entertainment, and restaurant locations through organized geographic data, filtering, and accessible place information.",
  image: "assets/images/madinah-map.png",
  tech: ["SQL", "Database Design", "GIS", "JavaScript", "Supabase"],
  category: "SQL",
  links: {
github: "https://github.com/AnasAlfuraydi/Discover-Madinah-GIS-Database",
    demo: "https://discover-madina-2-production.up.railway.app/index.html?lang=ar",
    powerbi: null
  },
},,
];

const galleryData = [
  {
    image: "assets/images/adventureworks-executive.png",
    caption: "Executive Overview — Revenue, Profit, Orders, Returns & Product KPIs"
  },
  {
    image: "assets/images/adventureworks-geographic.png",
    caption: "Geographic Sales Analysis — Orders and Revenue by Country"
  },
  {
    image: "assets/images/adventureworks-product.png",
    caption: "Product Analysis — Targets, Profit Trend, Returns & Top Products"
  },
  {
    image: "assets/images/adventureworks-customer.png",
    caption: "Customer Performance Analysis — Customer Trends, Segments & Details"
  }
];

const skillsData = [
  {
    icon: "BI",
    title: "Business Intelligence",
    skills: [
      "Power BI",
      "Metabase",
      "Dashboard Development",
      "Executive Dashboards",
      "Business Reporting",
      "Data Storytelling",
      "KPI Reporting"
    ]
  },
  {
    icon: "{ }",
    title: "Programming",
    skills: ["Python", "SQL", "T-SQL"]
  },
  {
    icon: "py",
    title: "Python Libraries",
    skills: ["Pandas", "NumPy", "Matplotlib"]
  },
  {
    icon: "fx",
    title: "Power BI",
    skills: ["DAX", "Power Query", "Data Modeling", "Star Schema", "Measures"]
  },
  {
    icon: "Σ",
    title: "Analytics",
    skills: [
      "Data Cleaning",
      "Data Transformation",
      "ETL",
      "EDA",
      "Trend Analysis",
      "KPI Analysis",
      "Root Cause Analysis",
      "Data Visualization",
      "Business Analysis",
      "Requirement Gathering"
    ]
  },
  {
    icon: "+",
    title: "Soft Skills",
    skills: [
      "Communication",
      "Problem Solving",
      "Analytical Thinking",
      "Attention to Detail",
      "Time Management",
      "Self-Learning",
      "Stakeholder Management"
    ]
  }
];

const certData = [
  { name: "STEP English Test", note: "Score: 83", status: "done" },
  { name: "PL-300 — Power BI Data Analyst", note: "In progress", status: "progress" },
  { name: "DP-900 — Azure Data Fundamentals", note: "In progress", status: "progress" },
  { name: "Microsoft Fabric", note: "In progress", status: "progress" },
];

const heroTypedWords = ["dashboards.", "decisions.", "data stories.", "business insight."];

/* ---------------------------------------------------------
   2. RENDER FUNCTIONS
   --------------------------------------------------------- */

function renderSkills() {
  const grid = document.getElementById("skillsGrid");

  grid.innerHTML = skillsData
    .map(
      (s, i) => `
    <div class="card skill-card reveal" style="transition-delay:${i * 60}ms">
      <div class="skill-card-head">
        <span class="skill-icon">${s.icon}</span>
        <h3>${s.title || s.group}</h3>
      </div>
      <div class="skill-tags">
        ${(s.skills || s.items).map((item) => `<span>${item}</span>`).join("")}
      </div>
    </div>`
    )
    .join("");
}

function renderProjects(filter = "All", query = "") {
  const grid = document.getElementById("projectsGrid");
  const empty = document.getElementById("projectsEmpty");
  const q = query.trim().toLowerCase();

  const filtered = projectsData.filter((p) => {
    const matchesFilter = filter === "All" || p.category === filter;
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech.join(" ").toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  });

  empty.hidden = filtered.length !== 0;

  grid.innerHTML = filtered
    .map(
      (p, i) => `
    <article class="card project-card reveal" style="transition-delay:${i * 70}ms">
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.title} preview" loading="lazy" />
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <p class="project-value">${p.businessValue}</p>
        <div class="project-tech">
          ${p.tech.map((t) => `<span>${t}</span>`).join("")}
        </div>
        <div class="project-links">
          ${p.links.github ? `<a href="${p.links.github}" target="_blank" rel="noopener">GitHub</a>` : ""}
          ${p.links.demo ? `<a href="${p.links.demo}" target="_blank" rel="noopener">Live demo</a>` : ""}
          ${p.links.powerbi ? `<a href="${p.links.powerbi}" target="_blank" rel="noopener" class="primary-link">Power BI</a>` : ""}
        </div>
      </div>
    </article>`
    )
    .join("");

  observeReveals();
}

function renderProjectFilters() {
  const wrap = document.getElementById("projectFilters");
  const categories = [
    "All",
    ...new Set(projectsData.map((p) => p.category).filter(Boolean))
  ];

  wrap.innerHTML = categories
    .map(
      (c, i) =>
        `<button class="filter-chip${i === 0 ? " active" : ""}" data-filter="${c}">${c}</button>`
    )
    .join("");

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-chip");
    if (!btn) return;
    wrap.querySelectorAll(".filter-chip").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const search = document.getElementById("projectSearch").value;
    renderProjects(btn.dataset.filter, search);
  });
}

function renderGallery() {
  const grid = document.getElementById("powerbiGallery");
  grid.innerHTML = galleryData
    .map(
      (g, i) => `
    <div class="gallery-item reveal" style="transition-delay:${i * 60}ms">
      <img class="lightbox-trigger" src="${g.image}" alt="${g.caption}" loading="lazy" />
      <div class="gallery-caption">${g.caption}</div>
    </div>`
    )
    .join("");
}

function renderCertifications() {
  const list = document.getElementById("certList");
  list.innerHTML = certData
    .map(
      (c, i) => `
    <div class="card cert-item reveal" style="transition-delay:${i * 60}ms">
      <div>
        <h4>${c.name}</h4>
        <p>${c.note}</p>
      </div>
      <span class="cert-status ${c.status}">${c.status === "done" ? "Completed" : "In progress"}</span>
    </div>`
    )
    .join("");
}

/* ---------------------------------------------------------
   3. INTERACTIVITY
   --------------------------------------------------------- */

// --- Theme toggle (persisted, with safe fallback if storage is unavailable) ---
function getStoredTheme() {
  try {
    return localStorage.getItem("aa-theme");
  } catch (e) {
    return null;
  }
}
function setStoredTheme(value) {
  try {
    localStorage.setItem("aa-theme", value);
  } catch (e) {
    /* storage unavailable — theme just won't persist across reloads */
  }
}

function initTheme() {
  const stored = getStoredTheme();
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored || (prefersDark ? "dark" : "light");
  if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");

  document.getElementById("themeToggle").addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      setStoredTheme("light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setStoredTheme("dark");
    }
  });
}

// --- Mobile menu ---
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navWrap = document.getElementById("navWrap");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navWrap.classList.toggle("menu-open");
  });
  document.getElementById("navLinks").addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      hamburger.classList.remove("open");
      navWrap.classList.remove("menu-open");
    }
  });
}

// --- Scroll progress + sticky nav background ---
function initScrollEffects() {
  const progress = document.getElementById("scrollProgress");
  const navWrap = document.getElementById("navWrap");
  const scrollTopBtn = document.getElementById("scrollTop");

  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${(scrolled / height) * 100}%`;
      navWrap.classList.toggle("scrolled", scrolled > 10);
      scrollTopBtn.classList.toggle("visible", scrolled > 500);
    },
    { passive: true }
  );

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Active section highlighting ---
function initActiveSection() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

// --- Reveal-on-scroll (fade in / slide up) ---
function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.in-view)");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  elements.forEach((el) => observer.observe(el));
}

// --- Animated counters (hero KPIs) ---
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.counter);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const isDecimal = target % 1 !== 0;
        const duration = 1400;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          el.textContent = `${prefix}${isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString()}${suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((c) => observer.observe(c));
}

// --- Typing effect in hero ---
function initTypingEffect() {
  const el = document.getElementById("heroTyped");
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function loop() {
    const word = heroTypedWords[wordIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(loop, 1500);
        return;
      }
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % heroTypedWords.length;
      }
    }
    setTimeout(loop, deleting ? 40 : 75);
  }
  loop();
}

// --- Project search ---
function initProjectSearch() {
  const input = document.getElementById("projectSearch");
  input.addEventListener("input", () => {
    const activeFilter = document.querySelector(".filter-chip.active");
    renderProjects(activeFilter ? activeFilter.dataset.filter : "All", input.value);
  });
}

// --- Contact form (front-end only; wire up to a backend or form service when deploying) ---
function initContactForm() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.hidden = false;
    form.reset();
  });
}

// --- Download CV placeholder ---
function initDownloadCV() {
    const cvButton = document.getElementById("downloadCV");

    cvButton.href = "assets/Anas_Adnan_Data_Analyst_CV.pdf";
    cvButton.target = "_blank";
    cvButton.rel = "noopener noreferrer";
}

// --- Placeholder social links note ---
function initSocialLinks() {
    const linkedinHref = "https://www.linkedin.com/in/anas-adnan/";
       const githubHref = "https://github.com/AnasAlfuraydi";

    ["linkedinLink", "footerLinkedin"].forEach((id) => {
        document.getElementById(id).href = linkedinHref;
    });

    ["githubLink", "footerGithub"].forEach((id) => {
        document.getElementById(id).href = githubHref;
    });
}
function initImageLightbox() {
    const lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.innerHTML = `
        <span class="image-lightbox-close">&times;</span>
        <img src="" alt="Dashboard preview">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".image-lightbox-close");

document.addEventListener("click", (e) => {
    const image = e.target.closest(".lightbox-trigger, .project-card img");

    if (!image) return;

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt || "Dashboard preview";
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
});

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightboxImage.src = "";
        document.body.style.overflow = "";
    }

    closeButton.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeLightbox();
        }
    });
}

/* ---------------------------------------------------------
   4. INIT
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderSkills();
  renderProjectFilters();
  renderProjects();
  renderGallery();
  renderCertifications();

  initTheme();
  initMobileMenu();
  initScrollEffects();
  initActiveSection();
  initCounters();
  // initTypingEffect();
  initProjectSearch();
  initContactForm();
  initDownloadCV();
  initSocialLinks();
   initImageLightbox();
  observeReveals();
});