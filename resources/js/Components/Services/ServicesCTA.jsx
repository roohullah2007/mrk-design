const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function ServicesCTA() {
    return (
        <section className="services-final-cta" id="contact">
            <div className="container">
                <div className="eyebrow">Let's build</div>
                <h2>Ready to <em>get</em><br/>moving?</h2>
                <p>Tell us about your project and we'll come back with a recommended scope and timeline within 24 hours.</p>
                <div className="actions">
                    <a href="mailto:info@mrkdesignagency.com" className="pill primary">
                        Start a project
                        <span className="arrow"><ArrowIcon /></span>
                    </a>
                    <a href="mailto:info@mrkdesignagency.com" className="pill ghost">Or email us directly</a>
                </div>
            </div>
        </section>
    );
}
