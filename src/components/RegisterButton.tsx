import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./RegisterButton.module.css";

export type RegisterButtonType = {
  className?: string;

  /** Style props */
  registerButtonPosition?: CSSProperties["position"];
  registerButtonTop?: CSSProperties["top"];
  registerButtonLeft?: CSSProperties["left"];

  /** Action props */
  onRegisterButtonContainerClick?: () => void;
};

const RegisterButton: FunctionComponent<RegisterButtonType> = ({
  className = "",
  registerButtonPosition,
  registerButtonTop,
  registerButtonLeft,
  onRegisterButtonContainerClick,
}) => {
  const registerButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: registerButtonPosition,
      top: registerButtonTop,
      left: registerButtonLeft,
    };
  }, [registerButtonPosition, registerButtonTop, registerButtonLeft]);

  return (
    <div
      className={[styles.registerButton, className].join(" ")}
      style={registerButtonStyle}
      onClick={onRegisterButtonContainerClick}
    >
      <div className={styles.registerButtonChild} />
      <div className={styles.div}>Регистрация</div>
    </div>
  );
};

export default RegisterButton;
