import { FunctionComponent } from "react";
import RestoreForm from "../components/RestoreForm";
import styles from "./ForgotScreen.module.css";

const ForgotScreen: FunctionComponent = () => {
  return (
    <div className={styles.forgotScreen}>
      <RestoreForm />
      <img className={styles.globeIcon} alt="" src="/globe.svg" />
    </div>
  );
};

export default ForgotScreen;
