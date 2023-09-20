import {useState, useEffect} from "react";

export function CarSelector() {
    let [carSelected, setCarSelected] = useState(0)
    let [valueCar, setValueCar] = useState("Honda")
    let [colorSelected,setColorSelected] = useState(0)
    let [valueColor,setValueColor] = useState("Black")
    const choice = (e) => {
        setCarSelected(e.target.value)
    }
    useEffect(() => {
        switch (carSelected) {
            case "0":
                setValueCar("Honda");
                break;

            case "1":
                setValueCar("KIA");
                break;
            case "2":
                setValueCar("BMW");
                break;
            default:
        }
    }, [carSelected])
    const choiceColor = (e) =>{
        setColorSelected(e.target.value)
    }
    useEffect(()=>{
        switch (colorSelected) {
            case "0":
                setValueColor("Black");
                break;
            case "1":
                setValueColor("White");
                break;
            case "2":
                setValueColor("Red");
                break;
            default:
        }

    },[colorSelected])
    return (
        <>
            <h3>Select your car</h3>
            <span>Select a car :</span>
            <select onChange={e => {
                choice(e)
            }
            }>
                <option value="0">Honda</option>
                <option value="1">KIA</option>
                <option value="2">BMW</option>
            </select>
            <br/>
            <span>Select color for car :</span>
            <select onChange={e => {
                choiceColor(e)
            }
            }>
                <option value="0">Black</option>
                <option value="1">White</option>
                <option value="2">Red</option>
            </select>
            <h2>
                You selected a {valueCar}-{valueColor}
            </h2>
        </>
    )
}