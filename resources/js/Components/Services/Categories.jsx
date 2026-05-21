export default function Categories() {
    const categories = [
        {
            num: '01 — DESIGN',
            title: 'Look',
            titleEm: 'the part.',
            items: ['UI/UX Design', 'Brand Identity & Logo', 'Graphic Design', 'Video Editing'],
            theme: ''
        },
        {
            num: '02 — BUILD',
            title: 'Ship',
            titleEm: 'the work.',
            items: ['WordPress Development', 'Custom-Coded Websites', 'Shopify Development', 'Funnels & Landing Pages'],
            theme: 'dark'
        },
        {
            num: '03 — GROW',
            title: 'Get',
            titleEm: 'the results.',
            items: ['Digital Marketing', 'SEO Optimization', 'Funnel Strategy', 'Content & Email'],
            theme: 'accent'
        }
    ];

    return (
        <section className="categories">
            <div className="container">
                <div className="cat-head">
                    <div className="eyebrow">How we help</div>
                    <h2>Three things every business <em>needs.</em></h2>
                    <p>Most agencies do one. We do all three — and we wire them together so they actually compound.</p>
                </div>
                <div className="cat-grid">
                    {categories.map((cat, index) => (
                        <div className={`cat-card ${cat.theme}`} key={index}>
                            <div className="cat-num">{cat.num}</div>
                            <h3>{cat.title} <em>{cat.titleEm}</em></h3>
                            <ul className="cat-card-list">
                                {cat.items.map((item, i) => (
                                    <li key={i}><span className="dot"></span>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
