import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
export const Search = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [responseVal, setResponseVal] = useState<{ [key: string]: string }>({});
  const submitSearch = () => {};
  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <button
        disabled={searchVal.length === 0}
        className="ms-4"
        onClick={() => submitSearch()}
      >
        Submit
      </button>
      {Object.keys(responseVal).length ? (
        <button className="ms-4">Download</button>
      ) : (
        <></>
      )}
    </div>
  );
};
