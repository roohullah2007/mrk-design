import { Link } from '@inertiajs/react';

const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const HavenDashboard = () => (
    <div className="ux-dash">
        <div className="top">
            <div className="dots">
                <span style={{ background: '#ff5f57' }}></span>
                <span style={{ background: '#febc2e' }}></span>
                <span style={{ background: '#28c840' }}></span>
            </div>
            <div className="url">haven.app/dashboard</div>
            <div className="ind"></div>
        </div>
        <div className="stats">
            <div className="stat"><div className="lab">REVENUE</div><div className="v">$248,910</div><div className="d">↑ 12.4%</div></div>
            <div className="stat accent"><div className="lab">CONVERSION</div><div className="v">4.82%</div><div className="d">↑ 0.6%</div></div>
            <div className="stat"><div className="lab">USERS</div><div className="v">18,204</div><div className="d">↑ 8.1%</div></div>
        </div>
        <div className="bars">
            <div style={{ height: '40%' }}></div><div style={{ height: '55%' }}></div><div style={{ height: '30%' }}></div>
            <div style={{ height: '72%' }}></div><div style={{ height: '48%' }}></div><div style={{ height: '90%' }}></div>
            <div style={{ height: '68%' }}></div><div style={{ height: '82%' }}></div><div style={{ height: '60%' }}></div>
            <div style={{ height: '95%' }}></div><div style={{ height: '78%' }}></div><div className="hi" style={{ height: '100%' }}></div>
        </div>
    </div>
);

const OnyxMobile = () => (
    <div className="ux-mobile-wrap">
        <div className="ux-mobile">
            <div className="screen">
                <div className="bar"><span>9:41</span><span>● ● ●</span></div>
                <h4>Hi, Maya<br />good morning.</h4>
                <div className="bal">
                    <div className="l">BALANCE</div>
                    <div className="v">$12,448.20</div>
                </div>
                <div className="tx">
                    <div className="row"><span>Coffee · Onyx</span><span style={{ fontWeight: 600 }}>-$4</span></div>
                    <div className="row"><span>Salary — March</span><span style={{ fontWeight: 600 }}>+ $5,200</span></div>
                    <div className="row"><span>Spotify Premium</span><span style={{ fontWeight: 600 }}>-$12</span></div>
                </div>
                <div className="send">Send money →</div>
            </div>
        </div>
    </div>
);

const VerdaBrand = () => (
    <div className="ux-brand">
        <div className="lab">BRAND SYSTEM — V.02</div>
        <h4>Verda&nbsp;<span className="sa">BOTANY</span></h4>
        <div className="sw">
            <div style={{ background: '#000' }}></div>
            <div style={{ background: '#7A1240' }}></div>
            <div style={{ background: 'var(--accent)' }}></div>
            <div style={{ background: 'var(--accent-soft)' }}></div>
            <div style={{ background: 'var(--bg)' }}></div>
        </div>
        <div className="badges">
            <span className="b1">AA · 7.1</span>
            <span className="b2">5 weights</span>
        </div>
    </div>
);

const OakwellLanding = () => (
    <div className="ux-land">
        <div className="nb">
            <div className="lg">OAKWELL</div>
            <div className="lk"><span>Shop</span><span>Story</span><span>Journal</span><span className="cart">Cart · 2</span></div>
        </div>
        <div className="hero">
            <h4>Slow-grown<br /><span className="it">essentials.</span></h4>
            <div className="ctas"><span className="a">Shop the drop →</span><span className="b">Our story</span></div>
        </div>
    </div>
);

export default function Portfolio() {
    return (
        <section className="portfolio" id="work">
            <div className="container">
                <div className="sec-head">
                    <div>
                        <div className="eyebrow" style={{ marginBottom: '24px', fontFamily: '"Inter Tight"' }}>Selected work</div>
                        <h2>Recent <span className="serif-italic">obsessions</span>.</h2>
                    </div>
                    <Link href="/" preserveScroll={false} className="pill ink">View full portfolio
                        <span className="arrow" style={{ width: '32px', height: '32px' }}><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    </Link>
                </div>

                <div className="portfolio-row">
                    <div className="project soft">
                        <div className="project-head">
                            <div>
                                <div className="project-tag">SAAS · DASHBOARD</div>
                                <h3 className="project-name">Haven Analytics</h3>
                            </div>
                            <span className="project-arrow"><ArrowIcon /></span>
                        </div>
                        <div className="project-body">
                            <HavenDashboard />
                        </div>
                        <div className="project-foot">
                            <p>A revenue dashboard that turns spreadsheets into a story execs actually read.</p>
                            <div className="pmeta"><span>+38% MAU</span><span>2026</span></div>
                        </div>
                    </div>

                    <div className="project dark">
                        <div className="project-head">
                            <div>
                                <div className="project-tag">FINTECH · MOBILE</div>
                                <h3 className="project-name">Onyx Wallet</h3>
                            </div>
                            <span className="project-arrow"><ArrowIcon /></span>
                        </div>
                        <div className="project-body">
                            <OnyxMobile />
                        </div>
                        <div className="project-foot">
                            <p>Personal finance app rebuilt from the ground up around clarity and trust.</p>
                            <div className="pmeta"><span>4.8★ App Store</span><span>2025</span></div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-row alt">
                    <div className="project accent">
                        <div className="project-head">
                            <div>
                                <div className="project-tag">BRAND · IDENTITY</div>
                                <h3 className="project-name">Verda Botany</h3>
                            </div>
                            <span className="project-arrow"><ArrowIcon /></span>
                        </div>
                        <div className="project-body">
                            <VerdaBrand />
                        </div>
                        <div className="project-foot">
                            <p>A bold, editorial identity for a regenerative skincare brand entering DTC.</p>
                            <div className="pmeta"><span>+62% recall</span><span>2025</span></div>
                        </div>
                    </div>

                    <div className="project cream">
                        <div className="project-head">
                            <div>
                                <div className="project-tag">DTC · ECOMMERCE</div>
                                <h3 className="project-name">Oakwell Goods</h3>
                            </div>
                            <span className="project-arrow"><ArrowIcon /></span>
                        </div>
                        <div className="project-body">
                            <OakwellLanding />
                        </div>
                        <div className="project-foot">
                            <p>A Shopify rebuild that turned browsers into buyers and a brand into a ritual.</p>
                            <div className="pmeta"><span>+24% CR</span><span>2025</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
