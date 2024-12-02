import React from "react";


function Company({companyName, history, growth, revenue, size, productPerformance, analysis, citations,}){
    return(
        <>
            <div className="name">
                <h1>{companyName}</h1>
            </div>
            <div className="section">
                <h2>History</h2>
                <p>{history}</p>
            </div>
            <div className="section">
                <h2> Financial Statistic</h2>
                <p>Growth: {growth}</p>
                <p>Revenue: {revenue}</p>
                <p>Size: {size}</p>
                <p>Perfeormance: {productPerformance}</p>
            </div>
            <div className="section">
                <h2>Analysis</h2>
                <p>{analysis}</p>
            </div>
            <div className="section">
                <h2>Citations</h2>
                <p>{citations}</p>
            </div>
        </>
    )
}

export default Company;