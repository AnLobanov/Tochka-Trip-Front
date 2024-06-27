import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EmailField from "./EmailField";
import RestoreButton from "./RestoreButton";
import styles from "./RestoreForm.module.css";

export type RestoreFormType = {
  className?: string;
};

const RestoreForm: FunctionComponent<RestoreFormType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onRestoreButtonContainerClick = useCallback(() => {
    navigate("/confirmation-screen");
  }, [navigate]);

  return (
    <div className={[styles.restoreForm, className].join(" ")}>
      <div className={styles.form}>
        <EmailField antnlobanovgmailcomTop="calc(50% - 62px)" />
      </div>
      <RestoreButton
        restoreButtonWidth="566px"
        restoreButtonPosition="absolute"
        restoreButtonTop="calc(50% + 139px)"
        restoreButtonLeft="0px"
        onRestoreButtonContainerClick={onRestoreButtonContainerClick}
      />
      <div className={styles.trip}>Trip</div>
    </div>
  );
};

export default RestoreForm;
