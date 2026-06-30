import React from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemesProviders";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";



const App = () => {

    const {theme,toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {hoverd:true, selected:false}, [theme, "cls1", "cls2"])}>
            <button className="button" onClick={toggleTheme}>THEME</button>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;