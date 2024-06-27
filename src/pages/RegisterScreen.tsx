import { FunctionComponent } from "react";
import Form from "../components/Form";
import styles from "./RegisterScreen.module.css";

const RegisterScreen: FunctionComponent = () => {
  return (
    <div className={styles.registerScreen}>
      <div className={styles.info}>
        <div className={styles.trip}>Trip</div>
        <div className={styles.registerForm}>
          <Form />
        </div>
      </div>
      <img className={styles.globeIcon} alt="" src="/globe.svg" />
    </div>
  );
};

export default RegisterScreen;
