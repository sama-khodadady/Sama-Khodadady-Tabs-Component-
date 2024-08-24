import Toolbar from "./Toolbar";
import Tabs from "./Tabs";

const App = () => {
  const contents = [
    { id: 1, tabTitle: "TAB 1" },
    { id: 2, tabTitle: "TAB 2" },
    { id: 3, tabTitle: "TAB 3" },
    { id: 4, tabTitle: "TAB 4" },
  ];

  return (
    <>
      <Toolbar title="Tabs Component with React" />
      <Tabs content={contents} />
    </>
  );
};

export default App;
