import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast, ToastContainer} from "react-toastify";
import * as Yup from 'yup'
import {Bars, Dna} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css'
import * as studentService from "./service/StudentService"
import {useNavigate} from "react-router-dom";

export function SimpleForm() {
    const navigate = useNavigate();
    return (
        <>
            <Formik initialValues={{
                user: "Nguyen Thi Tinh",
                password: "123456"

            }}
                    validationSchema={
                        Yup.object({
                            user: Yup.string().required("Bat buoc phai nhap"),
                            password: Yup.string().required("Bat buoc phai nhap"),
                        })
                    }
                    onSubmit={(values,{setSubmitting}) =>{
                        console.log(values)
                        const create = async ()=>{
                            setSubmitting (false)
                            await studentService.save(values)
                            navigate("/")
                            toast(`Student ${values.user} create ok`)

                        }
                        create()
                    }
                    }>
                {
                    ({isSubmitting}) => (
                        <div className="mx-auto w-50 ">
                            <h2>Sign up</h2>
                            <Form>
                                <div className="mb-2">
                                    <label htmlFor="user" className="form-label">User</label>
                                    <Field type="text" className="form-control" id="user" name="user"/>
                                    <ErrorMessage name="user" component="span" className="text-danger"/>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="password" className="form-label">PassWord</label>
                                    <Field type="text" className="form-control" id="password" name="password"/>
                                    <ErrorMessage name="password" component="span" className="text-danger"/>
                                </div>
                                {
                                    isSubmitting ? <Bars
                                            height="80"
                                            width="80"
                                            color="#4fa94d"
                                            ariaLabel="bars-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        /> :
                                        <button type="submit" className='btn btn-primary'>
                                            Submit
                                        </button>
                                }
                            </Form>
                        </div>)
                }
            </Formik>
            <ToastContainer/>
        </>
    )

}