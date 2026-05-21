const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const services = [
    {
        idx: '01',
        name: 'UI/UX',
        nameEm: 'Design',
        desc: 'End-to-end product design for web and mobile apps — research, flows, interface, and design systems.',
        deliverables: ['Research', 'Flows', 'System']
    },
    {
        idx: '02',
        name: 'Brand',
        nameEm: 'Identity',
        desc: 'Logo, type, color, and a guideline that holds up. Built for the long arc, not a single launch.',
        deliverables: ['Logo', 'Type', 'Guidelines']
    },
    {
        idx: '03',
        name: 'Graphic',
        nameEm: 'Design',
        desc: 'Social, editorial, marketing — every channel kept on-brand. Templates your team can run with.',
        deliverables: ['Social', 'Print', 'Templates']
    },
    {
        idx: '04',
        name: 'Video',
        nameEm: 'Editing',
        desc: 'Reels, ads, brand films. Color, sound, motion graphics — built for the scroll and paced for retention.',
        deliverables: ['Reels', 'Ads', 'Motion']
    },
    {
        idx: '05',
        name: 'WordPress',
        nameEm: 'Development',
        desc: 'Custom themes and CMS builds — fast, accessible, and easy for your team to update.',
        deliverables: ['Theme', 'CMS', 'Woo']
    },
    {
        idx: '06',
        name: 'Custom-coded',
        nameEm: 'Websites',
        desc: "Hand-built sites in Next.js or Astro — for when off-the-shelf won't cut it on speed, motion, or scale.",
        deliverables: ['Next.js', 'Astro', 'Vercel']
    },
    {
        idx: '07',
        name: 'Shopify',
        nameEm: 'Development',
        desc: 'Storefronts built for conversion — custom themes, app integrations, checkout and tax tuned.',
        deliverables: ['Theme', 'Liquid', 'Apps']
    },
    {
        idx: '08',
        name: 'Funnels &',
        nameEm: 'Landing Pages',
        desc: 'High-conversion landers and full funnels — designed and built around your offer and audience.',
        deliverables: ['Lead gen', 'Sales', 'CRO']
    },
    {
        idx: '09',
        name: 'SEO',
        nameEm: 'Optimization',
        desc: 'Technical, on-page, and content SEO — foundations that compound month over month.',
        deliverables: ['Technical', 'Content', 'Local']
    },
    {
        idx: '10',
        name: 'Digital',
        nameEm: 'Marketing',
        desc: 'Paid social, search, and email — wired to a real funnel. Creative, copy, and reporting under one roof.',
        deliverables: ['Meta', 'Google', 'Email']
    }
];

export default function ServicesDetail() {
    return (
        <section className="services-detail" id="services-detail">
            <div className="container">
                <div className="sec-head">
                    <div>
                        <div className="eyebrow" style={{ marginBottom: '24px' }}>Ten services</div>
                        <h2>Pick a line, or <em>pick them all.</em></h2>
                    </div>
                    <div className="right">Every line below is its own engagement — or you can bundle them into a package. We'll recommend a scope on the intro call.</div>
                </div>

                {services.map((service, index) => (
                    <a href="#contact" className="svc-row" key={index}>
                        <span className="idx">{service.idx}</span>
                        <div className="name">{service.name} <em>{service.nameEm}</em></div>
                        <div className="desc">{service.desc}</div>
                        <div className="deliv">
                            {service.deliverables.map((d, i) => (
                                <span key={i}>{d}</span>
                            ))}
                        </div>
                        <span className="arrow-circle"><ArrowIcon /></span>
                    </a>
                ))}
            </div>
        </section>
    );
}
