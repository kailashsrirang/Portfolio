import icon from '../assets/icon.png'
function About() {
    return (
        <section id="about" className="section-alt py-5">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Get to know the person behind the work.</p>

                <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                        <div className="about-img-frame">
                            <img
                                src={icon}
                                alt="Kailash"
                                className="img-fluid w-100"
                                style={{ aspectRatio: '1/1', objectFit: 'cover' }}
                            />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        {/* Stats */}
                        <div className="row g-3 mb-4">
                            {[
                                { value: '4+', label: 'Years Building' },
                                { value: '3+', label: 'Projects' },
                            ].map(({ value, label }) => (
                                <div className="col-6" key={label}>
                                    <div className="stat-box">
                                        <h3 className="fw-bold mb-1">{value}</h3>
                                        <p className="muted-text mb-0" style={{ fontSize: '0.85rem' }}>{label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="muted-text mb-3">
                            I’m a Software Engineering student at McMaster University who loves building things that people can actually use. I’m especially interested in full-stack development because I find it rewarding to create tools that improve productivity and make everyday work easier for the people around me.
                        </p>

                        <p className="muted-text mb-4">
                            I’m also fascinated by the intersection of hardware and software. There’s something really exciting about writing code that gives life to a physical system and turns it into something functional and meaningful. Across web development, embedded systems, and engineering design, I’m always looking for opportunities to build practical, thoughtful solutions that people genuinely benefit from.
                        </p>

                        <div className="d-flex align-items-center gap-2 mb-4">
                            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>📍</span>
                            <span className="muted-text" style={{ fontSize: '0.88rem' }}>Ajax, Canada</span>
                            <span style={{ marginLeft: '0.5rem' }}>
                                <span className="hero-role-badge" style={{ fontSize: '0.7rem', padding: '0.2rem 0.7rem' }}>
                                    <span className="dot"></span>
                                    Open to Opportunities
                                </span>
                            </span>
                        </div>

                        <div className="mb-4">
                            <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                When I'm not coding:
                            </p>
                            {['Soccer', 'Rock Climbing', 'DJ-ing'].map((item) => (
                                <span key={item} className="skill-pill">{item}</span>
                            ))}
                        </div>

                        <a href="/resume.pdf" className="btn btn-accent">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About