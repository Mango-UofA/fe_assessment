import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import DrillingLog from "./DrillingLog";

function App() {
  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      display: "flex", 
      flexDirection: "column",
      backgroundColor: "#f0f0f0"
    }}>
      <div style={{ 
        padding: "15px",
        backgroundColor: "white",
        borderBottom: "2px solid #ddd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px"
      }}>
        <h1 style={{ margin: 0, fontSize: "20px", color: "#333" }}>
          BoreDM Drilling Log - Front-End Assessment
        </h1>
        <PDFDownloadLink 
          document={<DrillingLog />} 
          fileName="Result.pdf"
          style={{
            padding: "10px 20px",
            fontSize: "14px",
            backgroundColor: "#0066cc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Generating PDF...' : 'Download Result.pdf'
          }
        </PDFDownloadLink>
      </div>
      <div style={{ flex: 1, overflow: "hidden" }}>
        <PDFViewer width="100%" height="100%" showToolbar={true}>
          <DrillingLog />
        </PDFViewer>
      </div>
    </div>
  );
}

export default App;
