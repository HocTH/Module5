import React, {useState} from 'react';
function MyForm (){
const [name,setName] = useState("");
const handle = (e) =>{
    setName(e.target.value)
}
return(<>
        <h1>Hello {name}</h1>
        <input type="file" onChange={handle}/>
</>

)
}
export default MyForm;