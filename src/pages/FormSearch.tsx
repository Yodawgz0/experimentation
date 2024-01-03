import React from "react";
import { useSearchParams } from "react-router-dom";

const FormSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div>
        <input onChange={(e) => setSearchParams(e.target.value)} />
      </div>
    </>
  );
};
export default FormSearch;
