export type Errors = {
  email?: string;
  password?: string;
  general?: string;
};

export const authValidate = (email: string, password: string) => {
  const errors: Errors = {};
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const patternIsValid = pattern.test(email);
  if (!patternIsValid) {
    errors.email = "Email must be a valid, e.g. kowalski@gmail.com";
  }
  if (password.length < 5) {
    errors.password = "Password should contains min 5 characters";
  }

  const hasErrors = !patternIsValid || password.length < 5;
  return { errors, hasErrors };
};
