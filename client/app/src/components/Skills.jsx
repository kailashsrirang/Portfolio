function SkillBar({ name, level, percent }) {
    return (
        <div className="skill-bar-wrap">
            <div className="skill-bar-header">
                <span className="skill-bar-name">{name}</span>
                <span className="skill-bar-level">{level}</span>
            </div>
            <div className="skill-bar-track">
                <div
                    className="skill-bar-fill"
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    )
}

function Skills() {
    const skillGroups = [
        {
            title: 'Frontend',
            description: 'Building modern responsive interfaces',
            icon: '⚡',
            skills: [
                { name: 'React', level: 'Advanced', percent: 85 },
                { name: 'JavaScript', level: 'Advanced', percent: 88 },
                { name: 'PHP', level: 'Intermediate', percent: 60 },
                { name: 'Bootstrap', level: 'Advanced', percent: 80 },
                { name: 'HTML / CSS', level: 'Expert', percent: 95 },
            ],
        },
        {
            title: 'Backend',
            description: 'Building APIs and server-side logic',
            icon: '🛠',
            skills: [
                { name: 'Django', level: 'Advanced', percent: 82 },
                { name: 'Python', level: 'Advanced', percent: 88 },
                { name: 'SQL', level: 'Advanced', percent: 78 },
                { name: 'REST APIs', level: 'Advanced', percent: 85 },
                { name: 'Apache Web Server', level: 'Intermediate', percent: 65 },
                { name: 'Microsoft Azure', level: 'Intermediate', percent: 65 },
            ],
        },
        {
            title: 'Embedded / Systems',
            description: 'Working close to hardware and low-level systems',
            icon: '🔧',
            skills: [
                { name: 'C', level: 'Advanced', percent: 82 },
                { name: 'C++', level: 'Intermediate', percent: 70 },
                { name: 'STM32', level: 'Intermediate', percent: 75 },
                { name: 'BitBake', level: 'Advanced', percent: 80 },
            ],
        },
        {
            title: 'Other',
            description: 'Other useful tools...',
            icon: '🧠',
            skills: [
                { name: 'Java', level: 'Advanced', percent: 90 },
                { name: 'Docker', level: 'Advanced', percent: 88 },
                { name: 'Linux', level: 'Advanced', percent: 90 },
                { name: 'Bash', level: 'Advanced', percent: 80 },
                { name: 'MATLAB', level: 'Intermediate', percent: 75 },
            ],
        },
    ]

    return (
        <section id="skills" className="py-5">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-subtitle">
                    A broad view of the tools and technologies I use across software, systems, and engineering projects.
                </p>

                <div className="row g-4">
                    {skillGroups.map((group) => (
                        <div className="col-lg-6" key={group.title} >
                            <div className="custom-card h-100 p-4">
                                <div className="d-flex align-items-center gap-2 mb-1">
                                    <span style={{ fontSize: '1.2rem' }}>{group.icon}</span>
                                    <h4 style={{ margin: 0, color: 'white' }}>{group.title}</h4>
                                </div>
                                <p className="muted-text mb-4" style={{ fontSize: '0.85rem' }}>{group.description}</p>
                                {group.skills.map((s) => (
                                    <SkillBar key={s.name} {...s} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats row */}
                <div className="row g-4 mt-4">
                    {[
                        { value: '20+', label: 'Technologies' },
                        { value: '4+', label: 'Years Experience' },
                        { value: '3+', label: 'Projects Completed' },
                        { value: '2027', label: 'Expected Graduation' },
                    ].map(({ value, label }) => (
                        <div className="col-6 col-lg-3" key={label}>
                            <div className="stat-box">
                                <h3>{value}</h3>
                                <p className="muted-text mb-0" style={{ fontSize: '0.85rem' }}>{label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Skills