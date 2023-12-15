import { useState } from "react";
import Show from "./components/Show";
import { createContext } from "react";
export const context = createContext();

const App = () =>
{
  const [name ,setName] = useState("Aditya");
    return<div>
        <h1> App component Called : {name} </h1>
        <button onClick={()=> setName("Sumit")} >Change Data</button>
        <context.Provider value={name}>
            <Show/>
        </context.Provider>
    </div>
}
export default App;