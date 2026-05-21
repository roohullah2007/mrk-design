const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function ContactCTA() {
    return (
        <section className="contact-final-cta">
            <div className="container">
                <span className="eyebrow">Ready to start?</span>
                <h2 className="display">
                    Start your<br />
                    <em className="serif-italic" style={{ color: 'var(--accent)' }}>project</em> <span className="pebble">today.</span>
                </h2>
                <p>The first call is free, ~30 minutes, and we'll leave you with a clear next step — whether you work with us or not.</p>
                <div className="actions">
                    <a href="#contact-form" className="start">
                        Start a project
                        <span className="arrow">
                            <ArrowIcon />
                        </span>
                    </a>
                    <a href="mailto:info@mrkdesignagency.com" className="ghost">
                        Or email us directly
                        <ArrowIcon />
                    </a>
                </div>
            </div>
        </section>
    );
}
