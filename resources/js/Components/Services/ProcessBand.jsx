const steps = [
    {
        num: 'STEP 01',
        title: 'Listen',
        desc: 'Audit your business, market, and goals. Map where you are today and where you want to be next.',
        keywords: ['Audit', 'Research', 'Goals', 'Workshop']
    },
    {
        num: 'STEP 02',
        title: 'Plan',
        desc: 'A clear strategy, scope, and timeline. Everyone signs off before a single thing gets made.',
        keywords: ['Strategy', 'Scope', 'Roadmap']
    },
    {
        num: 'STEP 03',
        title: 'Build',
        desc: 'Design, develop, write, shoot — whatever the project needs. Senior team, end to end, no junior handoffs.',
        keywords: ['Design', 'Develop', 'Ship', 'Test']
    },
    {
        num: 'STEP 04',
        title: 'Grow',
        desc: 'Launch, measure, iterate. We tune the work based on real numbers — and stick around to keep it performing.',
        keywords: ['Launch', 'Measure', 'Iterate']
    }
];

export default function ProcessBand() {
    return (
        <section className="process-band">
            <div className="container">
                <div className="sec-head">
                    <div>
                        <div className="eyebrow">Our process</div>
                        <h2>From <em>first call</em> to growth.</h2>
                    </div>
                    <div className="meta">→ 4-PHASE ENGAGEMENT<br/>→ ASYNC + WEEKLY SYNC<br/>→ 4 — 12 WEEKS TYPICAL</div>
                </div>
                <div className="pgrid">
                    {steps.map((step, index) => (
                        <div className="pstep" key={index}>
                            <span className="step-no">{step.num}</span>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                            <div className="pkw">
                                {step.keywords.map((kw, i) => (
                                    <span key={i}>{kw}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
