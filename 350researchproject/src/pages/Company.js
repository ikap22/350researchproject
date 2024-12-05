import React from "react";
import "./companyStyles.css"; // Import the CSS file

function Company({ companyName, history, growth, revenue, size, productPerformance, analysis, citations }) {
  return (
    <div className="pageContent">
            <div className="name">
                <h1>{companyName}</h1>
                <hr/>
            </div>
            <div className="section">
                <h2>History</h2>
                <p>{history}</p>
            </div>
            <div className="section">
                <h2> Financial Statistic</h2>
                <p><strong>Growth:</strong> {growth}</p>
                <p><strong>Revenue:</strong> {revenue}</p>
                <p><strong>Size:</strong> {size}</p>
                <p><strong>Performance:</strong> {productPerformance}</p>
            </div>
            <div className="section">
                <h2>Analysis</h2>
                <p>{analysis}</p>
            </div>
            <div className="section">
                <h2>Additional Reading</h2>
                <ul>
                {citations && citations.length > 0 ? (
                    citations.map((citation, index) => (
                    <li key={index}>
                        <a href={citation} target="_blank" rel="noopener noreferrer">
                        {citation}
                        </a>
                    </li>
                    ))
                ) : (
                    <p>No citations available.</p>
                )}
                </ul>
            </div>
        </div>
  );
}

export default Company;