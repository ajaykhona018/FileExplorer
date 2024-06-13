import React, { createContext, useContext, useState } from "react";
import File from "./File";
import Folder from "./Folder";

const FileExplorerContext = createContext(null);

const FileExplorer = ({ data = [] }) => {
  const [selectedFileId, setSelectedFileId] = useState();

  return (
    <FileExplorerContext.Provider value={{ selectedFileId, setSelectedFileId }}>
      <FileExplorerRenderer data={data} />
    </FileExplorerContext.Provider>
  );
};

const FileExplorerRenderer = ({ data }) => {
  const { selectedFileId, setSelectedFileId } = useContext(FileExplorerContext);
  return (
    <div>
      {data.map(({ id, name, children }) => {
        if (children && children.length > 0) {
          return (
            <Folder name={name} key={id}>
              <FileExplorerRenderer data={children} />
            </Folder>
          );
        }

        return (
          <File
            name={name}
            key={id}
            onClick={() => setSelectedFileId(id)}
            selected={selectedFileId === id}
          />
        );
      })}
    </div>
  );
};

export default FileExplorer;
