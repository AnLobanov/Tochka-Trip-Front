import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import styles from "./ConfirmationScreen.module.css";

const ConfirmationScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.confirmationScreen}>
      <img className={styles.globeIcon} alt="" src="/globe.svg" />
      <div className={styles.tripParent}>
        <div className={styles.trip}>Trip</div>
        <div className={styles.confirmationMessage}>
          <div className={styles.div}>
            <span className={styles.txt}>
              <p className={styles.p}>Отправили письмо вам на почту</p>
              <p className={styles.p}>
                Проверьте папки “Входящее” и “Спам” для подтверждения
                электронной почты
              </p>
            </span>
          </div>
          <LoginButton
            loginButtonPosition="absolute"
            loginButtonTop="calc(50% + 93px)"
            loginButtonLeft="1px"
            onLoginButtonContainerClick={onLoginButtonContainerClick}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
