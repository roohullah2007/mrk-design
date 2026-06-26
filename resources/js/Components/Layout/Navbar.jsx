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
    const isGrowth = url === '/growth-partner';
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
                <Link href="/" preserveScroll={false} className="logo nav-brand" aria-label="MRK Design Agency">
                    <span className="nav-brand-top">mrk</span>
                    <span className="nav-brand-bottom">design <span className="pink">agency</span></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="nav-pill nav-desktop">
                    <Link href="/" preserveScroll={false} className={isHome ? "active" : ""}>Home</Link>
                    <Link href="/services" preserveScroll={false} className={isServices ? "active" : ""}>Services</Link>
                    <Link href="/growth-partner" preserveScroll={false} className={isGrowth ? "active" : ""}>Pricing</Link>
                    <Link href="/blog" preserveScroll={false} className={isBlog ? "active" : ""}>Blog</Link>
                    <a href={isHome ? "#testimonials" : "/#testimonials"}>Testimonials</a>
                    <Link href="/contact" preserveScroll={false} className={isContact ? "active" : ""}>Contact</Link>
                </nav>

                <div className="nav-right">
                    <Link href="/contact" preserveScroll={false} className="pill primary sm nav-cta-desktop" style={{ fontSize: '16px', height: '52px', padding: '0 22px' }}>
                        Start a project
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
                    <Link href="/" preserveScroll={false} className={isHome ? "active" : ""} onClick={handleLinkClick}>Home</Link>
                    <Link href="/services" preserveScroll={false} className={isServices ? "active" : ""} onClick={handleLinkClick}>Services</Link>
                    <Link href="/growth-partner" preserveScroll={false} className={isGrowth ? "active" : ""} onClick={handleLinkClick}>Pricing</Link>
                    <Link href="/blog" preserveScroll={false} className={isBlog ? "active" : ""} onClick={handleLinkClick}>Blog</Link>
                    <a href={isHome ? "#testimonials" : "/#testimonials"} onClick={handleLinkClick}>Testimonials</a>
                    <Link href="/contact" preserveScroll={false} className={isContact ? "active" : ""} onClick={handleLinkClick}>Contact</Link>
                </nav>
                <Link href="/contact" preserveScroll={false} className="pill primary mobile-cta" onClick={handleLinkClick}>
                    Start a project
                </Link>
            </div>
        </header>
    );
}
