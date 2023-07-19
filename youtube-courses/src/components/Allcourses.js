import React, { useState,useEffect} from 'react'
import { Button, } from 'reactstrap';
import Course from './Course';
import base_url from './../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';




const Allcourses=()=>{

    useEffect(() => {
       document.title="Allcourses || Hello Brothers";
    }, []);

    //function to call server
     const getAllcoursesFromServer=() => {
        axios.get(`${base_url}/Courses`).then(
            (response) => {
                //success
                //console.log(response);
                console.log(response.data);
                toast.success("successfully loaded",{
                    position:'bottom-center',
                });
                setCourses(response.data);
               },
    
             (error)  => {
               //for error
               console.log(error);
               toast.error("something went wrong");
            }
    
            );
        };

        //calling loading course from server
        useEffect( () => {
            getAllcoursesFromServer();
        }, []);

    const [courses,setCourses]=useState([]);

      const updateCourses=(id) => {
        setCourses(courses.filter((c)=>c.id != id));
      };
    return(
        <div>
            
            <h1>All Courses</h1>
            {
                courses.length > 0
                 ?courses.map ((item) => <Course key={item.id}course={item} update={updateCourses} />) 
                 : "No courses"}
            
            </div>
    );
};

export default Allcourses;