import React from "react";
import styles from "./Agreement.module.scss";
import { selectAuth } from "../../app/AuthSlice";
import { useAppSelector } from "../../app/hooks";
import { selectInfo } from "../../app/InfoSlice";
import { useNavigate } from "react-router-dom";

export default function Agreement() {
  const [isAgreed, setIsAgreed] = React.useState({
    agreement: false,
    cookies: false,
  });

  const naigate = useNavigate();

  const { username } = useAppSelector(selectAuth);
  const { email } = useAppSelector(selectInfo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAgreed.agreement && isAgreed.cookies) {
      naigate("/final");
    }
  };

  return (
    <div className={styles.card}>
      <h2>Your information</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="agreement">
          The consent to personal data processing
        </label>
        <input
          type="checkbox"
          id="agreement"
          checked={isAgreed.agreement}
          onChange={(e) =>
            setIsAgreed({ ...isAgreed, agreement: e.target.checked })
          }
          required
        />
        <label htmlFor="cookies">Site uses cookies</label>
        <input
          type="checkbox"
          id="cookies"
          checked={isAgreed.cookies}
          onChange={(e) =>
            setIsAgreed({ ...isAgreed, cookies: e.target.checked })
          }
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
