const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function AddonBanner() {
    return (
        <section className="container">
            <div className="addon">
                <div>
                    <h2>Need something <em>custom?</em></h2>
                    <p>We also run monthly retainers, design audits, and design-system sprints. If your need doesn't fit the menu — tell us about it.</p>
                </div>
                <a href="#contact" className="pill primary" style={{ height: '60px' }}>
                    Tell us more
                    <span className="arrow"><ArrowIcon /></span>
                </a>
            </div>
        </section>
    );
}
