import React from "react";
import { useSearchParams } from "react-router-dom";

const FormSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams({ search: "" });
  const searchVal = searchParams.get("search");
  console.log(searchVal);
  const searchItems: string[] = ["Computer", "Keyboard", "Mouse", "Light"];
  return (
    <>
      <div className="p-4">
        <div className=" d-flex flex-row">
          <p className="me-4">Title</p>
          <input
            onChange={(e) =>
              setSearchParams(
                (prev) => {
                  prev.set("search", e.target.value);
                  return prev;
                },
                { replace: true }
              )
            }
          />
        </div>

        <ul>
          {searchItems.map((e) =>
            e.toLowerCase().includes(searchVal!.toLowerCase()) ? (
              <li key={e}>{e}</li>
            ) : (
              <></>
            )
          )}
        </ul>
      </div>
    </>
  );
};
export default FormSearch;
