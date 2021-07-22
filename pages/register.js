import React, { useCallback, useState } from "react";
import getConfig from "next/config";
import Cookies from "universal-cookie";
import Router from "next/router";
import useTranslation from "next-translate/useTranslation";
import { providers } from "next-auth/client";
import { useForm } from "react-hook-form";

import { Input, Button } from "@movies-app/components";

const Register = () => {
  const [values, setValues] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const { t } = useTranslation("common");

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );

  const handleRegister = useCallback(async () => {
    try {
      const registerInfo = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      const { publicRuntimeConfig } = getConfig();

      const registerUser = await fetch(
        new URL(`${publicRuntimeConfig.API_URL}/auth/local/register`),
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerInfo),
        }
      );

      const registerRes = await registerUser.json();

      const cookies = new Cookies();
      if (registerRes.error) {
        setErrorMessage(registerRes.message[0].messages[0].message);
        return;
      }
      cookies.set("jwt", registerRes.jwt, {
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });
      Router.push("/pro");
    } catch (error) {
      console.log("Error", error);
    }
  }, [values]);

  return (
    <div className="container mx-auto mt-6">
      <form className="container grid" onSubmit={handleSubmit(handleRegister)}>
        <p className="text-red-800">{errorMessage}</p>
        <Input
          type="text"
          placeholder={t("username")}
          name="username"
          value={values.username}
          handleChange={handleChange}
          className="mb-4"
          register={register({ required: "Username is required" })}
          error={errors.username}
        />
        <Input
          type="email"
          placeholder={t("emailAddress")}
          name="email"
          value={values.email}
          handleChange={handleChange}
          className="mb-4"
          register={register({
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/,
              message: "Invalid Email Format",
            },
          })}
          error={errors.email}
        />

        <Input
          type="password"
          placeholder={t("password")}
          name="password"
          value={values.password}
          handleChange={handleChange}
          className="mb-4"
          register={register({
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          error={errors.password}
        />
        <Button type="submit" className="primary">
          {t("register")}
        </Button>
      </form>
    </div>
  );
};

Register.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};

export default Register;
