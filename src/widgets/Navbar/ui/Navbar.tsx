import {classNames} from "shared/lib/classNames/classNames";
import * as cls from './navbar.module.scss'
import React from "react";
import AppLink from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string,
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={"/"} className={cls.mainlink}>Главная</AppLink>
                <AppLink to={"/about"}>О нас</AppLink>
            </div>
        </div>
    );
};