import { StrictMode, useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/main/Body";
import Map from "./components/main/map/Map";

function NewApp(){
        const [request, setRequest] = useState<string>('rostov-na-donu')
    return(
        
        <>
        

            <Header
                request = {request} setRequest = {setRequest}
            />
            <Body
                request = {request}
            />

             

        </>
    )

}
export default NewApp