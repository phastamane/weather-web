import { StrictMode, useState, useEffect } from "react";
import Header from "./components/header/Header";
import Body from "./components/main/Body";
import Map from "./components/main/map/Map.tsx";
import Graph from "./components/graph/Graph.tsx"
import ThreeDaysForecast from "./components/forecasts/threeDaysForecast/ThreeDaysForecast.tsx";
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
         <StrictMode>

            <div className="components">
                    <Header
                        request = {request} setRequest = {setRequest}
                        setActiveButton={setActiveButton}
                    />

               <div className="columns">
                    <div className="left-column">
    
                        <Body
                            request = {request}
                        />

                            <Graph
                                data={dataStore}
                                activeButton={activeButton}
                                setActiveButton={setActiveButton}
                            />

                    </div>
                    <div className="right-column">
                        
                        {<Map city={request} />}

                        <div className="three-days-div">
                            
                            {[...Array(3)].map((_, i) => <ThreeDaysForecast key = {i} index = {i + 1}/>)}

                        </div>
                    </div>
               </div>
            </div>

        </StrictMode>

        </>
        
    )

}
export default NewApp