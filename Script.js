/* ============================================================
   TOOBA MURTAZA (VELVET MUSE) — PORTFOLIO ENGINE
   ============================================================ */

const CONFIG = {
    name: "Tooba Murtaza",
    studio: "Velvet Muse",
    monogram: "VM",
    email: "toobamurtaza365@gmail.com",
    contactEndpoint: "",
    whatsappNumber: "923014157400", // International format without the leading +
    socials: {
        LinkedIn: "https://www.linkedin.com/in/tooba-murtaza-088ab6429",
        Instagram: "https://www.instagram.com/velvet.muse_studio/"
    },
    respectReducedMotion: false,
    designGroups: {
        "Social Media": [
            "images/social media post/3 doors.png",
            "images/social media post/6 sep.png",
            "images/social media post/Graphic.png",
            "images/social media post/Untitled-2.jpg",
            "images/social media post/Wishing you a month of happiness, growth, and beautiful moments!.png",
            "images/social media post/aio .png",
            "images/social media post/ant.png",
            "images/social media post/bin.png",
            "images/social media post/birds.png",
            "images/social media post/boat cycle.png",
            "images/social media post/cattoo.png",
            "images/social media post/classic pizza.png",
            "images/social media post/comma.png",
            "images/social media post/control.png",
            "images/social media post/entry.png",
            "images/social media post/gD.png",
            "images/social media post/impact.png",
            "images/social media post/italian  pizza.png",
            "images/social media post/keyyy.png",
            "images/social media post/lights .png",
            "images/social media post/lionss.png",
            "images/social media post/masjid.png",
            "images/social media post/month.png",
            "images/social media post/ob ooo.png",
            "images/social media post/ob po.png",
            "images/social media post/ob pos.png",
            "images/social media post/ob post.png",
            "images/social media post/octoo.png",
            "images/social media post/pakistan.png",
            "images/social media post/pencile desing.png",
            "images/social media post/puzzal.png",
            "images/social media post/rockyy.png",
            "images/social media post/roppeee.png",
            "images/social media post/shhhadoww.jpg",
            "images/social media post/social bag.png",
            "images/social media post/square wheels.png",
            "images/social media post/store mobile.png",
            "images/social media post/techer day .png",
            "images/social media post/timo.png",
            "images/social media post/travel.jpg",
            "images/social media post/umberella.png",
            "images/social media post/wht we can do .png"
        ],
        "Brand Identity": [
            "images/logo and brand identity/luna caffe .png",
            "images/logo and brand identity/Digital Boost Brand Identity Board.png",
            "images/logo and brand identity/Velvet Muse Luxury Brand Board.png",
            "images/logo and brand identity/digital boost.png",
            "images/logo and brand identity/hoorvela.png",
            "images/logo and brand identity/hoovela identity.png",
            "images/logo and brand identity/luna identity.png",
            "images/logo and brand identity/velvet muse.png"
        ],
        "Business Cards & Stationery": [
            "images/Business Cards & Stationery/ChatGPT Image Aug 16, 2026, 12_28_24 AM.png",
            "images/Business Cards & Stationery/ChatGPT Image Aug 17, 2026, 11_22_56 PM.png",
            "images/Business Cards & Stationery/ChatGPT Image Sep 8, 2026, 04_58_26 PM.png",
            "images/Business Cards & Stationery/Tooba Murtaza (2).png",
            "images/Business Cards & Stationery/Tooba Murtaza.png",
            "images/Business Cards & Stationery/envalopee.png",
            "images/Business Cards & Stationery/ob card.png",
            "images/Business Cards & Stationery/ob.png",
            "images/Business Cards & Stationery/obb.png"
        ],
        "Packaging & Labels": [
            "images/packaging and label design/ChatGPT Image Sep 3, 2026, 04_59_59 PM.png",
            "images/packaging and label design/ChatGPT Image Sep 4, 2026, 06_37_24 PM.png",
            "images/packaging and label design/PREMIUM ATTAR.png",
            "images/packaging and label design/attar label .png"
        ],
        "Typography": [
            "images/typography/Untitled-3.jpg",
            "images/typography/mistake.jpg"
        ],
        "Banners & Vector Art": [
            "images/Banners, Covers & Vector Art/ChatGPT Image Sep 8, 2026, 09_48_56 PM.png",
            "images/Banners, Covers & Vector Art/birdo.jpg",
            "images/Banners, Covers & Vector Art/cato.jpg",
            "images/Banners, Covers & Vector Art/cubeee.jpg",
            "images/Banners, Covers & Vector Art/google l.png",
            "images/Banners, Covers & Vector Art/tttexttx.jpg"
        ],
        "Carousel": [
            "images/carousal/SMALL STEP 1.png",
            "images/carousal/SMALL 2.png",
            "images/carousal/STEPS BIG PROGRESS 3.png",
            "images/carousal/SMALL ST4.png",
            "images/carousal/SMALL STEPS BIG PROGRESS.png"
        ]
    },
    videos: [
        {
            title: "Selected Reel 01 — Commercial & Brand Story",
            tag: "COMMERCIAL EDIT · MOTION",
            src: "images/video/WhatsApp Video 2026-11-10 at 8.38.37 PM.mp4",
            duration: "HD Reel"
        },
        {
            title: "Selected Reel 02 — Social Media Motion Story",
            tag: "SOCIAL EDIT · SHORT-FORM",
            src: "images/video/WhatsApp Video 2026-11-10 at 8.40.12 PM.mp4",
            duration: "HD Reel"
        },
        {
            title: "Selected Reel 03 — Creative Brand Edit",
            tag: "BRAND EDIT · CREATIVE",
            src: "images/video/WhatsApp Video 2026-10-20 at 5.53.50 PM.mp4",
            duration: "HD Reel"
        },
        {
            title: "Selected Reel 04 — Visual Story",
            tag: "VISUAL STORY · SHORT-FORM",
            src: "images/video/WhatsApp Video 2026-10-27 at 10.31.28 PM.mp4",
            duration: "HD Reel"
        }
    ]
};

