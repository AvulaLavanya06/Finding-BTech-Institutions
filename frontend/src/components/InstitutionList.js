import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './InstitutionList.css';

const InstitutionList = () => {
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/institutions')
      .then((res) => setInstitutions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="institution-list-container">
      <h2>All Institutions</h2>
      <div className="institution-list">
        {institutions.map((institution) => (
          <div key={institution._id} className="institution-item">
            {/* Institution Image */}
            <img src={institution.image} alt={institution.name} className="institution-image" />

            {/* Institution Details */}
            <h3>{institution.name}</h3>
            <p><strong>City:</strong> {institution.city}</p>
            <p><strong>Ranking:</strong> {institution.ranking}</p>

            {/* Display Courses */}
            <p><strong>Courses Offered:</strong></p>
            <ul className="course-list">
              {institution.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>

            {/* View Details Button */}
            <Link to={`/institution/${institution._id}`} className="view-details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionList;
