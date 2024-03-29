import {
  Alert,
  Button,
  Form,
  Input,
  Spin,
  Typography,
} from "antd";
import React, {  useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import useScreenSize from "../../hooks/useScreenSize";
import { API } from "../../constant";
import { setToken } from "../../helpers";
import "./signup.css"

const SignUp = () => {
  const { isDesktopView } = useScreenSize();
  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        // message.success(`Welcome to Online Ordering Food System ${data.user.username}!`);

        navigate("/dash", { replace: true });
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
          <h2 className="title">Register your Account</h2>
        </div>
        {/* // <Fragment > */}
        {/* // <Row align="middle"> */}
        {/* // <Col span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}> */}
        {/* // <Card title="Register your account" className="fm"> */}
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

          <div className="name">
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
          </div>

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

          <div className="log-btn">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login_submit_btn"
              >
                Register {isLoading && <Spin size="small" />}
              </Button>
            </Form.Item>
          </div>
        </Form>
        <Typography.Paragraph className="form_help_text">
          Already have an account? <Link to="/signin" style={{ color: 'blue' }}>Login</Link>
        </Typography.Paragraph>
        {/* // </Card> */}
        {/* // </Col> */}
        {/* // </Row> */}
        {/* // </Fragment> */}

      </div>
    </div>
  );
};

export default SignUp;