// Utilities
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = CONFIG.respectReducedMotion && matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduced) document.documentElement.classList.add('reduce-motion');
const finePointer = matchMedia('(pointer:fine)').matches;

/* ============================================================
   1. TOAST NOTIFICATIONS
   ============================================================ */
function showToast(message, icon = "✓") {
    const container = $('#toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span> <span class="toast-text">${message}</span>`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2800);
}

// Copy email triggers
$$('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const email = btn.dataset.email || CONFIG.email;
        navigator.clipboard.writeText(email).then(() => {
            showToast(`Email copied: ${email}`, "📋");
        }).catch(() => {
            showToast(`Reach out: ${email}`, "✉");
        });
    });
});

/* ============================================================
   2. STICKY HEADER & SCROLLSPY ("Jahan scroll jaye wahi move karein")
   ============================================================ */
const siteHeader = $('#site-header');
const navIndicator = $('#nav-indicator');
const navLinks = $$('.nav-links .nav-link, .nav-links .nav-contact');
const sections = ['home', 'about', 'designs', 'videos', 'services', 'contact'].map(id => document.getElementById(id)).filter(Boolean);

function updateNavIndicator(targetLink) {
    if (!navIndicator || !targetLink) return;
    const navContainer = navIndicator.parentElement;
    if (!navContainer) return;
    
    // Check if on mobile view
    if (window.innerWidth <= 768) {
        navIndicator.style.opacity = '0';
        return;
    }

    const containerRect = navContainer.getBoundingClientRect();
    const linkRect = targetLink.getBoundingClientRect();

    const left = linkRect.left - containerRect.left;
    const width = linkRect.width;

    navIndicator.style.opacity = '1';
    navIndicator.style.left = `${left}px`;
    navIndicator.style.width = `${width}px`;
}

