import React, { useCallback, useState, createContext } from "react";
import { Acomp } from "./Acomp";
// import { Search } from "./extraComp/Search";
interface props {
  title: string;
  releaseDate: string;
  memo: boolean;
}
function Movie({ title, releaseDate, memo }: props) {
  console.log(`${memo ? "<MemoizedMovie>" : "<Movie>"} rendered`);
  return (
    <div>
      <div>Movie title: {title}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}

export const AcompContext = createContext<{
  numCHange: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}>({
  numCHange: 0,
  setNum: () => {},
});

const MemoizedMovie = React.memo(Movie);

export default function Home() {
  const [title, setTitle] = useState<string>("Hear");
  const [numCHange, setNum] = useState<number>(5);
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const handleChange = useCallback(() => {
    setTitle(title + "2");
  }, [numCHange]);

  const fullName = firstName + " " + secondName;
  return (
    <>
      <AcompContext.Provider value={{ numCHange, setNum }}>
        <Acomp />
        <p> This is the incremented {numCHange}</p>
      </AcompContext.Provider>
      <MemoizedMovie
        title={title}
        releaseDate="December 15, 1995"
        memo={true}
      />
      <Movie title={title} releaseDate="December 15, 1995" memo={false} />
      <button onClick={() => handleChange()}>Check ifnum updated</button>
      <button onClick={() => setNum(numCHange + 1)}>Enable UseCallback</button>
      {/* //fact that we don't need useeffect */}
      <div className="d-flex flex-row mb-2 mt-4">
        <p className="me-5">First name: </p>
        <input onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div className="d-flex flex-row">
        <p className="me-5">Last name: </p>
        <input onChange={(e) => setSecondName(e.target.value)} />
      </div>
      <p>{fullName}</p>
      {/* <Search /> */}
    </>
  );
}
