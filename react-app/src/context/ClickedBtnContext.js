import { createContext, useContext, useState } from 'react';

const ClickedBtnContext = createContext();

export const BtnClickedProvider = ({ children }) => {
    const [clickedBtn, setClickedBtn] = useState(null);

    return (
        <ClickedBtnContext.Provider value={{ clickedBtn, setClickedBtn }}>
            {children}
        </ClickedBtnContext.Provider>
    );
};

export const useClickedBtn = () => useContext(ClickedBtnContext);