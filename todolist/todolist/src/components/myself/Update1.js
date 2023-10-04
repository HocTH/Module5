import {useParams} from "react-router-dom";
import React from "react";

export function Update1() {
    const param = useParams()
    return(
        <h1>
            StudentID:{param.id}
        </h1>
    )
}