import React from "react";

const TopNav = () => {
    return(
        <nav className="navbar">
            <div className="nav-left">
                <p>Team Tim</p>
            </div>
            <div className="nav-right">
                <div className="dropdown">
                    <button className="dropbtn">Menu</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default TopNav;