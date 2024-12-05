import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../image/TeamTimLogo.png";
import "./topStyles.css";

// Example of company data for the dropdown
const companies = [
  { id: "tech-innovations", name: "Tech Innovations Ltd." },
  { id: "creative-designs", name: "Creative Designs Co." },
  { id: "global-enterprises", name: "Global Enterprises" },
  { id: "smart-solutions", name: "Smart Solutions" },
  { id: "digital-creations", name: "Digital Creations" },
  { id: "blue-tech", name: "Blue Tech Ltd." },
  { id: "eco-industries", name: "Eco Industries" },
  { id: "next-gen-systems", name: "Next Gen Systems" },
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
