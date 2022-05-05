import { useContext } from "react";
import { appContext } from "../App";

export const Context = () => {
  const details = useContext(appContext);
  return (
    <>
      {details && (
        <div>
          <h2>Linguagem: {details.language}</h2>
          <h4>Framework: {details.framework}</h4>
          <h4>Projeto(s): {details.projects}</h4>
        </div>
      )}
    </>
  );
};
