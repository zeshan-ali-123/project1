import React from 'react';
import Navbar from './Navbar';
import './About.css'; // Import the CSS file

function About() {
  return (
    <body>
      <div className="about-container">
        <Navbar />
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Welcome to JobSearch, your number one source for all job-related opportunities. We're dedicated to providing you with the very best job listings, with a focus on reliability, user experience, and comprehensive job details.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to connect job seekers with their dream jobs and help employers find the best talent. We aim to make the job search process as seamless and efficient as possible.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We believe in honest and transparent job listings.</li>
            <li><strong>Innovation:</strong> We continuously improve our platform to offer the best user experience.</li>
            <li><strong>Community:</strong> We foster a supportive community for both job seekers and employers.</li>
          </ul>
          <h2>Features</h2>
          <ul>
            <li>Comprehensive job listings from various industries.</li>
            <li>Advanced search filters to find the perfect job.</li>
            <li>User-friendly interface for an excellent user experience.</li>
            <li>Resources and tips for job seekers.</li>
            <li>Employer tools to post jobs and find suitable candidates.</li>
          </ul>
          <h2>Meet Our Team</h2>
          <p>
            Our team is made up of passionate professionals dedicated to helping you find your next job. From developers to customer support, every team member plays a crucial role in making JobSearch the best job search platform.
          </p>
        </div>
      </div>
    </body>
  );
}

export default About;
