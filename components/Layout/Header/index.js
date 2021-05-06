const index = () => {
  return (
    <div className="header">
      <nav className="navbar-absolute navbar-transparent  navbar navbar-expand-lg " style={{backgroundColor:"#f4f3ef"}}>
        <div className="container-fluid">
          <a className="navbar-brand red" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarColor01"
          >
            <form className="d-flex">
              <div className="no-border input-group">
                <input
                  placeholder="Search..."
                  type="text"
                  className="form-control search"
                />
              </div>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link btn-magnify" href="#">
                  <i className="fas fa-bezier-curve"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Stats</span>
                  </p>
                </a>
              </li>
              <li className="dropdown nav-item">
                <a
                  aria-haspopup="true"
                  href="#"
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                >
                  <i className="far fa-bell"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </a>
              

       
              </li>
              <li className="nav-item">
                <a className="nav-link btn-rotate" href="#">
                <i className="fas fa-cog"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Account</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default index;
