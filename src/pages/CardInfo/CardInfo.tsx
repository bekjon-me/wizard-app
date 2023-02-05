import React from "react";
import styles from "./CardInfo.module.scss";
import Cleave from "cleave.js/react";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { addCard } from "../../app/InfoSlice";

export default function CardInfo() {
  const [value, setValue] = React.useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCreditCardChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length < 16) {
      alert("Card number must be 16 characters");
      return;
    }

    dispatch(addCard(value));
    navigate("/agreement");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Credit card</h2>
      <label htmlFor="creditCard">Credit Card</label>
      <Cleave
        className={styles.input}
        autoComplete="cc-number"
        placeholder="Enter your credit card number"
        options={{ creditCard: true }}
        onChange={onCreditCardChange}
        required
      />

      <button type="submit">Submit card</button>
    </form>
  );
}
