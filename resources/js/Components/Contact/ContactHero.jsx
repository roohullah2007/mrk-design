const StarIcon = () => (
    <svg width="40" height="40" viewBox="0 0 28 28" fill="none">
        <path d="M14 0C14 8 6 14 0 14C8 14 14 22 14 28C14 22 22 14 28 14C22 14 14 8 14 0Z" fill="#000"/>
    </svg>
);

export default function ContactHero() {
    return (
        <section className="contact-hero">
            <div className="container">
                <div className="hero-meta">
                    <div className="hero-meta-left">
                        <span className="eyebrow">Contact</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>— 24-hour response time</span>
                    </div>
                    <div className="hero-meta-right">
                        <span className="live"><span className="pulse"></span>Currently accepting Q3 projects</span>
                        <span>Islamabad, Pakistan</span>
                    </div>
                </div>

                <h1 className="display">
                    <span className="row" style={{ fontSize: '170px' }}>Let's build</span>
                    <span className="row" style={{ fontSize: '170px' }}>something <span className="accent-pebble">great</span></span>
                    <span className="row" style={{ fontSize: '170px' }}>together<span className="star">
                        <StarIcon />
                    </span></span>
                </h1>

                <div className="hero-sub">
                    <p>Have a project in mind or need help with your brand, website, or design? Whether you're a startup or an established business — we'd love to hear from you.</p>
                    <div className="right">
                        <span>Average reply</span>
                        <span className="num">&lt; 24h</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
