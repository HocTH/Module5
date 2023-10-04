import axios from "axios";
export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/students');
        return result.data;
    } catch (error) {
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
};
export const save = async (student) =>{
    try {
        const result = await axios.post('http://localhost:8080/students',student)
        return result.data;
    } catch (e){
        console.log(e)
    }
}