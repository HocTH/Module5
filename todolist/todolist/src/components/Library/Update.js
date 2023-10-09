import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast, ToastContainer} from "react-toastify";
import * as Yup from 'yup'
import {Bars, Dna} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css'
import * as bookService from "./service/BookService"
import {useNavigate, useParams} from "react-router-dom";

export function Update() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title:"",
        quantity:""
    });
    useEffect(()=>{
        const fetchApi = async ()=>{
          const result = await bookService.findById(id)
              console.log(result)
            setBook(result)
        }
        fetchApi()
    },[])

    return book.title !=="" ?  (
        <>
            <Formik initialValues={{
                title: book.title,
                quantity: book.quantity

            }}
                    validationSchema={
                        Yup.object({
                            title: Yup.string().required("Bat buoc phai nhap"),
                            quantity: Yup.string().required("Bat buoc phai nhap"),
                        })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values)
                        const update = async () => {
                            setSubmitting(false)
                            await bookService.update(id,values)
                            navigate("/")
                            toast(`Book ${values.user} update ok`)
                        }
                        update()
                    }
                    }>
                {
                    ({isSubmitting}) => (
                        <div className="mx-auto w-50 ">
                            <h2>Sign up</h2>
                            <Form>
                                <div className="mb-2">
                                    <label htmlFor="title" className="form-label">Tittle</label>
                                    <Field type="text" className="form-control" id="title" name="title"/>
                                    <ErrorMessage name="title" component="span" className="text-danger"/>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="quantity" className="form-label">Quantity</label>
                                    <Field type="text" className="form-control" id="quantity" name="quantity"/>
                                    <ErrorMessage name="quantity" component="span" className="text-danger"/>
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
        </>
    ):""

}