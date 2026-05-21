import { Link } from '@inertiajs/react';

const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const StarIcon = () => (
    <svg width="44" height="44" viewBox="0 0 28 28" fill="none">
        <path d="M14 0C14 8 6 14 0 14C8 14 14 22 14 28C14 22 22 14 28 14C22 14 14 8 14 0Z" fill="#000"/>
    </svg>
);

export default function ServicesHero() {
    return (
        <section className="services-hero">
            <div className="container">
                <div className="hero-eyebrow-row">
                    <span className="eyebrow">Services</span>
                </div>
                <h1 className="services-hero-title">
                    Design, build,<br/>
                    and <span className="accent-pebble">grow</span> your<br/>
                    business. <span className="star"><StarIcon /></span>
                </h1>
                <div className="hero-sub">
                    <p>Ten end-to-end services under one roof — so your brand, site, content, and marketing all move together. No agency hopping, no version mismatch, no excuses.</p>
                    <div className="cta-row">
                        <a href="#contact" className="pill primary sm">
                            Start a project
                            <span className="arrow"><ArrowIcon /></span>
                        </a>
                        <a href="#services-detail" className="pill ghost" style={{ height: '52px' }}>See all services</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
