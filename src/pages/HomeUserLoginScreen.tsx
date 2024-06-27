import { FunctionComponent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import styles from "./HomeUserLoginScreen.module.css";
import axios from "axios";

const HomeUserLoginScreen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLoadingInfo = useCallback(async () => {
    if (localStorage.getItem('access_token') !== null) {
      navigate("/flights-screen");
    }
  }, [navigate])

  useEffect(() => {
    onLoadingInfo()
  }, [])

  return (
    <div className={styles.homeUserLoginScreen}>
      <LoginForm />
      <img className={styles.globeIcon} alt="" src="/globe.svg" />
    </div>
  );
};

export default HomeUserLoginScreen;
