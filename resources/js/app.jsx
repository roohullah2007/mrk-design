import '../css/app.css';
import './bootstrap';

import { createInertiaApp, router } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// We handle scroll position ourselves so a refresh keeps the user where they
// were, while navigation between pages still starts at the top.
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
}

const scrollKey = () => `mrk:scroll:${window.location.pathname}`;

// This site makes <html> the scroll container (html { height:100%; overflow-y:auto }),
// so read/write the scroll position from every candidate to be safe across browsers.
const getScrollY = () =>
    window.scrollY ||
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

const setScrollY = (y) => {
    window.scrollTo(0, y);
    document.documentElement.scrollTop = y;
    document.body.scrollTop = y;
};

// Persist the current scroll position for this URL. Called continuously while
// scrolling (throttled to one write per frame) so we always have a fresh value
// even if unload events don't fire (common on mobile).
let saveQueued = false;
const saveScroll = () => {
    if (saveQueued) return;
    saveQueued = true;
    requestAnimationFrame(() => {
        saveQueued = false;
        try {
            sessionStorage.setItem(scrollKey(), String(getScrollY()));
        } catch (e) {
            // sessionStorage may be unavailable (private mode) — ignore.
        }
    });
};
window.addEventListener('scroll', saveScroll, { passive: true });
window.addEventListener('beforeunload', saveScroll);
window.addEventListener('pagehide', saveScroll);

// Restore the saved scroll position for this URL after a refresh. We retry on
// each frame until the page has rendered tall enough to reach the target.
const restoreScroll = () => {
    let saved = null;
    try {
        saved = sessionStorage.getItem(scrollKey());
    } catch (e) {
        return;
    }
    if (saved === null) return;

    const targetY = parseInt(saved, 10) || 0;
    if (targetY <= 0) return;

    let tries = 0;
    const attempt = () => {
        setScrollY(targetY);
        tries += 1;
        // Keep correcting for ~1.5s: the page grows as React renders and images
        // load, and this also overrides any stray scroll-to-top on boot.
        if (Math.abs(getScrollY() - targetY) > 2 && tries < 90) {
            requestAnimationFrame(attempt);
        }
    };
    requestAnimationFrame(attempt);
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);

        // Runs only on the initial boot (page load / refresh), not on Inertia
        // navigation — so a refresh lands back at the saved position.
        restoreScroll();
    },
    progress: {
        color: '#4B5563',
    },
});

// Scroll to top after successful page navigation (link clicks), unless the
// target URL points to an in-page anchor.
router.on('success', (event) => {
    const url = event.detail.page.url;
    if (!url.includes('#')) {
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 0);
    }
});
