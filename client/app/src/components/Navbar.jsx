function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top py-3">
            <div className="container">
                <a className="navbar-brand" href="#home">KS</a>

                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navMenu"
                    style={{ boxShadow: 'none' }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                        {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                            <li className="nav-item" key={item}>
                                <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                            </li>
                        ))}
                        <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                            <a className="btn btn-accent" href="/resume.pdf" download="Kailash_Sri_Resume.pdf">
                                Download CV
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar