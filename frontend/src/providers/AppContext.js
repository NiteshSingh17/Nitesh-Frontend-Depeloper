
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { APIS } from '../utils/apis';

const initialState = {}
const AppContext = createContext(initialState)

export const AppProvider = (props) => {
    const [ isCapsuleLoading, setIsCapsuleLoading ] = useState(false);
    const [ capsules, setCapsules ] = useState([]);

    const getCapsules = useCallback(async (data, successCallback) => {
        setIsCapsuleLoading(true);
        const capsulesData = await APIS.getCapsules(data);
        if(capsulesData.error){
            alert(capsulesData.message || "Failed to get Data");
        }else{
            setCapsules(capsulesData);
            setIsCapsuleLoading(false);
            if(successCallback){
                successCallback(capsulesData)
            }
        }
    },[setIsCapsuleLoading, setCapsules])

    const value = useMemo( () => ({
        capsules,
        isCapsuleLoading,
        getCapsules: getCapsules
    }));

    return <AppContext.Provider value={value}>
        {
            props.children
        }
    </AppContext.Provider>
}

export default function useAppContext() {
    const appValue = useContext(AppContext)
    return appValue
}
