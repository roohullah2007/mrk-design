const iconProps = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
};

const EyeOffIcon = () => (
    <svg {...iconProps}>
        <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z"/>
        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z"/>
        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z"/>
    </svg>
);

const FunnelIcon = () => (
    <svg {...iconProps}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.886.943a.75.75 0 0 1-1.085-.67v-6.884a1.5 1.5 0 0 0-.439-1.06L2.66 7.938A3 3 0 0 1 1.78 5.817V4.773c0-.897.64-1.683 1.512-1.835Z"/>
    </svg>
);

const ClockIcon = () => (
    <svg {...iconProps}>
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"/>
    </svg>
);

const StarIcon = () => (
    <svg {...iconProps}>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.005Z"/>
    </svg>
);

const LayersIcon = () => (
    <svg {...iconProps}>
        <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z"/>
    </svg>
);

const ChatBubbleIcon = () => (
    <svg {...iconProps}>
        <path fillRule="evenodd" clipRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.521 1.978.292 3.348 2.024 3.348 3.97v6.018c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"/>
    </svg>
);

const outcomes = [
    {
        icon: EyeOffIcon,
        title: "Stop feeling invisible",
        description: "A site and brand that pulls weight in search, on social, and in the room."
    },
    {
        icon: FunnelIcon,
        title: "Turn visitors into clients",
        description: "Conversion-led layouts, copy, and flows engineered to grow your pipeline."
    },
    {
        icon: ClockIcon,
        title: "Reclaim your time",
        description: "A CMS your team owns, so you stop emailing developers for every little tweak."
    },
    {
        icon: StarIcon,
        title: "Look the part, finally",
        description: "Materials that match the quality of the work you're already doing."
    },
    {
        icon: LayersIcon,
        title: "Scale without a redesign",
        description: "Component systems, not pretty dead-ends. Add pages and products with ease."
    },
    {
        icon: ChatBubbleIcon,
        title: "A partner you can text",
        description: "Slack, WhatsApp, email pick your channel. Replies same business day."
    }
];

export default function Outcomes() {
    return (
        <section className="outcomes">
            <div className="container">
                <div className="outcomes-head">
                    <h2>How a website becomes<br /><span className="it">your most valuable</span> team-mate.</h2>
                    <p className="sub">If your current site feels invisible, isn't converting, or you're tired of wrestling with tech and endless updates we've got you covered.</p>
                </div>
                <div className="outcomes-grid">
                    {outcomes.map((outcome, index) => {
                        const Icon = outcome.icon;
                        return (
                        <div className="outcome-card" key={index}>
                            <span className="icon"><Icon /></span>
                            <div>
                                <h3>{outcome.title}</h3>
                                <p>{outcome.description}</p>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
