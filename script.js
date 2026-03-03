const QUICK_LINKS = [
    {
        title: "GitHub",
        subtitle: "Projects + code",
        url: "https://github.com/ShazimR",
        icon: "github",
        badge: "CODE",
    },
    {
        title: "LinkedIn",
        subtitle: "Work + experience",
        url: "https://www.linkedin.com/in/shazimrahman/",
        icon: "linkedin",
        badge: "CONNECT",
    },
    {
        title: "Resume (PDF)",
        subtitle: "Download",
        url: "assets/resume.pdf",
        icon: "file",
        badge: "PDF",
    },
    {
        title: "Email",
        subtitle: "Say hi",
        url: "mailto:shazimrahman@hotmail.com",
        icon: "mail",
        badge: "CONTACT",
    },
];

const PROJECTS = [
    {
        title: "TCP HTTP Server (Go)",
        subtitle: "HTTP server from scratch + raw tcp sockets + router",
        url: "pages/tcp-http-server.html",
        icon: "code",
        badge: "CASE STUDY",
    },
    {
        title: "CATTLEytics Capstone",
        subtitle: "Go + Postgres + Python gRPC ML microservice",
        url: "pages/cattleytics.html",
        icon: "sparkles",
        badge: "CASE STUDY",
    },
    {
        title: "Coming soon",
        subtitle: "More projects on the way",
        url: "index.html",
        icon: "arrow",
        badge: "WIP",
    },
];
// --------------------

const ICONS = {
    github: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2.03c-3.22.7-3.9-1.38-3.9-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.57-.29-5.28-1.29-5.28-5.73 0-1.27.46-2.31 1.2-3.13-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.51 3.2-1.2 3.2-1.2.64 1.63.24 2.83.12 3.13.74.82 1.2 1.86 1.2 3.13 0 4.45-2.72 5.43-5.3 5.72.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>`,
    linkedin: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.55c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.64H9.39V9h3.41v1.56h.05c.48-.9 1.65-1.84 3.4-1.84 3.63 0 4.3 2.39 4.3 5.5v6.23zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>`,
    mail: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>`,
    file: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 7V3.5L19.5 9H15z"/></svg>`,
    code: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8.7 16.3 4.4 12l4.3-4.3L7.3 6.3 1.6 12l5.7 5.7 1.4-1.4zm6.6 0 1.4 1.4 5.7-5.7-5.7-5.7-1.4 1.4 4.3 4.3-4.3 4.3z"/></svg>`,
    sparkles: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.2 4.3L17.5 8l-4.3 1.2L12 13.5l-1.2-4.3L6.5 8l4.3-1.7L12 2zm7 8l.8 2.6 2.2.8-2.2.8L19 16.8l-.8-2.6-2.2-.8 2.2-.8L19 10zm-14 3l.8 2.6 2.2.8-2.2.8L5 19.8l-.8-2.6-2.2-.8 2.2-.8L5 13z"/></svg>`,
    arrow: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5z"/></svg>`,
};

function isExternalUrl(url) {
    // absolute http(s) links are external
    return /^https?:\/\//i.test(url);
}

function createLinkCard({ title, subtitle, url, icon, badge }) {
    const a = document.createElement("a");
    a.className = "link";
    a.href = url;

    const external = isExternalUrl(url);

    // Internal links: same tab
    // External links: new tab
    // mailto: same tab (handled by browser)
    if (url.startsWith("mailto:")) {
        a.target = "_self";
        a.rel = "";
    } else if (external) {
        a.target = "_blank";
        a.rel = "noreferrer";
    } else {
        a.target = "_self";
        a.rel = "";
    }

    a.innerHTML = `
    <div class="left">
      ${ICONS[icon] ?? ""}
      <div class="text">
        <div class="primary">${escapeHtml(title)}</div>
        ${subtitle ? `<div class="secondary">${escapeHtml(subtitle)}</div>` : ""}
      </div>
    </div>
    ${badge ? `<div class="badge">${escapeHtml(badge)}</div>` : `<div class="badge">OPEN</div>`}
  `;
    return a;
}

function render() {
    const linksEl = document.getElementById("links");
    const projectsEl = document.getElementById("projects");

    if (!linksEl || !projectsEl) return;

    QUICK_LINKS.forEach((l) => linksEl.appendChild(createLinkCard(l)));
    PROJECTS.forEach((p) => projectsEl.appendChild(createLinkCard(p)));
}

function initTheme() {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
}

function setTheme(theme) {
    const html = document.documentElement;
    if (theme === "light") html.setAttribute("data-theme", "light");
    else html.removeAttribute("data-theme");
    localStorage.setItem("theme", theme);

    const icon = document.querySelector("#themeToggle .theme-icon");
    if (icon) icon.textContent = theme === "light" ? "☀" : "☾";
}

function toggleTheme() {
    const current = localStorage.getItem("theme") || "dark";
    setTheme(current === "dark" ? "light" : "dark");
}

function escapeHtml(str) {
    return String(str)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
    initTheme();

    const toggleBtn = document.getElementById("themeToggle");
    if (toggleBtn) toggleBtn.addEventListener("click", toggleTheme);

    // Only render link sections if they exist (homepage)
    const linksEl = document.getElementById("links");
    const projectsEl = document.getElementById("projects");

    if (linksEl && projectsEl) {
        render();
    }

    // Always set footer year if present
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
