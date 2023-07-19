import logo from './logo.svg';
import './App.css';
import { Button, Col, Row, Container, Form } from "reactstrap";
import { ToastContainer , toast } from 'react-toastify';
import Course from './components/Course';
import Allcourses from "./components/Allcourses";
import Addcourse from './components/Addcourse';
import Header from './components/Header';
import Menus from './components/Menus';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";



function App() {

  const btnHandle = () => {
    toast.error("something went wrong",{
      position:"top-center",
    });
  };
  
  return (
    <div>
      
      <Router>
      <ToastContainer />
       <Container>
        <Header />
        <Row>
          <Col md={4}>
            <Menus />
          </Col>
          <Col md={8}>

           <Routes>
            <Route path ="/" Component={Home} exact/>
            <Route path ="/add-course" Component={Addcourse} exact/>
            <Route path ="/view-courses" Component={Allcourses} exact/>
            </Routes>
          </Col>
        </Row>
       </Container>
       </Router>
       
    </div>
  );
};

export default App;
