import React, {Suspense} from 'react';
import {Counter} from "./components/Counter";
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutUsPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {AboutPageAsync} from "./pages/AboutUsPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";


const App = () => {
    return (
        <div>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                 <Routes>

                        <Route path={"/about"} element={<AboutPageAsync/>}/>
                        <Route path={"/"} element={<MainPageAsync/>}/>

                </Routes>
            </Suspense>
        </div>
    );
};

export default App;