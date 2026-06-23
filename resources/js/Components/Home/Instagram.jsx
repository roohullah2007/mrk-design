const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>
    </svg>
);

const posts = [
    {
        meta: "CASE STUDY",
        heading: <>What working <em>with</em><br/><em>founders</em> taught us.</>,
        stats: { likes: "2.4k", comments: "38" },
        theme: "cream"
    },
    {
        meta: "DESIGN NOTE",
        heading: <>A good <em>website</em> isn't<br/>just beautiful.</>,
        stats: { likes: "1.8k", comments: "22" },
        theme: "ink dark"
    },
    {
        meta: "REEL",
        heading: <>A website <em>isn't</em> just a<br/>website.</>,
        stats: { likes: "4.1k", comments: "64" },
        theme: "accent dark"
    },
    {
        meta: "TIP",
        heading: <>Confusion costs<br/><em>more</em> than bad<br/>design.</>,
        stats: { likes: "1.2k", comments: "14" },
        theme: "cream"
    },
    {
        meta: "CARD",
        heading: <>Your business<br/><em>deserves</em> better copy.</>,
        stats: { likes: "982", comments: "9" },
        theme: "cream-2"
    },
    {
        meta: "BTS · SHOOT",
        heading: <>Studio day, <em>shipping</em> a<br/>launch.</>,
        stats: { likes: "3.0k", comments: "41" },
        theme: "image dark"
    },
    {
        meta: "REEL",
        heading: <>Three <em>seconds</em> to win a<br/>visitor.</>,
        stats: { likes: "2.7k", comments: "33" },
        theme: "accent dark"
    },
    {
        meta: "CLIENT WIN",
        heading: <>Your products <em>are</em><br/><em>beautiful.</em> Is your<br/>shop?</>,
        stats: { likes: "1.5k", comments: "18" },
        theme: "image image-2 dark"
    }
];

export default function Instagram() {
    return (
        <section className="insta">
            <div className="container">
                <div className="insta-head">
                    <div className="left">
                        <div className="eyebrow">INSTAGRAM</div>
                        <h2>Behind the <span className="it">work.</span></h2>
                    </div>
                    <a href="https://www.instagram.com/mrkdesignagency/" target="_blank" rel="noopener" className="handle">
                        <span className="ig-circle">
                            <InstagramIcon />
                        </span>
                        @mrkdesignagency
                    </a>
                </div>

                <div className="insta-grid">
                    {posts.map((post, index) => (
                        <a href="https://www.instagram.com/mrkdesignagency/" target="_blank" rel="noopener" className={`ig-post ${post.theme}`} key={index}>
                            <div className="ig-meta" style={post.theme.includes('dark') ? { opacity: post.theme.includes('accent') ? 0.85 : 0.6 } : {}}>{post.meta}</div>
                            <h3 className="ig-title">{post.heading}</h3>
                            <div className="ig-stats" style={post.theme.includes('dark') && !post.theme.includes('accent') ? { opacity: 0.7 } : post.theme.includes('accent') ? { opacity: 0.85 } : {}}>
                                <span>♡ {post.stats.likes}</span>
                                <span>✎ {post.stats.comments}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
