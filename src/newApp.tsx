import { StrictMode, useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/main/Body";


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

             

        </>
    )

}
export default NewApp