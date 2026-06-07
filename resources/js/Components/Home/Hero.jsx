const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const DownArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
        <path d="M3 3L11 11M11 11V5M11 11H5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const StarIcon = () => (
    <svg width="84" height="84" viewBox="0 0 28 28" fill="none">
        <path d="M14 0C14 8 6 14 0 14C8 14 14 22 14 28C14 22 22 14 28 14C22 14 14 8 14 0Z" fill="#ffffff"/>
    </svg>
);

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <h1>Designing<span className="pebble-accent">
                    <StarIcon />
                </span>digital</h1>

                <div className="hero-stage">
                    <img src="/images/hero-image.jpg" alt="MRK design studio" />

                    <div className="stage-quote">
                        <div className="q">"We design like nobody's watching — then ship like everyone is."</div>
                        <div className="credit">— THE MRK STUDIO PRINCIPLE</div>
                    </div>

                    <div className="stage-stat">
                        <div className="lab" style={{ fontSize: '16px' }}>Agency total goals</div>
                        <div className="sub" style={{ fontSize: '16px' }}>A studio focused on impact, not theatre.</div>
                        <hr />
                        <div className="row">
                            <div>
                                <div className="big">+38%</div>
                                <div className="meta" style={{ fontSize: '16px' }}>Average activation lift</div>
                            </div>
                            <span className="arrow-circle">
                                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                        </div>
                        <div className="row">
                            <div>
                                <div className="big">4.9★</div>
                                <div className="meta" style={{ fontSize: '16px' }}>Across 84 reviews</div>
                            </div>
                            <span className="arrow-circle">
                                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                        </div>
                    </div>
                </div>

                <h1><span className="serif-italic" style={{ fontSize: '200px' }}>experiences</span><span className="arrow-pebble" style={{ fontSize: '200px' }}>
                    <svg width="36" height="36" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span></h1>
                <h1 style={{ fontSize: '160px', color: 'rgb(0, 0, 0)', whiteSpace: 'nowrap' }}>that build&nbsp;brands.</h1>

                <div className="hero-sub">
                    <div>
                        <div className="eyebrow" style={{ marginBottom: '16px', fontFamily: '"Inter Tight"', fontSize: '16px', borderStyle: 'solid' }}>What we do</div>
                        <p style={{ fontWeight: 400, fontSize: '18px' }}>MRK is a full-service creative agency —<br className="ms-br" /> UI/UX, branding, websites,<br className="ml-br" /> ecommerce,<br className="ms-br" /> video, SEO,<br className="tablet-br tl-br" /> and digital marketing. One<br className="ms-br" /> team that<br className="ml-br" /> designs, ships, and grows<br className="ms-br" /> the work.</p>
                    </div>
                    <div className="hero-bottom-row">
                        <div className="hero-ctas">
                            <a href="#contact" className="pill primary" style={{ fontSize: '18px' }}>
                                Get a free consultation
                                <span className="arrow"><ArrowIcon /></span>
                            </a>
                            <a href="#work" className="pill ghost" style={{ fontSize: '18px' }}>
                                View our work
                                <span className="arrow"><DownArrowIcon /></span>
                            </a>
                        </div>
                        <div className="hero-meta-block">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div className="avatars">
                                <img className="av" src="/images/avatar-1.jpg" alt="" />
                                <img className="av" src="/images/avatar-2.jpg" alt="" />
                                <img className="av" src="/images/avatar-3.jpg" alt="" />
                                <img className="av" src="/images/avatar-4.jpg" alt="" />
                            </div>
                            <div style={{ fontSize: '16px', lineHeight: 1.3 }}>
                                <strong style={{ fontWeight: 700, fontSize: '18px' }}>120+ clients</strong>
                                <div style={{ color: 'var(--muted)' }}>Across 14 countries</div>
                            </div>
                        </div>
                        <div className="rating-card">
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                                <span className="display" style={{ fontSize: '40px', lineHeight: 1 }}>4.9</span>
                                <span className="mono" style={{ fontSize: '20px', color: 'rgb(0, 0, 0)', fontWeight: 700 }}>/5&nbsp;</span>
                            </div>
                            <div className="mono" style={{ fontSize: '14px', color: 'var(--muted)', marginTop: '4px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>★★★★★&nbsp; &nbsp;5 star reviews</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
