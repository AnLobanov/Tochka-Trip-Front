import { FunctionComponent, useMemo, useState, type CSSProperties } from "react";
import styles from "./NameField.module.css";

export type NameFieldType = {
  className?: string;

  /** Style props */
  nameFieldPosition?: CSSProperties["position"];
  nameFieldTop?: CSSProperties["top"];
  nameFieldLeft?: CSSProperties["left"];
  onChangeName?: (name: string) => void;
};

const NameField: FunctionComponent<NameFieldType> = ({
  className = "",
  nameFieldPosition,
  nameFieldTop,
  nameFieldLeft,
  onChangeName,
}) => {
  const [name, setName] = useState("");

  const nameFieldStyle: CSSProperties = useMemo(() => {
    return {
      position: nameFieldPosition,
      top: nameFieldTop,
      left: nameFieldLeft,
    };
  }, [nameFieldPosition, nameFieldTop, nameFieldLeft]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (onChangeName) {
      onChangeName(event.target.value);
    }
  };

  return (
    <div
      className={[styles.nameField, className].join(" ")}
      style={nameFieldStyle}
    >
      <div className={styles.div}>Имя и фамилия</div>
      <div className={styles.field}>
        <div className={styles.background} />
        <input className={styles.div1}           
          type="text"
          value={name}
          onChange={handleNameChange} />
      </div>
    </div>
  );
};

export default NameField;