function handleScrollSpy() {
    const scrollPos = window.scrollY + 180;

    // Header appearance on scroll
    if (siteHeader) {
        siteHeader.classList.toggle('scrolled', window.scrollY > 40);
    }

    // Determine current section
    let currentId = 'home';
    sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
            currentId = sec.id;
        }
    });

    // Match link
    navLinks.forEach(link => {
        const targetNav = link.getAttribute('data-nav') || link.getAttribute('href')?.replace('#', '');
        const isActive = targetNav === currentId;
        link.classList.toggle('active', isActive);
        if (isActive) {
            updateNavIndicator(link);
        }
    });
}

window.addEventListener('scroll', handleScrollSpy, { passive: true });
window.addEventListener('resize', () => {
    const activeLink = $('.nav-links .nav-link.active') || $('.nav-links .nav-link');
    if (activeLink) updateNavIndicator(activeLink);
});

// Initial placement after load
window.addEventListener('load', () => {
    handleScrollSpy();
    const activeLink = $('.nav-links .nav-link.active') || $('.nav-links .nav-link');
    if (activeLink) updateNavIndicator(activeLink);
});

/* ============================================================
   3. MOBILE NAVIGATION DRAWER
   ============================================================ */
const menuButton = $('.menu-toggle');
const primaryNav = $('#primary-navigation');

function closeMobileMenu() {
    menuButton.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('open');
    document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    primaryNav.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
});

$$('a', primaryNav).forEach(a => a.addEventListener('click', closeMobileMenu));

/* ============================================================
   4. CIRCULAR SCROLL PROGRESS & BACK TO TOP BUTTON
   ============================================================ */
const backToTopBtn = $('#back-to-top');
const progressIndicator = $('#progress-indicator');
const circumference = 2 * Math.PI * 20; // r=20 => ~125.66

if (progressIndicator) {
    progressIndicator.style.strokeDasharray = `${circumference}`;
    progressIndicator.style.strokeDashoffset = `${circumference}`;
}

window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTotal > 0 ? window.scrollY / scrollTotal : 0;
    
    if (progressIndicator) {
        const offset = circumference - (progress * circumference);
        progressIndicator.style.strokeDashoffset = `${offset}`;
    }

    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
}, { passive: true });

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ============================================================
   5. HERO CHARACTER SPLIT ANIMATION
   ============================================================ */
(function splitTitle() {
    const title = $('.hero-title');
    if (!title || reduced) return;
    const temp = document.createElement('div');
    temp.innerHTML = title.innerHTML;
    title.innerHTML = '';
    let i = 0;
    const makeChars = (text, parent) => {
        [...text].forEach(ch => {
            const s = document.createElement('span');
            s.className = 'char';
            s.textContent = ch === ' ' ? '\u00a0' : ch;
            s.style.animationDelay = `${0.25 + i++ * 0.03}s`;
            parent.appendChild(s);
        });
    };
    let line;
    const newLine = () => { line = document.createElement('span'); line.className = 'split-line'; title.appendChild(line); };
    newLine();
    [...temp.childNodes].forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') { newLine(); return; }
        if (node.nodeType === Node.TEXT_NODE) makeChars(node.textContent, line);
        else {
            const inner = document.createElement(node.tagName.toLowerCase());
            inner.className = node.className;
            makeChars(node.textContent, inner);
            line.appendChild(inner);
        }
    });
})();

/* ============================================================
   6. REVEAL ON SCROLL (IntersectionObserver + Safety Sweep)
   ============================================================ */
const reveals = $$('.reveal');
let revealObserver = null;
if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => revealObserver.observe(el));
} else {
    function sweep() {
        const limit = window.innerHeight - 30;
        reveals.forEach(el => {
            if (el.getBoundingClientRect().top < limit) el.classList.add('visible');
        });
    }
    window.addEventListener('scroll', sweep, { passive: true });
    window.addEventListener('load', sweep);
    sweep();
}

