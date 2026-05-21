export default function Marquee() {
    const marqueeText = "Brand · Web · Ecommerce ✱ Conversion-Focused Design ✱ Video · Motion · Social ✱ Strategy-Led Creative ✱ Paid Media · SEO · Email ✱ Dev-Ready Handoff ✱";

    return (
        <section className="marquee">
            <div className="marquee-track">
                <span className="item">{marqueeText}</span>
                <span className="item">{marqueeText}</span>
            </div>
        </section>
    );
}
