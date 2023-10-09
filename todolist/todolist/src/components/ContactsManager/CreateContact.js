import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as contactService from "../ContactsManager/service/ServiceContact";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {Bars} from "react-loader-spinner";
import axios from "axios";
export function CreateContact() {
    const navigate = useNavigate();
const [selectedImage, setSelectedImage] = useState(null);

    return  (
        <>
            <Formik initialValues={{
                image:null,
                name:"",
                email:"",
                phone:""

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
                        const handleSubmission = () => {
                            const fd = new FormData();
                            // Tạo data để gửi lên server
                            fd.append("file", selectedImage);
                            axios
                                .post("https://v2.convertapi.com/upload", fd)
                                .then(res => {
                                    console.log(res.data.Url);
                                })
                                .catch(err => {
                                    console.log(err);
                                });
                        };
                        const create = async () => {
                            setSubmitting(false)
                            await handleSubmission();
                            await contactService.save(values)
                            navigate("/")
                            toast(`Contact ${values.user} create ok`)
                        }
                        create()
                    }
                    }>
                {
                    ({isSubmitting}) => (
                        <div className="mx-auto w-50 ">
                            <h2>Create up</h2>
                            <Form>

                                <div className="mb-2">
                                    <label htmlFor="name" className="form-label">Image</label>
                                    <Field type="file" className="form-control" id="image" name="image"
                                           onChange={(event) => {
                                               const file = event.currentTarget.files[0];
                                               setSelectedImage(file);
                                           }}
                                    />
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
    )


}