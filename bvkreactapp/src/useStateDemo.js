import React from "react";
import { useState } from 'react';

function UseStateDemo(){
    const[name, USSetName]=useState('Use State Demo form functional Component');
    const setDataByEvent=()=>{
        USSetName('BVK ------Use State Demo form functional Component ----- BVK');
    };
    return (
        <div>

            <h1>{name}</h1>
        <button onClick={setDataByEvent} type="button">Set Use State</button>
        </div>
    );
}

export default UseStateDemo;