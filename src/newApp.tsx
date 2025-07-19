import { StrictMode, useState, useEffect } from "react";
import Header from "./components/header/Header";
import Body from "./components/main/Body";
import Graph from "./components/graph/Graph.tsx"
import { useDataStore } from './hooks/store.ts'

function NewApp(){
        const [activeButton, setActiveButton] = useState<number | undefined>(0)
        const request = useDataStore(state => state.request)
        const setRequest = useDataStore(state => state.setRequest)
        const dataStore = useDataStore(state => state.data)
        const fetchData = useDataStore((state) => state.fetchData);

        useEffect(() => {
            // вызываем при каждом изменении города
            fetchData(request);
        }, [request]);

    return(
        
        <>
        

            <Header
                request = {request} setRequest = {setRequest}
                setActiveButton={setActiveButton}
            />
            <Body
                request = {request}
            />
            <Graph
                data={dataStore}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
            />

             

        </>
    )

}
export default NewApp