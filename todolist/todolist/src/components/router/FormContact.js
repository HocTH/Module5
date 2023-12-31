import React, {useState} from "react";
import {Formik} from "formik";
import "./Form.css"
export function FormContact(){
    const REGEX =
        {   name: /^[a-zA-Z_.+-]+$/,
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            phone: /^[0-9]+$/
        }
    const [form,setForm] = useState({})
    function handleChange(event){
        setForm({...form,[event.target.name]:event.target.value})
    }
    function handleValidate(){
        const errors = {};
        if (!form.name){
            errors.name = "Required"
        } else if (!REGEX.name.test(form.name)){
            errors.name = "Invalid name"
        }  else if (!form.email){
            errors.email = "Required"
        } else if (!REGEX.email.test(form.email)){
            errors.email = "Invalid email"
        }else if (!form.phone){
            errors.phone = "Required"
        } else if (!REGEX.phone.test(form.phone)){
            errors.phone = "Invalid phone"
        }
        return errors;
    }
    const handleSubmit = () =>{
        alert("Login successfully!")
    }
    return(
        <>
            <h1>Sign up</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}
            >
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${errors.name ? "custom-input-error" : ""}`}
                        >
                            <label>Name:</label>
                            <input
                                type="name"
                                name="name"
                                value={form.name || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.name}</p>
                        </div>
                        <div
                            className={`custom-input ${errors.email ? "custom-input-error" : ""}`}
                        >
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.email}</p>
                        </div>
                        <div
                            className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}
                        >
                            <label>Phone number: </label>
                            <input
                                type="phone"
                                name="phone"
                                value={form.phone || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.phone}</p>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea></textarea>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </>
    )
}
