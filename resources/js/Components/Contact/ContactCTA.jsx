const ArrowIcon = () => (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function ContactCTA() {
    return (
        <section className="final-cta portfolio-cta-banner cta-top-gap">
            <div className="container">
                <div className="inner">
                    <div className="eyebrow" style={{ fontFamily: '"Inter Tight"' }}>Ready to start?</div>
                    <h2>Start your <span className="it">project</span> today.</h2>
                    <p>The first call is free, ~30 minutes, and we'll leave you with a clear next step — whether you work with us or not.</p>
                    <div className="final-cta-ctas">
                        <a href="#contact-form" className="pill primary">
                            Start a project
                            <span className="arrow"><ArrowIcon /></span>
                        </a>
                        <a href="mailto:info@mrkdesignagency.com" className="pill ghost">Or email us directly</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
