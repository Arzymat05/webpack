import React from 'react'
import {createRoot} from 'react-dom/client'
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeContextProvider} from "app/providers/ThemesProviders";

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
    <BrowserRouter>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </BrowserRouter>
)

