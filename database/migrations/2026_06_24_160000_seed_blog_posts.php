<?php

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

/**
 * Seeds the blog content as a migration so it loads automatically on deploy
 * (migrations are discovered by file path — no Composer autoload/classmap needed,
 * unlike seeders). Idempotent: safe to run repeatedly.
 */
return new class extends Migration
{
    public function up(): void
    {
        $author = User::firstOrCreate(
            ['email' => 'admin@mrk.com'],
            ['name' => 'MRK Team', 'password' => bcrypt('@Password1'), 'is_admin' => true]
        );

        $cats = collect([
            'SEO' => 'Search engine optimization tips and strategies.',
            'Web Design' => 'Web design, UX and conversion best practices.',
            'Branding' => 'Brand identity, logo design and positioning.',
            'Digital Marketing' => 'Marketing, funnels and growth.',
        ])->mapWithKeys(fn ($desc, $name) => [
            $name => Category::firstOrCreate(
                ['name' => $name],
                ['description' => $desc, 'slug' => Str::slug($name)]
            ),
        ]);

        $tag = fn (string $name) => Tag::firstOrCreate(
            ['name' => $name],
            ['slug' => Str::slug($name)]
        );

        foreach ($this->posts() as $i => $data) {
            $post = Post::updateOrCreate(
                ['slug' => $data['slug']],
                [
                    'title' => $data['title'],
                    'excerpt' => $data['excerpt'],
                    'content' => $data['content'],
                    'featured_image' => $data['featured_image'],
                    'meta_title' => $data['meta_title'],
                    'meta_description' => $data['meta_description'],
                    'author_id' => $author->id,
                    'status' => 'published',
                    'published_at' => Carbon::now()->subDays($i * 3 + 1),
                ]
            );

            $post->categories()->sync(collect($data['categories'])->map(fn ($c) => $cats[$c]->id)->all());
            $post->tags()->sync(collect($data['tags'])->map(fn ($t) => $tag($t)->id)->all());
        }
    }

    public function down(): void
    {
        Post::whereIn('slug', [
            'seo-for-small-businesses-2026-guide',
            'web-design-that-converts-ux-principles',
            'branding-vs-logo-design-brand-identity',
        ])->delete();
    }

    private function posts(): array
    {
        return [
            [
                'title' => 'SEO for Small Businesses in 2026: A Practical Guide to Ranking Higher on Google',
                'slug' => 'seo-for-small-businesses-2026-guide',
                'excerpt' => 'Learn how small businesses can dominate local search results in 2026 with proven SEO strategies — from keyword research and on-page optimization to technical SEO and link building that actually moves the needle.',
                'meta_title' => 'SEO for Small Businesses 2026 | Rank Higher on Google — MRK',
                'meta_description' => 'A practical 2026 SEO guide for small businesses: keyword research, on-page SEO, technical SEO, local SEO and link building to rank higher on Google and drive organic traffic.',
                'featured_image' => '/images/blog/seo-guide.jpg',
                'categories' => ['SEO', 'Digital Marketing'],
                'tags' => ['SEO', 'Google Ranking', 'Local SEO', 'Keyword Research', 'Organic Traffic'],
                'content' => <<<'HTML'
<p>Search engine optimization is no longer optional — it's the single highest-ROI marketing channel for small businesses in 2026. If your customers can't find you on Google, they're finding your competitors instead. This guide breaks down exactly how to climb the search rankings and turn organic traffic into paying customers.</p>
<h2>1. Start With Intent-Driven Keyword Research</h2>
<p>Powerful SEO starts with the right keywords. Instead of chasing high-volume, high-competition terms, focus on <strong>long-tail keywords</strong> with clear buyer intent — phrases like "affordable web design agency near me" or "best Shopify developer for small business." These convert far better than generic terms.</p>
<ul>
  <li>Use tools like Google Keyword Planner, Ahrefs, or Ubersuggest.</li>
  <li>Target keywords with strong commercial or local intent.</li>
  <li>Map one primary keyword to each page to avoid keyword cannibalization.</li>
</ul>
<h2>2. Nail Your On-Page SEO</h2>
<p>On-page optimization tells Google exactly what each page is about. Every page should have a unique, keyword-rich <strong>title tag</strong>, a compelling <strong>meta description</strong>, and a clean URL structure. Use descriptive H1 and H2 headings, optimize your images with alt text, and link internally between related pages.</p>
<h2>3. Win Local SEO</h2>
<p>For small businesses, <strong>local SEO</strong> is where the money is. Claim and fully optimize your Google Business Profile, gather genuine customer reviews, and keep your name, address, and phone number (NAP) consistent across every directory.</p>
<h2>4. Don't Ignore Technical SEO</h2>
<p>A beautiful site that loads slowly will never rank. Core Web Vitals, mobile-friendliness, HTTPS, structured data, and a clean XML sitemap all influence rankings. Aim for sub-2-second load times and a flawless mobile experience.</p>
<h2>5. Build Authority With Quality Backlinks</h2>
<p>Backlinks remain one of Google's strongest ranking signals. Earn them through guest posts, partnerships, local sponsorships, and genuinely useful content that others want to reference.</p>
<h2>Final Thoughts</h2>
<p>SEO is a marathon, not a sprint — but the compounding returns are unmatched. Need help? <strong>MRK Design Agency</strong> builds fast, SEO-optimized websites engineered to rank and convert.</p>
HTML,
            ],
            [
                'title' => 'Web Design That Converts: 7 UX Principles to Turn Visitors Into Customers',
                'slug' => 'web-design-that-converts-ux-principles',
                'excerpt' => 'Great web design is more than looks — it is conversion engineering. Discover 7 proven UX principles that transform your website into a 24/7 sales machine and dramatically boost your conversion rate.',
                'meta_title' => 'Conversion-Focused Web Design | 7 UX Principles — MRK',
                'meta_description' => 'Boost your conversion rate with conversion-focused web design. 7 proven UX principles — clear CTAs, fast load speed, mobile-first design and trust signals — that turn visitors into customers.',
                'featured_image' => '/images/blog/web-design-conversion.png',
                'categories' => ['Web Design', 'Digital Marketing'],
                'tags' => ['Web Design', 'UX Design', 'Conversion Rate', 'Landing Pages', 'Mobile First'],
                'content' => <<<'HTML'
<p>Your website is your hardest-working salesperson — but only if it's designed to convert. A stunning site that doesn't generate leads is just expensive decoration. Here are seven UX principles we use to design high-converting websites that turn traffic into revenue.</p>
<h2>1. Lead With a Crystal-Clear Value Proposition</h2>
<p>Visitors decide whether to stay within seconds. Your headline must instantly answer "what's in it for me?" Pair a benefit-driven headline with a supporting subheadline and a single, obvious call to action.</p>
<h2>2. Design Mobile-First</h2>
<p>Over 60% of web traffic is mobile. A <strong>mobile-first, responsive design</strong> isn't optional — it's the baseline. Test every interaction on real devices and make tap targets large and thumb-friendly.</p>
<h2>3. Obsess Over Page Speed</h2>
<p>Every second of load time can cut conversions by up to 20%. Compress images, use modern formats, lazy-load assets, and minimize scripts.</p>
<h2>4. Make CTAs Impossible to Miss</h2>
<p>Use contrasting colors, action-oriented copy ("Start a project," "Get my free quote"), and strategic placement. One primary action per screen keeps users focused.</p>
<h2>5. Build Trust With Social Proof</h2>
<p>Testimonials, client logos, case studies, and reviews reduce friction and build credibility. People buy from brands they trust.</p>
<h2>6. Reduce Friction in Forms</h2>
<p>Every extra form field lowers completion rates. Ask only for what you need, use smart defaults, and show progress for multi-step forms.</p>
<h2>7. Guide the Eye With Visual Hierarchy</h2>
<p>Use whitespace, typography, and contrast to direct attention toward what matters most. A clear visual hierarchy makes your site effortless to navigate.</p>
<h2>Turn Your Website Into a Growth Engine</h2>
<p>At <strong>MRK Design Agency</strong> we design and build custom websites engineered to convert — beautiful, fast, and built to grow your business.</p>
HTML,
            ],
            [
                'title' => 'Branding vs. Logo Design: Why Your Business Needs a Complete Brand Identity',
                'slug' => 'branding-vs-logo-design-brand-identity',
                'excerpt' => 'A logo is not a brand. Learn the difference between logo design and full brand identity, and why a cohesive brand strategy is the key to standing out, building trust, and commanding premium prices.',
                'meta_title' => 'Branding vs Logo Design | Build a Strong Brand Identity — MRK',
                'meta_description' => 'Branding vs logo design explained. Discover why a complete brand identity — logo, colors, typography, voice and strategy — builds trust, recognition and premium pricing for your business.',
                'featured_image' => '/images/blog/branding-identity.png',
                'categories' => ['Branding', 'Web Design'],
                'tags' => ['Branding', 'Logo Design', 'Brand Identity', 'Visual Identity', 'Brand Strategy'],
                'content' => <<<'HTML'
<p>Many business owners think branding means having a logo. In reality, a logo is just one small piece of a much bigger picture. Your <strong>brand identity</strong> is the complete experience customers have with your business — and it's one of your most valuable assets.</p>
<h2>What Is a Logo?</h2>
<p>A logo is a visual mark that identifies your business. It's important, memorable, and the face of your company — but on its own, it can't communicate everything your brand stands for.</p>
<h2>What Is Brand Identity?</h2>
<p>Brand identity is the full system of visual and verbal elements that shape how people perceive you. It includes the logo and variations, a color palette that triggers the right emotions, typography that reinforces personality, imagery and graphic style, brand voice and messaging, and guidelines that keep everything consistent.</p>
<h2>Why a Complete Brand Identity Matters</h2>
<p>Consistent branding across all touchpoints can increase revenue by up to 23%. A strong brand identity helps you stand out in a crowded market, build trust and recognition, command premium prices, and create emotional connections that drive loyalty.</p>
<h2>Signs You Need a Brand Refresh</h2>
<p>If your visuals feel inconsistent, outdated, or fail to reflect who you are today, it's time to invest in your brand. A cohesive identity makes every marketing dollar work harder.</p>
<h2>Invest in a Brand That Lasts</h2>
<p>At <strong>MRK Design Agency</strong> we craft complete brand identities — from logo design to full visual systems — that make businesses unforgettable.</p>
HTML,
            ],
        ];
    }
};
