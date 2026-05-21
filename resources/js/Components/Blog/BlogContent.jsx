export default function BlogContent({ content, excerpt }) {
    return (
        <section className="blog-content-section">
            <div className="container">
                <div className="content-wrapper">
                    {excerpt && (
                        <p className="content-excerpt">{excerpt}</p>
                    )}
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </div>
        </section>
    );
}
