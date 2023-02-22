import React from "react";
import Header from "./components/header/Header";
import { CssVarsProvider } from "@mui/joy";


const App = () => {
    return (
        <>
            <CssVarsProvider>
                <Header />   
            </CssVarsProvider>
        </>
    )
}

export default App ;