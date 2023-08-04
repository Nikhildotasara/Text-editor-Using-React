import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <div>
              <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` }  >
      <div className="container-fluid "   >
        <a className="navbar-brand"  href="/">{props.title}</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="/">{props.about}</a>
            </li>
          </ul>

          <div className={`form-check form-switch text-${props.mode==="light"?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggle}  role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
        
      </div>
    </nav>
    </div>
  )
}

Navbar.prototypes={
    title:PropTypes.string,
    about:PropTypes.string
}
Navbar.defaultProps={
  title:"TITLE HERE"
}
