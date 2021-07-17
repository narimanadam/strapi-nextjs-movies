import React, { useCallback, useState } from "react";
import getConfig from "next/config";
import Cookies from "universal-cookie";
import Router from "next/router";
import useTranslation from "next-translate/useTranslation";
import { providers, getSession, signIn } from "next-auth/client";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { Input, Button } from "@movies-app/components";
import Icon from "icons/icons";
import ICONS from "icons";

const providerStyling = {
  google: {
    hexCode: "#dd4b39",
  },
};

const Login = ({ providers, session }) => {
  const [values, setValues] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

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

  const handleLogin = useCallback(async () => {
    try {
      const loginInfo = {
        identifier: values.email,
        password: values.password,
      };

      const { publicRuntimeConfig } = getConfig();

      const login = await fetch(
        new URL(`${publicRuntimeConfig.API_URL}/auth/local`),
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        }
      );

      const loginRes = await login.json();

      const cookies = new Cookies();
      if (loginRes.error) {
        setErrorMessage(loginRes.message[0].messages[0].message);
        return;
      }

      cookies.set("jwt", loginRes.jwt, {
        path: "/",
        maxAge: 30 * 24 * 60 * 60,
      });

      cookies.set("user", loginRes.user, {
        path: "/",
      });
      Router.push("/pro");
    } catch (error) {
      console.log("Error", error);
    }
  }, [values]);

  return (
    <div className="container mx-auto mt-6">
      <form className="container grid" onSubmit={handleSubmit(handleLogin)}>
        <p className="text-red-800">{errorMessage}</p>
        <Input
          type="email"
          placeholder={t("emailAddress")}
          name="email"
          value={values.email}
          handleChange={handleChange}
          className="mb-4"
          register={register({ required: "Email Address is required" })}
          error={errors.email}
        />
        <Input
          type="password"
          placeholder={t("password")}
          name="password"
          value={values.password}
          handleChange={handleChange}
          className="mb-4"
          register={register({ required: "Password is required" })}
          error={errors.password}
        />
        <Button type="submit" className="primary">
          {t("login")}
        </Button>
        <div className="text-white text-center my-8">{t("or")}</div>

        <div className="flex flex-col items-center">
          {Object.values(providers).map((provider) => (
            <button
              type="button"
              onClick={() => signIn("facebook")}
              key={provider.name}
              style={{
                backgroundColor: providerStyling[provider.id]?.hexCode,
                color: "#fff",
                marginBottom: 16,
                padding: 16,
                borderRadius: 5,
                minWidth: 250,
              }}
            >
              <div className="flex items-center justify-center">
                <Icon icon={ICONS[provider.id]} viewBox={ICONS[provider.id]} />
                <span className="ml-3">
                  {t("loginWith")} {provider.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </form>
      <div className="text-white text-center">
        {t("newUser")}?
        <Link href="/register">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="underline"> {t("registerHere")}</a>
        </Link>
      </div>
    </div>
  );
};

Login.getInitialProps = async (context) => {
  const session = await getSession(context);
  return {
    providers: await providers(context),
    session,
  };
};

export default Login;
