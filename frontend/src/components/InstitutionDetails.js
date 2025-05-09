import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './InstitutionDetails.css';

const InstitutionDetails = () => {
  const { id } = useParams();
  const [institution, setInstitution] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/institutions/${id}`)
      .then((res) => setInstitution(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!institution) return <div className="loading">Loading...</div>;

  return (
    <div className="institution-details-container">
      <h2>{institution.name}</h2>

      {/* Institution Image */}
      <img src={institution.image} alt={institution.name} className="institution-image" />

      <div className="details-info">
        <p><strong>City:</strong> {institution.city}</p>
        <p><strong>Ranking:</strong> {institution.ranking}</p>
        <p><strong>Description:</strong> {institution.description}</p>

        {/* Display Courses as List */}
        <p><strong>Courses Offered:</strong></p>
        <ul className="course-list">
          {institution.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default InstitutionDetails;
