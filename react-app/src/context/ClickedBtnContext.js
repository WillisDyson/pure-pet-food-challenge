import { createContext, useContext, useState } from 'react';

const ClickedBtnContext = createContext();

export const BtnClickedProvider = ({ children }) => {
    const [clickedBtn, setClickedBtn] = useState(null);

    return (

        // The clicked button state data is passed in through ContextProvier and made global.
        <ClickedBtnContext.Provider value={{ clickedBtn, setClickedBtn }}>
            {children}
        </ClickedBtnContext.Provider>
    );
};

export const useClickedBtn = () => useContext(ClickedBtnContext);