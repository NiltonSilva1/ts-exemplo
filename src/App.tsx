import { createContext } from "react";
import "./App.css";
import { Context } from "./components/Context";
import { Category, Destructuring } from "./components/Destructuring";
import { FirstComponent } from "./components/FirstComponent";
import { SecondComponent } from "./components/SecondComponent";
import { State } from "./components/State";

interface IContextValue {
  language: string;
  framework: string;
  projects: number;
}

export const appContext = createContext<IContextValue | null>(null);

function App() {
  const name: string = "Nilton";
  const age: number = 37;
  const isWorking: boolean = true;

  const userGreeting = (name: string) => {
    return `Olá, ${name}`;
  };

  const contextValue: IContextValue = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <appContext.Provider value={contextValue}>
      <div className="App">
        <h1>Hello world!!!</h1>
        <h2>nome: {name}</h2>
        <span>
          <p>Idade: {age}</p>
          {isWorking ? "Trabalhando" : "Desempregado"}
        </span>
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Pimeiro Post"
          content="Qualquer coisa..."
          commentsQty={50}
          tags={["good", "good", "good", "good"]}
          category={Category.TXT}
        />
        <Destructuring
          title="Segundo Post"
          content="Outra coisa..."
          commentsQty={50}
          tags={["Typescript", "good", "good", "good"]}
          category={Category.TS}
        />
        <State />
        <Context />
      </div>
    </appContext.Provider>
  );
}

export default App;

