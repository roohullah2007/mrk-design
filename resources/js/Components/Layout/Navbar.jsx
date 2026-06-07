import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';

const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const MenuIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CloseIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function Navbar() {
    const { url } = usePage();
    const isHome = url === '/' || url.startsWith('/#');
    const isServices = url === '/services';
    const isBlog = url === '/blog' || url.startsWith('/blog/');
    const isContact = url === '/contact';
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [url]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="nav">
            <div className="container nav-inner">
                <Link href="/" preserveScroll={false} className="logo" aria-label="MRK Design Agency">
                    <div className="logo-img" style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontWeight: 800,
                        fontSize: '32px',
                        letterSpacing: '-0.03em',
                        color: 'var(--accent)'
                    }}>
                        MRK
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="nav-pill nav-desktop">
                    <a href={isHome ? "#work" : "/#work"} className={isHome ? "active" : ""}>Work</a>
                    <Link href="/services" preserveScroll={false} className={isServices ? "active" : ""}>Services</Link>
                    <Link href="/blog" preserveScroll={false} className={isBlog ? "active" : ""}>Blog</Link>
                    <a href={isHome ? "#testimonials" : "/#testimonials"}>Testimonials</a>
                    <Link href="/contact" preserveScroll={false} className={isContact ? "active" : ""}>Contact</Link>
                </nav>

                <div className="nav-right">
                    <Link href="/contact" preserveScroll={false} className="pill primary sm nav-cta-desktop" style={{ fontSize: '16px', height: '52px', padding: '0 8px 0 22px' }}>
                        Book a call
                        <span className="arrow" style={{ width: '36px', height: '36px' }}>
                            <ArrowIcon />
                        </span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav">
                    <a href={isHome ? "#work" : "/#work"} className={isHome ? "active" : ""} onClick={handleLinkClick}>Work</a>
                    <Link href="/services" preserveScroll={false} className={isServices ? "active" : ""} onClick={handleLinkClick}>Services</Link>
                    <Link href="/blog" preserveScroll={false} className={isBlog ? "active" : ""} onClick={handleLinkClick}>Blog</Link>
                    <a href={isHome ? "#testimonials" : "/#testimonials"} onClick={handleLinkClick}>Testimonials</a>
                    <Link href="/contact" preserveScroll={false} className={isContact ? "active" : ""} onClick={handleLinkClick}>Contact</Link>
                </nav>
                <Link href="/contact" preserveScroll={false} className="pill primary mobile-cta" onClick={handleLinkClick}>
                    Book a call
                    <span className="arrow">
                        <ArrowIcon />
                    </span>
                </Link>
            </div>
        </header>
    );
}
