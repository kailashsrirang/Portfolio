function Education() {
    return (
        <section id="education" className="py-5">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <p className="section-subtitle">
                    Academic background, technical growth, and the foundation behind my engineering work.
                </p>

                <div className="custom-card p-4 p-lg-5" style={{ maxWidth: '760px' }}>
                    <div className="d-flex align-items-start gap-4">
                        <div
                            style={{
                                width: 56, height: 56, flexShrink: 0,
                                background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                                borderRadius: 12,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.5rem',
                            }}
                        >
                            🎓
                        </div>
                        <div>
                            <h4 className="mb-1">McMaster University</h4>
                            <p style={{ color: 'var(--accent2)', fontWeight: 500, marginBottom: '0.25rem' }}>
                                Software Engineering (Co-op)
                            </p>
                            <p className="muted-text mb-3" style={{ fontSize: '0.85rem' }}>
                                Expected Graduation: 2027
                            </p>
                            <p className="muted-text mb-3" style={{ fontSize: '0.9rem' }}>
                                Relevant courses:
                            </p>
                            <div>
                                {['Software Design', 'Embedded Systems', 'Relational Databases', 'Full-Stack Dev', 'Data Structures & Algorithmns', 'object Oriented Programming', 'Software Testing', 'Operating Systems', 'Computer Architecture', 'Concurrent System Design'].map((tag) => (
                                    <span key={tag} className="skill-pill">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education