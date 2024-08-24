import styles from "./tabComponent.module.css";

//Toolbar Component
const Toolbar = ({ title }) => {
  return (
    <div className={styles.toolbar}>
      <h1>{title}</h1>
    </div>
  );
};

export default Toolbar;
