import { useEffect, useState } from "react";
import React from "react";

export default function LookBook1() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = "LookBook V1 - Pakistan Textile Exchange";

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set on first load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <br />

      <div
        className="mt-5 p-0"
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "60px",
          padding: "20px",
          boxSizing: "border-box",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {isMobile ? (
          <>
            <p>This document is best viewed on desktop.</p>
            <a
              href="/Docs/catalog.pdf"
              download
              style={{
                padding: "10px 20px",
                backgroundColor: "#000",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
              }}
            >
              Download PDF
            </a>
          </>
        ) : (
          <object
            data="/Docs/catalog.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          >
            <p>
              Your browser does not support PDFs.
              <a href="/Docs/catalog.pdf" download>
                {" "}
                Download PDF
              </a>
            </p>
          </object>
        )}
      </div>
    </>
  );
}
