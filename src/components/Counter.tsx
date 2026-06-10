import React from 'react';
import {useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setcount] = useState<number>(0)

    const increment =() =>{
        setcount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={classes.btn} onClick={() => increment()}>Increment</button>
        </div>
    );
};

