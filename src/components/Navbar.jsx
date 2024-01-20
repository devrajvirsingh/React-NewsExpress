import React from 'react'
import './Navbar.css'
function Navbar({ setCategory }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">News <span className='logo-span'>Express</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <div className="nav-link active category-btn" aria-current="page" onClick={() => setCategory("general")}>General</div>
              </li>
              <li className="nav-item category-btn">
                <div className="nav-link " aria-current="page" onClick={() => setCategory("technology")}>Technology</div>
              </li>
              <li className="nav-item category-btn">
                <div className="nav-link " aria-current="page" onClick={() => setCategory("business")}>Business</div>
              </li>
              <li className="nav-item category-btn">
                <div className="nav-link " aria-current="page" onClick={() => setCategory("health")}>Health</div>
              </li>
              <li className="nav-item category-btn">
                <div className="nav-link " aria-current="page" onClick={() => setCategory("sports")}>Sports</div>
              </li>
              <li className="nav-item category-btn">
                <div className="nav-link " aria-current="page" onClick={() => setCategory("entertainment")}>Entertainment</div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar