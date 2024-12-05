import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Analysis from "./pages/Analysis";
import Home from "./pages/Introduction";
import Company from "./pages/Company";
import { useParams } from "react-router-dom";

// Example company data, JSON format, AI Gen
const companies = {
  "netflix": {
    companyName: "Netflix",
    history: "Netflix was founded in 1997 as a DVD rental-by-mail service. It pivoted to streaming in 2007 and began producing original content in 2013.",
    growth: "Rapid global expansion with over 230 million subscribers as of 2023. Transitioned into a leader in the streaming industry and content production",
    revenue: "Generated $31.6 billion in revenue in 2023, up from $1.2 billion in 2007.",
    size: "7Employs approximately 12,000 people worldwide, with operations in 190 countries.",
    productPerformance: " Original series like Stranger Things and The Crown have been critical and commercial successes, increasing subscriber retention",
    analysis: "Netflix’s success is largely attributed to its forward-thinking management practices. Under Reed Hastings, the company embraced a culture of freedom and responsibility, empowering employees to make decisions and drive innovation. Strategic pivots, like transitioning from DVD rentals to streaming and investing heavily in original content, demonstrated management’s ability to anticipate and adapt to market trends. The leadership’s reliance on data analytics further strengthened decision-making, enabling personalized viewer experiences and optimizing content investments. By fostering a culture of autonomy, long-term thinking, and data-driven strategies, Netflix established itself as a leader in the entertainment industry.",
    additionalReadings: '<a href="https://www.cbsnews.com/news/how-netflix-reinvented-entertainment-and-corporate-culture/" target="_blank" rel="noopener noreferrer">How Netflix Reinvented Entertainment and Corporate Culture</a>'

  },
  "wework": {
    companyName: "WeWork",
    history: "Started in 2010, WeWork provides shared workspaces.",
    growth: "20%",
    revenue: "$2B",
    size: "5000 employees",
    productPerformance: "Good",
    analysis: "Co-working spaces are on the rise.",
    additionalReadings: "Workspace Magazine 2023",
  },
  "duckduckgo": {
    companyName: "DuckDuckGo",
    history: "Founded in 2008, DuckDuckGo is a search engine.",
    growth: "10%",
    revenue: "$100M",
    size: "200 employees",
    productPerformance: "Outstanding",
    analysis: "Privacy-focused search engines are gaining popularity.",
    additionalReadings: "Search Engine World 2023",
  },
  "crowdmix": {
    companyName: "Crowdmix",
    history: "Founded in 2014, Crowdmix is a social media platform.",
    growth: "25%",
    revenue: "$50M",
    size: "300 employees",
    productPerformance: "Good",
    analysis: "Social media continues to grow.",
    additionalReadings: "Social Media Today 2023",
  },
  "instagram": {
    companyName: "Instagram",
    history: "Founded in 2010, Instagram is a photo-sharing app.",
    growth: "35%",
    revenue: "$20B",
    size: "1000 employees",
    productPerformance: "Excellent",
    analysis: "Photo-sharing apps are highly popular.",
    additionalReadings: "Tech Journal 2023",
  },
  "kiko": {
    companyName: "Kiko",
    history: "Founded in 2015, Kiko is a tech startup.",
    growth: "40%",
    revenue: "$10M",
    size: "100 employees",
    productPerformance: "Good",
    analysis: "Tech startups are booming.",
    additionalReadings: "Startup Magazine 2023",
  },
  "stripe": {
    companyName: "Stripe",
    history: "Founded in 2010, Stripe is a payment processing company.",
    growth: "50%",
    revenue: "$5B",
    size: "3000 employees",
    productPerformance: "Outstanding",
    analysis: "Payment processing is crucial for e-commerce.",
    additionalReadings: "Finance World 2023",
  },
  "zume": {
    companyName: "Zume",
    history: "Founded in 2015, Zume is a robotics company.",
    growth: "45%",
    revenue: "$500M",
    size: "500 employees",
    productPerformance: "Excellent",
    analysis: "Robotics is the future of manufacturing.",
    additionalReadings: "Robotics Journal 2023",
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
      additionalReadings={company.additionalReadings}
    />
  );
}

export default App;
