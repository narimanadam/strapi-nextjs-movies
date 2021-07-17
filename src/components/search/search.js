import React from "react";

import { Input } from "@movies-app/components";

export const Search = ({ handleSearch, placeholder, style }) => {
  return (
    <form>
      <Input
        type="text"
        placeholder={placeholder}
        handleChange={handleSearch}
        className={style}
      />
    </form>
  );
};

export default Search;
