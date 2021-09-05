import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">DW-News</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                            </li>
                           
                            <li className="nav-item">
                            <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${this.props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                        </div>
                    </div>
</nav>
                
            </div>
        )
    }
}
