import { FunctionComponent } from "react";
import styles from "./Actions.module.css";

export type ActionsType = {
  className?: string;
};

const Actions: FunctionComponent<ActionsType> = ({ className = "" }) => {
  return (
    <div className={[styles.actions, className].join(" ")}>
      <div className={styles.status}>
        <div className={styles.background} />
        <div className={styles.div}>Ожидает подтверждения</div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.payButton}>
          <div className={styles.background1} />
          <div className={styles.div1}>Отменить</div>
        </div>
        <div className={styles.status1}>
          <div className={styles.background2} />
          <div className={styles.div2}>Подтвердить</div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
