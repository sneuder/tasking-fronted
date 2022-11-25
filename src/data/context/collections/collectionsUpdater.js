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

  const handleSetTask = (oldCollection, newTask) => {
    setCollections([
      ...collections,
      { ...oldCollection, tasks: [newTask, ...oldCollection.tasks] },
    ]);
  };

  return {
    handleSetCollection,
    handleSetTask,
    collections,
  };
};

export default CollectionsUpdater;
