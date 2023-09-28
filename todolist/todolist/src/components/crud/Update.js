import {useParams} from "react-router-dom";
import React from "react";

export function Update(){
    const param = useParams()
    return(
        <>
        <h1>Student Update</h1>
            <h1>ID:{param.id}</h1>
        </>
    )
}