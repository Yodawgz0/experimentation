import React, { useCallback, useState, createContext } from "react";
import { Acomp } from "./extraComp/Acomp";
import "./styles.css";
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

export const AcompContext = createContext();

const MemoizedMovie = React.memo(Movie);

export default function App() {
  const [title, setTitle] = useState<string>("Hear");
  const [numCHange, setNum] = useState<number>(5);

  const handleChange = useCallback(() => {
    setTitle(title + "2");
  }, [numCHange]);
  return (
    <>
      <AcompContext.Provider value={{ numCHange, setNum }}>
        <MemoizedMovie
          title={title}
          releaseDate="December 15, 1995"
          memo={true}
        />
        <Movie title={title} releaseDate="December 15, 1995" memo={false} />
        <button onClick={() => handleChange()}>Check ifnum updated</button>
        <button onClick={() => setNum(numCHange + 1)}>
          Enable UseCallback
        </button>

        <Acomp />
        <button>{numCHange}</button>
      </AcompContext.Provider>
    </>
  );
}
