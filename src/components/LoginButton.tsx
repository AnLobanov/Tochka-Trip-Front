import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LoginButton.module.css";

export type LoginButtonType = {
  className?: string;

  /** Style props */
  loginButtonPosition?: CSSProperties["position"];
  loginButtonTop?: CSSProperties["top"];
  loginButtonLeft?: CSSProperties["left"];

  /** Action props */
  onLoginButtonContainerClick?: () => void;
};

const LoginButton: FunctionComponent<LoginButtonType> = ({
  className = "",
  loginButtonPosition,
  loginButtonTop,
  loginButtonLeft,
  onLoginButtonContainerClick,
}) => {
  const loginButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: loginButtonPosition,
      top: loginButtonTop,
      left: loginButtonLeft,
    };
  }, [loginButtonPosition, loginButtonTop, loginButtonLeft]);

  return (
    <div
      className={[styles.loginButton, className].join(" ")}
      style={loginButtonStyle}
      onClick={onLoginButtonContainerClick}
    >
      <div className={styles.background} />
      <div className={styles.div}>Войти</div>
    </div>
  );
};

export default LoginButton;
