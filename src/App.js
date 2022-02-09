import "bootstrap/dist/css/bootstrap.min.css";
import { createContext } from "react";
import "./App.css";
import Home from "./components/Home/Home";

export const DataProvider = createContext();

function App() {


   
  return (
    <DataProvider.Provider value={'Ariful Islam'}>
      <div className="">
        <Home />
      </div>
    </DataProvider.Provider>
  );
}

export default App;