function observeReveal(element) {
    if (revealObserver) revealObserver.observe(element);
    else element.classList.add('visible');
}

/* ============================================================
   7. CUSTOM MAGNETIC CURSOR
   ============================================================ */
const orb = $('.hero-orb');
const cursor = $('.cursor-dot'), ring = $('.cursor-ring');
if (finePointer && !reduced) {
    window.addEventListener('pointermove', e => {
        if (orb) {
            orb.style.marginLeft = ((e.clientX / window.innerWidth - 0.5) * 12) + 'px';
            orb.style.marginTop = ((e.clientY / window.innerHeight - 0.5) * 12) + 'px';
        }
    }, { passive: true });
}

if (cursor && ring && finePointer) {
    document.body.classList.add('has-cursor');
    let mx = 0, my = 0, rx = 0, ry = 0, started = false;
    const root = document.documentElement;

    window.addEventListener('pointermove', e => {
        mx = e.clientX; my = e.clientY;
        cursor.style.transform = `translate3d(${mx}px,${my}px,0)`;
        if (!started) {
            started = true; rx = mx; ry = my;
            root.classList.add('cursor-on');
            requestAnimationFrame(follow);
        }
    }, { passive: true });

    function follow() {
        rx += (mx - rx) * 0.16;
        ry += (my - ry) * 0.16;
        ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
        requestAnimationFrame(follow);
    }

    document.addEventListener('mouseover', e => {
        root.classList.toggle('cursor-hover', !!e.target.closest('a, button, .g-item, .v-card, .collection-card, .service-item'));
    });
    document.addEventListener('pointerdown', () => root.classList.add('cursor-down'));
    document.addEventListener('pointerup', () => root.classList.remove('cursor-down'));
    document.addEventListener('mouseleave', () => root.classList.remove('cursor-on'));
    document.addEventListener('mouseenter', () => { if (started) root.classList.add('cursor-on'); });
}

/* ============================================================
   8. FAST ON-DEMAND DESIGN GALLERY & CATEGORY SHOWCASE
   ============================================================ */
const gallery = $('#gallery');
const collections = $('#design-collections');
const galleryView = $('#gallery-view');
const galleryTitle = $('#gallery-category-title');
const galleryFilterTabs = $('#gallery-filter-tabs');
let designNumber = 0;
let activeCategory = 'Social Media';
let currentCategoryDesigns = [];

// Curated high-impact featured cover for each category (1 design shown upfront)
const featuredCovers = {
    "Social Media": "images/social media post/gD.png",
    "Brand Identity": "images/logo and brand identity/luna caffe .png",
    "Business Cards & Stationery": "images/Business Cards & Stationery/Tooba Murtaza.png",
    "Packaging & Labels": "images/packaging and label design/ChatGPT Image Sep 4, 2026, 06_37_24 PM.png",
    "Typography": "images/typography/mistake.jpg",
    "Banners & Vector Art": "images/Banners, Covers & Vector Art/birdo.jpg",
    "Carousel": "images/carousal/SMALL STEPS BIG PROGRESS.png"
};

// Flatten design database with clean metadata
const designs = Object.entries(CONFIG.designGroups).flatMap(([category, files]) => files.map(src => {
    const filename = src.split('/').pop();
    return {
        id: String(++designNumber).padStart(2, '0'),
        title: filename.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').trim(),
        category,
        src
    };
}));

