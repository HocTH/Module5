import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as contactService from "../ContactsManager/service/ServiceContact";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {Bars} from "react-loader-spinner";
export function UpdateContact() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState({
       image:"",
        name:"",
        email:"",
        phone:"",
    });
    useEffect(()=>{
        const fetchApi = async ()=>{
            const result = await contactService.findById(id)
            console.log("update",result)
            setContact(result)
        }
        fetchApi()
    },[])

    return contact.name !=="" ?  (
        <>
            <Formik initialValues={{
                name:contact.name,
                email:contact.email,
                phone:contact.phone

            }}
                    validationSchema={
                        Yup.object({
                            name: Yup.string().required("Bat buoc phai nhap"),
                            email: Yup.string().required("Bat buoc phai nhap"),
                            phone: Yup.string().required("Bat buoc phai nhap"),
                        })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values)
                        const update = async () => {
                            setSubmitting(false)
                            await contactService.update(id,values)
                            navigate("/")
                            toast(`Contact ${values.user} update ok`)
                        }
                        update()
                    }
                    }>
                {
                    ({isSubmitting}) => (
                        <div className="mx-auto w-50 ">
                            <h2>Update Contact</h2>
                            <Form>
                                <div className="mb-2">
                                    <label htmlFor="name" className="form-label">Image</label>
                                    <Field type="file" className="form-control" id="image" name="image"/>
                                    <ErrorMessage name="image" component="span" className="text-danger"/>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="name" className="form-label">name</label>
                                    <Field type="text" className="form-control" id="name" name="name"/>
                                    <ErrorMessage name="name" component="span" className="text-danger"/>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="email" className="form-label">email</label>
                                    <Field type="text" className="form-control" id="email" name="email"/>
                                    <ErrorMessage name="email" component="span" className="text-danger"/>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="phone" className="form-label">phone</label>
                                    <Field type="text" className="form-control" id="phone" name="phone"/>
                                    <ErrorMessage name="phone" component="span" className="text-danger"/>
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