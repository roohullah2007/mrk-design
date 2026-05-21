import { Head, Link, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import BlogHero from '@/Components/Blog/BlogHero';
import BlogCard from '@/Components/Blog/BlogCard';

export default function Blog({ posts, categories, currentCategory }) {
    const handleCategoryFilter = (slug) => {
        router.get('/blog', slug ? { category: slug } : {}, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <MainLayout>
            <Head title="Blog - MRK Design Agency" />

            <BlogHero />

            <section className="blog-section">
                <div className="container">
                    {/* Category Filter */}
                    <div className="blog-filters">
                        <button
                            className={`filter-btn ${!currentCategory ? 'active' : ''}`}
                            onClick={() => handleCategoryFilter(null)}
                        >
                            All Posts
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-btn ${currentCategory === category.slug ? 'active' : ''}`}
                                onClick={() => handleCategoryFilter(category.slug)}
                            >
                                {category.name}
                                <span className="count">({category.posts_count})</span>
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="blog-grid">
                        {posts.data.length > 0 ? (
                            posts.data.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))
                        ) : (
                            <div className="no-posts">
                                <p>No posts found.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {posts.last_page > 1 && (
                        <div className="blog-pagination">
                            {posts.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url || '#'}
                                    className={`pagination-link ${link.active ? 'active' : ''} ${!link.url ? 'disabled' : ''}`}
                                    preserveScroll
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </MainLayout>
    );
}
