import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addInfo } from "../../app/InfoSlice";
import styles from "./PersonalInfo.module.scss";

export default function PersonalInfo() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [middleName, setMiddleName] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [isOlderThan18, setIsOlderThan18] = React.useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "middleName":
        setMiddleName(value);
        break;
      case "birthdate":
        setBirthdate(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "isOlderThan18":
        setIsOlderThan18(!isOlderThan18);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addInfo({
        firstName,
        lastName,
        middleName,
        birthdate,
        email,
        gender,
        isOlderThan18,
      })
    );

    navigate("/card-info");
  };

  return (
    <div className={styles.personalInfo}>
      <h1 className={styles.title}>Personal Info</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="middleName">Middle Name</label>
        <input
          type="text"
          name="middleName"
          id="middleName"
          value={middleName}
          onChange={handleOnChange}
        />

        <label htmlFor="birthdate">Birthdate</label>
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          value={birthdate}
          onChange={handleOnChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          defaultValue="male"
          onChange={(e) => handleOnChange(e)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div className={styles.checkBox}>
          <label htmlFor="isOlderThan18">I am older than 18</label>
          <input
            type="checkbox"
            name="isOlderThan18"
            id="isOlderThan18"
            required
            onChange={(e) => handleOnChange(e)}
          />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
}
