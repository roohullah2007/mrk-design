import { Link } from '@inertiajs/react';

const base = "/images/behance";
const bh = "https://www.behance.net/gallery";

// Reusable tile: image + hover overlay (category, name, view link)
function Tile({ href, img, name, category, style }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="pf-hover-zoom" style={style}>
            <img src={img} alt={name} />
            <div className="pf-info">
                <span className="pf-info-cat">{category}</span>
                <h4 className="pf-info-name">{name}</h4>
                <span className="pf-info-view">View project ↗</span>
            </div>
        </a>
    );
}

export default function Portfolio() {
    return (
        <section className="portfolio" id="work">
            <div className="container">
                <div className="sec-head">
                    <div>
                        <div className="eyebrow" style={{ marginBottom: '24px', fontFamily: '"Inter Tight"' }}>PORTFOLIO</div>
                        <h2>Recent <span className="serif-italic">Work</span></h2>
                    </div>
                    <Link href="/portfolio" preserveScroll={false} className="pill ink">View full portfolio
                        <span className="arrow" style={{ width: '32px', height: '32px' }}><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    </Link>
                </div>
            </div>

            <div className="portfolio-frames">
                {/* Frame 1 */}
                <div className="pf-frame">
                    <div className="pf-row">
                        <Tile
                            href={`${bh}/240781967/Rad-Coffee-Website-Redesign`}
                            img={`${base}/rad-coffee.png`}
                            name="Rad Coffee Website"
                            category="Web Design"
                            style={{ width: '414px', height: '230px' }}
                        />
                        <Tile
                            href={`${bh}/234206135/Oran-Velorian-Logo-Design`}
                            img={`${base}/oran-velorian-logo.jpg`}
                            name="Oran Velorian Logo"
                            category="Logo Design"
                            style={{ width: '230px', height: '230px' }}
                        />
                    </div>
                    <div className="pf-row">
                        <Tile
                            href={`${bh}/230732753/NEXTGEN-Australian-Immigration-Website-UIUX-Design`}
                            img={`${base}/nextgen-immigration.png`}
                            name="NEXTGEN Immigration"
                            category="Web Design"
                            style={{ width: '414px', height: '230px' }}
                        />
                        <Tile
                            href={`${bh}/234595785/Fashion-Logo-Design`}
                            img={`${base}/fashion-logo.jpg`}
                            name="Fashion Logo"
                            category="Logo Design"
                            style={{ width: '230px', height: '230px' }}
                        />
                    </div>
                    <div className="pf-row">
                        <Tile
                            href={`${bh}/249574975/Hockey-Coach-Website-Redesign-Figma-UIUX-Design`}
                            img={`${base}/hockey-coach.png`}
                            name="Hockey Coach Website"
                            category="Web Design"
                            style={{ width: '654px', height: '311px' }}
                        />
                    </div>
                    <div className="pf-row pf-row-split pf-row-extra">
                        <Tile
                            href="https://doctor-home.com/"
                            img="/images/sites/doctor-home.jpg"
                            name="Doctor Home"
                            category="WordPress"
                            style={{ flex: '1 1 0', height: '240px' }}
                        />
                        <Tile
                            href="https://guardmyhvac.com/"
                            img="/images/sites/guardmyhvac.jpg"
                            name="Guard My HVAC"
                            category="Custom Code"
                            style={{ flex: '1 1 0', height: '240px' }}
                        />
                    </div>
                </div>

                {/* Frame 2 */}
                <div className="pf-frame">
                    <div className="pf-row">
                        <Tile
                            href={`${bh}/229081409/WpBun-Logo-Design`}
                            img={`${base}/wpbun-logo.jpg`}
                            name="WpBun Logo Design"
                            category="Logo Design"
                            style={{ width: '543px', height: '322px' }}
                        />
                    </div>
                    <div className="pf-row">
                        <Tile
                            href="https://www.beautybox.qa/"
                            img="/images/seo/site-beauty-box.jpg"
                            name="Beauty Box Qatar"
                            category="SEO"
                            style={{ width: '543px', height: '224px' }}
                        />
                    </div>
                    <div className="pf-row pf-row-split">
                        <Tile
                            href={`${bh}/202737461/East-Kent-Cardiology-Logo-Branding`}
                            img={`${base}/east-kent-cardiology.png`}
                            name="East Kent Cardiology"
                            category="Logo & Branding"
                            style={{ flex: '1 1 0', height: '224px' }}
                        />
                        <Tile
                            href={`${bh}/241706681/Meter-Measure-Construction-Logo-Design`}
                            img={`${base}/meter-measure-logo.jpg`}
                            name="Meter Measure Logo"
                            category="Logo Design"
                            style={{ flex: '1 1 0', height: '224px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
