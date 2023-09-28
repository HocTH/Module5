import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import {Dna} from "react-loader-spinner";
import {toast, ToastContainer} from "react-toastify";
import React from "react";

export function Create() {
    return (
        <>

            <Formik initialValues={{
                name: "Hung",
                age: 90,
                gender: "1",
                languages: ['Java', 'ReactJs']
            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Bat buoc nhap')
                    })
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            console.log(values)
                            setSubmitting(false)
                            toast("Wow so easy")
                        }, 1000)
                    }
                    }>
                {
                    ({isSubmitting}) =>
                        (

                            <div className='container'>
                                <h1>Create Student</h1>
                                <Form>
                                    <div className='mb-3'>
                                        <label htmlFor='studentName' className='form-label'>Name</label>
                                        <Field type='text' className='form-control' id='studenrName' name='name'/>
                                        <ErrorMessage name='name' component='span' className='text-danger'/>
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='studentAge' className='form-label'>Age</label>
                                        <Field type='text' className='form-control' id='studentAge' name='age'/>
                                        <ErrorMessage name='age' component='span' className='text-danger'/>
                                    </div>

                                    <div className='mb-3'>
                                        <div className="form-check form-check-inline">
                                            <Field className="form-check-input" type="radio" name="gender"
                                                   id="flexRadioDefault1" value = "1"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Male
                                                </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <Field className="form-check-input" type="radio" name="gender"
                                                   id="flexRadioDefault2" value ="0"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    Female
                                                </label>
                                        </div>

                                    </div>

                                    <label htmlFor="studentLanguage" className='form-label'>Languages</label>
                                    <div className="form-check">
                                        <Field className="form-check-input" type="checkbox" id="flexCheckDefault"
                                               name="languages"
                                               value="C#"
                                        />
                                        <label
                                            className="form-check-label" htmlFor='flexCheckDefault'
                                        >C#</label>
                                    </div>
                                    <div className="form-check">
                                        <Field className="form-check-input" type="checkbox" id="cb1"
                                               name="languages"
                                               value="Java"
                                        />
                                        <label
                                            className="form-check-label" htmlFor='cb1'
                                        >JAVA</label>
                                    </div>
                                    <div className="form-check">
                                        <Field className="form-check-input" type="checkbox" id="cb12"
                                               name="languages"
                                               value="ReactJs"
                                        />
                                        <label
                                            className="form-check-label" htmlFor='cb12'
                                        >ReactJS</label>
                                    </div>
                                    {
                                        isSubmitting ? <Dna/> :
                                            <button type="submit" className='btn btn-primary'>
                                                Submit
                                            </button>
                                    }
                                </Form>
                            </div>
                        )
                }
            </Formik>

            <ToastContainer/>
        </>
    )
}