// Build collection preview cards (1 featured design per card — ultra fast initial load)
Object.entries(CONFIG.designGroups).forEach(([category, files]) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'collection-card reveal';
    observeReveal(card);
    card.setAttribute('aria-label', `Open ${category}, ${files.length} designs`);

    const preview = document.createElement('span');
    preview.className = 'collection-preview';

    // 1 single featured design
    const image = document.createElement('img');
    image.src = featuredCovers[category] || files[0];
    image.alt = `${category} featured design`;
    image.loading = 'eager';
    image.decoding = 'async';
    preview.appendChild(image);

    // Floating design count badge
    const badge = document.createElement('span');
    badge.className = 'collection-badge';
    badge.textContent = `${files.length} DESIGNS`;
    preview.appendChild(badge);

    const meta = document.createElement('span');
    meta.className = 'collection-meta';
    const title = document.createElement('span');
    title.className = 'collection-title';
    title.textContent = category;
    const count = document.createElement('span');
    count.className = 'collection-count';
    count.textContent = `${String(files.length).padStart(2, '0')} PIECES`;
    meta.append(title, count);

    const action = document.createElement('span');
    action.className = 'collection-action';
    action.innerHTML = `VIEW ALL ${category.toUpperCase()} <span>↗</span>`;

    card.append(preview, meta, action);
    card.addEventListener('click', () => openCollection(category));
    collections.appendChild(card);
});

// Build interactive category filter tabs inside gallery view
function buildGalleryFilterTabs() {
    if (!galleryFilterTabs) return;
    galleryFilterTabs.innerHTML = '';

    const allTab = document.createElement('button');
    allTab.type = 'button';
    allTab.className = `filter-tab ${activeCategory === 'All' ? 'active' : ''}`;
    allTab.dataset.category = 'All';
    allTab.textContent = 'All';
    allTab.addEventListener('click', () => switchCategory('All'));
    galleryFilterTabs.appendChild(allTab);

    const categories = Object.keys(CONFIG.designGroups);
    categories.forEach(cat => {
        const tab = document.createElement('button');
        tab.type = 'button';
        tab.className = `filter-tab ${cat === activeCategory ? 'active' : ''}`;
        tab.dataset.category = cat;
        const count = CONFIG.designGroups[cat].length;
        tab.innerHTML = `${cat} <span class="tab-count">${count}</span>`;
        tab.addEventListener('click', () => switchCategory(cat));
        galleryFilterTabs.appendChild(tab);
    });
}

// Render only the designs of the selected category (lightning-fast on-demand loading)
function renderCategoryDesigns(category = 'All') {
    gallery.innerHTML = '';
    const list = category === 'All' ? designs : designs.filter(d => d.category === category);
    const featuredSrc = featuredCovers[category];
    const featuredIndex = list.findIndex(d => d.src === featuredSrc);
    if (featuredIndex > 0) list.unshift(list.splice(featuredIndex, 1)[0]);
    currentCategoryDesigns = list;
    $('#g-count').textContent = `${list.length} DESIGNS`;

    list.forEach(d => {
        const fig = document.createElement('figure');
        fig.className = 'g-item visible';
        fig.tabIndex = 0;
        fig.dataset.cat = d.category;

        const img = document.createElement('img');
        img.loading = 'lazy';
        img.decoding = 'async';
        img.alt = `${d.title} — ${d.category}`;
        img.src = d.src;

        fig.appendChild(img);
        fig.insertAdjacentHTML('beforeend', `
            <figcaption class="g-meta">
                <span class="g-meta-id">${d.id} · ${d.category.toUpperCase()}</span>
                <span class="g-meta-cta">VIEW ↗</span>
            </figcaption>
        `);

        fig.addEventListener('click', () => openLightbox(d));
        fig.addEventListener('keydown', e => { if (e.key === 'Enter') openLightbox(d); });
        gallery.appendChild(fig);
    });

    $$('.filter-tab', galleryFilterTabs).forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
}

function switchCategory(category) {
    activeCategory = category;
    galleryTitle.textContent = category === 'All' ? 'All Works' : category;
    renderCategoryDesigns(category);
}

