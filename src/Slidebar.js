import { Link } from "react-router-dom";

export default function Slidebar() {
  return (
    <>
      {/* Sidebar Start */}
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar bg-light navbar-light">
          <Link to="index.html" className="navbar-brand mx-4 mb-3">
            <h3 className="text-primary">
              <i className="fa fa-hashtag me-2" />
              DASHMIN
            </h3>
          </Link>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative">
              <img
                className="rounded-circle"
                src="dashmin-1.0.0/img/user.jpg"
                alt=""
                style={{ width: 40, height: 40 }}
              />
              <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
            </div>
            <div className="ms-3">
              <h6 className="mb-0">Jhon Doe</h6>
              <span>Admin</span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <Link to="index.html" className="nav-item nav-link active">
              <i className="fa fa-tachometer-alt me-2" />
              Dashboard
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-laptop me-2" />
                Courses
              </Link>
              <div className="dropdown-menu bg-transparent border-0">
                <Link to="Course_tables.html" className="dropdown-item">
                  Course Management
                </Link>
                <Link to="typography.html" className="dropdown-item">
                  Add Courses
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i className="fa fa-laptop me-2" />
                Batches
              </Link>

              <div className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown" >
                  <Link className="fa fa-laptop me-2" />
                  Subject
                </Link>
                
                <div className="nav-item dropdown">
                  <Link to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown">
                    <i className="fa fa-laptop me-2" />
                    Teacher
                  </Link>
                
                  <div className="nav-item dropdown">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa fa-laptop me-2" />
                      Lecture
                    </Link>
                   
                    <Link to="chart.html" className="nav-item nav-link">
                      <i className="fa fa-chart-bar me-2" />
                      Payouts
                    </Link>
                    <Link to="signin.html" className="nav-item nav-link">
                      <i className="fa fa-chart-bar me-2" />
                      Sign In
                    </Link>
                    <Link to="signup.html" className="nav-item nav-link">
                      <i className="fa fa-chart-bar me-2" />
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* Sidebar End */}
    </>
  )
}