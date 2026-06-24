import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function LegalPage({ title, eyebrow = 'Legal', updated, metaTitle, metaDescription, children }) {
    return (
        <MainLayout>
            <Head title={metaTitle || `${title} — MRK Design Agency`}>
                {metaDescription && <meta name="description" content={metaDescription} />}
            </Head>

            <section className="legal-hero">
                <div className="container">
                    <div className="eyebrow" style={{ fontFamily: '"Inter Tight"', marginBottom: '20px' }}>{eyebrow}</div>
                    <h1 className="legal-title">{title}</h1>
                    {updated && <p className="legal-updated">Last updated: {updated}</p>}
                </div>
            </section>

            <section className="legal-body">
                <div className="container">
                    <div className="legal-content">
                        {children}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
