import {useState, useEffect} from "react";
import React from "react";

const carModel = ["KIA", "HONDA", "MAZDA", "FERRARI", "LA DALAT "];
const color = ["Blue", "White", "Red", "Pink"]

export function CarSelector() {
    const [car, setCar] = useState({car: carModel[0], color: color[0]})
    const choice = (e) => {
        setCar(prevState => ({
            ...prevState,car: e.target.value
        }))
    }
    const choiceColor = (e) => {
        setCar(prevState => ({
            ...prevState,color: e.target.value
        }))
    }

    return (
        <>
            <h3>Select your car</h3>
            <span>Select a car :</span>
            <select onChange={e => {
                choice(e)
            }
            }>
                {carModel.map((car, index) => {
                    return (
                        <option value={car}>{car}</option>
                    )
                })}

            </select>

            <span>Select a color :</span>
            <select onChange={e => {
                choiceColor(e)
            }
            }>
                {color.map((color, index) => {
                    return (
                        <option value={color}>{color}</option>
                    )
                })}

            </select>

            <h2>
                You selected a {car.car}-{car.color}
            </h2>
        </>
    )
}