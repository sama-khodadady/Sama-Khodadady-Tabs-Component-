import { useState, useEffect } from "react";

//Rating Componenet
const TabRating = ({ activeTab }) => {
  const storageKey = `rate_${activeTab + 1}`;

  const [rate, setRate] = useState(() => {
    const savedRate = localStorage.getItem(storageKey);
    return savedRate ? parseInt(savedRate, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, rate);
  }, [rate, storageKey]);

  const rateHandler = () => setRate((prevRate) => prevRate + 1);
  return (
    <>
      <p>Rate :</p>
      <span>{rate}</span>
      <img onClick={rateHandler} src="../public/star-solid.svg" alt="star" />
    </>
  );
};

export default TabRating;
