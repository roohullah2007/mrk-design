import { Link } from '@inertiajs/react';
import { useState } from 'react';

const base = "/images/Portfolio Section Images";

export default function Portfolio() {
    const [zoom4, setZoom4] = useState(false);

    return (
        <section className="portfolio" id="work">
            <div className="container">
                <div className="sec-head">
                    <div>
                        <div className="eyebrow" style={{ marginBottom: '24px', fontFamily: '"Inter Tight"' }}>PORTFOLIO</div>
                        <h2>Recent <span className="serif-italic">Work</span></h2>
                    </div>
                    <Link href="/" preserveScroll={false} className="pill ink">View full portfolio
                        <span className="arrow" style={{ width: '32px', height: '32px' }}><svg width="12" height="12" viewBox="0 0 14 14" fill="none"><path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    </Link>
                </div>
            </div>

            <div className="portfolio-frames">
                {/* Frame 1 */}
                <div className="pf-frame">
                    <div className="pf-row">
                        <div className="pf-hover-zoom" style={{ width: '414px', height: '230px' }}>
                            <img src={`${base}/Portolio 1.png`} alt="" />
                        </div>
                        <div className="pf-hover-zoom" style={{ width: '230px', height: '230px' }}>
                            <img src={`${base}/Portfolio 2.png`} alt="" />
                        </div>
                    </div>
                    <div className="pf-row">
                        <div className="pf-hover-zoom" style={{ width: '414px', height: '230px' }}>
                            <img src={`${base}/Portfolio 3.png`} alt="" />
                        </div>
                        <img
                            src={`${base}/Portfolio 4.png`}
                            alt=""
                            onClick={() => setZoom4((v) => !v)}
                            className={`pf-click-zoom ${zoom4 ? 'is-zoomed' : ''}`}
                            style={{ width: '230px', height: '230px' }}
                        />
                    </div>
                    <div className="pf-row">
                        <div className="pf-hover-zoom" style={{ width: '654px', height: '311px' }}>
                            <img src={`${base}/Portfolio 5.png`} alt="" />
                        </div>
                    </div>
                </div>

                {/* Frame 2 */}
                <div className="pf-frame">
                    <div className="pf-row">
                        <div className="pf-hover-zoom" style={{ width: '543px', height: '322px' }}>
                            <img src={`${base}/Portfolio 6.png`} alt="" />
                        </div>
                    </div>
                    <div className="pf-row">
                        <div className="pf-hover-zoom" style={{ width: '543px', height: '224px' }}>
                            <img src={`${base}/Portfolio 7.png`} alt="" />
                        </div>
                    </div>
                    <div className="pf-row">
                        <div className="pf-hover-zoom" style={{ width: '543px', height: '224px' }}>
                            <img src={`${base}/portfolio 8.png`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
