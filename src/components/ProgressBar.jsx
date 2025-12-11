import React from "react";


export default function ProgressBar({ progress }) {
  return (
    <div style={{
      width: "100%",
      background: "#eee",
      height: "10px",
      borderRadius: "5px",
      margin: "10px 0"
    }}>
      <div
        style={{
          width: `${progress}%`,
          background: "#4f46e5",
          height: "100%",
          borderRadius: "5px",
          transition: "0.3s"
        }}
      ></div>
    </div>
  );
}



