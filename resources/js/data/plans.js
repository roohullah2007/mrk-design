// Shared pricing plans — used by the homepage packages section and the pricing page.
export const plans = [
    {
        emoji: '🌱', name: 'Starter', price: '$200', meta: 'STARTER', cta: 'Start for $200',
        blurb: 'Just getting started? Get a polished online presence — logo, website, and social graphics — without the big price tag.',
        features: [
            'Logo design + brand colour palette',
            '5-page responsive website (WordPress)',
            'CMS setup',
            '4 social media graphics / month',
            '1 landing page design',
            '2 revision rounds per deliverable',
            'Email support',
            '15 days support',
        ],
    },
    {
        emoji: '🚀', name: 'Growth', price: '$500', featured: true, meta: 'MOST POPULAR', cta: 'Start for $500',
        blurb: 'The most chosen plan. More deliverables, a full funnel, and social content to keep your brand active every month.',
        plus: 'Everything in Starter, plus',
        features: [
            '7-page website + mobile optimisation',
            'Sales funnel design + GoHighLevel setup',
            '10 social media graphics / month',
            '2 short-form video edits / month',
            'SEO on-page basics',
            'Monthly strategy call (30 min)',
            'Unlimited revisions',
        ],
    },
    {
        emoji: '👑', name: 'Pro', price: '$999', meta: 'FULL SERVICE', cta: 'Start for $999',
        blurb: 'Full creative output every month — ideal for brands actively running ads, content, and growing their audience fast.',
        plus: 'Everything in Growth, plus',
        features: [
            '12-page custom website',
            'Shopify or WooCommerce store setup',
            '20 social media graphics / month',
            '4 reels / video edits per month',
            'Google & Meta ads creatives',
            'Email sequence design (up to 5)',
            'Bi-weekly calls + dedicated PM',
            'Monthly performance report',
        ],
    },
];
