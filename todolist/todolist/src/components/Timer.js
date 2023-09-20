import {useState, useEffect} from "react";

export function Timer() {
    let [count, setCount] = useState(15)
    setTimeout(() => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            alert("Time's up")

        }
    }, 1000)
    return (
        <h1>
            Counter Timer:{count}
        </h1>
    )
}