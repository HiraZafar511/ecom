const index = () => {
  return (
    <div class="header">
      <nav class="navbar-absolute navbar-transparent  navbar navbar-expand-lg " style={{backgroundColor:"#f4f3ef"}}>
        <div class="container-fluid">
          <a class="navbar-brand red" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarColor01"
          >
            <form class="d-flex">
              <div class="no-border input-group">
                <input
                  placeholder="Search..."
                  type="text"
                  class="form-control search"
                />
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link btn-magnify" href="#">
                  <i class="fas fa-bezier-curve"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Stats</span>
                  </p>
                </a>
              </li>
              <li class="dropdown nav-item">
                <a
                  aria-haspopup="true"
                  href="#"
                  class="dropdown-toggle nav-link"
                  aria-expanded="false"
                >
                  <i class="far fa-bell"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </a>
              

       
              </li>
              <li class="nav-item">
                <a class="nav-link btn-rotate" href="#">
                <i class="fas fa-cog"></i>
                  <p>
                    <span class="d-lg-none d-md-block">Account</span>
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
