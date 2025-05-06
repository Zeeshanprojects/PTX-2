import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "../Components/ScrollReveal";

export default function Teaminfo() {
  const { slug } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true); // Spinner state

  useEffect(() => {
    axios
      .get("https://ptxapi.io/api/team")
      .then((response) => {
        const found = response.data.find((m) => m.slug === slug);
        setMember(found);
        document.title = found ? `${found.name} | Team` : "Team Member";
        setLoading(false); // Stop spinner
      })
      .catch((error) => {
        console.error("Error fetching team data:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!member) {
    return <div className="text-center mt-5">Member not found.</div>;
  }

  return (
    <>
      <ScrollReveal>
        <div className="space"></div>
        <div className="space"></div>
        <div className="space"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 text-center">
              <div className="p-4 shadow rounded bg-light">
                <img
                  src={member.image}
                  className="team-image rounded-circle shadow"
                  alt={member.name}
                  width="150"
                  height="150"
                />
                <h4 className="mt-3 fw-bold">{member.name}</h4>
                <p className="text-muted mb-2">{member.designation}</p>

                {member.email && (
                  <p className="text-muted mb-1">
                      <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    {member.email}
                  </p>
                )}

                {member.phone && (
                  <p className="text-muted mb-1 mt-3">
                   <FontAwesomeIcon icon={faPhone} className="me-2" />
                    {member.phone}
                  </p>
                )}

                {member.address && (
                  <p className="text-muted mt-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                    {member.address}
                  </p>
                )}
              </div>
            </div>

            <div className="col-md-7">
              <h3 className="fw-bold ceocontent">About</h3>
              <p className="text-muted ceocontent">{member.description}</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <Footer />
    </>
  );
}
