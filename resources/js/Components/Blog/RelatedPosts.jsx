import { Link } from '@inertiajs/react';

export default function RelatedPosts({ posts }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <section className="related-posts">
            <div className="container">
                <h2 className="section-title">Related Articles</h2>

                <div className="related-grid">
                    {posts.map((post) => {
                        const featuredImage = post.featured_image
                            ? `/storage/${post.featured_image}`
                            : '/images/blog-placeholder.jpg';

                        return (
                            <article key={post.id} className="related-card">
                                <Link href={`/blog/${post.slug}`} className="card-image-link">
                                    <div className="card-image">
                                        <img src={featuredImage} alt={post.title} loading="lazy" />
                                    </div>
                                </Link>

                                <div className="card-content">
                                    {post.categories && post.categories.length > 0 && (
                                        <span className="tag">
                                            {post.categories[0].name}
                                        </span>
                                    )}

                                    <Link href={`/blog/${post.slug}`}>
                                        <h3 className="card-title">{post.title}</h3>
                                    </Link>

                                    <span className="date">{formatDate(post.published_at)}</span>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
