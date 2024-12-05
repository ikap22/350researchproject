import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Analysis from "./pages/Analysis";
import Home from "./pages/Introduction";
import Company from "./pages/Company";
import { useParams } from "react-router-dom";

const companies = {
  "Netflix": {
    companyName: "Netflix",
    history: "Netflix was founded in 1997 as a DVD rental-by-mail service. It pivoted to streaming in 2007 and began producing original content in 2013.",
    growth: "Rapid global expansion with over 230 million subscribers as of 2023. Transitioned into a leader in the streaming industry and content production.",
    revenue: "Generated $31.6 billion in revenue in 2023, up from $1.2 billion in 2007.",
    size: "Employs approximately 12,000 people worldwide, with operations in 190 countries.",
    productPerformance: "Original series like Stranger Things and The Crown have been critical and commercial successes, bolstering subscriber retention.",
    analysis: "Netflix’s success is largely attributed to its forward-thinking management practices. Under Reed Hastings, the company embraced a culture of freedom and responsibility, empowering employees to make decisions and drive innovation. Strategic pivots, like transitioning from DVD rentals to streaming and investing heavily in original content, demonstrated management’s ability to anticipate and adapt to market trends. The leadership’s reliance on data analytics further strengthened decision-making, enabling personalized viewer experiences and optimizing content investments. By fostering a culture of autonomy, long-term thinking, and data-driven strategies, Netflix established itself as a leader in the entertainment industry.",
    citations: [
      "https://www.cbsnews.com/news/how-netflix-reinvented-entertainment-and-corporate-culture/",
      "https://www.rancord.org/netflix-inc-organizational-culture-hrm-strategic-implications",
      "https://www.culturemonkey.io/employee-engagement/netflix-culture/",
      "https://about.netflix.com/en/news/sharing-our-latest-culture-memo",
      "https://panmore.com/netflix-culture-cultural-traits-core-values-case-study",
      "https://panmore.com/netflix-culture-cultural-traits-core-values-case-study",
      "https://www.fastcompany.com/91146182/netflix-revamped-2009-memo-on-culture",
      "https://www.nbforum.com/newsroom/blog/erin-meyer-what-is-behind-the-magic-of-netflix-company-culture/",
      "https://digitopia.co/blog/netflix-culture/",
      "https://www.hbs.edu/faculty/Pages/item.aspx?num=56185"
    ]
  },
  "WeWork": {
    companyName: "WeWork",
    history: "Founded in 2010 by Adam Neumann and Miguel McKelvey as a provider of shared workspaces. It grew quickly but struggled financially, leading to a failed IPO in 2019.",
    growth: "Expanded aggressively, reaching a valuation of $47 billion before its collapse in 2019. Overexpansion and high operational costs led to significant financial instability.",
    revenue: "Reported $3.2 billion in revenue in 2019 but incurred $3.5 billion in losses the same year.",
    size: "At its peak, WeWork had 15,000 employees across 120 cities. Massive downsizing followed its decline.",
    productPerformance: "Offered flexible, modern office spaces but struggled to differentiate itself in a competitive market and failed to turn profits.",
    analysis: "Mismanagement under Neumann led to WeWork's downfall. Overexpansion, lack of financial sustainability, and leadership controversies undermined its viability. Poor corporate governance and failed IPO further damaged its reputation.",
    citations: [
      "https://www.fastcompany.com/90444597/this-is-what-really-brought-down-wework",
      "https://scottdylan.com/blog/business/wework-rise-and-fall-a-dramatic-journey-to-success-failure/",
      "https://www.noradarealestate.com/blog/why-did-wework-fail/",
      "https://abcnews.go.com/Business/caused-wework-bankruptcy-matter/story?id=104686140",
      "https://journal.businesstoday.org/bt-online/2023/learning-from-weworks-failed-attempt-to-redefine-office-space",
      "https://www.fastcompany.com/90979452/what-happened-to-wework",
      "https://thefoundersnews.com/weworks-downfall-a-startups-cautionary-tale/",
      "https://www.newyorker.com/culture/culture-desk/the-rise-and-fall-of-wework"
    ]
  },
  "DuckDuckGo": {
    companyName: "DuckDuckGo",
    history: "DuckDuckGo was created in 2008 as an alternative search engine, prioritizing user privacy and non-tracking ads.",
    growth: "The company has grown from 1 employee in 2011 to over 200 by 2024.",
    revenue: "In 2021, DuckDuckGo reached 5.8 million dollars in revenue.",
    size: "DuckDuckGo has grown to 210+ employees globally as of 2024.",
    productPerformance: "The search engine reached 1 billion searches by 2013, and since then has amassed over 3 billion monthly searches and 6 million monthly downloads.",
    analysis: "As DuckDuckGo has maintained its vision on user privacy searching, the company has been wildly successful and retained high trust from users. Internally, the company is flatly structured, and typical job titles and roles aren't formally defined. Communication and collaboration is flexible and does not rely heavily on upper management. It is also noteworthy that employee retention remained at 95% throughout 2023, notably high for the company’s size.",
    citations: [
      "https://pitchbook.com/profiles/company/58369-06#faqs",
      "https://duckduckgo.com/how-we-work",
      "https://webology.io/duckduckgo-stats-revenue-and-user-data/"
    ]
  },
  "Crowdmix": {
    companyName: "Crowdmix",
    history: "Crowdmix was founded in 2013, and promised a music streaming platform where people could listen to music together. The company spent millions in investor money, yet the app was never officially released. Crowdmix eventually filed for bankruptcy in 2016.",
    growth: "Crowdmix raised £14 million from investors in 2015. Their product grew to a staggering 0 users, as it was never released, nor was a prototype ever completed.",
    revenue: "There was no revenue. A proper economic model was never even formulated.",
    size: "Crowdmix had 160 employees at its peak. The turnover rate was incredibly high, as the company went on chaotic hiring sprees and failed to retain employees.",
    productPerformance: "The product was never fully prototyped nor released.",
    analysis: "From its conception to its bankruptcy, Crowdmix had suffered from internal mismanagement. They employed a model around developing a sales team before actually developing and deploying, leading to little prototyping. Management also had no vision for what the platform would be. Many unproductive meetings were held where employees would throw around ideas, and nothing concrete was decided on. Hiring sprees of non-tech people was commonplace, and developing a product to fulfill the increasing idea generation became infeasible. Lavish spending on offices, parties, and advertising burned through the investments, and soon employees were not receiving paychecks. Due to terrible mismanagement, lack of a clear vision, and an unproductive company culture, Crowdmix went bankrupt without having released even a working prototype.",
    citations: [
      "https://musically.com/2016/08/05/anatomy-of-a-catastrophe-the-fall-of-crowdmix/",
      "https://www.crunchbase.com/organization/crowdmix",
      "https://www.businessinsider.in/A-leaked-document-shows-that-failed-music-startup-Crowdmix-was-burning-1632-million-per-month/articleshow/54348484.cms"
    ]
  },
  "Kiko": {
    companyName: "Kiko",
    history: "Founded in 2003 by Justin Kan and Emmett Shear, Kiko was an Ajax-style online calendar application. The application provided API integration with other websites and applications on the Internet. However, Kiko only lasted for 3 years before the founders decided to pivot due to competitive pressures and the challenges of monetizing a web-based calendar application at that time. In 2006, Kiko was sold on eBay for $258,100.",
    growth: "Initially, Kiko was well received for its friendly UI and innovative use of Ajax technology. However, the application struggled to maintain its user base due to competition from Google Calendar and lack of updates.",
    revenue: "While exact revenue figures for Kiko are not publicly available, they secured one round of funding from Y Combinator for $50k.",
    size: "50 Employees (Peak)",
    productPerformance: "Kiko’s calendar app at its time was known to have one of the best UIs. The application's innovative technology allowed users to share and access their calendar from different computers.",
    analysis: "Kiko's short-lived existence can be attributed to a combination of mismanagement, intense competition, challenges in user retention, and difficulties in monetization. Despite the innovative technology and the forward-thinking approach, Kiko's management struggled with strategic decision-making, particularly in adapting to market demands and effectively monetizing the service. The founders also shared that they hired a wrong team member who affected the company’s productivity as he didn’t complete any task and disappeared for months. The operational inefficiencies and lack of a clear, sustainable business model ultimately led to its closure.",
    citations: [
      "https://www.infoworld.com/article/2328106/did-google-kill-kiko.html",
      "https://www.failory.com/cemetery/kiko",
      "https://www.ycombinator.com/companies/kiko",
      "https://finance.yahoo.com/news/twitch-founder-turned-terrible-idea-131454826.html",
      "https://www.crunchbase.com/organization/kiko"
    ]
  },
  "Instagram": {
    companyName: "Instagram",
    history: "Instagram was launched on October 6th, 2010 by Kevin Systrom. Instagram is a photo-sharing application allowing users to share their photos and apply filters to them. The application became popular and attracted millions of users leading to it being acquired by Meta in 2012.",
    growth: "Instagram has seen exponential growth since its launch. It reached 1 million users in two months, 10 million in a year, and 1 billion monthly active users by June 2018. The platform continues to grow, with over 2 billion monthly active users as of December 2021.",
    revenue: "Instagram generates significant revenue primarily through advertising. In 2023, Instagram generated an estimated $49.8 billion in revenue, accounting for almost 37% of Meta's total revenue.",
    size: "In 2024, Instagram is reported to have 20,000 employees worldwide.",
    productPerformance: "Instagram's performance is robust, with high user engagement and a strong advertising model. The platform continues to innovate with features like Instagram Stories, Reels, and IGTV, keeping users engaged and attracting new ones.",
    analysis: "At Instagram, employees are encouraged to take ownership of their projects and make decisions independently. This makes the application innovative and continuously introduces new features and updates to keep the platform engaging and competitive. In addition, Instagram and its parent company, Meta, are well known for taking care of their employees' well-being through competitive employee benefits.",
    citations: [
      "https://www.investopedia.com/articles/investing/102615/story-instagram-rise-1-photo0sharing-app.asp",
      "https://www.businessofapps.com/data/instagram-statistics/",
      "https://www.spocket.co/statistics/statistics-instagram-earnings-and-revenue"
    ]
  },
  "Stripe": {
    companyName: "Stripe",
    history: "Stripe was founded in 2010 by brothers Patrick and John Collison in San Francisco, California. The company aimed to simplify online payments by providing a seamless way for businesses to accept payments through a few lines of code. Over the years, Stripe has grown into a global financial services company, offering a wide range of products for e-commerce businesses.",
    growth: "Stripe has expanded its services to over 50 countries.",
    revenue: "In 2021, Stripe reported a gross revenue of nearly $12 billion.",
    size: "Stripe serves over one million businesses worldwide.",
    productPerformance: "Stripe processed $640 billion in payments in 2021.",
    analysis: "Stripe's management style is characterized by a focus on simplicity, innovation, and customer satisfaction. The company fosters a culture of transparency, collaboration, and continuous improvement. The leadership team emphasizes the importance of building a strong company culture and maintaining high ethical standards.",
    citations: [
      "startuptalky.com/stripe-success-story/",
      "www.forbes.com/sites/alexkonrad/2022/05/26/stripe-exclusive-interview-collison-brothers-95-billion-plan-to-stay-on-top/",
      "digitalenterprise.org/models/stripe/"
    ]
  },
  "Zume": {
    companyName: "Zume",
    history: "Zume was founded in 2015 by Alex Garden and Julia Collins with the goal of revolutionizing pizza delivery using robots. The company aimed to automate the pizza-making process and deliver pizzas cooked in GPS-equipped automated ovens. Despite initial success and significant funding, Zume faced numerous challenges and eventually shut down in 2023.",
    growth: "Zume struggled to scale its operations and faced technological difficulties.",
    revenue: "Zume's revenue was significantly lower than projected, leading to financial instability.",
    size: "The company had a limited number of operational locations compared to its initial ambitions.",
    productPerformance: "The automated pizza-making process faced numerous setbacks and failed to achieve widespread adoption.",
    analysis: "Zume's management style was marked by ambitious goals and a focus on technological innovation. However, the company's culture struggled with adaptability and resilience in the face of challenges. The leadership team faced criticism for overpromising and underdelivering, leading to a loss of investor confidence and eventual shutdown.",
    citations: [
      "www.fastcompany.com/90979001/zume-pizza-silicon-valley-445-million-robot-revolution-that-wasnt",
      "physicsworld.com/a/robot-cooked-pizza-delivered-to-your-door-heres-what-zumes-failure-tells-us/",
      "www.sfgate.com/tech/article/zume-pizza-startup-shuts-down-18136126.php"
    ]
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
