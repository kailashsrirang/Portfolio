
function Footer() {
    return (
        <footer className="py-4">
            <div className="container">
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
                    <p className="mb-0 muted-text" style={{ fontSize: '0.85rem' }}>
                        © 2026 <span style={{ color: 'var(--accent2)' }}>Kailash Sriranganathan</span>. All rights reserved.
                    </p>
                    <div className="d-flex gap-3">
                        {[
                            { label: 'GitHub', href_link: 'https://github.com/' },
                            { label: 'LinkedIn', href_link: 'https://www.linkedin.com/in/kailash-sri/' },
                        ].map(({ label, href_link }) => (
                            <a
                                key={label}
                                href={href_link}
                                className="muted-text"
                                style={{ fontSize: '0.82rem', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent2)'}
                                onMouseLeave={e => e.currentTarget.style.color = ''}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer