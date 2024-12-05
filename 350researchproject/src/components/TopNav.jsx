import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../image/TeamTimLogo.png";
import "./topStyles.css";

// Example of company data for the dropdown
const companies = [
  { id: "netflix", name: "Netflix" },
  { id: "wework", name: "WeWork" },
  { id: "duckduckgo", name: "DuckDuckGo" },
  { id: "crowdmix", name: "Crowdmix" },
  { id: "instagram", name: "Instagram" },
  { id: "kiko", name: "Kiko" },
  { id: "stripe", name: "Stripe" },
  { id: "zume", name: "Zume" },
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