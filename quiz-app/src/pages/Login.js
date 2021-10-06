import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap';
import Buttoncomp from '../components/Buttoncomp'
import swal from 'sweetalert';
import {
    Link, useHistory
} from "react-router-dom";
const Login = () => {

    let history = useHistory();


    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    function formSubmitted(e) {
        e.preventDefault()
        console.log(email);
        console.log(password);
        let value = JSON.parse(localStorage.getItem("auth"));
        value.map((data) => {
            if (data.email == email && data.password == password) {
                //    return swal("Please Create an account first");
                return history.push("/quizapp");
            } else if(data.email == email && data.password !== password){
                alert("Please enter correct password")

            }else if(data.email !== email && data.password == password){
                alert("Please signup first")
            }else{
                console.log("Signup ho kar aa ja...");
            }
        })
    }




    return (
        <div className="signin">
            <div className="labal" >
                <center>
                    <h3>
                        <strong>
                            LOGIN
                    </strong>
                    </h3>
                </center>
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
                    <Link to="/signup">Don't have an account...??</Link>
                </Form.Group>
                <Buttoncomp value='SIGN IN' onClick={formSubmitted} />
            </div>
        </div>
    )
}

export default Login
