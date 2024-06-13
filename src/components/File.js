import React from "react";

const File = ({ name, selected, onClick }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        ...(selected ? { border: "1px solid" } : {}),
      }}
      onClick={onClick}
    >
      • {name}
    </div>
  );
};

export default File;
