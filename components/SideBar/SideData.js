const SideData = () => {
  return (
    <div class="sidebar" data-color="black" data-active-color="info">
      <div class="logo">
        <a href="https://www.creative-tim.com" class="simple-text logo-mini">
          <div class="logo-img">
            <img
              src="/images/logo.png"
              alt="react-logo"
            />
          </div>
        </a>
        <a href="https://www.creative-tim.com" class="simple-text logo-normal" style={{color:"white"}}>
          Creative Tim
        </a>
      </div>
      <div class="sidebar-wrapper ps">
        <ul class="nav">
          <li class="active">
            <a
              class="nav-link active"
              href="#/admin/dashboard"
              aria-current="page"
            >
              <i class="nc-icon nc-bank"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li class="">
            <a class="nav-link" href="#/admin/icons">
              <i class="nc-icon nc-diamond"></i>
              <p>Icons</p>
            </a>
          </li>
          <li class="">
            <a class="nav-link" href="#/admin/maps">
              <i class="nc-icon nc-pin-3"></i>
              <p>Maps</p>
            </a>
          </li>
          <li class="">
            <a class="nav-link" href="#/admin/notifications">
              <i class="nc-icon nc-bell-55"></i>
              <p>Notifications</p>
            </a>
          </li>
          <li class="">
            <a class="nav-link" href="#/admin/user-page">
              <i class="nc-icon nc-single-02"></i>
              <p>User Profile</p>
            </a>
          </li>
          <li class="">
            <a class="nav-link" href="#/admin/tables">
              <i class="nc-icon nc-tile-56"></i>
              <p>Table List</p>
            </a>
          </li>
          <li class="">
            <a class="nav-link" href="#/admin/typography">
              <i class="nc-icon nc-caps-small"></i>
              <p>Typography</p>
            </a>
          </li>
          <li class=" active-pro">
            <a class="nav-link" href="#/admin/upgrade">
              <i class="nc-icon nc-spaceship"></i>
              <p>Upgrade to PRO</p>
            </a>
          </li>
        </ul>
        <div class="ps__rail-x">
          <div
            class="ps__thumb-x"
            tabindex="0"
         
          ></div>
        </div>
        <div class="ps__rail-y">
          <div class="ps__thumb-y" tabindex="0"></div>
        </div>
      </div>
    </div>
  );
};

export default SideData;
