import { createContext, useContext, useState } from 'react';

const AppContext = createContext();


export const AppContextProvider = ({ children }) => {
    const [isCard1, setIsCard1] = useState(false);
    const [isCard2, setIsCard2] = useState(false);

    const toggleOpen1 = () => {
        setIsCard1(!isCard1)
    }


    const toggleOpen2 = () => {
        setIsCard2(!isCard2)
    }


    const value = {
        isCard1,
        isCard2,
        toggleOpen1,
        toggleOpen2
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};


export const useAppContext = () => {
    return useContext(AppContext);
};