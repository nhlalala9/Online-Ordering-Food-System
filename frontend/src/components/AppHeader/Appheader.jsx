import { Button, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { removeToken } from "../../helpers";

const AppHeader = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate("/signin", { replace: true });
    console.log("token");
  };

  return (
    
    <Space className="header_space">
     
      <Space className="auth_buttons">
        {user ? (
          <>
           
            <Button
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button className="auth_button_login" href="/signin" type="link">
              Login
            </Button>
            <Button
              className="auth_button_signUp"
              href="/signup"
              type="link"
            >
              Register
            </Button>
          </>
        )}
      </Space>
    </Space>
  );
};

export default AppHeader;