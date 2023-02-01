import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Subscription.module.scss";

export default function Subscription() {
  const [data, setData] = React.useState([true, false, false]);
  const navigate = useNavigate();

  const handleOnChange = (e: number) => {
    setData(data.map((item, index) => (index === e ? true : false)));
  };

  const handleNavigate = () => {
    navigate("/personal-info");
  };

  return (
    <div className={styles.subscription}>
      <h1 className={styles.title}>Subscription</h1>

      <div className={styles.form}>
        <label htmlFor="free">Free</label>
        <input
          type="radio"
          name="subscription"
          id="free"
          defaultChecked={true}
          onChange={(e) => handleOnChange(0)}
        />

        <label htmlFor="monthly">Monthly</label>
        <input
          type="radio"
          name="subscription"
          id="monthly"
          onChange={(e) => handleOnChange(1)}
        />

        <label htmlFor="yearly">Yearly</label>
        <input
          type="radio"
          name="subscription"
          id="yearly"
          onChange={() => handleOnChange(2)}
        />

        <button onClick={handleNavigate}>Next</button>
      </div>
    </div>
  );
}
