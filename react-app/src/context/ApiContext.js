import { createContext, useContext, useState, useEffect } from 'react';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {

    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleApiDataFetch = async () => {
        try {
            const returnedApiData = await fetch('/api');
            if (!returnedApiData.ok) {
                throw new Error("Network did not return 'OK' response");
            }
            const data = await returnedApiData.json();
            setApiData(data);
            console.log('API data fetch successful');
        } catch (error) {
            console.error('Error fetching data:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleApiDataFetch();
    }, []);

    return (
        <ApiContext.Provider value={{ apiData, loading }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => useContext(ApiContext);