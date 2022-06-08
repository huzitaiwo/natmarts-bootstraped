import { Link } from "react-router-dom"
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex align-items-center">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="logo h2 text-uppercase text-white">
            Import <img src={logo} alt="logo" /> Export
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-danger px-4">Shop</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

// <nav classNameName='bg-primary'>
    //   <div classNameName="container d-xl-flex justify-content-between align-items-center pt-1">
    //     <div classNameName="logo h2 text-uppercase text-white">
    //       Import <img src={logo} alt="logo" /> Export
    //     </div>
    //     <ul classNameName="nav-links d-sm-flex align-items-center list-unstyled pt-2">
    //       <li classNameName="pe-sm-5"><Link classNameName="text-white" to='/'>Home</Link></li>
    //       <li classNameName="pe-sm-5"><Link classNameName="text-white" to='/about'>About</Link></li>
    //       <li classNameName="pe-sm-5"><Link classNameName="text-white" to='/contact'>Contact us</Link></li>
    //       <li classNameName="pe-sm-5"><Link classNameName="text-white btn btn-danger px-4" to='/shop'>Shop</Link></li>
    //     </ul>
    //   </div>
    // </nav>
