import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import './Team.style.css';
import Footer from '../Components/Footer';
import ScrollReveal from '../Components/ScrollReveal';

export default function Teams() {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    document.title = 'About US | Pakistan Textile Exchange';
    axios
      .get('https://ptxapi.io/api/team')
      .then((response) => {
        setTeamData(response.data);
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error('Error fetching team data:', error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  return (
    <>
    
      <div className="space"></div>
      <div className="space"></div>
      <h1 className="text-center">MEET THE TEAM</h1>

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ScrollReveal>
           <div className="container mt-5">
          <div className="row text-center g-4">
            {teamData.map((member, index) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                <Link to={`/team/${member.slug}`} className="text-decoration-none text-dark">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid circle team-image"
                  />
                  <h6 className="mt-2 mb-1">{member.name}</h6>
                  <p className="text-muted small">{member.designation}</p>
          
                </Link>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>
       
      )}

      <Footer />
    </>
  );
}
