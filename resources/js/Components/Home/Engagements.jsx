const CheckIcon = () => (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M3 7.5L6 10.5L11.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ArrowIcon = () => (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const packages = [
    {
        duration: "3–4 WEEKS · FIXED PRICE",
        title: "Brand &\nLaunch Kit",
        price: "Custom quote",
        priceNote: "Scoped to your goals",
        description: "For new businesses ready to show up properly. A complete identity plus a clean, fast site to launch on.",
        features: [
            "Logo + brand system",
            "5-page website",
            "CMS setup",
            "Social starter kit",
            "On-page SEO",
            "30-day care"
        ]
    },
    {
        duration: "6–8 WEEKS · MOST BOOKED",
        title: "Brand, Web\n& Growth",
        price: "Custom quote",
        priceNote: "Scoped to your goals",
        description: "For businesses ready to scale. Brand refresh, full website, and a 90-day marketing kickoff under one roof.",
        features: [
            "Brand refresh + guidelines",
            "Custom website (10+ pages)",
            "Landing pages + funnels",
            "Meta + Google ads setup",
            "SEO foundations + content plan",
            "90-day launch support"
        ],
        dark: true,
        hasBlob: true
    },
    {
        duration: "5–7 WEEKS · FIXED PRICE",
        title: "Ecommerce\n+ Growth",
        price: "Custom quote",
        priceNote: "Scoped to your goals",
        description: "For DTC brands ready to sell. Shopify storefront, brand polish, and 60 days of ads + email to turn traffic into orders.",
        features: [
            "Shopify custom theme",
            "Brand polish + product visuals",
            "Email + SMS flows",
            "Meta ads setup + creative",
            "Analytics + tracking",
            "60-day launch support"
        ]
    }
];

export default function Engagements() {
    return (
        <section className="engagements">
            <div className="container">
                <div className="engagements-head">
                    <div className="eyebrow">ENGAGEMENTS</div>
                    <h2>End-to-end<br /><span style={{ whiteSpace: 'nowrap' }}>packages, <span className="it">flat priced.</span></span></h2>
                    <p className="sub">Three of our most-booked engagements. Custom retainer? We do those too — just ask.</p>
                </div>
                <div className="pack-grid">
                    {packages.map((pkg, index) => (
                        <div className={`pack ${pkg.dark ? 'dark' : ''}`} key={index}>
                            {pkg.hasBlob && <div className="blob"></div>}
                            <div className="meta">{pkg.duration}</div>
                            <h3 style={{ whiteSpace: 'pre-line' }}>{pkg.title}</h3>
                            <div>
                                <div className="price" style={{ fontSize: '28px' }}>{pkg.price}</div>
                                <div className="starts">{pkg.priceNote}</div>
                            </div>
                            <p className={`desc ${!pkg.dark ? 'dark-on-light' : ''}`}>{pkg.description}</p>
                            <ul>
                                {pkg.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>
                                        <span className="check"><CheckIcon /></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="cta">
                                Get an estimate
                                <span className="arrow"><ArrowIcon /></span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
