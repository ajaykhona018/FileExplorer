import React from "react";
import Accordion from "./Accordion";

const Folder = ({ name, children }) => {
  return (
    <Accordion title={name} isDefaultExpanded>
      {children}
    </Accordion>
  );
};

export default Folder;
