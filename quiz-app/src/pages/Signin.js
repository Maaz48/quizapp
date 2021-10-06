import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from '../components/Buttoncomp'
import {
    Link, useHistory
} from "react-router-dom";

const Signin = () => {

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    let history = useHistory();



    function formSubmitted(e) {
        e.preventDefault()
        let value = {
            fname,
            lname,
            email,
            password,
        }
        let oldData = [];
        oldData = JSON.parse(localStorage.getItem("auth")) ? JSON.parse(localStorage.getItem("auth")) : []
        oldData.push(value)
        localStorage.setItem("auth", JSON.stringify(oldData));
        let valuea = JSON.parse(localStorage.getItem("auth"))
        valuea.map((data, i) => {
            console.log(data, i);
            if (value.email.length > 8 && value.password.length > 4) {
                history.push("/");

            } else if (value.email.length < 3) {
                alert("Please Enter email address");
            } else if (value.password.length < 4) {

                alert("Please Enter more then 4 numbers in password field");
            }else{
                console.log("chalo kato shabash");
            }
        })
    }












    return (
        <div className="signup">
            <Form className="labal" >
                <center>
                    <h3>
                        <strong>
                            SIGN UP
                        </strong>
                    </h3>
                </center>
                <div className="row">
                    <div className="col">

                        <Form.Group className="mb-3" controlId="formBasicFname">
                            <Form.Label >First Name</Form.Label>
                            <Form.Control onChange={(e) => { setfname(e.target.value) }} type="text" placeholder="First Name" />

                        </Form.Group>
                    </div>
                    <div className="col">

                        <Form.Group className="mb-3" controlId="formBasicLname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={(e) => { setlname(e.target.value) }} type="text" placeholder="Last Name" />
                        </Form.Group>
                    </div>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => { setemail(e.target.value) }} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => { setpassword(e.target.value) }} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Link to="/">Already have an account...??</Link>
                </Form.Group>
                <Button value="SIGN UP" onClick={formSubmitted} />

            </Form>
        </div>
    )
}

export default Signin
