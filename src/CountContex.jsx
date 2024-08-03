import { createContext, useState } from "react";

export const CountContex = createContext();


export const CountProvider = ({ children })=>{

const [count,setCount] = useState(0);

return(
    <CountContex.Provider value={{count,setCount}}>
        {children}
    </CountContex.Provider>
);

}



