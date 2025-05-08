/** ⚠️ Do not remove!*/
// @ts-nocheck

import { useEffect, useState, useMemo } from "react";
import { Search, Results } from "@Components/index";
import { mockApiRequest } from "@Lib/mockApiRequest";

import "../styles/globals.css";

const App = () => {
  const [items, setItems] = useState();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(async () => {
    const data = await mockApiRequest({ delayInSeconds: 2 });
    setItems(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (items?.length && searchTerm !== "") {
      setItems(items?.filter((item) => item.title.includes(searchTerm)));
    }
  }, [searchTerm]);

  return (
    <div className="app">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Results items={items} isLoading={isLoading} hasError={hasError} />
    </div>
  );
};

export default App;
