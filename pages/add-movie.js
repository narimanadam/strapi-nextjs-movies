import React, { useCallback, useState } from "react";
import Cookies from "universal-cookie";
import getConfig from "next/config";

import { Input, Button } from "@movies-app/components";

const AddMovie = () => {
  const [values, setValues] = useState({});
  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const cookies = new Cookies();
      const { publicRuntimeConfig } = getConfig();

      const jwt = cookies.get("jwt");

      const movieInfo = {
        title: values.title,
        slug: values.slug,
      };

      const add = await fetch(
        new URL(`${publicRuntimeConfig.API_URL}/movies`),
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${jwt}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(movieInfo),
        }
      );

      const addRes = await add.json();
    },
    [values]
  );

  return (
    <div className="container mx-auto">
      <h3>Add Movie</h3>
      <form onSubmit={handleSubmit} className="grid">
        <Input
          type="text"
          placeholder="Movie Title"
          name="title"
          value={values.title}
          handleChange={handleChange}
          className="mb-4"
        />
        <Input
          type="text"
          placeholder="Movie slug"
          name="slug"
          value={values.slug}
          handleChange={handleChange}
          className="mb-4"
        />
        <Button type="submit" className="primary">
          Add Movie
        </Button>
      </form>
    </div>
  );
};

export default AddMovie;
