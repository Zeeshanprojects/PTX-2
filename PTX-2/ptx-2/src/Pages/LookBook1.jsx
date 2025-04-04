import { useEffect } from "react";
import React from "react";

export default function LookBook1() {
  useEffect(()=>{
    document.title="LookBook V1- Pakistan Textile Exchange"
  })
  return (
    <>
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden", // Prevents extra scrollbar
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "60px", // Adjust based on navbar height

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
      ><div className="space"></div>
        <p>
          Your browser does not support PDFs.{" "}
          <a href="/Docs/Zeeshan-CV.pdf">Download PDF</a>
        </p>
      </object>
    </div>
    </>
   
  );
}
