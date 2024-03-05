"use client";

import { useState } from "react";
import FormSigninComponent from "./FormSigninComponent";
import FormSignupComponent from "./FormSignupComponent";
import InfoBelowFormComponent from "./InfoBelowFormComponent";

export default function ContainerFormsComponent() {
  const [isLoginActive, setIsLoginActive] = useState(true);

  function handleChangeForm() {
    setIsLoginActive((prev) => !prev);
  }

  return (
    <>
      {isLoginActive && <FormSigninComponent />}
      {isLoginActive && (
        <InfoBelowFormComponent
          text="Você ainda não tem uma conta ?"
          titleClick="Cadastre-se já"
          handleClick={handleChangeForm}
          titleHover="Clique aqui para se cadastrar."
        />
      )}

      {!isLoginActive && <FormSignupComponent setIsLoginActive={setIsLoginActive}/>}
      {!isLoginActive && (
        <InfoBelowFormComponent
          text="Você já tem uma conta ?"
          titleClick="Faça o login"
          handleClick={handleChangeForm}
          titleHover="Clique aqui para ir ao login"
        />
      )}
    </>
  );
}
