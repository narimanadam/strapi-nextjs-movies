import React, { useCallback, useState } from "react";
import { Input, Textarea, Button } from "@movies-app/components";
import useTranslation from "next-translate/useTranslation";

export const ContactForm = () => {
  const { t } = useTranslation("common");
  const [values, setValues] = useState({});

  const handleChange = useCallback(
    ({ target: { value, name } }) => {
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );

  return (
    <form className="flex flex-col items-end">
      <div className="grid grid-cols-2 gap-4 mb-4 w-full">
        <Input
          type="email"
          name="email"
          value={values.email}
          placeholder={t("emailAddress")}
          handleChange={handleChange}
        />
        <Input
          type="text"
          name="subject"
          value={values.subject}
          placeholder={t("subject")}
          handleChange={handleChange}
        />
      </div>
      <Textarea
        type="text"
        name="message"
        value={values.message}
        placeholder={t("message")}
        handleChange={handleChange}
      />
      <Button type="button" className="mt-8 primary">
        {t("submitMessage")}
      </Button>
    </form>
  );
};

export default ContactForm;
