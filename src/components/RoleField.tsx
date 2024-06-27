import { FunctionComponent, useMemo, useState, type CSSProperties } from "react";
import styles from "./RoleField.module.css";

export type RoleFieldType = {
  className?: string;

  /** Style props */
  roleFieldPosition?: CSSProperties["position"];
  roleFieldTop?: CSSProperties["top"];
  roleFieldLeft?: CSSProperties["left"];
  onChangeRole?: (role: string) => void;
};

const RoleField: FunctionComponent<RoleFieldType> = ({
  className = "",
  roleFieldPosition,
  roleFieldTop,
  roleFieldLeft,
  onChangeRole,
}) => {
  const [role, setRole] = useState("");

  const roleFieldStyle: CSSProperties = useMemo(() => {
    return {
      position: roleFieldPosition,
      top: roleFieldTop,
      left: roleFieldLeft,
    };
  }, [roleFieldPosition, roleFieldTop, roleFieldLeft]);

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole(event.target.value);
    if (onChangeRole) {
      onChangeRole(event.target.value);
    }
  };

  return (
    <div
      className={[styles.roleField, className].join(" ")}
      style={roleFieldStyle}
    >
      <div className={styles.div}>Роль</div>
      <div className={styles.field}>
        <div className={styles.background} />
        <input 
          className={styles.admin}
          type="text"
          value={role}
          onChange={handleRoleChange} />
      </div>
    </div>
  );
};

export default RoleField;
