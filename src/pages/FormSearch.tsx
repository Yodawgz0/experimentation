import React, { useReducer } from "react";
import { useSearchParams } from "react-router-dom";

// Define the reducer function
const searchReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

const FormSearch = () => {
  const [state, dispatch] = useReducer(searchReducer, { search: "" });
  const { search } = state;

  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const searchVal: string | null = searchParams.get("search");
  // Update the search parameter in the state
  const setSearch = (value) => {
    dispatch({ type: "SET_SEARCH", payload: value });
  };

  // Update the search parameter in the URL using setSearchParams
  const updateSearchParams = (value) => {
    setSearchParams(
      (prev) => {
        prev.set("search", value);
        return prev;
      },
      { replace: true }
    );
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);
    updateSearchParams(newValue);
  };

  const searchItems: string[] = ["Computer", "Keyboard", "Mouse", "Light"];

  return (
    <>
      <div className="p-4">
        <div className="d-flex flex-row">
          <p className="me-4">Title</p>
          <input onChange={handleInputChange} value={search} />
        </div>
        <ul>
          {searchItems.map((item) =>
            item.toLowerCase().includes(search.toLowerCase()) ? (
              <li key={item}>{item}</li>
            ) : (
              <React.Fragment key={item}></React.Fragment>
            )
          )}
        </ul>
        <p>{searchVal}</p>
      </div>
    </>
  );
};

export default FormSearch;
