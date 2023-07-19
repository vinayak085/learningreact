import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Container} from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const Addcourse=()=>{

    useEffect(() =>{
        document.title = "Add Course || Hello Brothers";
     }, []);

       const [course,setCourse]=useState({});
       const handleForm = (e) => {
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
       };

       const postDatatoServer=(data)=>{
       axios.post(`${base_url}/Courses`,data).then(
        (response) =>{
            console.log(response);
            console.log("success");
            toast.success("course have been added");
        },(error)=>{
             console.log(error);
             console.log("error in processing");
             toast.error("something went wrong!");
            
            }
       )

       };

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Details</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for="userId">course Id</label>
                <Input 
                type="text" 
                placeholder="Enter Here" 
                name="userId" 
                id="userId"
                onChange={(e) => {
                    setCourse({...course,id:e.target.value})
                }}
                />
            </FormGroup>
            <FormGroup>
                <label for="title">Course title</label>
                <Input type="text" placeholder="Enter title Here" id="title"
                onChange={(e)=> {
                    setCourse({...course,title:e.target.value})
                }}
                />
            </FormGroup>
            <FormGroup>
                <label for="description">Course Description </label>
                <Input type="textarea" placeholder="Enter description" id="description"
                style={{ height: 150 }}
                onChange={(e)=>{
                    setCourse({...course,description:e.target.value})
                }}
                />
            </FormGroup>
            <Container className="text-center">
                <Button type="submit" color="success">Add Course</Button>
                <Button 
                type="reset"
                color="danger ml-2"
                >Clear</Button>
            </Container>
        </Form>
        </Fragment>
    );      
};

export default Addcourse;