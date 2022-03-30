import React from 'react'
import {Link} from "react-router-dom"

class Navbar extends React.Component{
    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        window.location = "/login"
    }

    render(){
        return(
            <div className="navbar navbar-expand-lg bg-dark navbar-light">
                <a className="navbar-brand text-white">Moklet Laundry</a>

                    {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse"
                      data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    {/* menu */}
                <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                                Home
                            </Link>
                        </li>
                        {this.props.role === "admin" ?(
                        <li className="nav-item">
                            <Link to="/member" className="nav-link text-white">
                                Member
                            </Link>
                        </li>
                        ) : null}
                        {this.props.role === "admin" ? (
                        <li className="nav-item">
                            <Link to="/user" className="nav-link text-white">
                                User
                            </Link>
                        </li>
                        ) :null}
                        {this.props.role === "admin" ? (
                        <li className="nav-item">
                            <Link to="/paket" className="nav-link text-white">
                                Paket
                            </Link>
                        </li>
                        ) :null}
                        <li className="nav-item">
                            <Link to="/transaksi" className="nav-link text-white">
                                Transaksi
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" onClick={() => this.Logout()}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;