import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

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
  <div className="mt-3">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-muted" />
    <span className="text-muted">Location:</span>
    <div className="mt-2 rounded overflow-hidden" style={{ height: "200px", borderRadius: "10px" }}>
      <iframe
        title="PTX Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14477.547739742344!2d67.07720005!3d24.9216221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ec9e9bb746f%3A0x82b8f70a939bd065!2sPTX%20Office!5e0!3m2!1sen!2s!4v1715348553303!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
)}

            </div>
          </div>

          <div className="col-md-7">
            <h3 className="fw-bold ceocontent">About</h3>
            <p className="text-muted ceocontent">{member.description}</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
