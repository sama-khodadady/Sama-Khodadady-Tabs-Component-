// Tab content Component for each tab

const TabContent = ({ tabIndex, activeTab }) => {
  return (
    <div>{activeTab === tabIndex ? <h2>Content {tabIndex + 1}</h2> : null}</div>
  );
};

export default TabContent;
