import React from "react";

export default function LookBook2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px", 
      }}
    >
      <object
        data="/Docs/Zeeshan-CV.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{
          border: "none",
          overflow: "hidden", 
        }}
      >
        <div className="space"></div>
        <p>
          Your browser does not support PDFs.{" "}
          <a href="/Docs/Zeeshan-CV.pdf">Download PDF</a>
        </p>
      </object>
    </div>
  );
}
