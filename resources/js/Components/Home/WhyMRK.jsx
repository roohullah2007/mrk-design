const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const reasons = [
    {
        num: "01",
        title: "Senior, every step",
        description: "No juniors, no handoffs to a third party. The same two people who pitch you do the work."
    },
    {
        num: "02",
        title: "Strategy before pixels",
        description: "We start with audience, value prop, and conversion goals. Pretty is easy; pretty that converts is the job."
    },
    {
        num: "03",
        title: "Built to ship, not to sit",
        description: "We design with engineers in the room. What we hand off is what gets built — no surprise rewrites."
    },
    {
        num: "04",
        title: "Results we can point to",
        description: "Activation lifts, conversion gains, search traffic — we measure what we make and tune it."
    }
];

export default function WhyMRK() {
    return (
        <section className="why-new">
            <div className="container why-new-grid">
                <div className="why-new-left">
                    <div className="eyebrow">WHY MRK</div>
                    <h2>The studio your<br />team will<br /><span className="it">actually like</span><br /> working with.</h2>
                    <div className="why-lede-row">
                        <p className="lede">Most agencies sell pixels; we sell outcomes. We work in<br /> your tools, on your cadence, and we stay until the work performs.</p>
                        <a href="#contact" className="pill primary">
                            Book a free call
                            <span className="arrow"><ArrowIcon /></span>
                        </a>
                    </div>
                </div>
                <div className="why-new-list">
                    {reasons.map((reason, index) => (
                        <div className="why-new-row" key={index}>
                            <div className="n">{reason.num}</div>
                            <div>
                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
