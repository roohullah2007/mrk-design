import { Link } from '@inertiajs/react';
import { plans } from '@/data/plans';

const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MiniCheck = () => (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M3 7.5L6 10.5L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Check = () => (
    <svg className="lp-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

export default function Engagements() {
    return (
        <section className="engagements" id="packages">
            <div className="container">
                <div className="lp-head">
                    <div className="eyebrow" style={{ fontFamily: '"Inter Tight"' }}>PRICING</div>
                    <h2 className="lp-h2">Premium design.<br /><span className="serif-italic">Prices you'll love.</span></h2>
                    <p className="lp-why-sub">No big upfront costs. Just a simple monthly plan — pick what fits your stage and scale up when you're ready.</p>
                    <div className="lp-price-ticks">
                        <span><Check /> No contracts</span>
                        <span><Check /> Cancel anytime</span>
                        <span><Check /> Source files yours</span>
                        <span><Check /> Results in 7 days</span>
                    </div>
                </div>

                <div className="pack-grid">
                    {plans.map((p) => (
                        <div className={`pack ${p.featured ? 'dark' : ''}`} key={p.name}>
                            {p.featured && <div className="blob"></div>}
                            <div className="meta">{p.meta}</div>
                            <h3>{p.name}</h3>
                            <div>
                                <div className="price">{p.price}<span className="lp-pack-per">/month</span></div>
                                <div className="starts">{p.blurb}</div>
                            </div>
                            <div className="pack-bottom">
                                {p.plus && <div className="lp-pack-plus">{p.plus}</div>}
                                <ul>
                                    {p.features.map((f) => (
                                        <li key={f}><span className="check"><MiniCheck /></span>{f}</li>
                                    ))}
                                </ul>
                                <Link href="/growth-partner" preserveScroll={false} className="cta">
                                    {p.cta || 'Get Started'}<span className="arrow"><ArrowIcon /></span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="lp-compare-note">All plans are billed monthly. No contracts, no hidden fees — cancel anytime. Not sure where to start? <Link href="/contact" className="lp-note-link">Book a free 15-min call</Link> and we'll guide you.</p>
            </div>
        </section>
    );
}
