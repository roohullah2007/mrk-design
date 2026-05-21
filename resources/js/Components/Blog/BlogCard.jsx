import { Link } from '@inertiajs/react';

export default function BlogCard({ post }) {
    const featuredImage = post.featured_image
        ? `/storage/${post.featured_image}`
        : '/images/blog-placeholder.jpg';

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    return (
        <article className="blog-card">
            <Link href={`/blog/${post.slug}`} className="card-image-link">
                <div className="card-image">
                    <img src={featuredImage} alt={post.title} loading="lazy" />
                    <div className="card-overlay"></div>
                </div>
            </Link>

            <div className="card-content">
                {post.categories && post.categories.length > 0 && (
                    <div className="card-categories">
                        {post.categories.slice(0, 2).map((category) => (
                            <span key={category.id} className="tag">
                                {category.name}
                            </span>
                        ))}
                    </div>
                )}

                <Link href={`/blog/${post.slug}`}>
                    <h3 className="card-title">{post.title}</h3>
                </Link>

                {post.excerpt && (
                    <p className="card-excerpt">{post.excerpt}</p>
                )}

                <div className="card-meta">
                    <div className="author">
                        <div className="author-avatar">
                            {post.author.name.charAt(0)}
                        </div>
                        <span className="author-name">{post.author.name}</span>
                    </div>
                    <span className="date">{formatDate(post.published_at)}</span>
                </div>
            </div>
        </article>
    );
}
