import { useState } from 'react';

const PlusIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 3V11M3 7H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const CloseIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 3L11 11M3 11L11 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const faqItems = [
    {
        question: "What does a typical project with MRK look like?",
        answer: "Discovery call → fixed scope + price → strategy week → design sprints → build → launch + 30 days of care. Everything happens in a shared workspace; you'll see progress weekly."
    },
    {
        question: "How is MRK different from a larger agency?",
        answer: "No layers, no junior handoffs, no slide-deck theatre. The same senior duo that pitches you does the work — which means tighter loops, faster decisions, and a higher ceiling on craft."
    },
    {
        question: "Do you offer ongoing support after launch?",
        answer: "Every project includes 30 days of post-launch care. After that, most clients move onto a small monthly retainer for iteration, A/B tests, new pages, and content tune-ups."
    },
    {
        question: "Can you work with our existing brand and codebase?",
        answer: "Yes. We're happy to plug into your design system, component library, or production codebase — Webflow, WordPress, Shopify, Next.js, or whatever you're running. We'll match your conventions."
    },
    {
        question: "What does pricing actually depend on?",
        answer: "Scope, timeline, and how custom the build is. Our packages are fixed-price for clarity; bespoke engagements are quoted after a discovery call so you see exactly what every line item buys."
    },
    {
        question: "What do I need to get started?",
        answer: "Just a rough brief of your business, goals, and any links / files you already have (existing site, brand assets, references). We send a short questionnaire after the discovery call to fill in the rest."
    },
    {
        question: "How long does a typical project take?",
        answer: "Brand sprint: 2 weeks. Marketing site: 3–4 weeks. Custom web app or Shopify build: 5–8 weeks. We lock the timeline in writing before we start."
    },
    {
        question: "How many revisions do I get?",
        answer: "Two full revision rounds per phase, plus unlimited minor tweaks. We work in shared boards so feedback is collected in one place — no scattered email threads or surprise edits at the end."
    },
    {
        question: "Do you work with international clients?",
        answer: "Yes. We're based in Islamabad and have shipped work to clients across 14 countries. We adapt to your timezone for sync calls — async is the default rhythm."
    },
    {
        question: "How do payments work?",
        answer: "50% to kick off, 50% at handover for fixed-scope projects. Retainers are billed monthly. We accept bank transfer, Wise, and major cards — invoiced in USD or your local currency."
    },
    {
        question: "Will we sign an NDA / contract?",
        answer: "Always. Every engagement ships with a clear SOW covering scope, timeline, deliverables, and IP. We're happy to sign your NDA, or use ours — whichever is simpler."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="faq">
            <div className="container">
                <div className="faq-head">
                    <div className="eyebrow">FAQ</div>
                    <h2>Frequently asked <span className="it">questions.</span></h2>
                    <p className="sub">Couldn't find what you're looking for? <a href="mailto:info@mrkdesignagency.com">Email us directly →</a></p>
                </div>
                <div className="faq-list">
                    {faqItems.map((item, index) => (
                        <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index}>
                            <div className="faq-q" onClick={() => toggleItem(index)}>
                                <h3>{item.question}</h3>
                                <span className="faq-toggle">
                                    {openIndex === index ? <CloseIcon /> : <PlusIcon />}
                                </span>
                            </div>
                            <p className="faq-a">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
