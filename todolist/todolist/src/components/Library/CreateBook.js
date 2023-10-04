import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast, ToastContainer} from "react-toastify";
import * as Yup from 'yup'
import {Bars, Dna} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css'
import * as bookService from "./service/BookService"
import {useNavigate} from "react-router-dom";

export function CreateBook() {
    const navigate = useNavigate();
    return (
        <>
            <Formik initialValues={{
                title: "Nguyen Thi Tinh",
                quantity: "10"

            }}
                    validationSchema={
                        Yup.object({
                            title: Yup.string().required("Bat buoc phai nhap"),
                            quantity: Yup.string().required("Bat buoc phai nhap"),
                        })
                    }
                    onSubmit={(values,{setSubmitting}) =>{
                        console.log(values)
                        const create = async ()=>{
                            setSubmitting (false)
                            values.tittle = values.tittle + 1;
                            await bookService.save(values)
                            navigate("/")
                            toast(`Book ${values.user} create ok`)
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
                                    <label htmlFor="tittle" className="form-label">Tittle</label>
                                    <Field type="text" className="form-control" id="tittle" name="tittle"/>
                                    <ErrorMessage name="tittle" component="span" className="text-danger"/>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="quatity" className="form-label">Quatity</label>
                                    <Field type="text" className="form-control" id="quatity" name="quatity"/>
                                    <ErrorMessage name="quatity" component="span" className="text-danger"/>
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