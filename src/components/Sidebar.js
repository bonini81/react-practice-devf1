import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
         
<div>
              <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Bonini81 - FinanceApp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#">Show Books</a>
      </li>
      
    </ul>
  </div>
</nav>
            </div>

        )
    }
}
