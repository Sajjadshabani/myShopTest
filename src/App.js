import React from "react";
import Header from "./components/header/Header";
import { CssVarsProvider } from "@mui/joy";
import Home from "./components/home/Home";


const App = () => {
    return (
        <>
            <CssVarsProvider>
                <Header />   
                <Home/>
            </CssVarsProvider>
        </>
    )
}

export default App ;