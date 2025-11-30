import React, { useState } from "react";
import styles from "./login.module.scss";
import pablo from "../../assets/img/pablo-sign-in.svg";
import logo from "../../assets/img/logo.svg";

export interface LoginUIProps {}

const LoginUI: React.FC<LoginUIProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email";
    return "";
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (touched.email) {
      setErrors({ ...errors, email: validateEmail(value) });
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (touched.password) {
      setErrors({ ...errors, password: validatePassword(value) });
    }
  };

  const handleEmailBlur = () => {
    setTouched({ ...touched, email: true });
    setErrors({ ...errors, email: validateEmail(email) });
  };

  const handlePasswordBlur = () => {
    setTouched({ ...touched, password: true });
    setErrors({ ...errors, password: validatePassword(password) });
  };

  const handleSubmit = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setTouched({ email: true, password: true });
    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      console.log("Login successful:", { email, password });
      alert("Login successful!");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={logo} className={styles.logo} alt="Lendsqr logo" />
        <img src={pablo} alt="Login illustration" />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <div className={styles.baseFlexCol}>
            <h1 className={styles.formHeader}>Welcome!</h1>
            <span className={styles.formText}>Enter details to login.</span>
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.inputFlexCol}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                onKeyDown={handleKeyPress}
                className={`${styles.input} ${
                  errors.email && touched.email ? styles.inputError : ""
                }`}
              />
              {errors.email && touched.email && (
                <span className={styles.errorText}>{errors.email}</span>
              )}
            </div>

            <div className={styles.inputFlexCol}>
              <div className={styles.passwordWrapper}>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  onKeyDown={handleKeyPress}
                  className={`${styles.input} ${styles.passwordInput} ${
                    errors.password && touched.password ? styles.inputError : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.showButton}
                  tabIndex={-1}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
              {errors.password && touched.password && (
                <span className={styles.errorText}>{errors.password}</span>
              )}
            </div>

            <a href="#" className={styles.forgotPassword}>
              FORGOT PASSWORD?
            </a>

            <button onClick={handleSubmit} className={styles.submitButton}>
              LOG IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginUI };
