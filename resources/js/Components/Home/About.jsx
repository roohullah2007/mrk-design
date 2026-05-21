export default function About() {
    return (
        <section className="about" id="about">
            <div className="container about-grid">
                <div>
                    <div className="eyebrow" style={{ marginBottom: '24px', fontFamily: '"Inter Tight"' }}>Who we are</div>
                    <h2 className="display">Great design is more than <span className="serif-italic" style={{ fontSize: '100px' }}>aesthetics.</span></h2>
                    <div className="about-tags">
                        <span className="tag" style={{ fontSize: '14px' }}>★ Clarity</span>
                        <span className="tag" style={{ fontSize: '14px' }}>★ Usability</span>
                        <span className="tag accent" style={{ fontSize: '14px' }}>★ Impact</span>
                    </div>
                </div>
                <div className="about-right">
                    <p className="about-lead">We're a full-service creative partner — design, build, and grow your brand under one roof, from first idea to shipped product to performing campaign.</p>
                    <p className="about-body" style={{ fontSize: '18px' }}>Whether you need a new identity, a high-converting site, a Shopify store, a launch funnel, content that performs, or paid media that actually returns — you don't have to chain three agencies together. We handle the whole pipeline so the work stays on-brand and on-strategy from concept to revenue.</p>
                    <div className="about-stats">
                        <div className="stat">
                            <div className="num">120+</div>
                            <div className="lbl" style={{ fontSize: '14px' }}>Projects done</div>
                        </div>
                        <div className="stat">
                            <div className="num">38</div>
                            <div className="lbl" style={{ fontSize: '14px' }}>Active brands</div>
                        </div>
                        <div className="stat">
                            <div className="num">5 years</div>
                            <div className="lbl" style={{ fontSize: '14px' }}>experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
