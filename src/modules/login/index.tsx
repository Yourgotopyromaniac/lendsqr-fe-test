import React from "react";
import styles from "./login.module.scss";
import pablo from "../../assets/img/pablo-sign-in.svg";
import logo from "../../assets/img/logo.svg";

export interface LoginUIProps {}

const LoginUI: React.FC<LoginUIProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={logo} className={styles.logo} alt="Lendsqr logo" />
        <img src={pablo} alt="Login illustration" />
      </div>
      <div></div>
    </div>
  );
};

export { LoginUI };
