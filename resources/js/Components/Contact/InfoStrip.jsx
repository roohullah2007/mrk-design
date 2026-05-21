const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function InfoStrip() {
    return (
        <section className="container" style={{ paddingBottom: '32px' }}>
            <div className="info-strip">
                <div className="info-grid">
                    <div className="info-cell">
                        <div className="lbl">Email us</div>
                        <div className="val">
                            <a href="mailto:info@mrkdesignagency.com">
                                info@mrkdesignagency.com
                                <span className="ext">
                                    <ArrowIcon />
                                </span>
                            </a>
                        </div>
                        <div className="sub">Reply within 24 hours, Mon–Fri</div>
                    </div>
                    <div className="info-cell">
                        <div className="lbl">Based in</div>
                        <div className="val">Islamabad, Pakistan</div>
                        <div className="sub">Serving clients worldwide — UTC+5</div>
                    </div>
                    <div className="info-cell">
                        <div className="lbl">Office hours</div>
                        <div className="val">9:00 — 18:00</div>
                        <div className="sub">Async friendly · Slack & Notion</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
