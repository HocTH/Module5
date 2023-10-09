import axios from "axios";

 export const findAll =  async () => {
  try{
      const result = await axios.get("http://localhost:8080/contacts");
      return result.data;
  } catch (e) {
      console.log(e)
  }
}
export const update = async (id,contact) =>{
    try{
        const result = await axios.put("http://localhost:8080/contacts/"+id,contact)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const findById = async (id) =>{
    try{
        const result = await axios.get("http://localhost:8080/contacts/"+id)
        console.log(":id",result.data)
        return result.data
    } catch (e) {
        console.log(e)
    }}
export const save = async (contact)=>{
     try {
         const result = await axios.post("http://localhost:8080/contacts/",contact);
         return result.data;
     }catch (e) {
         console.log(e)
     }
}
// export const save = async (formData) => {
//     try {
//         const response = await axios.post("http://localhost:8080/contacts/", formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             },
//         });
//         return response.data;
//     } catch (error) {
//         throw error;
//     }
// }
