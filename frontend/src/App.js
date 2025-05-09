import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import InstitutionSearch from './components/InstitutionSearch'; 
import InstitutionDetails from './components/InstitutionDetails';
import AddInstitution from './components/AddInstitution';
import InstitutionList from './components/InstitutionList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Discover Best B.Tech Institutions</h1>
          <nav>
            <Link to="/">Search Institutions</Link>
            <Link to="/list">All Institutions</Link>
            <Link to="/add">Add Institution</Link>
          </nav>
        </header>
        <main className="app-content">
          <Routes>
            <Route path="/" element={<InstitutionSearch />} />
            <Route path="/institution/:id" element={<InstitutionDetails />} />
            <Route path="/add" element={<AddInstitution />} />
            <Route path="/list" element={<InstitutionList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
