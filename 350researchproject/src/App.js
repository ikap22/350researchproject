import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Analysis from "./pages/Analysis";
import Home from "./pages/Introduction";
import Company from "./pages/Company";
import { useParams } from "react-router-dom";

// Example company data, JSON format, AI Gen
const companies = {
  "tech-innovations": {
    companyName: "Netflix",
    history: "Founded in 1997, Netflix is a streaming service.",
    growth: "30%",
    revenue: "$25B",
    size: "7000 employees",
    productPerformance: "Excellent",
    analysis: "Streaming is the future of entertainment.",
    citations: "Streaming Journal 2023",
  },
  "creative-designs": {
    companyName: "WeWork",
    history: "Started in 2010, WeWork provides shared workspaces.",
    growth: "20%",
    revenue: "$2B",
    size: "5000 employees",
    productPerformance: "Good",
    analysis: "Co-working spaces are on the rise.",
    citations: "Workspace Magazine 2023",
  },
  "global-enterprises": {
    companyName: "DuckDuckGo",
    history: "Founded in 2008, DuckDuckGo is a search engine.",
    growth: "10%",
    revenue: "$100M",
    size: "200 employees",
    productPerformance: "Outstanding",
    analysis: "Privacy-focused search engines are gaining popularity.",
    citations: "Search Engine World 2023",
  },
  "smart-solutions": {
    companyName: "Crowdmix",
    history: "Founded in 2014, Crowdmix is a social media platform.",
    growth: "25%",
    revenue: "$50M",
    size: "300 employees",
    productPerformance: "Good",
    analysis: "Social media continues to grow.",
    citations: "Social Media Today 2023",
  },
  "digital-creations": {
    companyName: "Instagram",
    history: "Founded in 2010, Instagram is a photo-sharing app.",
    growth: "35%",
    revenue: "$20B",
    size: "1000 employees",
    productPerformance: "Excellent",
    analysis: "Photo-sharing apps are highly popular.",
    citations: "Tech Journal 2023",
  },
  "blue-tech": {
    companyName: "Kiko",
    history: "Founded in 2015, Kiko is a tech startup.",
    growth: "40%",
    revenue: "$10M",
    size: "100 employees",
    productPerformance: "Good",
    analysis: "Tech startups are booming.",
    citations: "Startup Magazine 2023",
  },
  "eco-industries": {
    companyName: "Stripe",
    history: "Founded in 2010, Stripe is a payment processing company.",
    growth: "50%",
    revenue: "$5B",
    size: "3000 employees",
    productPerformance: "Outstanding",
    analysis: "Payment processing is crucial for e-commerce.",
    citations: "Finance World 2023",
  },
  "next-gen-systems": {
    companyName: "Zume",
    history: "Founded in 2015, Zume is a robotics company.",
    growth: "45%",
    revenue: "$500M",
    size: "500 employees",
    productPerformance: "Excellent",
    analysis: "Robotics is the future of manufacturing.",
    citations: "Robotics Journal 2023",
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
