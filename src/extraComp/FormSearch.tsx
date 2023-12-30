import React from "react";
import { useSearchParams } from "react-router-dom";

const FormSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div>
        Hello
        <input />
      </div>
    </>
  );
};
export default FormSearch;
