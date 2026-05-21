const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const services = [
    { idx: '01', name: 'UI/UX', em: 'Design', desc: 'End-to-end product design for web and mobile apps — research, flows, interface, and design systems.' },
    { idx: '02', name: 'WordPress', em: 'Development', desc: 'Custom themes and CMS builds — fast, accessible, and easy for your team to update.' },
    { idx: '03', name: 'Custom-coded', em: 'Websites', desc: "Hand-built sites in Next.js, Astro, or vanilla — when off-the-shelf won't cut it." },
    { idx: '04', name: 'Shopify', em: 'Development', desc: 'Storefronts that convert — custom themes, app integration, and checkout optimisation.' },
    { idx: '05', name: 'SEO', em: 'Optimization', desc: 'Technical SEO, content strategy, and on-page tuning that compounds over time.' },
    { idx: '06', name: 'Branding &', em: 'Logo Design', desc: 'Identity systems with backbone — logo, type, color, and the rules to keep them sharp.' },
    { idx: '07', name: 'Graphic', em: 'Design', desc: 'Pitch decks, social, print, packaging — design that travels with your brand.' },
    { idx: '08', name: '3D Character', em: 'Design', desc: 'Mascots, avatars, and stylised characters that give your brand a face.' },
    { idx: '09', name: 'Funnel &', em: 'Landing Pages', desc: 'High-conversion landers and full funnels — designed and built around your offer.' }
];

export default function ContactServices() {
    return (
        <section className="services-section">
            <div className="container">
                <div className="services-head">
                    <div className="left">
                        <span className="eyebrow">What we do</span>
                        <h2>Services<br />we <em>offer.</em></h2>
                    </div>
                    <div className="right">
                        <p>From the first sketch to the final ship — we cover the full design and build stack. Pick the line that fits your project, or let us recommend a scope.</p>
                        <div className="meta">
                            <span className="num">09</span>
                            <span>Service lines</span>
                        </div>
                    </div>
                </div>

                <div className="services-list">
                    {services.map((service) => (
                        <a href="#contact-form" className="service-row" key={service.idx}>
                            <span className="idx">{service.idx} /</span>
                            <div className="name">{service.name} <em>{service.em}</em></div>
                            <div className="desc">{service.desc}</div>
                            <span className="arrow-circle">
                                <ArrowIcon />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
