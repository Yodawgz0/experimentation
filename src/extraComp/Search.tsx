import React, { useState } from "react";

export const Search = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [responseVal, setResponseVal] = useState<{ [key: string]: string }>({});

  const submitSearch = () => {
    fetch(`http://localhost:8000/${searchVal}`)
      .then((data) => data.json())
      .then((res) => {
        setResponseVal(res);
      })
      .catch((err) => console.log(err));
  };
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
