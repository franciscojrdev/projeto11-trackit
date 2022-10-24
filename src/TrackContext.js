import { createContext, useState } from "react";

const TrackContext = createContext();

export function TrackProvider({children}){
    const [user, setUser] = useState([]);

    return (
        <TrackContext.Provider value={{setUser,user}}>{children}</TrackContext.Provider>
    )
}

export default TrackContext;