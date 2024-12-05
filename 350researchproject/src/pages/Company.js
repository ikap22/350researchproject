import React from "react";
import "./companyStyles.css"; // Import the CSS file

function Company({ companyName, history, growth, revenue, size, productPerformance, analysis, additionalReadings }) {
  return (
    <div className="company-container">
      <h1 className="company-name">{companyName}</h1>
      <hr className="company-hr" />
      <p><strong>History:</strong> {history}</p>
      <p><strong>Growth:</strong> {growth}</p>
      <p><strong>Revenue:</strong> {revenue}</p>
      <p><strong>Size:</strong> {size}</p>
      <p><strong>Product Performance:</strong> {productPerformance}</p>
      <p><strong>Analysis:</strong> {analysis}</p>
      <p><strong>Additional Readings:</strong> <span dangerouslySetInnerHTML={{ __html: additionalReadings }} /></p>
    </div>
  );
}

export default Company;