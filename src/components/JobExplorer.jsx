import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './JobExplorer.css';

const categories = [
  'Technology',
  'Design',
  'Marketing',
  'Writing',
  'Finance',
  'Customer Service',
  'Engineering',
  'Sales',
  'Telecommunication'
];

const jobsData = {
  Technology: [
    { id: 1, title: 'Frontend Developer', company: 'TechCorp' },
    { id: 2, title: 'Backend Developer', company: 'CodeBase' },
  ],
  Design: [
    { id: 3, title: 'UX Designer', company: 'Designify' },
    { id: 4, title: 'Graphic Designer', company: 'Creatives Inc.' },
  ],
  Marketing: [
    { id: 5, title: 'Marketing Specialist', company: 'MarketPros' },
    { id: 6, title: 'SEO Expert', company: 'SearchRank' },
  ],
  Writing: [
    { id: 7, title: 'Content Writer', company: 'WriteRight' },
    { id: 8, title: 'Copy writer', company: 'Ad Agency' },
  ],
  Finance: [
    { id: 9, title: 'Financial Analyst', company: 'Finance Guru' },
    { id: 10, title: 'Accountant', company: 'Ledger Keepers' },
  ],
  CustomerService: [
    { id: 11, title: 'Customer Support Representative', company: 'HelpDesk' },
    { id: 12, title: 'Client Relations Manager', company: 'ClientFirst' },
  ],
  Engineering: [
    { id: 13, title: 'Mechanical Engineer', company: 'MechMasters' },
    { id: 14, title: 'Civil Engineer', company: 'BuildRight' },
  ],
  Sales: [
    { id: 15, title: 'Sales Manager', company: 'SalesForce' },
    { id: 16, title: 'Sales Executive', company: 'SellWell' },
  ],
  Telecommunication: [
    { id: 17, title: 'contact centre manager', company: 'Airtel' },
    { id: 18, title: 'contact centre Executive', company: 'Jio' },
  ],
};

function JobExplorer() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setJobs(jobsData[category] || []);
  };

  const handleJobClick = (id) => {
    navigate(`/jobs/${id}`); // Navigate to job details page
  };

  return (
    <div className="job-explorer">
      <h1>Explore Jobs by Category</h1>
      <div className="category-list">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="job-list">
          <h2>Jobs in {selectedCategory}</h2>
          {jobs.length > 0 ? (
            <ul>
              {jobs.map((job) => (
                <li key={job.id} onClick={() => handleJobClick(job.id)} className="job-item">
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Currently no job vacancy.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default JobExplorer;
