import React, { useState } from "react";

const Accordion = ({ title, children, isDefaultExpanded = false }) => {
  const [isExpanded, setIsExpanded] = useState(isDefaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className="accordion-container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div
        className="accordion-container__header"
        style={{ display: "flex", cursor: "pointer" }}
        onClick={toggleExpanded}
      >
        <div className="accordion-container__header__indicator">
          {isExpanded ? "▼" : "▶"}
        </div>
        <div className="accordion-container__header__title">{title}</div>
      </div>

      {isExpanded && (
        <div
          className="accordion-container__content"
          style={{ paddingLeft: 10 }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
