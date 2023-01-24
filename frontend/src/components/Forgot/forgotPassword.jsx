import { React, useRef } from "react";
import axios from "axios";
import { useFormInputValidation } from "react-form-input-validation";
import './forgotPassword.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form from 'react-bootstrap/Form';
// import Alert from 'react-bootstrap/Alert';



const Forgot = () => {
  const [fields, errors, form] = useFormInputValidation(
    {
      email: "",
    },
    {
      email: "required|email",
    }
  );



  const forms = useRef();


  // const [show, setShow] = useState(true);

  const emailInputRefs = useRef();

  const tries = async (e) => {
    const isValid = await form.validate(e);
    if (isValid) {
      //   console.log(fields, errors);
      forgot_Password(e)
    }
  };

  async function forgot_Password(e) {
    e.preventDefault();

    const isValid = await form.validate(e);
    const enteredEmail = emailInputRefs.current.value;
    let data = {
      email: enteredEmail,
    };

    console.log('my ', data);
    if (isValid) {

    
    
      await axios
        .post(
          "http://localhost:1337/api/auth/forgot-password",
          data,
          {
            headers: {
              Authorization:
                "Bearer d3a90220787382de58d182572307898441c12d4497d1bd3d3ad527ee89562916040f6f5c54e74d42ba83d4098f00d372b5288db091770eeb7ff1f8988ec263c49c6ba77e577a6bfda1e51a543ed2a475f0bafd4ebbfca56dbf72592cc336de3c2a006a870977fd9ef849233be6c676b18a708f3ddabbe0d91b5049d6f2b778f0",
            },
          }
        )
        
        .then((response) => {
          // Handle success.
          alert("Message Sent with reset link sent to your email.");
          this.resetForm()
          console.log(response);
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
        });
    }

    e.target.reset()
  };


  return (
    
    // <div className="outer">
    // <div className="inner">
      
    <div className="inner">
        <Form ref={forms} onSubmit={tries}>

          <div >
            <FontAwesomeIcon icon="fa-solid fa-lock" />
            <h1 className="b py-3">Forgot password</h1>
            <i class="fa-solid fa-lock"></i>
            <div className="card-body ">
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text"
                  ref={emailInputRefs}
                  name="email"
                  placeholder="email"
                  value={fields.email}
                  onChange={form.handleChangeEvent}
                  onBlur={form.handleBlurEvent}
                  className="input input-bordered" />
                <Form.Text className="text-muted">
                  <label className="error ">
                    {errors.email ? errors.email : ""}
                  </label>
                </Form.Text>
              </Form.Group>
              <div className="log-btn">
              <Button className="submit_btn" variant="primary" type="submit" size="md" >
                Submit
              </Button>
              </div>

            </div>
          </div>
        </Form>
        </div>
        
      
   
  );
}

export default Forgot;