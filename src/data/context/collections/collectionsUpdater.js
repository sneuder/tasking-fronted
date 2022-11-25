import { useEffect, useState, useMemo } from "react";
import manageLocalStorage, { idStorages } from "../../utils/manageLocalStorage";

const CollectionsUpdater = () => {
  const [collections, setCollections] = useState(
    manageLocalStorage.getInfo(idStorages.firstOption) || []
  );

  useEffect(() => {
    manageLocalStorage.saveInfo(idStorages.firstOption, collections);
  }, [collections]);

  const handleSetCollection = (newCollection) => {
    setCollections([newCollection, ...collections]);
  };

  return {
    handleSetCollection,
    collections,
  };
};

export default CollectionsUpdater;
