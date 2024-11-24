
const companies = [
  { id: 1, name: "TechCorp", industry: "Technology", keyFindings: "Leading in AI innovation" },
  { id: 2, name: "EcoSolutions", industry: "Environmental", keyFindings: "Pioneering sustainable energy solutions" },
  { id: 3, name: "HealthPlus", industry: "Healthcare", keyFindings: "Breakthrough in gene therapy" },
  { id: 4, name: "FinanceHub", industry: "Finance", keyFindings: "Revolutionizing blockchain banking" },
  { id: 5, name: "EduTech", industry: "Education", keyFindings: "Transforming online learning experiences" },
  { id: 6, name: "SpaceX", industry: "Aerospace", keyFindings: "Advancing reusable rocket technology" },
  { id: 7, name: "GreenFarms", industry: "Agriculture", keyFindings: "Innovating vertical farming techniques" },
  { id: 8, name: "RoboWorks", industry: "Robotics", keyFindings: "Developing advanced humanoid robots" },
  { id: 9, name: "VirtualReality", industry: "Entertainment", keyFindings: "Creating immersive VR experiences" },
  { id: 10, name: "SecureNet", industry: "Cybersecurity", keyFindings: "Pioneering quantum encryption methods" },
];

const contentDiv = document.getElementById('content');

function showIntroPage() {
  contentDiv.innerHTML = `
      <p>Welcome to our presentation on the findings from our research on 10 innovative companies.
      Click on a company name below to view its details.</p>
      <div id="company-list"></div>
  `;

  const companyList = document.getElementById('company-list');
  companies.forEach(company => {
      const button = document.createElement('button');
      button.textContent = company.name;
      button.addEventListener('click', () => showCompanyPage(company));
      companyList.appendChild(button);
  });
}

function showCompanyPage(company) {
  contentDiv.innerHTML = `
      <div class="company-card">
          <h2>${company.name}</h2>
          <p><strong>Industry:</strong> ${company.industry}</p>
          <p><strong>Key Findings:</strong> ${company.keyFindings}</p>
      </div>
      <button id="back-button">Back to Home</button>
  `;

  document.getElementById('back-button').addEventListener('click', showIntroPage);
}

// Initialize the app
showIntroPage();

