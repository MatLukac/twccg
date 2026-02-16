// src/components/SectionDivider.jsx
import React from "react";

const SectionDivider = ({
  className = "",
  dotColor = "#caa45b",
  lineColor = "rgba(43, 29, 20, 0.2)",
}) => {
  return (
    <div className={`flex items-center my-10 justify-center ${className}`}>
      <span
        className="w-24 h-px md:w-40"
        style={{ backgroundColor: lineColor }}
      />
      <span
        className="w-3 h-3 mx-4 rounded-full"
        style={{ backgroundColor: dotColor }}
      />
      <span
        className="w-24 h-px md:w-40"
        style={{ backgroundColor: lineColor }}
      />
    </div>
  );
};

export default SectionDivider;
