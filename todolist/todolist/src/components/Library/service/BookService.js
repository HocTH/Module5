import axios from "axios";
let limit = 4;
export const findAll = async (currentIndex)=>{
    try{
        const result = await axios.get(`http://localhost:8080/books?_page=1&_limit=${limit}`);
        return result.data;
    }catch (error){
        if (error.response) {
            // Xử lý lỗi phản hồi từ máy chủ (status code, thông báo lỗi, v.v.)
            console.log(error.response.data);
        } else if (error.request) {
            // Xử lý lỗi không nhận được phản hồi từ máy chủ
            console.log('Không nhận được phản hồi từ máy chủ.');
        } else {
            // Xử lý lỗi khác
            console.log('Đã xảy ra lỗi trong quá trình yêu cầu:', error.message);
        }
        throw error; // Ném lại lỗi để xử lý ở phần gọi hàm findAll
    }
}
export const save = async (book) => {
    try {
        const result = await axios.post("http://localhost:8080/books",book);
        return result.data;
    }catch (e) {
        console.log(e)
    }
}
export const update = async (id,book) =>{
    try{
        const result = await axios.put("http://localhost:8080/books/"+id,book)
        return result.data
    } catch (e) {
        console.log(e)
    }
}
export const findById = async (id) =>{
    try{
        const result = await axios.get("http://localhost:8080/books/"+id)
        return result.data
    } catch (e) {
        console.log(e)
    }
}