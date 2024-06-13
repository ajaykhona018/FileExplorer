import { useEffect, useState } from "react";
import "./App.css";
import FileExplorer from "./components/FileExplorer";
import { fetchData } from "./data";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const fileExplorerData = await fetchData();
      setIsLoading(false);
      setData(fileExplorerData);
    })();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      {isLoading && <div>Loading...</div>}
      {data.length > 0 && !isLoading && <FileExplorer data={data} />}
    </div>
  );
}

export default App;
