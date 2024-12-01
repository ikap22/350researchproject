import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../image/TeamTimLogo.png";
import "./topStyles.css"

function TopNav(){
    return(
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <img
                        height={100} 
                        src={logo}
                        alt="Logo"
                    />
                
                    <p className="name">Team Tim</p>
                </div>
                <div className="nav-right">
                    <div className="dropdown">
                        <button className="dropbtn">Menu</button>
                        <div className="dropdown-content">
                            <Link to="/">Home</Link>
                            <Link to="/analysis">Analysis</Link>
                            <Link to="/team">OUR Team</Link>
                            <div className="inner">
                                <button className="companydrop">Companies</button>
                                <div className="companies">
                                    <a href="#">c1</a>
                                    <a href="#">c2</a>
                                    <a href="#">c3</a>
                                    <a href="#">c4</a>
                                    <a href="#">c5</a>
                                    <a href="#">c6</a>
                                    <a href="#">c7</a>
                                    <a href="#">c8</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}
export default TopNav;