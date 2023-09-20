import {useState,useEffect} from "react";
function Selector() {
    let [selected,setSelected] = useState(0);
    let [valueSelected,setValueSelected]  = useState("")
    const choice = e =>
    {
        setSelected(e.target.value)
    }
    useEffect(() => {
            switch (selected) {
                case"0" :
                    setValueSelected("Java");
                    break;
                case "1": setValueSelected("PHP");
                break;
                case "2": setValueSelected("React");
                    break;
                case "3": setValueSelected("C");
                    break;
                case "4": setValueSelected("Python");
                    break;
                default:
            }
        }
    ,[selected])
    return(
        <>
        Khoa hoc
            <select onChange={e =>{
            choice(e)}
            }>
                <option value="0">Java</option>
                <option value="1">PHP</option>
                <option value="2">React</option>
                <option value="3">C</option>
                <option value="4">Python</option>
            </select>
            <h2>Your selected: {valueSelected}</h2>
        </>
    )
}
export default Selector;