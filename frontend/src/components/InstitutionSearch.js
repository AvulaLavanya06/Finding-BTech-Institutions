import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './InstitutionSearch.css';

const InstitutionSearch = () => {
  const [city, setCity] = useState('');
  const [institutions, setInstitutions] = useState([]);

  const handleSearch = () => {
    axios
      .get(`http://localhost:5000/api/institutions/city/${city}`)
      .then((res) => setInstitutions(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="institution-search-container">
      <div className="search-input">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="institution-list">
        {institutions.map((institution) => (
          <div key={institution._id} className="institution-item">
            <img src={institution.image} alt={institution.name} />
            <h3>{institution.name}</h3>
            <p>City: {institution.city}</p>
            <p>Courses Offered: {institution.courses.join(', ')}</p>
            <p>Ranking: {institution.ranking}</p>
            <Link to={`/institution/${institution._id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionSearch;
