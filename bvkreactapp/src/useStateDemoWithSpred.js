import React, { useState } from "react";


function SpredValue(){

const[cardetails,setCarDetails]=useState({

    name:'MG Gloster',
    price:'54 Lakhs',
    colour:'Gray'
});


const setColorOfCar=()=>{
    setCarDetails((prev)=>{
        return {
            ...prev,colour:'Black'}
    })
}

    return (
        <div> 
            <ol>
                <li>
                name: {cardetails.name}
                </li>
                <li>
                price: {cardetails.price}
                </li>
                <li>
                colour: {cardetails.colour}
                </li>
            </ol>
            <button onClick={setColorOfCar} type="button">Change Car Colour</button>

        </div>
    )

}

export default SpredValue;