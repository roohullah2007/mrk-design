const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const services = [
    {
        num: "01",
        title: "UI/UX Design",
        description: "Intuitive, user-centered interfaces for web & mobile apps. Research-driven and obsessed with usability.",
        tags: ["Mobile", "Web", "SaaS", "Dashboards"],
        big: true,
        theme: "theme-ink"
    },
    {
        num: "02",
        title: "Brand Identity & Logo",
        description: "Distinctive identities that communicate your values. Logos, type systems, full visual languages.",
        tags: ["Logo", "Guidelines", "Strategy"],
        big: true,
        theme: "theme-lime"
    },
    {
        num: "03",
        title: "Graphic Design",
        description: "Social creatives, marketing visuals, and editorial graphics. Built to elevate every channel and stay on brand. Templates, one-offs, and full design systems.",
        tags: ["Social", "Logo"],
        moreTags: "Posters · Editorial"
    },
    {
        num: "04",
        title: "WordPress Dev",
        description: "Fast, secure, scalable WP builds with clean code. CMS your team will actually use, not fight. Custom themes wired into your real workflow.",
        tags: ["Custom theme", "CMS"],
        moreTags: "WooCommerce · ACF"
    },
    {
        num: "05",
        title: "Custom-Coded Sites",
        description: "High-performance sites on modern stacks. Speed, flexibility, and scale with no compromises. Built to grow with your product, not against it.",
        tags: ["Next.js", "Astro"],
        moreTags: "Headless CMS · Vercel"
    },
    {
        num: "06",
        title: "Shopify Dev",
        description: "High-converting Shopify stores designed around your brand. Built for growth goals, not template defaults. Tuned for speed, conversion, and clean ops.",
        tags: ["Theme", "Liquid"],
        moreTags: "Apps · Migrations"
    },
    {
        num: "07",
        title: "Funnels & Landing",
        description: "Conversion-focused funnels that move people from awareness to action. No friction, no fluff, no dead ends. Built around the offer and the audience.",
        tags: ["Lead gen", "Sales"],
        moreTags: "GHL · Webinar",
        theme: "theme-lime"
    },
    {
        num: "08",
        title: "SEO",
        description: "On-page, technical, and content SEO done right. Puts your site where customers can actually find it. Foundations that compound month over month.",
        tags: ["Technical", "On-page"],
        moreTags: "Content · Local"
    },
    {
        num: "09",
        title: "Video Editing",
        description: "Polished cuts for socials, ads, and brand films. Color, sound, motion graphics included. Built for the scroll, paced for retention.",
        tags: ["Reels", "Ads"],
        moreTags: "YouTube · Motion"
    },
    {
        num: "10",
        title: "Digital Marketing",
        description: "Paid social, search, and email — wired to a real funnel. Creative, copy, and reporting under one roof. We chase ROAS, not vanity.",
        tags: ["Meta Ads", "Google"],
        moreTags: "Email · CRO",
        theme: "theme-ink"
    }
];

export default function Services() {
    return (
        <section className="services" id="services">
            <div className="container">
                <div className="sec-head">
                    <div>
                        <div className="eyebrow" style={{ marginBottom: '24px', fontFamily: '"Inter Tight"' }}>What we offer</div>
                        <h2>Ten ways we<br />make brands<br /><span className="serif-italic">unmissable</span>.</h2>
                    </div>
                    <div className="sub" style={{ fontSize: '18px' }}>End-to-end creative and growth services — strategy, brand, design, development, video, and marketing under one roof.</div>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            className={`service-card ${service.big ? 'big' : ''} ${service.theme || ''}`}
                            key={index}
                        >
                            <div className="service-head">
                                <span className="service-num">SERVICE — {service.num}</span>
                                <span className="service-arrow"><ArrowIcon /></span>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="service-tags">
                                {service.tags.map((tag, tagIndex) => (
                                    <span className="service-tag" key={tagIndex} style={{ fontSize: '14px' }}>{tag}</span>
                                ))}
                                {service.moreTags && (
                                    <span className="service-tag more">
                                        +2
                                        <span className="tip">{service.moreTags}</span>
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
