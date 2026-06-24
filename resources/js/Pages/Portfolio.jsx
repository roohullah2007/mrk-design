import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';

const base = "/images/behance";

const ArrowIcon = () => (
    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const projects = [
    // Web design & UI/UX
    { img: `${base}/hockey-coach.png`, title: "Hockey Coach Website Redesign", category: "Web Design", url: "https://www.behance.net/gallery/249574975/Hockey-Coach-Website-Redesign-Figma-UIUX-Design" },
    { img: `${base}/rad-coffee.png`, title: "Rad Coffee Website Redesign", category: "Web Design", url: "https://www.behance.net/gallery/240781967/Rad-Coffee-Website-Redesign" },
    { img: `${base}/entrepreneur.png`, title: "Entrepreneur Website Design", category: "Web Design", url: "https://www.behance.net/gallery/238687745/Entrepreneur-Website-Design-in-Figma" },
    { img: `${base}/deister-software.png`, title: "Deister Software Website", category: "Web Design", url: "https://www.behance.net/gallery/235496693/Deister-Software-Website-Design-in-Figma" },
    { img: `${base}/nextgen-immigration.png`, title: "NEXTGEN Immigration Website", category: "Web Design", url: "https://www.behance.net/gallery/230732753/NEXTGEN-Australian-Immigration-Website-UIUX-Design" },
    { img: `${base}/ikigai-cases.png`, title: "IKIGAI Cases Redesign", category: "Web Design", url: "https://www.behance.net/gallery/232485833/IKIGAI-Cases-website-redesign-in-Figma" },
    { img: `${base}/prestige-floor.png`, title: "Prestige Floor Redesign", category: "Web Design", url: "https://www.behance.net/gallery/234092953/Prestige-Floor-website-redesign-in-Figma" },
    { img: `${base}/street-gear-usa.png`, title: "Street Gear USA Website", category: "Web Design", url: "https://www.behance.net/gallery/229617149/Street-Gear-USA-Website-UIUX-Design" },
    { img: `${base}/scoodemy.png`, title: "Scoodemy Website", category: "Web Design", url: "https://www.behance.net/gallery/224178947/Scoodemy-Website-Design-and-Development" },
    { img: `${base}/product-website-banner.jpg`, title: "Product Website Banner", category: "Web Design", url: "https://www.behance.net/gallery/240180135/Product-Website-Banner-Design" },

    // Logo design
    { img: `${base}/meter-measure-logo.jpg`, title: "Meter Measure Construction Logo", category: "Logo Design", url: "https://www.behance.net/gallery/241706681/Meter-Measure-Construction-Logo-Design" },
    { img: `${base}/fashion-logo.jpg`, title: "Fashion Logo Design", category: "Logo Design", url: "https://www.behance.net/gallery/234595785/Fashion-Logo-Design" },
    { img: `${base}/oran-velorian-logo.jpg`, title: "Oran Velorian Logo Design", category: "Logo Design", url: "https://www.behance.net/gallery/234206135/Oran-Velorian-Logo-Design" },

    // Packaging
    { img: `${base}/perfume-box-packaging.jpg`, title: "Perfume Box Packaging", category: "Packaging", url: "https://www.behance.net/gallery/241095357/Perfume-Box-Packaging-Design" },
    { img: `${base}/oil-packaging.jpg`, title: "Oil Packaging Design", category: "Packaging", url: "https://www.behance.net/gallery/236961825/Oil-Packaging-Design" },
    { img: `${base}/rice-basmati-packaging.jpg`, title: "Rice Basmati Packaging", category: "Packaging", url: "https://www.behance.net/gallery/236961611/Rice-Basmati-Packaging-Design" },
    { img: `${base}/juice-label.jpg`, title: "Juice Label Design", category: "Packaging", url: "https://www.behance.net/gallery/235591799/Juice-Label-Design" },
    { img: `${base}/candle-packaging.jpg`, title: "Candle Packaging Design", category: "Packaging", url: "https://www.behance.net/gallery/235562091/Candle-Packaging-Design" },
    { img: `${base}/packaging-design.jpg`, title: "Incense Stick Labels", category: "Packaging", url: "https://www.behance.net/gallery/233651181/Packaging-Design" },
    { img: `${base}/masala-packaging.jpg`, title: "Masala Packaging Design", category: "Packaging", url: "https://www.behance.net/gallery/232463573/Masala-Packaging-Design" },

    // Logo (WpBun)
    { img: `${base}/wpbun-logo.jpg`, title: "WpBun Logo Design", category: "Logo Design", url: "https://www.behance.net/gallery/229081409/WpBun-Logo-Design" },

    // Funnels
    { img: `${base}/funnel-sales-call.png`, title: "Sales Call Funnel Design", category: "Funnels", url: "https://www.behance.net/gallery/249654185/Funnel-Design-Sales-Call-Funnel-Design-Figma" },
    { img: `${base}/lead-magnet-funnel.png`, title: "Lead Magnet Click Funnel", category: "Funnels", url: "https://www.behance.net/gallery/237777441/Lead-Magnet-Click-funnel-Design-in-Figma" },

    // Mobile apps
    { img: `${base}/homer-app.png`, title: "Homer — Home Services App", category: "Mobile Apps", url: "https://www.behance.net/gallery/207235923/Homer-App-(-Home-services-app)" },

    // WordPress websites
    { img: "/images/sites/doctor-home.jpg", title: "Doctor Home", category: "WordPress", url: "https://doctor-home.com/" },
    { img: "/images/sites/nicholedaley.jpg", title: "Nichole Daley", category: "WordPress", url: "https://nicholedaley.com/" },
    { img: "/images/sites/trusttrevorgroup.jpg", title: "Trust Trevor Group", category: "WordPress", url: "https://trusttrevorgroup.com/" },
    { img: "/images/sites/captivatingconstruction.jpg", title: "Captivating Construction", category: "WordPress", url: "https://captivatingconstruction.com/" },

    // Custom-coded websites
    { img: "/images/sites/sightflight.jpg", title: "SightFlight", category: "Custom Code", url: "https://sightflight.io/" },
    { img: "/images/sites/okbyowner.jpg", title: "OK By Owner", category: "Custom Code", url: "https://okbyowner.com/" },
    { img: "/images/sites/guardmyhvac.jpg", title: "Guard My HVAC", category: "Custom Code", url: "https://guardmyhvac.com/" },

    // Shopify
    { img: "/images/sites/captivatingcabinets.jpg", title: "Captivating Cabinets", category: "Shopify", url: "https://captivatingcabinets.com/" },

    // SEO — card shows the live website; "View Proof" opens the Search Console screenshot
    { img: "/images/seo/site-mg-motors.jpg", proof: "/images/seo/mg-motors.jpg", title: "MG Motors Pakistan", category: "SEO", result: "1.1M impressions · 47.4K clicks", url: "https://mgmotors.com.pk/" },
    { img: "/images/seo/site-beauty-box.jpg", proof: "/images/seo/beauty-box.jpg", title: "Beauty Box Qatar", category: "SEO", result: "178K impressions · 3.95K clicks", url: "https://www.beautybox.qa/" },
    { img: "/images/seo/site-miele.jpg", proof: "/images/seo/miele.jpg", title: "Miele UAE", category: "SEO", result: "175K impressions · 2.37K clicks", url: "https://shop.miele.ae/" },
    { img: "/images/seo/site-1847-for-men.jpg", proof: "/images/seo/1847-for-men.jpg", title: "1847 For Men", category: "SEO", result: "118K impressions · 3.77K clicks", url: "https://1847formen.com/" },
];

// Tab order — only categories that actually have projects are shown
const CATEGORY_ORDER = ["Web Design", "WordPress", "Custom Code", "Shopify", "Logo Design", "Packaging", "Branding", "Funnels", "Mobile Apps", "SEO"];
const categories = ["All", ...CATEGORY_ORDER.filter((c) => projects.some((p) => p.category === c))];

export default function Portfolio() {
    const [active, setActive] = useState("All");
    const [proof, setProof] = useState(null); // SEO proof shown in modal

    const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

    // Close the proof modal on Escape
    useEffect(() => {
        if (!proof) return;
        const onKey = (e) => { if (e.key === 'Escape') setProof(null); };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [proof]);

    return (
        <MainLayout>
            <Head title="Portfolio — MRK Design Agency" />

            <section className="portfolio-page-hero">
                <div className="container">
                    <div className="eyebrow" style={{ marginBottom: '24px', fontFamily: '"Inter Tight"' }}>PORTFOLIO</div>
                    <h1 className="portfolio-page-title">
                        Our recent <span className="serif-italic">work</span>
                    </h1>
                    <p className="portfolio-page-sub">
                        A selection of brands, websites, and identities we've designed and shipped —
                        crafted to look sharp and built to convert.
                    </p>
                </div>
            </section>

            <section className="portfolio-page">
                <div className="container">
                    {/* Category filter tabs */}
                    <div className="pp-tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                className={`pp-tab ${active === cat ? 'active' : ''}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                                <span className="pp-tab-count">
                                    {cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="pp-grid">
                        {filtered.map((p) => {
                            const isBehance = p.url?.includes('behance.net');
                            return (
                                <a
                                    className={`pp-card ${p.category === 'SEO' ? 'pp-card--seo' : ''}`}
                                    key={p.url}
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${p.title} — ${isBehance ? 'view on Behance' : 'view live site'}`}
                                >
                                    <div className="pp-media">
                                        {p.proof && (
                                            <button
                                                type="button"
                                                className="pp-proof-btn"
                                                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setProof(p); }}
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
                                                View Proof
                                            </button>
                                        )}
                                        <img src={p.img} alt={p.title} loading="lazy" />
                                        <div className="pp-overlay">
                                            <span className="pp-tag">{p.category}</span>
                                            <h3 className="pp-card-title">{p.title}</h3>
                                            {p.result && <span className="pp-result">{p.result}</span>}
                                            <span className="pp-view">{isBehance ? 'View on Behance ↗' : 'View live site ↗'}</span>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {proof && (
                <div className="pp-modal" role="dialog" aria-modal="true" onClick={() => setProof(null)}>
                    <div className="pp-modal-box" onClick={(e) => e.stopPropagation()}>
                        <button className="pp-modal-close" onClick={() => setProof(null)} aria-label="Close">×</button>
                        <div className="pp-modal-head">
                            <span className="pp-modal-eyebrow">SEO PROOF · GOOGLE SEARCH CONSOLE</span>
                            <h4>{proof.title}</h4>
                            {proof.result && <p>{proof.result}</p>}
                        </div>
                        <img src={proof.proof} alt={`${proof.title} — Search Console results`} />
                    </div>
                </div>
            )}

            <section className="final-cta portfolio-cta-banner">
                <div className="container">
                    <div className="inner">
                        <div className="eyebrow" style={{ fontFamily: '"Inter Tight"' }}>LET'S BUILD</div>
                        <h2>Have a project <span className="it">in mind?</span></h2>
                        <p>Let's turn your ideas into impactful designs that elevate your brand and drive results.</p>
                        <div className="final-cta-ctas">
                            <Link href="/contact" preserveScroll={false} className="pill primary">
                                Start a project
                                <span className="arrow"><ArrowIcon /></span>
                            </Link>
                            <a href="https://wa.me/923390104741?text=Hi%20MRK%20Design%20Agency%20%E2%80%94%20I%27d%20like%20to%20book%20a%2030-min%20intro%20call." target="_blank" rel="noopener noreferrer" className="pill ghost">Book a 30-min intro call</a>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
