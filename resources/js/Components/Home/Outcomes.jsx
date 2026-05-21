const StarIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9 12 2"/>
    </svg>
);

const outcomes = [
    {
        title: "Stop feeling invisible",
        description: "A site and brand that pulls weight in search, on social, and in the room."
    },
    {
        title: "Turn visitors into clients",
        description: "Conversion-led layouts, copy, and flows — engineered to grow your pipeline."
    },
    {
        title: "Reclaim your time",
        description: "A CMS your team owns, so you stop emailing developers for every little tweak."
    },
    {
        title: "Look the part, finally",
        description: "Materials that match the quality of the work you're already doing."
    },
    {
        title: "Scale without a redesign",
        description: "Component systems, not pretty dead-ends. Add pages and products with ease."
    },
    {
        title: "A partner you can text",
        description: "Slack, WhatsApp, email — pick your channel. Replies same business day."
    }
];

export default function Outcomes() {
    return (
        <section className="outcomes">
            <div className="container">
                <div className="outcomes-head">
                    <div className="eyebrow">OUTCOMES</div>
                    <h2>How a website becomes your <span className="it">most</span><br /><span className="it">valuable</span> team-mate.</h2>
                    <p className="sub">If your current site feels invisible, isn't converting, or you're tired of wrestling with tech and endless updates — we've got you covered.</p>
                </div>
                <div className="outcomes-grid">
                    {outcomes.map((outcome, index) => (
                        <div className="outcome-card" key={index}>
                            <span className="icon"><StarIcon /></span>
                            <div>
                                <h3>{outcome.title}</h3>
                                <p>{outcome.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
