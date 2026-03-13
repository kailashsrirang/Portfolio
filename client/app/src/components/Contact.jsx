import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/contact/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        if (response.ok) {
            setSubmitted(true)
            setFormData({ name: '', email: '', subject: '', message: '' })
        } else {
            console.error('Failed to submit form')
        }
    }

    const contactInfo = [
        { icon: '✉️', label: 'Email', value: 'srirangk@mcmaster.ca', href: 'mailto:your@email.com' },
        { icon: '📍', label: 'Location', value: 'Ajax, Canada', href: null },
    ]

    const socials = [
        { label: 'GitHub', href: 'https://github.com/' },
        { label: 'LinkedIn', href: 'https://linkedin.com/' },
    ]

    return (
        <section id="contact" className="section-alt py-5">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Have a project in mind or just want to connect? I'd love to hear from you.
                </p>

                <div className="row g-4">
                    {/* Left panel */}
                    <div className="col-lg-5">
                        <div className="custom-card h-100 p-4 p-lg-5">
                            <h4 className="mb-2 white-text">Let's Connect</h4>
                            <p className="muted-text mb-4" style={{ fontSize: '0.9rem' }}>
                                I'm interested in internships, software projects, engineering collaboration,
                                and opportunities to build meaningful products.
                            </p>

                            {contactInfo.map(({ icon, label, value, href }) => (
                                <div key={label} className="d-flex align-items-center gap-3 mb-3">
                                    <div style={{
                                        width: 40, height: 40, flexShrink: 0,
                                        background: 'var(--pill-bg)',
                                        border: '1px solid var(--pill-border)',
                                        borderRadius: 10,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '1rem',
                                    }}>
                                        {icon}
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.72rem', color: 'var(--muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
                                        {href
                                            ? <a href={href} style={{ color: 'var(--text)', fontSize: '0.9rem' }}>{value}</a>
                                            : <span style={{ color: 'var(--text)', fontSize: '0.9rem' }}>{value}</span>
                                        }
                                    </div>
                                </div>
                            ))}

                            <div className="mt-4">
                                <p style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Follow Me</p>
                                <div className="d-flex gap-3">
                                    {socials.map(({ label, href }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            className="btn btn-outline-light btn-sm"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right panel – form */}
                    <div className="col-lg-7">
                        <div className="custom-card p-4 p-lg-5">
                            <h4 className="mb-4 white-text">Send a Message</h4>

                            {submitted && (
                                <div className="alert alert-success mb-4">
                                    ✓ Message submitted successfully. I'll get back to you soon!
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="row g-3 mb-3">
                                    <div className="col-sm-6">
                                        <label className="form-label">Name *</label>
                                        <input
                                            className="form-control"
                                            name="name"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label className="form-label">Email *</label>
                                        <input
                                            className="form-control"
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Subject *</label>
                                    <input
                                        className="form-control"
                                        name="subject"
                                        placeholder="What's this about?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Message *</label>
                                    <textarea
                                        className="form-control"
                                        rows="5"
                                        name="message"
                                        placeholder="Tell me about your project or idea..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button className="btn btn-accent w-100" type="submit" style={{ padding: '0.75rem' }}>
                                    Send Message →
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact