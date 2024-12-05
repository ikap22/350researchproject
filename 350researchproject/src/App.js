import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Analysis from "./pages/Analysis";
import Home from "./pages/Introduction";
import Company from "./pages/Company";
import { useParams } from "react-router-dom";

// Example company data, JSON format, AI Gen
const companies = {
  // id : {info} Use as an example
  "tech-innovations": {
    companyName: "Tech Innovations Ltd.",
    history: "Founded in 2010, we specialize in AI.",
    growth: "20%",
    revenue: "$50M",
    size: "200 employees",
    productPerformance: "Excellent",
    analysis: "AI is the future of technology.",
    citations: "AI Journal 2023",
  },
  "creative-designs": {
    companyName: "Creative Designs Co.",
    history: "Started in 2015, we provide top-tier graphic design.",
    growth: "15%",
    revenue: "$10M",
    size: "50 employees",
    productPerformance: "Good",
    analysis: "Graphic design trends are evolving.",
    citations: "Design Magazine 2023",
  },
  "global-enterprises": {
    companyName: "Global Enterprises",
    history: "Global leader in logistics since 2000.",
    growth: "5%",
    revenue: "$200M",
    size: "1000 employees",
    productPerformance: "Outstanding",
    analysis: "Logistics is crucial for global trade.",
    citations: "Logistics World 2023",
  }
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="analysis" element={<Analysis />} />
            
            {}
            <Route path="company/:companyId" element={<CompanyDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

// This component will fetch and display company details dynamically based on the URL parameter
function CompanyDetails() {
  const { companyId } = useParams();  // Get the companyId from the URL
  const company = companies[companyId];

  if (!company) {
    return <h2>Company not found</h2>;
  }

  return (
    <Company
      companyName={company.companyName}
      history={company.history}
      growth={company.growth}
      revenue={company.revenue}
      size={company.size}
      productPerformance={company.productPerformance}
      analysis={company.analysis}
      citations={company.citations}
    />
  );
}

export default App;