function openCollection(category) {
    activeCategory = category;
    galleryTitle.textContent = category;
    buildGalleryFilterTabs();
    renderCategoryDesigns(category);

    collections.hidden = true;
    galleryView.hidden = false;
    galleryView.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

$('#gallery-back').addEventListener('click', () => {
    galleryView.hidden = true;
    collections.hidden = false;
    collections.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ============================================================
   9. LIGHTBOX
   ============================================================ */
const lb = $('#lightbox');
const lbImg = $('#lb-img');
const lbCap = $('#lb-caption');
let lbList = [], lbIndex = 0;

function showLb() {
    const d = lbList[lbIndex];
    lbImg.src = d.src;
    lbImg.alt = d.title;
    lbCap.innerHTML = `<strong>${d.id}</strong> — ${d.category.toUpperCase()} &nbsp;·&nbsp; <span>${lbIndex + 1} / ${lbList.length}</span>`;
}

function openLightbox(d) {
    lbList = currentCategoryDesigns.length ? currentCategoryDesigns : designs;
    lbIndex = lbList.indexOf(d);
    if (lbIndex < 0) lbIndex = 0;
    showLb();
    document.body.classList.add('modal-open');
    lb.classList.add('open');
    document.body.classList.add('lb-open');
}

function closeLb() {
    lb.classList.remove('open');
    document.body.classList.remove('lb-open');
    document.body.classList.remove('modal-open');
}

function stepLb(s) {
    if (!lbList.length) return;
    lbIndex = (lbIndex + s + lbList.length) % lbList.length;
    showLb();
}

$('.lb-close').onclick = closeLb;
$('.lb-prev').onclick = () => stepLb(-1);
$('.lb-next').onclick = () => stepLb(1);
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-image-wrapper')) closeLb(); });
window.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') stepLb(-1);
    if (e.key === 'ArrowRight') stepLb(1);
});

/* ============================================================
   10. VIDEO REELS & MODAL PLAYER
   ============================================================ */
const vg = $('#video-grid');
const videoDialog = $('#video-dialog');
const videoPlayer = $('#video-player');
const videoDialogTitle = $('#video-dialog-title');
const videoDialogTag = $('#video-dialog-tag');
const videoDialogStatus = $('#video-dialog-status');

CONFIG.videos.forEach((v, index) => {
    const card = document.createElement('article');
    card.className = 'v-card reveal';
    observeReveal(card);

    const thumb = document.createElement('div');
    thumb.className = 'v-thumb';

    const videoPreview = document.createElement('video');
    videoPreview.muted = true;
    videoPreview.autoplay = true;
    videoPreview.loop = true;
    videoPreview.preload = 'auto';
    videoPreview.playsInline = true;
    videoPreview.setAttribute('aria-hidden', 'true');
    const source = document.createElement('source');
    source.src = new URL(v.src, document.baseURI).href;
    source.type = 'video/mp4';
    videoPreview.appendChild(source);

    videoPreview.addEventListener('loadedmetadata', () => {
        if (Number.isFinite(videoPreview.duration) && videoPreview.duration > 0) {
            videoPreview.currentTime = Math.min(0.2, videoPreview.duration / 3);
        }
    }, { once: true });

    thumb.appendChild(videoPreview);

    // Glowing Play Button
    const playBtn = document.createElement('button');
    playBtn.className = 'v-play-btn';
    playBtn.type = 'button';
    playBtn.setAttribute('aria-label', `Play video: ${v.title}`);
    playBtn.innerHTML = `<span>▶</span>`;
    
    playBtn.addEventListener('click', () => {
        videoDialogTitle.textContent = v.title;
        if (videoDialogTag) videoDialogTag.textContent = v.tag;
        videoDialogStatus.textContent = 'Loading video...';
        videoPlayer.src = new URL(v.src, document.baseURI).href;
        videoPlayer.load();
        document.body.classList.add('modal-open');
        videoDialog.showModal();
        videoPlayer.play().catch(() => {
            videoDialogStatus.textContent = 'Press play to start watching.';
        });
    });

    thumb.appendChild(playBtn);

    const info = document.createElement('div');
    info.className = 'v-info';
    info.innerHTML = `
        <div class="v-text">
            <h3>${v.title}</h3>
            <span class="v-tag">${v.tag}</span>
        </div>
        <span class="v-duration">${v.duration || '0:30'}</span>
    `;

    card.append(thumb, info);
    vg.appendChild(card);
});

videoPlayer.addEventListener('canplay', () => {
    videoDialogStatus.textContent = '';
});
videoPlayer.addEventListener('error', () => {
    videoDialogStatus.textContent = 'This video could not be loaded. Please try again later.';
});

const closeVideoDialog = () => {
    videoPlayer.pause();
    videoPlayer.removeAttribute('src');
    videoPlayer.load();
    videoDialog.close();
};

$('.video-dialog-close').addEventListener('click', closeVideoDialog);
videoDialog.addEventListener('click', e => {
    if (e.target === videoDialog) closeVideoDialog();
});
videoDialog.addEventListener('close', () => {
    videoPlayer.pause();
    videoPlayer.removeAttribute('src');
    videoPlayer.load();
    document.body.classList.remove('modal-open');
});

/* ============================================================
   11. SERVICE CARD CLICK -> AUTO OPEN CONTACT FORM
   ============================================================ */
const contactDialog = $('#contact-dialog');
const contactForm = $('#contact-form');
const contactStatus = $('#contact-form-status');
const serviceSelect = $('#contact-service');

$$('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        const serviceName = item.dataset.service;
        if (serviceSelect && serviceName) {
            for (let option of serviceSelect.options) {
                if (option.value.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(option.value.toLowerCase())) {
                    option.selected = true;
                    break;
                }
            }
        }
        contactStatus.textContent = '';
        document.body.classList.add('modal-open');
        contactDialog.showModal();
    });
});

