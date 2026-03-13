function Projects({ projects, loading, error }) {
    console.log("loading:", loading)
    console.log("error:", error)
    console.log("projects:", projects.length)
    return (

        <section id="projects" className="section-alt py-5">

            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">
                    A selection of projects across full-stack development, embedded systems, and engineering design.
                </p>

                {loading && (
                    <div className="row g-4">
                        {[1, 2, 3].map((i) => (
                            <div className="col-md-6 col-xl-4" key={i}>
                                <div className="custom-card h-100 overflow-hidden">
                                    <div
                                        style={{
                                            height: '220px',
                                            background: 'linear-gradient(135deg, rgba(108,99,255,0.08), rgba(167,139,250,0.05))',
                                            animation: 'pulse 1.5s ease-in-out infinite',
                                        }}
                                    />
                                    <div className="p-4">
                                        <div style={{ height: '1rem', width: '60%', background: 'rgba(255,255,255,0.06)', borderRadius: 4, marginBottom: '0.75rem' }} />
                                        <div style={{ height: '0.75rem', width: '90%', background: 'rgba(255,255,255,0.04)', borderRadius: 4 }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="row g-4">
                    {!loading && !error && projects.map((project) => (
                        <div className="col-md-6 col-xl-4" key={project.id}>
                            <div className="custom-card h-100 overflow-hidden d-flex flex-column">
                                {project.image_url ? (
                                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                                        <img
                                            src={project.image_url}
                                            alt={project.title}
                                            className="img-fluid w-100"
                                            style={{ height: '220px', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                        <div style={{
                                            position: 'absolute', inset: 0,
                                            background: 'linear-gradient(to bottom, transparent 50%, rgba(17,17,24,0.8))',
                                            pointerEvents: 'none',
                                        }} />
                                    </div>
                                ) : (
                                    <div style={{
                                        height: '220px',
                                        background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(167,139,250,0.08))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '3rem',
                                    }}>
                                        💻
                                    </div>
                                )}

                                <div className="p-4 d-flex flex-column flex-grow-1">
                                    <h4 className="mb-1" style={{ fontSize: '1.1rem', color: 'white' }}>{project.title}</h4>
                                    {project.subtitle && (
                                        <p className="mb-2" style={{ color: 'var(--accent2)', fontSize: '0.82rem', fontWeight: 500 }}>
                                            {project.subtitle}
                                        </p>
                                    )}
                                    <p className="muted-text mb-3" style={{ fontSize: '0.88rem', lineHeight: 1.6 }}>
                                        {project.description}
                                    </p>

                                    {project.tech_stack && (
                                        <div className="mb-3">
                                            {project.tech_stack.split(',').map((t) => (
                                                <span key={t} className="skill-pill" style={{ fontSize: '0.72rem' }}>
                                                    {t.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-auto d-flex gap-2">
                                        {project.github_url && (
                                            <a href={project.github_url} className="btn btn-outline-light btn-sm" target="_blank" rel="noreferrer">
                                                GitHub
                                            </a>
                                        )}
                                        {project.live_url && (
                                            <a href={project.live_url} className="btn btn-accent btn-sm" target="_blank" rel="noreferrer">
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects