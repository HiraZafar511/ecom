const SideData = () => {
  return (
    <div className="sidebar" data-color="black" data-active-color="info">
      <div className="logo">
        <a href="https://www.creative-tim.com" className="simple-text logo-mini">
          <div className="logo-img">
            <img
              src="/images/logo.png"
              alt="react-logo"
            />
          </div>
        </a>
        <a href="https://www.creative-tim.com" className="simple-text logo-normal" style={{color:"white"}}>
          Creative Tim
        </a>
      </div>
      <div className="sidebar-wrapper ps">
        <ul className="nav">
          <li className="active">
            <a
              className="nav-link active"
              href="#/admin/dashboard"
              aria-current="page"
            >
              <i className="nc-icon nc-bank"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#/admin/icons">
              <i className="nc-icon nc-diamond"></i>
              <p>Icons</p>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#/admin/maps">
              <i className="nc-icon nc-pin-3"></i>
              <p>Maps</p>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#/admin/notifications">
              <i className="nc-icon nc-bell-55"></i>
              <p>Notifications</p>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#/admin/user-page">
              <i className="nc-icon nc-single-02"></i>
              <p>User Profile</p>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#/admin/tables">
              <i className="nc-icon nc-tile-56"></i>
              <p>Table List</p>
            </a>
          </li>
          <li className="">
            <a className="nav-link" href="#/admin/typography">
              <i className="nc-icon nc-caps-small"></i>
              <p>Typography</p>
            </a>
          </li>
          <li className=" active-pro">
            <a className="nav-link" href="#/admin/upgrade">
              <i className="nc-icon nc-spaceship"></i>
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
        <div className="ps__rail-x">
          <div
            className="ps__thumb-x"
            tabindex="0"
         
          ></div>
        </div>
        <div className="ps__rail-y">
          <div className="ps__thumb-y" tabindex="0"></div>
        </div>
      </div>
    </div>
  );
};

export default SideData;
