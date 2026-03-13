// Stats is now embedded inside Skills, but kept here if needed standalone
function Stats({ projects }) {
    const stats = [
        { value: '20+', label: 'Projects' },
        { value: `${projects.length}+`, label: 'Portfolio Entries' },
        { value: '10+', label: 'Technologies' },
        { value: '2027', label: 'Expected Graduation' },
    ]

    return (
        <section className="py-5">
            <div className="container">
                <div className="row g-4">
                    {stats.map(({ value, label }) => (
                        <div className="col-6 col-lg-3" key={label}>
                            <div className="stat-box">
                                <h3>{value}</h3>
                                <p className="muted-text mb-0" style={{ fontSize: '0.85rem' }}>{label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Stats