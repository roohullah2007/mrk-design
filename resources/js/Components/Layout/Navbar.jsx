import { Link, usePage } from '@inertiajs/react';

const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function Navbar() {
    const { url } = usePage();
    const isHome = url === '/' || url.startsWith('/#');
    const isServices = url === '/services';
    const isBlog = url === '/blog' || url.startsWith('/blog/');
    const isContact = url === '/contact';

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
                <nav className="nav-pill">
                    <a href={isHome ? "#work" : "/#work"} className={isHome ? "active" : ""}>Work</a>
                    <Link href="/services" preserveScroll={false} className={isServices ? "active" : ""}>Services</Link>
                    <Link href="/blog" preserveScroll={false} className={isBlog ? "active" : ""}>Blog</Link>
                    <a href={isHome ? "#testimonials" : "/#testimonials"}>Testimonials</a>
                    <Link href="/contact" preserveScroll={false} className={isContact ? "active" : ""}>Contact</Link>
                </nav>
                <div className="nav-right">
                    <Link href="/contact" preserveScroll={false} className="pill primary sm" style={{ fontSize: '16px', height: '52px', padding: '0 8px 0 22px' }}>
                        Book a call
                        <span className="arrow" style={{ width: '36px', height: '36px' }}>
                            <ArrowIcon />
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
