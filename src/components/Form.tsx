import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterButton from "./RegisterButton";
import EmailField from "./EmailField";
import Property1Default1 from "./Property1Default1";
import NameField from "./NameField";
import RoleField from "./RoleField";
import styles from "./Form.module.css";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export type FormType = {
  className?: string;
};

const Form: FunctionComponent<FormType> = ({ className = "" }) => {

  
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    role: '',
  });

  const handleEmailChange = (newEmail: string) => {
    form.email = newEmail; // Обновление состояния электронной почты
  };

  const handlePasswordChange = (newPassword: string) => {
    form.password = newPassword; // Обновление состояния электронной почты
  };
  
  const handleRoleChange = (newRole: string) => {
    form.role = newRole; // Обновление состояния электронной почты
  };

  const handleNameChange = (newName: string) => {
    form.name = newName; // Обновление состояния электронной почты
  };

  const onRegisterButtonContainerClick = useCallback(async () => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, {
        "profile": {
          "name": form.name
        },
        "auth": {
          "email": form.email,
          "password": form.password,
          "role": form.role
        }}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status !== 200) {
        throw new Error('Ошибка входа');
      }
  
      const data = await response.data;
  
      navigate("/confirmation-screen");
    } catch (error) {
      console.error(error);
      // Обработка ошибки входа, например, отображение сообщения об ошибке
    }
  }, [navigate]);

  return (
    <div className={[styles.form, className].join(" ")}>
      <RegisterButton
        registerButtonPosition="absolute"
        registerButtonTop="calc(50% + 135.5px)"
        registerButtonLeft="1px"
        onRegisterButtonContainerClick={onRegisterButtonContainerClick}
      />
      <EmailField antnlobanovgmailcomTop="calc(50% - 206.5px)"
      onChangeEmail={handleEmailChange} />
      <Property1Default1
        property1DefaultPosition="absolute"
        property1DefaultTop="calc(50% - 42.5px)"
        property1DefaultLeft="1px"
        onChangePassword={handlePasswordChange}
      />
      <NameField
        nameFieldPosition="absolute"
        nameFieldTop="calc(50% - 40.5px)"
        nameFieldLeft="617px"
        onChangeName={handleNameChange}
      />
      <RoleField
        roleFieldPosition="absolute"
        roleFieldTop="calc(50% - 206.5px)"
        roleFieldLeft="617px"
        onChangeRole={handleRoleChange}
      />
    </div>
  );
};

export default Form;
