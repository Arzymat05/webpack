import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss'
console.log('AppLink styles:', cls);
import {Link} from "react-router-dom";
import {FC} from "react";

interface AppLinkProps{
    to?:string,
    children?: React.ReactNode,
    className?: string,
}

const AppLink:FC<AppLinkProps> = (props) => {
    const {to, children, className, ...otherProps } = props
    return (
        <Link
            className={classNames(cls.AppLink, {}, [className])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
export default AppLink
