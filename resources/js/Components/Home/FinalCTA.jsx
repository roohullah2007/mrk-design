import { Link } from '@inertiajs/react';

const ArrowIcon = () => (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function FinalCTA() {
    return (
        <section className="final-cta" id="contact">
            <iframe
                className="cta-video"
                src="https://www.youtube.com/embed/C3j-v2uIilo?autoplay=1&mute=1&loop=1&playlist=C3j-v2uIilo&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&start=0"
                title=""
                frameBorder="0"
                allow="autoplay; encrypted-media"
            ></iframe>
            <div className="cta-overlay"></div>
            <div className="container">
                <div className="inner">
                    <div className="eyebrow" style={{ fontFamily: '"Inter Tight"' }}>LET'S BUILD</div>
                    <h2>Ready to build a <span className="it">strong</span> digital<br /> presence?</h2>
                    <p>Let's turn your ideas into impactful designs that elevate your<br /> brand and drive results.</p>
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
