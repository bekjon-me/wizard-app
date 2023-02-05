import React from "react";
import { selectAuth } from "../../app/AuthSlice";
import { useAppSelector } from "../../app/hooks";
import { selectInfo } from "../../app/InfoSlice";
import { selectSubscription } from "../../app/SubscriptionSlice";
import styles from "./FinalPage.module.scss";

export default function FinalPage() {
  const { username, password } = useAppSelector(selectAuth);
  const {
    email,
    firstName,
    gender,
    isOlderThan18,
    lastName,
    birthdate,
    cardNumber,
    middleName,
  } = useAppSelector(selectInfo);

  const subscription = useAppSelector(selectSubscription);

  let subscriptionChoosen = ["Free", "Monthly", "Yearly"][
    subscription.indexOf(true)
  ];

  return (
    <div className={styles.card}>
      <h2>Your information</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Password:</strong> {password}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>First name:</strong> {firstName}
      </p>
      <p>
        <strong>Last name:</strong> {lastName}
      </p>
      {birthdate && (
        <p>
          <strong>Birth date:</strong> {birthdate}
        </p>
      )}
      {middleName && (
        <p>
          <strong>Middle name:</strong> {middleName}
        </p>
      )}
      <p>
        <strong>Gender:</strong> {gender}
      </p>
      <p>
        <strong>Card number:</strong> {cardNumber}
      </p>
      <p>
        <strong>Subscription:</strong> {subscriptionChoosen}
      </p>
    </div>
  );
}
