const points = [
    {
        num: '01',
        title: 'Strategy first, pixels second',
        desc: 'Every project starts with the business goal. The design follows the brief — not the other way around.'
    },
    {
        num: '02',
        title: 'Built to ship, not to sit',
        desc: 'We design with engineers in the room. What we hand off is what gets built — no surprise rewrites.'
    },
    {
        num: '03',
        title: 'Results we can point to',
        desc: 'Activation lifts, conversion gains, search traffic — we measure what we make and tune it.'
    },
    {
        num: '04',
        title: 'Senior team, end to end',
        desc: 'No juniors hiding behind account managers. The people who pitch are the people who do the work.'
    }
];

export default function WhyMRK() {
    return (
        <section className="why-section">
            <div className="why-inner">
                <div>
                    <span className="eyebrow">Why MRK</span>
                    <h2>Designs that <em>look</em> good <em>—</em><br />and actually <em>perform.</em></h2>
                </div>
                <div className="why-points">
                    {points.map((point) => (
                        <div className="why-point" key={point.num}>
                            <span className="num">{point.num}</span>
                            <div className="body">
                                <h4>{point.title}</h4>
                                <p>{point.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
