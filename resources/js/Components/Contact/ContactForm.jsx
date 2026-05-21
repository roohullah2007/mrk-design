import { useState } from 'react';
import axios from 'axios';

const ArrowIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const filledCount = () => {
        let count = 0;
        if (formData.name.trim()) count++;
        if (formData.email.trim()) count++;
        if (formData.company.trim()) count++;
        if (formData.service) count++;
        if (formData.budget) count++;
        if (formData.message.trim()) count++;
        return Math.min(count, 6);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await axios.post('/contact', formData);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    service: '',
                    budget: '',
                    message: ''
                });
            }, 2400);
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const budgetOptions = [
        { value: 'lt5', label: '< $5K' },
        { value: '5-15', label: '$5K — $15K' },
        { value: '15-30', label: '$15K — $30K' },
        { value: '30-60', label: '$30K — $60K' },
        { value: '60+', label: '$60K+' },
        { value: 'unsure', label: 'Not sure yet' }
    ];

    return (
        <section className="form-section" id="contact-form">
            <div className="container">
                <div className="form-grid">
                    <aside className="form-aside">
                        <span className="eyebrow">Get in touch</span>
                        <h2>Tell us about<br />your <em className="serif-italic" style={{ color: 'var(--accent)' }}>project.</em></h2>
                        <p>Fill out the form and tell us about what you're building. We'll get back to you within 24 hours with next steps and a recommended scope.</p>
                        <div className="stat-row">
                            <div className="stat">
                                <div className="num">120+</div>
                                <div className="lbl">Projects shipped</div>
                            </div>
                            <div className="stat">
                                <div className="num">4.9★</div>
                                <div className="lbl">Client rating</div>
                            </div>
                            <div className="stat">
                                <div className="num">24h</div>
                                <div className="lbl">Reply time</div>
                            </div>
                        </div>
                    </aside>

                    <form className="form-card" onSubmit={handleSubmit} noValidate>
                        <div className="card-eyebrow">Project Inquiry · {String(filledCount()).padStart(2, '0')} / 06</div>
                        <h3>Start a project.</h3>

                        <div className="form-row">
                            <div className="field">
                                <label>Full name<span className="req">*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Jane Cooper"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="field">
                                <label>Email address<span className="req">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="jane@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="field">
                                <label>Company name <span style={{ opacity: 0.4 }}>(optional)</span></label>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Acme Inc."
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="field">
                                <label>Service required<span className="req">*</span></label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select a service</option>
                                    <option>UI/UX Design (Web & Mobile)</option>
                                    <option>WordPress Development</option>
                                    <option>Custom-Coded Website</option>
                                    <option>Shopify Development</option>
                                    <option>SEO Optimization</option>
                                    <option>Branding & Logo Design</option>
                                    <option>Graphic Design</option>
                                    <option>3D Character Design</option>
                                    <option>Funnel & Landing Page Design</option>
                                    <option>Multiple / Not sure yet</option>
                                </select>
                            </div>
                        </div>

                        <div className="field budget-field" style={{ marginBottom: '28px' }}>
                            <label>Budget range<span className="req">*</span></label>
                            <div className="budget-pills" style={{ marginTop: '10px' }}>
                                {budgetOptions.map(option => (
                                    <label key={option.value}>
                                        <input
                                            type="radio"
                                            name="budget"
                                            value={option.value}
                                            checked={formData.budget === option.value}
                                            onChange={handleChange}
                                        />
                                        <span>{option.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="field">
                            <label>Project details<span className="req">*</span></label>
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="A few sentences on what you're building, who it's for, and where you are in the process..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {error && (
                            <div className="error-message" style={{ color: '#dc2626', fontSize: '0.875rem', marginBottom: '1rem' }}>
                                {error}
                            </div>
                        )}

                        <div className="form-actions">
                            <div className="note">By submitting you agree to our privacy policy. We never share your details and you'll only hear from us about your project.</div>
                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={loading}
                                style={submitted ? { background: 'var(--accent)', color: '#fff' } : loading ? { opacity: 0.7 } : {}}
                            >
                                {submitted ? 'Sent — talk soon ✦' : loading ? 'Sending...' : (
                                    <>
                                        Send inquiry
                                        <span className="arrow">
                                            <ArrowIcon />
                                        </span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
