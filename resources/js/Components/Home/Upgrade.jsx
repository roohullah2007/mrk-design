const upgradeReasons = [
    {
        num: "01",
        title: "Brand feels off",
        description: "What you sell is great, but the visuals don't carry the weight. People don't take you seriously."
    },
    {
        num: "02",
        title: "Leads aren't landing",
        description: "Traffic shows up, marketing spend goes out, and the pipeline stays thin. Something isn't converting."
    },
    {
        num: "03",
        title: "Slow to ship anything",
        description: "You email someone for every tweak — a new page, a campaign, a video edit. Velocity has stalled."
    },
    {
        num: "04",
        title: "Story isn't clear",
        description: "Site, deck, social — they all say something slightly different. No one's sure what you actually do."
    },
    {
        num: "05",
        title: "Too many vendors, too little glue",
        description: "One agency for design, one for ads, one for video. Nothing connects and the costs keep climbing."
    },
    {
        num: "06",
        title: "You're proud of the work, not the front",
        description: "You'd rather pitch in person than send the link. That's a sign — not a small one."
    }
];

export default function Upgrade() {
    return (
        <section className="upgrade">
            <div className="container">
                <div className="upgrade-head">
                    <h2>Is it time to <span className="it">level up</span> your business?</h2>
                    <p className="sub">Six signs we hear most from the founders we end up working with. If<br /> any feel familiar brand, web, content, marketing, or otherwise let's talk.</p>
                </div>
                <div className="upgrade-grid">
                    {upgradeReasons.map((reason, index) => (
                        <div className="upgrade-card" key={index}>
                            <div className="num">{reason.num} /</div>
                            <h3>{reason.title}</h3>
                            <p>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
