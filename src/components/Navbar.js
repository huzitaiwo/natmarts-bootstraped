import { NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex align-items-center">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <div className="logo h2 text-uppercase text-white">
            Import <img src={logo} alt="logo" /> Export
          </div>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact us</NavLink>
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
