import { useState, useEffect } from "react";
import styles from "./tabComponent.module.css";
import TabMenu from "./TabMenu";
import TabContent from "./TabContent";
import TabRating from "./TabRating";

// Tabs Main Component
const Tabs = ({ content }) => {
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem("activeTab");
    return savedTab ? parseInt(savedTab, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <>
      <div className={styles.tabMenu}>
        <ul>
          {content.map((item, index) => (
            <TabMenu
              key={item.id}
              tabTitle={item.tabTitle}
              tabIndex={index}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </ul>
      </div>

      <div className={styles.tabContent}>
        {content.map((item, index) => (
          <TabContent key={item.id} tabIndex={index} activeTab={activeTab} />
        ))}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          tempora quidem doloribus eligendi voluptatem nesciunt, dicta quaerat
          ea atque veniam repellat numquam exercitationem sequi est rerum quos
          alias architecto repudiandae.
        </p>
      </div>

      <div className={styles.rating}>
        {content.map((item, index) =>
          activeTab === index ? (
            <TabRating key={item.id} tabIndex={index} activeTab={activeTab} />
          ) : null
        )}
      </div>
    </>
  );
};

export default Tabs;
