import {useState,useEffect} from "react";
import React from "react";
export function TimerSecond() {
    const [count,setCount] = useState(5);
    useEffect(()=>{
        const timerId =setInterval(()=>{
                setCount(count => count - 1 )
        },1000)
        if (count ===0){
            clearInterval(timerId);
            alert("Time is up ")
        }
            return () =>{
                clearInterval(timerId)
        }
    },[count])
    return(<>
    <h1>Timer : {count}</h1>
    </>)
}