/* ============================================================
   12. CONTACT FORM & SOCIALS
   ============================================================ */
$('.contact-dialog-close').addEventListener('click', () => contactDialog.close());
contactDialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
contactDialog.addEventListener('click', e => {
    if (e.target === contactDialog) contactDialog.close();
});

contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    if (!CONFIG.contactEndpoint) {
        contactStatus.textContent = 'The message form is not connected yet. Please contact via LinkedIn, Instagram, or WhatsApp.';
        return;
    }

    const data = new FormData(contactForm);
    const submitButton = $('button[type="submit"]', contactForm);
    submitButton.disabled = true;
    contactStatus.textContent = 'Sending your message...';

    try {
        const response = await fetch(CONFIG.contactEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: data.get('name'),
                email: data.get('email'),
                service: data.get('service'),
                message: data.get('message')
            })
        });

        if (!response.ok) {
            throw new Error(`Contact form request failed with status ${response.status}`);
        }

        contactForm.reset();
        contactStatus.textContent = 'Your message has been sent successfully. Thank you — I’ll get back to you soon.';
        showToast('Message sent successfully', '✓');
    } catch (error) {
        console.error('Contact form submission failed:', error);
        contactStatus.textContent = 'Your message could not be sent. Please contact via LinkedIn, Instagram, or WhatsApp.';
    } finally {
        submitButton.disabled = false;
    }
});

// Populate Socials in footer
const socialCol = $('#social-col');
Object.entries(CONFIG.socials).forEach(([name, url]) => {
    if (!url) return;
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = `${name} ↗`;
    socialCol.appendChild(a);
});

// WhatsApp link update
const waNumber = CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
const waMsg = encodeURIComponent("Hi Tooba, I saw your portfolio and would like to discuss a design / video project!");
const waUrl = `https://wa.me/${waNumber}?text=${waMsg}`;

const waHeroBtn = $('#whatsapp-hero-btn');
const waContactLink = $('#whatsapp-contact-link');
if (waHeroBtn) waHeroBtn.href = waUrl;
if (waContactLink) waContactLink.href = waUrl;

const waSocialLink = document.createElement('a');
waSocialLink.href = waUrl;
waSocialLink.target = '_blank';
waSocialLink.rel = 'noopener';
waSocialLink.textContent = 'WhatsApp ↗';
socialCol.appendChild(waSocialLink);

$('#year').textContent = new Date().getFullYear();
