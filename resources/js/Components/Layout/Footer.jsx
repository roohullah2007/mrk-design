import { Link, usePage } from '@inertiajs/react';

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.34 18H5.67V9.67h2.67V18zM7 8.5a1.55 1.55 0 11.001-3.1A1.55 1.55 0 017 8.5zM18.34 18h-2.67v-4.5c0-1.07-.02-2.45-1.49-2.45-1.49 0-1.72 1.17-1.72 2.37V18h-2.67V9.67h2.56v1.14h.04c.36-.68 1.23-1.4 2.54-1.4 2.71 0 3.21 1.78 3.21 4.1V18z"/>
    </svg>
);

const ThreadsIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 11.2c-.1 0-.2-.1-.3-.1-.2-2.9-1.7-4.5-4.3-4.5-1.6 0-2.9.7-3.7 1.9l1.5 1c.6-.9 1.4-1.1 2.2-1.1 1 0 1.7.3 2.1.9.3.4.5 1 .6 1.8-.8-.1-1.6-.2-2.5-.1-2.5.1-4.1 1.6-4 3.6.1.9.5 1.7 1.3 2.3.7.5 1.6.7 2.5.7 1.3 0 2.3-.5 3-1.5.5-.7.8-1.6.9-2.7.5.3.8.7 1.1 1.1.4.7.4 1.7 0 2.7-.4.9-1.1 1.6-2.1 2.1-1.3.7-2.9.9-4.5.5-2-.5-3.5-1.8-4.3-3.8C5.4 15 5 13.5 5 12s.3-3 1-4.3c.8-2 2.3-3.3 4.3-3.8.6-.2 1.2-.2 1.9-.2 1.5 0 2.9.4 4 1.2 1.3.9 2.2 2.3 2.6 3.9.1.5.2 1 .3 1.5l-1.6.8zm-5.6 4.2c-.7 0-1.4-.2-1.7-.6-.2-.2-.3-.4-.3-.7-.1-.9.9-1.4 2.2-1.5h.4c.7 0 1.4.1 2 .2-.1 1.6-.9 2.5-2.6 2.6z"/>
    </svg>
);

const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 7.3c-.3-1-1.1-1.8-2.1-2.1C19 4.7 12 4.7 12 4.7s-7 0-8.9.5c-1 .3-1.8 1.1-2.1 2.1C.5 9.2.5 12 .5 12s0 2.8.5 4.7c.3 1 1.1 1.8 2.1 2.1 1.9.5 8.9.5 8.9.5s7 0 8.9-.5c1-.3 1.8-1.1 2.1-2.1.5-1.9.5-4.7.5-4.7s0-2.8-.5-4.7zM9.7 15.6V8.4l6.2 3.6-6.2 3.6z"/>
    </svg>
);

export default function Footer({ dark = false }) {
    const { url } = usePage();
    const isHome = url === '/' || url.startsWith('/#');

    return (
        <footer className={`footer${dark ? ' dark' : ''}`}>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" preserveScroll={false} className="logo" aria-label="MRK Design Agency">
                            <div className="logo-img" style={{
                                fontFamily: "'Bricolage Grotesque', sans-serif",
                                fontWeight: 800,
                                fontSize: '64px',
                                letterSpacing: '-0.03em',
                                color: dark ? 'var(--bg)' : 'var(--ink)'
                            }}>
                                MRK
                            </div>
                        </Link>
                        <div className="footer-desc-row">
                            <p style={{ fontSize: '16px' }}>A full-service creative agency — brand, web, ecommerce, video, and marketing under one roof.</p>
                            <div className="socials">
                                <a href="https://www.facebook.com/profile.php?id=61578080612450" target="_blank" rel="noopener" aria-label="Facebook"><FacebookIcon /></a>
                                <a href="https://www.instagram.com/mrkdesignagency/" target="_blank" rel="noopener" aria-label="Instagram"><InstagramIcon /></a>
                                <a href="https://www.linkedin.com/company/mrk-design-agency/?viewAsMember=true" target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-col">
                        <div className="ttl" style={{ fontSize: '16px' }}>LINKS</div>
                        <ul style={{ fontSize: '16px' }}>
                            <li><a href={isHome ? "#work" : "/#work"}>Work</a></li>
                            <li><Link href="/services" preserveScroll={false}>Services</Link></li>
                            <li><a href={isHome ? "#work" : "/#work"}>Portfolio</a></li>
                            <li><Link href="/contact" preserveScroll={false}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <div className="ttl" style={{ fontSize: '16px' }}>SERVICES</div>
                        <ul>
                            <li><Link href="/services" preserveScroll={false} style={{ fontSize: '16px' }}>UI/UX Design</Link></li>
                            <li><Link href="/services" preserveScroll={false}>Website Development</Link></li>
                            <li><Link href="/services" preserveScroll={false} style={{ fontSize: '16px' }}>Brand Identity</Link></li>
                            <li><Link href="/services" preserveScroll={false} style={{ fontSize: '16px' }}>Digital Marketing</Link></li>
                            <li><Link href="/services" preserveScroll={false} style={{ fontSize: '16px' }}>SEO</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <div className="ttl" style={{ fontSize: '16px' }}>CONTACT</div>
                        <ul>
                            <li style={{ fontSize: '16px' }}>info@mrkdesignagency.com</li>
                            <li style={{ fontSize: '16px' }}>Islamabad, Pakistan</li>
                            <li style={{ fontSize: '16px' }}>0339 010 4741</li>
                            <li><Link href="/contact" preserveScroll={false} style={{ fontSize: '16px' }}>Book a call →</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-mark">MRK®</div>
                    <div className="footer-meta">
                        <span style={{ fontSize: '16px' }}>© 2026 MRK DESIGN AGENCY<br className="ms-br" /> ALL RIGHTS RESERVED</span>
                        <span style={{ fontSize: '14px' }}>PRIVACY · TERMS · COOKIES</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
