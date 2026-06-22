import { Link } from '@inertiajs/react';

const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container about-grid">
                <div className="about-media">
                    <img src="/images/Laptop Image.png" alt="MRK design work on a laptop" className="about-img" />
                </div>
                <div className="about-right">
                    <h2 className="display">Great design is<br /> more than <span className="serif-italic" style={{ fontSize: '78px' }}>aesthetics.</span></h2>
                    <p className="about-lead">We're a full-service creative partner — design, build, and grow<br />your brand under one roof, from first idea to shipped product to<br /> performing campaign.</p>
                    <p className="about-body" style={{ fontSize: '18px' }}>Whether you need a new identity, a high-converting site, a <br />launch funnel, content that performs, or paid media that actually returns — you <br />don't have to chain three agencies together. We handle the whole pipeline so<br /> the work stays on-brand and on-strategy from concept to revenue.</p>
                    <Link href="/contact" preserveScroll={false} className="pill primary about-cta">
                        Start a Project
                        <span className="arrow"><ArrowIcon /></span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
