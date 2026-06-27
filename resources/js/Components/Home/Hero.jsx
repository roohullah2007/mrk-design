const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M14 0C14 8 6 14 0 14C8 14 14 22 14 28C14 22 22 14 28 14C22 14 14 8 14 0Z" fill="#ffffff"/>
    </svg>
);

export default function Hero() {
    return (
        <section className="hero-new">
            <div className="container">
                {/* Main Heading */}
                <div className="hero-heading">
                    <h1 className="hero-title">
                        <span className="line-1">
                            Designing digital <span className="serif-italic">experiences</span>
                        </span>
                        <span className="line-2">
                            <span className="star-badge">
                                <StarIcon />
                            </span>
                            that build <span className="bold-text">brands.</span>
                            <span className="arrow-badge">
                                <ArrowIcon />
                            </span>
                        </span>
                    </h1>
                </div>

                {/* Description */}
                <p className="hero-description">
                    You pour your work into your business — your brand should reflect it. We help you build a website, identity, and growth engine that match the quality of what you do.
                </p>

                {/* CTA Section */}
                <div className="hero-cta-section">
                    <a href="/contact" className="pill primary hero-main-cta">
                        Book a free discovery call
                    </a>
                    <div className="hero-rating">
                        <div className="rating-avatars">
                            <img src="/images/avatar-1.jpg" alt="" />
                            <img src="/images/avatar-2.jpg" alt="" />
                            <img src="/images/avatar-3.jpg" alt="" />
                            <img src="/images/avatar-4.jpg" alt="" />
                        </div>
                        <span className="rating-text">4.9/5 satisfaction rating</span>
                    </div>
                </div>

                <p className="hero-subtext">Schedule a relaxed call to talk about your goals.</p>

                {/* Hero Image — collage (desktop/tablet) */}
                <div className="hero-image">
                    <img src="/images/Frame 1597884381.png" alt="MRK Design Portfolio" />
                </div>

                {/* Hero gallery — auto-scrolling rows (mobile only) */}
                <div className="hero-mobile-gallery" aria-hidden="true">
                    <div className="hmg-row r1">
                        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((n, i) => (
                            <img src={`/images/hero/hero-${n}.png`} alt="" key={`r1-${i}`} />
                        ))}
                    </div>
                    <div className="hmg-row r2">
                        {[6, 7, 8, 9, 10, 6, 7, 8, 9, 10].map((n, i) => (
                            <img src={`/images/hero/hero-${n}.png`} alt="" key={`r2-${i}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
