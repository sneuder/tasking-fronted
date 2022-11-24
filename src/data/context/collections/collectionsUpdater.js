import { useState } from "react";

const CollectionsUpdater = () => {
  const [collection, setCollection] = useState(0);

  const handleSetCollection = (test) => {
    setCollection(test);
  };

  return {
    handleSetCollection,
    collection,
  };
};

export default CollectionsUpdater;
