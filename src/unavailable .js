import React from "react";

function Unavailable() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7f7f7",
        color: "#333",
        textAlign: "center",
      }}
    >
      <h1>🚫 Site Unavailable</h1>
      <p>This website is currently unavailable. Please contact developer for access!</p>
    </div>
  );
}

export default Unavailable;
