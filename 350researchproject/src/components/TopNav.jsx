import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../image/TeamTimLogo.png";
import "./topStyles.css";

// Example of company data for the dropdown
const companies = [
  { id: "tech-innovations", name: "Netflix" },
  { id: "creative-designs", name: "WeWork" },
  { id: "global-enterprises", name: "DuckDuckGo" },
  { id: "smart-solutions", name: "Crowdmix" },
  { id: "digital-creations", name: "Instagram" },
  { id: "blue-tech", name: "Kiko" },
  { id: "eco-industries", name: "Stripe" },
  { id: "next-gen-systems", name: "Zume" },
];

function TopNav() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img height={100} src={logo} alt="Logo" />
          <p className="name">Team Tim</p>
        </div>
        <div className="nav-center">
          <button>
            <Link to="/">Introduction</Link>
          </button>
          <div
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button>
              <Link to="#">Companies</Link>
            </button>
            {showDropdown && (
              <div className="dropdown-content">
                {companies.map((company) => (
                  <Link key={company.id} to={`/company/${company.id}`}>
                    {company.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <button>
            <Link to="/analysis">Analysis</Link>
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default TopNav;