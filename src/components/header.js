import React from 'react'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (


        <nav className="navbar navbar-expand-lg navbar-dark bg-dark header">
            <div className="container-fluid">
                <label className="navbar-brand">Todo App</label>
                <button className="navbar-toggler toogle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>

                    </ul>
                    { props.searchbar ?<form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" disabled/>
                        <button className="btn btn-secondary" type="button" disabled>Search</button>
                    </form> : ""}
                </div>
            </div>
        </nav>

    )
}


Header.defaultProps = {
    searchbar : true
}