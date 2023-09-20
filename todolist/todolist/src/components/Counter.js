import {useState} from "react";
function Counter(){
    const [count,setCount] = useState(0)
    const [countSecond,setCountSecond] = useState(0)


    let handleClick = () => {
        setCount((prevNumber)=>prevNumber+1);
    }
    let handleClickDouble = () => {
        setCount((prevNumber)=>prevNumber+1);
        setCount((prevNumber)=>prevNumber+1);
    }
    return(
        <>
            <div>
                Gia tri {count}
                <div>
                    <button onClick={handleClick}>Tang 1 </button>
                </div>
            </div>
            <div>
                Gia tri {count}
                <div>
                    <button onClick={handleClickDouble}>Tang 2 </button>
                </div>
            </div>
        </>

    )
}
export default Counter;