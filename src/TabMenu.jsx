import React from "react";
import styles from "./tabComponent.module.css";

//tab Menus Component
const TabMenu = ({ tabTitle, tabIndex, activeTab, setActiveTab }) => {
  const tabChange = () => {
    setActiveTab(tabIndex);
  };
  return (
    <li>
      <a
        href="#"
        onClick={tabChange}
        className={activeTab === tabIndex ? styles.active : null}
      >
        {tabTitle}
      </a>
    </li>
  );
};

export default TabMenu;
