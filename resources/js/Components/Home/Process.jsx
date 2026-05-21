const steps = [
    {
        num: "01",
        title: "Listen",
        description: "We audit your business, market, and goals. Map where you are today and where you want to be next.",
        keywords: ["Audit", "Research", "Goals", "Workshop"],
        first: true
    },
    {
        num: "02",
        title: "Plan",
        description: "A clear strategy, scope, and timeline. Everyone signs off before a single thing gets made.",
        keywords: ["Strategy", "Scope", "Roadmap"]
    },
    {
        num: "03",
        title: "Build",
        description: "Design, develop, write, shoot — whatever the project needs. Senior team, end to end, no juniors hidden in the work.",
        keywords: ["Design", "Develop", "Ship", "Test"]
    },
    {
        num: "04",
        title: "Grow",
        description: "Launch, measure, iterate. We tune the work based on real numbers — and stick around to keep it performing.",
        keywords: ["Launch", "Measure", "Iterate"]
    }
];

export default function Process() {
    return (
        <section className="process" id="process">
            <div className="container">
                <div className="sec-head">
                    <div>
                        <div className="eyebrow" style={{ marginBottom: '24px', fontFamily: '"Inter Tight"' }}>Our process</div>
                        <h2>From <span className="serif-italic" style={{ color: 'var(--accent)' }}>first call</span> to growth.</h2>
                    </div>
                    <div className="meta"></div>
                </div>
                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div className={`process-step ${step.first ? 'first' : ''}`} key={index}>
                            <div className="top">
                                <span className="step-no">STEP {step.num}</span>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            <div className="pkw">
                                {step.keywords.map((keyword, kwIndex) => (
                                    <span key={kwIndex} style={{ fontSize: '14px' }}>{keyword}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
