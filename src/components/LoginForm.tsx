import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailField from "./EmailField";
import Property1Default1 from "./Property1Default1";
import RegisterButton from "./RegisterButton";
import LoginButton from "./LoginButton";
import styles from "./LoginForm.module.css";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export type LoginFormType = {
  className?: string;
};

const LoginForm: FunctionComponent<LoginFormType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (newEmail: string) => {
    form.email = newEmail // Обновление состояния электронной почты
  };

  const handlePasswordChange = (newPassword: string) => {
    form.password = newPassword // Обновление состояния электронной почты
  };

  const onRegisterButtonContainerClick = useCallback(() => {
    navigate("/register-screen");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(async () => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {"email": form.email, "password": form.password}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status !== 200) {
        throw new Error('Ошибка входа');
      }
  
      const data = await response.data;
      // Сохраняем JWT-токен в localStorage
      localStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      navigate("/flights-screen");
    } catch (error) {
      console.error(error);
      // Обработка ошибки входа, например, отображение сообщения об ошибке
    }
  }, [navigate]);

  const onForgotButtonContainerClick = useCallback(() => {
    navigate("/confirmation-screen");
  }, [navigate]);

  return (
    <div className={[styles.loginForm, className].join(" ")}>
      <div className={styles.form}>
        <EmailField onChangeEmail={handleEmailChange} />
        <Property1Default1
          property1DefaultPosition="absolute"
          property1DefaultTop="calc(50% + 20px)"
          property1DefaultLeft="1px"
          onChangePassword={handlePasswordChange}
        />
      </div>
      <div className={styles.buttons}>
        <div
          className={styles.forgotButton}
          onClick={onForgotButtonContainerClick}
        >
          <div className={styles.div}>Забыли пароль?</div>
        </div>
        <RegisterButton
          registerButtonPosition="absolute"
          registerButtonTop="calc(50% - 72.5px)"
          registerButtonLeft="302px"
          onRegisterButtonContainerClick={onRegisterButtonContainerClick}
        />
        <LoginButton
          loginButtonPosition="absolute"
          loginButtonTop="calc(50% - 72.5px)"
          loginButtonLeft="1px"
          onLoginButtonContainerClick={onLoginButtonContainerClick}
        />
      </div>
      <div className={styles.trip}>Trip</div>
    </div>
  );
};

export default LoginForm;
