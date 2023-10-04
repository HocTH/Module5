import React, {useEffect, useState} from "react";
import * as studentService from "../components/myself/service/StudentService";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {number} from "yup";
export function ListToDo() {
    const  [toDos, setToDos] = useState([])
    useEffect(()=>{
        const fetchApi = async () => {
            try {
                const result = await axios.get('http://localhost:8080/todo');
                return setToDos(result.data) ;
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
        }
        fetchApi();
    },[toDos])
    return(
    <>
    <Formik initialValues={{id:"", content:""}}
            onSubmit={values => {
                    const save = async (work) => {
                        try {
                            const result = await axios.post(('http://localhost:8080/todo'), work)
                            return result.data
                        } catch (e) {
                            console.log(e)
                        }
                    }
                    save(values)
                }


            }>
     <div className="container">
         <Form>
             <h1>TodoList</h1>
             <Field type ="text" name ="content" />
             <button type="submit"> Add</button>
         </Form>
        <ul>
            {
                toDos.map((todo,index) =>
                    (
                            <li>{todo.content}</li>
                    )
                )
            }
        </ul>
     </div>


    </Formik>
    </>

    )
}