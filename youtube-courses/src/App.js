import logo from './logo.svg';
import './App.css';
import { Button } from "reactstrap";
import { ToastContainer , toast } from 'react-toastify';
import Course from './components/Course';


function App() {

  const btnHandle = () => {
    toast.error("something went wrong",{
      position:"top-center",
    });
  };
  
  return (
    <div>
      <ToastContainer />
      <Course />
    </div>
  );
}

export default App;
