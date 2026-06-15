import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemesProviders";
import {AboutPage} from "pages/AboutUsPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib/classNames/classNames";



const App = () => {

    const {theme,toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {hoverd:true, selected:false}, [theme, "cls1", "cls2"])}>
            <button className="button" onClick={toggleTheme}>THEME</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                 <Routes>

                        <Route path={"/about"} element={<AboutPage/>}/>
                        <Route path={"/"} element={<MainPage/>}/>

                </Routes>
            </Suspense>
        </div>
    );
};

export default App;