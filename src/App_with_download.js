import React from "react";
import ReactDOM from "react-dom/client";
import { pdf } from "@react-pdf/renderer";
import DrillingLog from "./DrillingLog";

// Function to generate and download the PDF
const generatePDF = async () => {
  const blob = await pdf(<DrillingLog />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Result.pdf";
  link.click();
  URL.revokeObjectURL(url);
};

function App() {
  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      boxSizing: "border-box"
    }}>
      <div style={{ marginBottom: "20px" }}>
        <button 
          onClick={generatePDF}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#0066cc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Download Result.pdf
        </button>
      </div>
      <div style={{ 
        width: "100%", 
        height: "calc(100% - 60px)",
        border: "1px solid #ccc",
        borderRadius: "5px",
        overflow: "hidden"
      }}>
        <iframe 
          src="/pdf-viewer" 
          style={{ width: "100%", height: "100%", border: "none" }}
          title="PDF Preview"
        />
      </div>
    </div>
  );
}

export default App;
