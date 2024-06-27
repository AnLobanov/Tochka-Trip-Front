import { FunctionComponent, useMemo, useState, type CSSProperties } from "react";
import styles from "./Property1Default1.module.css";

export type Property1Default1Type = {
  className?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  property1DefaultTop?: CSSProperties["top"];
  property1DefaultLeft?: CSSProperties["left"];
  onChangePassword?: (password: string) => void;
};

const Property1Default1: FunctionComponent<Property1Default1Type> = ({
  className = "",
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  onChangePassword,
}) => {
  const [password, setPassword] = useState("");

  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [property1DefaultPosition, property1DefaultTop, property1DefaultLeft]);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (onChangePassword) {
      onChangePassword(event.target.value);
    }
  };

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={property1DefaultStyle}
    >
      <div className={styles.div}>Пароль</div>
      <div className={styles.field}>
        <div className={styles.background} />
        <input 
          className={styles.qwerty123} 
          type="password"
          value={password}
          onChange={handlePasswordChange}  
          />
      </div>
    </div>
  );
};

export default Property1Default1;
