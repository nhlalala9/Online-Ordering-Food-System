
    import './App.css'
import React from "react";
import { Col, Layout, Row } from "antd";
import AppHeader from "./components/AppHeader/Appheader"
import AppRoutes from "./Routes";
import Admin from './components/Admin/Admin';
const { Header, Content } = Layout;

const App = () => {
  return (
    // <Layout>
    //   <Row gutter={[0, 32]}>
    //     <Col span={24}>
    //       <Header>
    //         <AppHeader />
    //       </Header>
    //     </Col>
    //     <Col span={22} offset={1}>
    //       <Content>
    //         <AppRoutes />
    //       </Content>
    //     </Col>
    //   </Row>
    // </Layout>
    <div className='App'>
      <AppRoutes />
    </div>
   
  );
};

export default App;

