import { useRef } from 'react';

const testimonials = [
    {
        quote: "They didn't just redesign our app — they redesigned how we think about our customer.",
        name: "Priya Anand",
        role: "Co-founder, Haven",
        initials: "PA",
        theme: "soft"
    },
    {
        quote: "MRK shipped in 6 weeks what our previous agency couldn't in 6 months. The work is gorgeous.",
        name: "Marcus Liu",
        role: "CEO, Onyx",
        initials: "ML",
        theme: "cream"
    },
    {
        quote: "Strategic, fast, and unreasonably detailed. They feel like part of our team — not vendors.",
        name: "Dani Fernandez",
        role: "Head of Brand, Verda",
        initials: "DF",
        theme: "dark"
    },
    {
        quote: "Our Meta ads finally have creative that converts. ROAS doubled in the first month.",
        name: "Raheel Khan",
        role: "Founder, Loop Coffee",
        initials: "RK",
        theme: "soft"
    },
    {
        quote: "From logo to launch in five weeks. MRK kept the bar high without slowing us down.",
        name: "Ayesha Siddiqui",
        role: "CMO, Studio Form",
        initials: "AS",
        theme: "cream"
    },
    {
        quote: "Honestly the easiest agency we've ever worked with. They reply, they ship, they care.",
        name: "James Tan",
        role: "Director, Norden & Co.",
        initials: "JT",
        theme: "dark"
    },
    {
        quote: "They rebuilt our brand and SEO from scratch — qualified leads are up 3× and the team finally has a system to work in.",
        name: "Sara Nawaz",
        role: "Marketing Lead, Halo Labs",
        initials: "SN",
        theme: "soft"
    },
    {
        quote: "Felt less like hiring an agency and more like adding a senior team. They thought about the business, not just the pixels.",
        name: "Omar Malik",
        role: "COO, Trellis Studio",
        initials: "OM",
        theme: "cream"
    },
    {
        quote: "Our Shopify rebuild lifted conversion 41% in eight weeks. MRK doesn't sell promises — they ship outcomes.",
        name: "Elena Voss",
        role: "Founder, Field & Folk",
        initials: "EV",
        theme: "dark"
    }
];

export default function Testimonials() {
    const quotesRef = useRef(null);

    const scrollLeft = () => {
        if (quotesRef.current) {
            quotesRef.current.scrollBy({ left: -440, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (quotesRef.current) {
            quotesRef.current.scrollBy({ left: 440, behavior: 'smooth' });
        }
    };

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="sec-head">
                    <div>
                        <div className="eyebrow" style={{ marginBottom: '24px', fontFamily: '"Inter Tight"' }}>KIND WORDS</div>
                        <h2>Stuff our clients <span className="serif-italic">said.</span></h2>
                    </div>
                    <div className="badges">
                        <span className="b1" style={{ fontSize: '16px' }}>★ 4.9 / 5 — CLUTCH</span>
                        <span className="b2" style={{ fontSize: '16px' }}>84 reviews</span>
                    </div>
                </div>
                <div className="quotes-wrap">
                    <div className="quotes" id="quotesTrack" ref={quotesRef}>
                        {testimonials.map((testimonial, index) => (
                            <div className={`quote ${testimonial.theme}`} key={index}>
                                <div className="qm" style={testimonial.theme === 'dark' ? { color: 'var(--accent)' } : {}}>"</div>
                                <p>{testimonial.quote}</p>
                                <div className="person">
                                    <span className="av">{testimonial.initials}</span>
                                    <div>
                                        <div className="pn">{testimonial.name}</div>
                                        <div className="pr" style={{ fontSize: testimonial.theme === 'dark' ? '13px' : '14px' }}>{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="quotes-controls">
                        <button className="quote-nav" aria-label="Previous testimonial" onClick={scrollLeft}>
                            <svg width="18" height="18" viewBox="0 0 14 14" fill="none"><path d="M11 7H3M3 7L7 3M3 7L7 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                        <button className="quote-nav" aria-label="Next testimonial" onClick={scrollRight}>
                            <svg width="18" height="18" viewBox="0 0 14 14" fill="none"><path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
