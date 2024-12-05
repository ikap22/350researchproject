import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../image/TeamTimLogo.png";
import "./topStyles.css";

// Example of company data for the dropdown
const companies = [
  { id: "Netflix", name: "Netflix" },
  { id: "WeWork", name: "WeWork" },
  { id: "DuckDuckGo", name: "DuckDuckGo" },
  { id: "Crowdmix", name: "Crowdmix" },
  { id: "Instagram", name: "Instagram" },
  { id: "Kiko", name: "Kiko" },
  { id: "Stripe", name: "Stripe" },
  { id: "Zume", name: "Zume"}
];

function TopNav() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img height={100} src={logo} alt="Logo" />
          <p className="name">Team Tim</p>
        </div>
        <div className="nav-right">
          <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
              <Link to="/">Home</Link>
              <Link to="/analysis">Analysis</Link>
              <Link to="/team">OUR Team</Link>

              {/* Companies Dropdown */}
              <div className="inner">
                <button className="companydrop">Companies</button>
                <div className="companies">
                  {/* Dynamically generate company links */}
                  {companies.map((company) => (
                    <Link key={company.id} to={`/company/${company.id}`}>
                      {company.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default TopNav;
