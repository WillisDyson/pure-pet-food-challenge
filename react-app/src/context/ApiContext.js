import { createContext, useContext, useState, useEffect } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const [apiData, setApiData] = useState();

    const handleApiDataFetch = async () => {
        try {
            const returnedApiData = await fetch('/api');
            if (!returnedApiData.ok) {
                throw new Error("Network did not return 'OK' response");
            }
            const data = await returnedApiData.json();
            setApiData(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        handleApiDataFetch();
    }, []);

    return (
        <ApiContext.Provider value={{ apiData, handleApiDataFetch }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => useContext(ApiContext);