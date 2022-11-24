import PublicRoutes from "../src/routes/public.routes";
import GlobalStyle from "./styles/globalStyle";

import CollectionsContext from "./data/context/collections/collectionsContext";
import CollectionsUpdater from "./data/context/collections/collectionsUpdater";

function App() {
  return (
    <>
      <GlobalStyle />
      <CollectionsContext.Provider value={CollectionsUpdater()}>
        <PublicRoutes />
      </CollectionsContext.Provider>
    </>
  );
}

export default App;
