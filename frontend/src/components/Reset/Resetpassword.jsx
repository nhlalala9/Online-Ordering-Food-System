import { React, useRef } from "react";
import Button from 'react-bootstrap/Button';
import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import './resetPassword.css';
import { useNavigate } from "react-router-dom";

const Resetpassword = () => {
    const form = useRef();

    const [searchParams] = useSearchParams();

    const passwordInputRefs = useRef();
    const confirmPasswordInputRefs = useRef();



    function Resetpassword(e) {
        e.preventDefault();
        const navigate = useNavigate();
        const enteredPassword = passwordInputRefs.current.value;
        const enteredConfirmPassword = confirmPasswordInputRefs.current.value;
        const data = {
            code: searchParams.get('code'),
            password: enteredPassword,
            passwordConfirmation: enteredConfirmPassword,
            // code: 'privateCode',
            // password: 'myNewPassword',
            // passwordConfirmation: 'myNewPassword'
        };


        console.log(data)

        axios
            .post(
                'https://maidiza.onrender.com/api/auth/reset-password', data,
                {
                    headers: {
                        Authorization:
                            "Bearer d3a90220787382de58d182572307898441c12d4497d1bd3d3ad527ee89562916040f6f5c54e74d42ba83d4098f00d372b5288db091770eeb7ff1f8988ec263c49c6ba77e577a6bfda1e51a543ed2a475f0bafd4ebbfca56dbf72592cc336de3c2a006a870977fd9ef849233be6c676b18a708f3ddabbe0d91b5049d6f2b778f0",
                    },
                }
            )
            .then((response) => {
                // Handle success.
                // console.log(response);
                navigate("/Login", { replace: true })//this should take to login page

            })
            .catch((error) => {
                // Handle error.
                console.log("An error occurred:", error.response);
            });
    }
    return (
        <>
            <Form ref={form} onSubmit={Resetpassword}>
                <div className="hero min-h-screen bg-base-200  mt-5 mx-5">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <h1 className="b py-3">Reset password</h1>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Enter new password</Form.Label>
                                <Form.Control
                                    type="password"
                                    ref={passwordInputRefs}
                                    placeholder="password"
                                    className="input input-bordered" />
                                <Form.Text className="text-muted">
                                    {/* <p>yaeah</p> */}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control
                                    type="password"
                                    ref={confirmPasswordInputRefs}
                                    placeholder="confirm password"
                                    className="input input-bordered" />
                                <Form.Text className="text-muted">
                                    {/* <p>yaeah</p> */}
                                </Form.Text>
                            </Form.Group>

                            < Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </div>
                    </div>
                </div>
            </Form>
        </>
    );
}

export default Resetpassword;