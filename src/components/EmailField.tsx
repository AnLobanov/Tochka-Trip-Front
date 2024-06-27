import { FunctionComponent, useState, useMemo, type CSSProperties } from "react";
import styles from "./EmailField.module.css";

export type EmailFieldType = {
  className?: string;
  antnlobanovgmailcomTop?: CSSProperties["top"];
  onChangeEmail?: (email: string) => void; // Добавляем пропс для обработки изменения значения поля
};

const EmailField: FunctionComponent<EmailFieldType> = ({
  className = "",
  antnlobanovgmailcomTop,
  onChangeEmail, // Добавляем обработчик изменения
}) => {
  const [email, setEmail] = useState(""); // Добавляем состояние для хранения введенного адреса электронной почты

  const emailFieldStyle: CSSProperties = useMemo(() => {
    return {
      top: antnlobanovgmailcomTop,
    };
  }, [antnlobanovgmailcomTop]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value); // Обновляем состояние при изменении значения поля ввода
    if (onChangeEmail) {
      onChangeEmail(event.target.value); // Вызываем функцию обратного вызова, если она предоставлена
    }
  };

  return (
    <div
      className={[styles.emailField, className].join(" ")}
      style={emailFieldStyle}
    >
      <div className={styles.field} />
      <div className={styles.div}>Электронная почта</div>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        className={styles.antnlobanovgmailcom} // Используем тот же класс стилей, что и для статического текста
      />
    </div>
  );
};

export default EmailField;