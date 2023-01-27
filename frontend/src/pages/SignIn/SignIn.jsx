import {
  Alert,
  Button,
  Form,
  Input,
  Spin,
  Typography,
} from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { API } from "../../constant";
import { setToken } from "../../helpers";
//   import ForgotPassword from "../../Models/forgotPassword";
import "./SignIn.css"

const SignIn = () => {
  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const value = {
        identifier: values.email,
        password: values.password,
      };
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        console.log(data.user.userType === "restuarant");
        if (data.user.userType === "restuarant") {
          // set the token
          setToken(data.jwt);

          // set the user
          setUser(data.user);

          // message.success(`Welcome back ${data.user.username}!`);

          navigate("/dash", { replace: true });
        } else if (data.user.userType === "customer") {
          // set the token
          setToken(data.jwt);

          // set the user
          setUser(data.user);

          //message.success(`Welcome back ${data.user.username}!`);

          navigate("/dashboard", { replace: true });
        } else if (data.user.userType === "driver") {
          // set the token
          setToken(data.jwt);

          // set the user
          setUser(data.user);

          // message.success(`Welcome back ${data.user.username}!`);

          // navigate("/dash", { replace: true });
        }
      }
    } catch (error) {
      console.error(error);
      setError(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Login to your Account</h2>
        </div>
        {error ? (
          <Alert
            className="alert_error"
            message={error}
            type="error"
            closable
            afterClose={() => setError("")}
          />
        ) : null}
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >

          <div className="email">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email address" />
            </Form.Item>
          </div>

          <div className="password">
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true }]}
            >
              <Input.Password placeholder="Password" />

            </Form.Item>
          </div>
          <div className="text-right">
            <Link to="/forgotpassword" style={{ color: 'blue', margin: 100 }}>
              Forgot Password?
            </Link>
          </div>
          <div className="log-btn">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login_submit_btn"
              >
                Login {isLoading && <Spin size="small" />}
              </Button>
            </Form.Item>
          </div>

        </Form>
        <Typography.Paragraph className="form_help_text">
          Don't have an account? <Link to="/signup" style={{ color: 'blue' }}>Register</Link>
        </Typography.Paragraph>
        {/* </Card> */}
        {/* </Col>
        </Row>
      </Fragment> */}
      </div>
    </div>
  );
};

export default SignIn;
