import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const WA = "https://wa.me/923390104741?text=Hi%20MRK%20%E2%80%94%20I%27d%20like%20to%20book%20a%20free%20consultation%20about%20the%20Growth%20Partner%20subscription.";

const ArrowIcon = () => (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Check = () => (
    <svg className="lp-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

const included = [
    { icon: '🎨', title: 'Design', items: ['UI/UX Design', 'Landing Pages', 'Website Sections', 'Social Media Graphics', 'Ad Creatives', 'Banners', 'Brand Assets', 'Logo Updates'] },
    { icon: '💻', title: 'WordPress Support', items: ['Website Updates', 'New Pages', 'New Sections', 'Bug Fixes', 'Plugin Configuration', 'Speed Optimization', 'Mobile Responsiveness', 'Website Maintenance'] },
    { icon: '📈', title: 'Basic SEO', items: ['Meta Titles & Descriptions', 'Image Alt Tags', 'Internal Linking', 'XML Sitemap', 'Google Search Console', 'SEO Plugin Management', 'Monthly SEO Checkup'] },
    { icon: '📱', title: 'Creative Support', items: ['Marketing Graphics', 'Promotional Banners', 'Email Graphics', 'Website Graphics', 'Landing Page Design'] },
];

const plans = [
    {
        emoji: '🚀', name: 'Growth', price: '$200', featured: true,
        blurb: 'Perfect for startups and growing businesses.',
        features: ['Unlimited Requests*', 'One Active Task at a Time', 'Unlimited Revisions', '2–3 Day Average Delivery', 'WordPress Support', 'UI/UX Design', 'Graphic Design', 'Basic SEO', 'Website Maintenance', 'Dedicated Project Manager'],
    },
    {
        emoji: '📈', name: 'Growth Plus', price: '$450',
        blurb: 'Everything in Growth, plus:',
        features: ['Priority turnaround', 'Two active requests', 'Shopify support', 'Conversion optimization', 'Landing page development', 'Monthly strategy call'],
    },
    {
        emoji: '👑', name: 'Business Pro', price: '$850',
        blurb: 'Everything in Growth Plus, plus:',
        features: ['Unlimited active revisions', 'Advanced SEO', 'Funnel design', 'Custom development hours', 'Monthly performance reports', 'Priority support'],
    },
];

const steps = [
    { n: '01', title: 'Subscribe', text: 'Choose the plan that fits your business.' },
    { n: '02', title: 'Submit Your Requests', text: 'Use Trello, ClickUp, Notion, or email.' },
    { n: '03', title: 'We Get to Work', text: 'Our team designs, updates, and improves your digital assets.' },
    { n: '04', title: 'Keep Growing', text: 'Request your next task whenever you’re ready.' },
];

const whyMrk = [
    'Experienced design & development team',
    'Fast communication',
    'Modern UI/UX expertise',
    'WordPress specialists',
    'Transparent pricing',
    'Global client experience',
    'One partner for all your digital needs',
];

const faqs = [
    { q: 'Is there a contract?', a: 'No. Cancel or pause your subscription anytime.' },
    { q: 'Can I request unlimited work?', a: 'Yes. You can submit unlimited requests, and we’ll work through them one at a time (or two at a time on higher plans).' },
    { q: 'What’s not included?', a: 'Complex custom software, mobile app development, large e-commerce builds, paid advertising management, and enterprise SEO campaigns are quoted separately.' },
];

export default function GrowthPartner() {
    return (
        <MainLayout>
            <Head title="MRK Growth Partner — Design, Website & SEO Subscription from $200/mo">
                <meta name="description" content="Your dedicated design, WordPress, and SEO team for one predictable monthly subscription. No contracts, cancel anytime, fast turnaround. Starting at $200/month." />
            </Head>

            {/* Hero */}
            <section className="lp-hero">
                <span className="lp-blob lp-blob-1" aria-hidden="true"></span>
                <span className="lp-blob lp-blob-2" aria-hidden="true"></span>
                <div className="container lp-hero-grid">
                    <div className="lp-hero-copy">
                        <span className="lp-badge">🚀 MRK Growth Partner</span>
                        <h1 className="lp-hero-title">
                            Stop hiring for <span className="serif-italic lp-accent">every</span> small task.
                        </h1>
                        <p className="lp-hero-sub">
                            Your design, website &amp; digital team for just <span className="lp-accent">$200/month</span>.
                            Ongoing design, WordPress support, basic SEO, and creative — all under one monthly plan.
                        </p>
                        <div className="lp-ticks">
                            <span><Check /> No contracts</span>
                            <span><Check /> Cancel anytime</span>
                            <span><Check /> Fast turnaround</span>
                        </div>
                        <div className="lp-cta-row">
                            <Link href="/contact" preserveScroll={false} className="pill primary lp-cta">
                                Start Today <span className="arrow"><ArrowIcon /></span>
                            </Link>
                            <a href={WA} target="_blank" rel="noopener noreferrer" className="pill ghost lp-cta">Book a Free Consultation</a>
                        </div>
                        <div className="lp-trust">
                            <div className="lp-avatars">
                                {[1, 2, 3, 4].map((n) => <img key={n} src={`/images/avatar-${n}.jpg`} alt="" />)}
                            </div>
                            <p>Trusted by <strong>50+ brands</strong> worldwide · <span className="lp-stars">★★★★★</span> 4.9/5</p>
                        </div>
                    </div>

                    <div className="lp-hero-visual" aria-hidden="true">
                        <div className="lp-board">
                            <div className="lp-board-top">
                                <span className="lp-wdot"></span><span className="lp-wdot"></span><span className="lp-wdot"></span>
                                <span className="lp-board-title">MRK Growth Board</span>
                            </div>
                            <div className="lp-board-body">
                                <div className="lp-col">
                                    <div className="lp-col-head">Your requests</div>
                                    <div className="lp-task">
                                        <span className="lp-task-ic done"><Check /></span>
                                        <div className="lp-task-txt"><b>Landing page design</b><i>Delivered in 2 days</i></div>
                                    </div>
                                    <div className="lp-task active">
                                        <span className="lp-task-ic spin"></span>
                                        <div className="lp-task-txt"><b>WordPress updates</b><i>In progress…</i></div>
                                    </div>
                                    <div className="lp-task">
                                        <span className="lp-task-ic dot"></span>
                                        <div className="lp-task-txt"><b>Monthly SEO checkup</b><i>Queued — up next</i></div>
                                    </div>
                                </div>
                                <div className="lp-growth">
                                    <div className="lp-growth-head">Your growth <span className="lp-growth-up">▲ 38%</span></div>
                                    <div className="lp-bars">
                                        <span style={{ height: '34%' }}></span>
                                        <span style={{ height: '50%' }}></span>
                                        <span style={{ height: '44%' }}></span>
                                        <span style={{ height: '66%' }}></span>
                                        <span style={{ height: '80%' }}></span>
                                        <span style={{ height: '100%' }} className="peak"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="lp-board-foot">
                                <span className="lp-pm-ava"><img src="/images/avatar-2.jpg" alt="" /></span>
                                <span className="lp-pm-txt"><b>Your dedicated team</b> is on it</span>
                                <span className="lp-pm-live">● Online</span>
                            </div>
                        </div>
                        <div className="lp-float lp-float-1"><span>⚡</span> 2–3 day delivery</div>
                        <div className="lp-float lp-float-2"><Check /> Unlimited requests</div>
                    </div>
                </div>
            </section>

            {/* Stats band */}
            <section className="lp-stats">
                <div className="container lp-stats-grid">
                    <div className="lp-stat"><div className="lp-stat-num">120+</div><div className="lp-stat-lbl">Projects shipped</div></div>
                    <div className="lp-stat"><div className="lp-stat-num">50+</div><div className="lp-stat-lbl">Brands served</div></div>
                    <div className="lp-stat"><div className="lp-stat-num">24h</div><div className="lp-stat-lbl">Avg. reply time</div></div>
                    <div className="lp-stat"><div className="lp-stat-num">4.9★</div><div className="lp-stat-lbl">Client rating</div></div>
                </div>
            </section>

            {/* Problem / Why — cost comparison */}
            <section className="lp-why">
                <div className="container">
                    <div className="lp-head">
                        <h2 className="lp-h2">Hiring help shouldn’t cost a <span className="serif-italic">fortune</span>.</h2>
                        <p className="lp-why-sub">Doing it the usual way adds up fast. MRK gives you the whole team for one flat monthly price.</p>
                    </div>

                    <div className="lp-compare">
                        <div className="lp-compare-card old">
                            <div className="lp-compare-tag">The usual way 😮‍💨</div>
                            <ul className="lp-cost-list">
                                <li><span className="lp-cost-name">Freelancer — per task</span><span className="lp-cost-val">$500+ each</span></li>
                                <li><span className="lp-cost-name">Full-time designer</span><span className="lp-cost-val">$1,000+/mo</span></li>
                                <li><span className="lp-cost-name">WordPress developer</span><span className="lp-cost-val">$600+/mo</span></li>
                                <li><span className="lp-cost-name">SEO specialist</span><span className="lp-cost-val">$400+/mo</span></li>
                                <li><span className="lp-cost-name">Managing them all</span><span className="lp-cost-val">Hours / week</span></li>
                            </ul>
                            <div className="lp-compare-total old"><span className="lp-total-lbl">Adds up to</span><span className="lp-total-num">$2,000+<i>/mo</i></span></div>
                        </div>

                        <div className="lp-vs">VS</div>

                        <div className="lp-compare-card mrk">
                            <span className="lp-save">Save 80%+</span>
                            <div className="lp-compare-tag">The MRK way 🚀</div>
                            <ul className="lp-cost-list">
                                <li><Check /> Design, WordPress, SEO &amp; creative</li>
                                <li><Check /> One dedicated team</li>
                                <li><Check /> Unlimited requests</li>
                                <li><Check /> No hiring, no overhead</li>
                                <li><Check /> Cancel anytime</li>
                            </ul>
                            <div className="lp-compare-total mrk"><span className="lp-total-lbl">All of it for just</span><span className="lp-total-num">$200<i>/mo</i></span></div>
                            <Link href="/contact" preserveScroll={false} className="pill primary lp-compare-cta">Start your subscription<span className="arrow"><ArrowIcon /></span></Link>
                        </div>
                    </div>
                    <p className="lp-compare-note">*Figures reflect typical market rates and are for comparison only.</p>
                </div>
            </section>

            {/* What's included */}
            <section className="lp-included">
                <div className="container">
                    <div className="lp-head">
                        <div className="eyebrow" style={{ fontFamily: '"Inter Tight"' }}>WHAT’S INCLUDED</div>
                        <h2 className="lp-h2">Everything your brand needs, <span className="serif-italic">handled</span>.</h2>
                    </div>
                    <div className="lp-inc-grid">
                        {included.map((cat) => (
                            <div className="lp-inc-card" key={cat.title}>
                                <div className="lp-inc-icon">{cat.icon}</div>
                                <h3>{cat.title}</h3>
                                <ul>
                                    {cat.items.map((it) => <li key={it}><Check />{it}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent work showcase */}
            <section className="lp-work">
                <div className="container">
                    <div className="lp-head">
                        <div className="eyebrow" style={{ fontFamily: '"Inter Tight"' }}>RECENT WORK</div>
                        <h2 className="lp-h2">The kind of work you’ll <span className="serif-italic">get</span>.</h2>
                    </div>
                    <div className="lp-work-grid">
                        {['rad-coffee.png', 'nextgen-immigration.png', 'deister-software.png', 'cafe-branding.jpg', 'perfume-box-packaging.jpg', 'oran-velorian-logo.jpg'].map((img) => (
                            <div className="lp-work-tile" key={img}><img src={`/images/behance/${img}`} alt="MRK design work sample" loading="lazy" /></div>
                        ))}
                    </div>
                    <div className="lp-work-cta">
                        <Link href="/portfolio" preserveScroll={false} className="pill ink">View full portfolio<span className="arrow" style={{ width: '32px', height: '32px' }}><ArrowIcon /></span></Link>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="lp-pricing" id="pricing">
                <div className="container">
                    <div className="lp-head">
                        <div className="eyebrow" style={{ fontFamily: '"Inter Tight"', color: 'var(--accent-soft)' }}>SIMPLE PRICING</div>
                        <h2 className="lp-h2 lp-h2-light">One subscription. <span className="serif-italic">Scales with you.</span></h2>
                        <p className="lp-pricing-sub">Starting at $200/month. No contracts, cancel anytime.</p>
                    </div>
                    <div className="lp-plans">
                        {plans.map((p) => (
                            <div className={`lp-plan ${p.featured ? 'featured' : ''}`} key={p.name}>
                                {p.featured && <span className="lp-plan-tag">Most Popular</span>}
                                <div className="lp-plan-emoji">{p.emoji}</div>
                                <h3 className="lp-plan-name">{p.name}</h3>
                                <div className="lp-plan-price"><span>{p.price}</span>/month</div>
                                <p className="lp-plan-blurb">{p.blurb}</p>
                                <ul className="lp-plan-features">
                                    {p.features.map((f) => <li key={f}><Check />{f}</li>)}
                                </ul>
                                <Link href="/contact" preserveScroll={false} className={`pill ${p.featured ? 'primary' : 'ghost-light'} lp-plan-cta`}>
                                    Get Started{p.featured && <span className="arrow"><ArrowIcon /></span>}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <p className="lp-fineprint">*Unlimited requests subject to a fair usage policy to ensure consistent service for all clients.</p>
                </div>
            </section>

            {/* How it works */}
            <section className="lp-how">
                <div className="container">
                    <div className="lp-head">
                        <div className="eyebrow" style={{ fontFamily: '"Inter Tight"' }}>HOW IT WORKS</div>
                        <h2 className="lp-h2">Up and running in <span className="serif-italic">minutes</span>.</h2>
                    </div>
                    <div className="lp-steps">
                        {steps.map((s) => (
                            <div className="lp-step" key={s.n}>
                                <div className="lp-step-n">{s.n}</div>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why MRK */}
            <section className="lp-whymrk">
                <div className="container">
                    <h2 className="lp-h2">Why <span className="serif-italic">MRK</span>?</h2>
                    <div className="lp-whymrk-grid">
                        {whyMrk.map((w) => <div className="lp-whymrk-item" key={w}><Check />{w}</div>)}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="lp-faq">
                <div className="container">
                    <div className="lp-head">
                        <div className="eyebrow" style={{ fontFamily: '"Inter Tight"' }}>FAQ</div>
                        <h2 className="lp-h2">Questions, <span className="serif-italic">answered</span>.</h2>
                    </div>
                    <div className="lp-faq-list">
                        {faqs.map((f) => (
                            <details className="lp-faq-item" key={f.q}>
                                <summary>{f.q}<span className="lp-faq-plus" aria-hidden="true">+</span></summary>
                                <p>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta portfolio-cta-banner">
                <div className="container">
                    <div className="inner">
                        <div className="eyebrow" style={{ fontFamily: '"Inter Tight"' }}>LET’S BUILD</div>
                        <h2>Focus on growing. <span className="it">We’ll handle the rest.</span></h2>
                        <p>Design. Websites. WordPress. SEO. Creative. All in one monthly subscription.</p>
                        <div className="final-cta-ctas">
                            <Link href="/contact" preserveScroll={false} className="pill primary">
                                Start Your Subscription <span className="arrow"><ArrowIcon /></span>
                            </Link>
                            <a href={WA} target="_blank" rel="noopener noreferrer" className="pill ghost">Book a Free Consultation</a>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
