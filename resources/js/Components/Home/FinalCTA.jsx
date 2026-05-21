import { Link } from '@inertiajs/react';

const ArrowIcon = () => (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function FinalCTA() {
    return (
        <section className="final-cta" id="contact">
            <div className="container">
                <div className="inner">
                    <div className="eyebrow" style={{ fontFamily: '"Inter Tight"' }}>LET'S BUILD</div>
                    <h2>Ready to build a</h2>
                    <h2><span className="it">strong</span> digital</h2>
                    <h2>presence?</h2>
                    <p>Let's turn your ideas into impactful designs that elevate your brand and drive results.</p>
                    <div className="final-cta-ctas">
                        <Link href="/contact" preserveScroll={false} className="pill primary">
                            Start your project
                            <span className="arrow"><ArrowIcon /></span>
                        </Link>
                        <a href="https://wa.me/923390104741?text=Hi%20MRK%20Design%20Agency%20%E2%80%94%20I%27d%20like%20to%20book%20a%2030-min%20intro%20call." target="_blank" rel="noopener noreferrer" className="pill ghost">Book a 30-min intro call</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
