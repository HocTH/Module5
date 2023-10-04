import React, {useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup"
import {Dna, Hourglass} from "react-loader-spinner";
import {toast, ToastContainer} from "react-toastify";
export function Declaration() {
    return(
        <>
        <h1>To khai y te</h1>
            <Formik initialValues={
                {
                    name:"",
                    idCard:"",
                    birthYear:'',
                    gender:"0",
                    national:"",
                    company:'',
                    department:'',
                    heathInsurance:[],
                    province:"",
                    district:"",
                    wards:'',
                    address:'',
                    phone:'',
                    email:'',
                    toTheCountry:'',
                    sign:'',
                    contact:''
                }
            }
                    validationSchema={Yup.object({
                        name:Yup.string().required("Required"),
                        idCard:Yup.number().required("Required"),
                        birthYear:Yup.number().required("Required").min(1900),
                        national:Yup.string().required("Required"),
                        province:Yup.string().required("Required"),
                        district:Yup.string().required("Required"),
                        wards:Yup.string().required("Required"),
                        address:Yup.string().required("Required"),
                        phone:Yup.number().required("Required"),
                        email:Yup.string().required("Required").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                            "Invalid email address”")
                    })}
                    onSubmit={
                        (values,{setSubmitting}) =>{
                            setTimeout(() =>{
                                setSubmitting(false)
                                toast("Wow so easy")
                            },1000)
                        }

                    }
                    >
                {
                    (
                        ({isSubmitting})=>(
                    <div>
                    <Form>
                    <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Họ tên</label>
                    <div className="col-sm-10">
                    <Field name="name" type="text" className="form-control" id="name"
                    placeholder="Name"/>
                    </div>
                    <ErrorMessage name="name" component="span" className="text-danger"/>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="idCard" className="col-sm-2 col-form-label">So ho chieu/CMND</label>
                    <div className="col-sm-10">
                    <Field name="idCard" type="text" className="form-control" id="idCard"
                    />
                    </div>
                    <ErrorMessage name="idCard" component="span" className="text-danger"/>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="birthYear" className="col-sm-2 col-form-label">Nam sinh</label>
                    <div className="col-sm-10">
                    <Field name="birthYear" type="text" className="form-control" id="birthYear"
                    />
                    </div>
                    <ErrorMessage name="birthYear" component="span" className="text-danger"/>
                    </div>
                    <div className='mb-3'>
                    <span>Gioi tinh: </span>
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
                    <div className="form-group row">
                    <label htmlFor="national" className="col-sm-2 col-form-label">Quoc tich</label>
                    <div className="col-sm-10">
                  <Field name="national" type="text" className="form-control" id="national"
                    placeholder="Viet nam"/>
                    </div>
                    <ErrorMessage name="national" component="span" className="text-danger"/>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="company" className="col-sm-2 col-form-label">Cong ty lam viec</label>
                    <div className="col-sm-10">
                    <Field name="company" type="text" className="form-control" id="company"
                    placeholder="Hitechs"/>
                    </div>
                    <ErrorMessage name="company" component="span" className="text-danger"/>
                    </div>
                    <label htmlFor="heathInsurance" className='form-label'>Co the bao hiem y te</label>
                    <div className="form-check">
                    <Field className="form-check-input" type="checkbox" id="heathInsurance"
                    name="heathInsurance"
                    value="1"
                    />
                    <label
                    className="form-check-label" htmlFor='heathInsurance'
                    >Co</label>
                    </div>
                    <h1>Dia chi lien lac tai Viet Nam</h1>
                    <div className="form-group row">
                    <label htmlFor="province" className="col-sm-2 col-form-label">Tinh thanh</label>
                    <div className="col-sm-10">
                    <Field name="province" type="text" className="form-control" id="province"
                    placeholder="Hue"/>
                    </div>
                    <ErrorMessage name="province" component="span" className="text-danger"/>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="district" className="col-sm-2 col-form-label">Quan /huyen</label>
                    <div className="col-sm-10">
                    <Field name="district" type="text" className="form-control" id="district"
                    placeholder="Phu loc"/>
                    </div>
                    <ErrorMessage name="district" component="span" className="text-danger"/>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="wards" className="col-sm-2 col-form-label">Phuong/xa</label>
                    <div className="col-sm-10">
                    <Field name="wards" type="text" className="form-control" id="wards"
                    placeholder="Loc Vinh"/>
                    </div>
                    <ErrorMessage name="wards" component="span" className="text-danger"/>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="address" className="col-sm-2 col-form-label">So nha, pho, to dan pho/thon/doi</label>
                    <div className="col-sm-10">
                    <Field name="address" type="text" className="form-control" id="address"
                    placeholder="Xom cho"/>
                    </div>
                    <ErrorMessage name="address" component="span" className="text-danger"/>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="phone" className="col-sm-2 col-form-label">Dien thoai</label>
                    <div className="col-sm-10">
                    <Field name="phone" type="text" className="form-control" id="phone"
                    />
                    </div>
                    <ErrorMessage name="phone" component="span" className="text-danger"/>
                    </div>
                    <div className="form-group row">
                    <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <Field name="email" type="text" className="form-control" id="email"
                    />
                    </div>
                    <ErrorMessage name="email" component="span" className="text-danger"/>
                    </div>
                        {
                            isSubmitting ? <Hourglass/> :
                                <button type="submit" className='btn btn-primary'>
                                    Submit
                                </button>
                        }
                    </Form>

                    </div>
                    )
                    )
                }
            </Formik>
        </>
    )
}