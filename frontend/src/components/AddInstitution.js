import React, { useState } from 'react';
import axios from 'axios';
import './AddInstitution.css';

const AddInstitution = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [courses, setCourses] = useState([]);
  const [ranking, setRanking] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [institutionUrl, setInstitutionUrl] = useState('');

  const courseOptions = [
    'Computer Science',
    'Information Technology',
    'AI & ML',
    'Data Science',
    'ECE',
    'EEE',
    'Civil',
    'Mech',
  ];

  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    setCourses((prevCourses) =>
      prevCourses.includes(selectedCourse)
        ? prevCourses.filter((course) => course !== selectedCourse)
        : [...prevCourses, selectedCourse]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInstitution = {
      name,
      city,
      courses,
      ranking: parseFloat(ranking),
      image,
      description,
      institutionUrl,
    };

    axios
      .post('http://localhost:5000/api/institutions/add', newInstitution)
      .then(() => {
        alert('Institution added!');
        setName('');
        setCity('');
        setCourses([]);
        setRanking('');
        setImage('');
        setDescription('');
        setInstitutionUrl('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="add-institution-form" onSubmit={handleSubmit}>
      <label>Institution Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

      <label>City:</label>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />

      <label>Courses Offered:</label>
      <div className="checkbox-group">
        {courseOptions.map((course, index) => (
          <label key={index} className="checkbox-label">
            <input
              type="checkbox"
              value={course}
              checked={courses.includes(course)}
              onChange={handleCourseChange}
            />
            {course}
          </label>
        ))}
      </div>

      <label>Ranking:</label>
      <input type="number" value={ranking} onChange={(e) => setRanking(e.target.value)} required />

      <label>Institution Image URL:</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />


      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

      <button type="submit">Add Institution</button>
    </form>
  );
};

export default AddInstitution;
