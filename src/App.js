import { useState } from "react";
import Components from "./testingComponents";

const App = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const { AButton, Drawer } = Components;

  return (
    <div id="root-div" className="App">
      <AButton
        clickHandler={() => setShowDrawer(!showDrawer)}
        label="Open Drawer"
      />
      <Drawer
        isDrawerOpen={showDrawer}
        closeDrawer={() => setShowDrawer(false)}
      />
    </div>
  );
};

export default App;
