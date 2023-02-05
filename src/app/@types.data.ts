export type user = {
  username: string;
  password: string;
};

export type subscription = boolean[];

// - First name - required
// - Last name - required
// - Middle name - optional field
// - birthdate - optional
// - email - required + check that email is valid
// - gender - make/female (select input) - required
// - User is older than 18 (checkbox) - required
export type info = {
  firstName: string;
  lastName: string;
  middleName?: string;
  birthdate?: string;
  email: string;
  gender: string;
  isOlderThan18: boolean;
  cardNumber?: string;
};
