function Hero() {
    return (
        <section
            id="home"
            className="py-5 position-relative overflow-hidden"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}
        >
            {/* Background glow orbs */}
            <div
                className="glow-orb"
                style={{
                    width: '600px', height: '600px',
                    background: 'radial-gradient(circle, rgba(108,99,255,0.18) 0%, transparent 70%)',
                    top: '-100px', right: '-200px',
                }}
            />
            <div
                className="glow-orb"
                style={{
                    width: '400px', height: '400px',
                    background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)',
                    bottom: '0', left: '-100px',
                }}
            />

            <div className="container position-relative" style={{ zIndex: 1 }}>
                <div className="row">
                    <div className="col-lg-9">
                        {/* Badge */}
                        <div className="hero-role-badge">
                            <span className="dot"></span>
                            Portfolio
                        </div>

                        <h1 className="hero-title mb-4">
                            Kailash Sriranganathan,{' '}
                            <span className="accent-word">Software Engineering Student</span>
                        </h1>

                        <p className="hero-subtitle mb-5">
                            Building full-stack, embedded, and AI-driven systems with a focus on
                            practical impact, clean design, and real-world usability.
                        </p>

                        <div className="d-flex flex-wrap gap-3 mb-5">
                            <a href="#projects" className="btn btn-accent btn-lg">View Projects</a>
                            <a href="#contact" className="btn btn-outline-light btn-lg">Contact Me</a>
                        </div>

                        <div className="d-flex flex-wrap gap-4">
                            {[
                                { label: 'GitHub', href: 'https://github.com/', icon: 'bi-github' },
                                { label: 'LinkedIn', href: 'https://linkedin.com/', icon: 'bi-linkedin' },
                                { label: 'Email', href: 'mailto:your@email.com', icon: 'bi-envelope-fill' },
                            ].map(({ label, href, icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="hero-social-link d-inline-flex align-items-center gap-2 text-decoration-none"
                                    target={label !== 'Email' ? '_blank' : undefined}
                                    rel={label !== 'Email' ? 'noreferrer' : undefined}
                                >
                                    <i className={icon}></i>
                                    <span>{label}</span>
                                </a>
                            ))}
                        </div>

                        <div className="hero-scroll-hint">
                            <span className="scroll-line"></span>
                            Scroll down
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero