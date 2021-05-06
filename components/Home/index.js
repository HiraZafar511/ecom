const index = () => {
  return (
    <div className="dash-pro">
      <div className="row">
        <div className="ml-auto mr-auto col-md-8">
          <div className="card-upgrade card">
            <div className="text-center card-header">
              <h4 className="card-title">Paper Dashboard PRO</h4>
              <p className="card-category">
                Are you looking for more components? Please check our Premium
                Version of Paper Dashboard PRO.
              </p>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-center">Free</th>
                      <th className="text-center">PRO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Components</td>
                      <td className="text-center">16</td>
                      <td className="text-center">160</td>
                    </tr>
                    <tr>
                      <td>Plugins</td>
                      <td className="text-center">4</td>
                      <td className="text-center">13</td>
                    </tr>
                    <tr>
                      <td>Example Pages</td>
                      <td className="text-center">7</td>
                      <td className="text-center">27</td>
                    </tr>
                    <tr>
                      <td>Login, Register, Pricing, Lock Pages</td>
                      <td className="text-center">
                      <i className="fas fa-times text-danger"></i>
                      </td>
                      <td className="text-center">
                      <i className="fas fa-check text-success"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        DataTables, VectorMap, SweetAlert, Wizard,
                        jQueryValidation, FullCalendar etc...
                      </td>
                      <td className="text-center">
                      <i className="fas fa-times text-danger"></i>
                      </td>
                      <td className="text-center">
                      <i className="fas fa-check text-success"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Mini Sidebar</td>
                      <td className="text-center">
                      <i className="fas fa-times text-danger"></i>
                      </td>
                      <td className="text-center">
                      <i className="fas fa-check text-success"></i>
                      </td>
                    </tr>
                    <tr>
                      <td>Premium Support</td>
                      <td className="text-center">
                      <i className="fas fa-times text-danger"></i>
                      </td>
                      <td className="text-center">
                      <i className="fas fa-check text-success"></i>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className="text-center">Free</td>
                      <td className="text-center">From $49</td>
                    </tr>
                    <tr>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <a
                          href="#pablo"
                          className="btn-round disabled btn btn-default"
                        >
                          Current Version
                        </a>
                      </td>
                      <td className="text-center">
                        <a
                          href="https://www.creative-tim.com/product/paper-dashboard-2-pro?ref=pd-free-upgrade-live&amp;_ga=2.24037882.1180416788.1618809617-953504163.1601285773"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="btn-round btn btn-primary"
                        >
                          Upgrade to PRO
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
