import { useEffect } from "react";
import React from "react";

export default function LookBook1() {
  useEffect(() => {
    document.title = "LookBook V1 - Pakistan Textile Exchange";
  }, []);

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
        data="/Docs/dummy.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
      >
        {/* Fallback message only shows if PDF cannot render */}
        <p>
          Your browser does not support PDFs.
          <a href="/Docs/dummy.pdf" download> Download PDF</a>
        </p>
      </object>
    </div>
  );
}
