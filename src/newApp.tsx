import { StrictMode, useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/main/Body";
import Graph from "./components/graph/Graph.tsx"
import { data } from "./components/graph/operators.ts";

function NewApp(){
        const [request, setRequest] = useState<string>('bataysk')

    return(
        
        <>
        

            <Header
                request = {request} setRequest = {setRequest}
            />
            <Body
                request = {request}
            />
            <Graph data={data}/>

             

        </>
    )

}
export default NewApp