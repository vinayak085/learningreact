import React from "react";
import {
        Card,
        CardBody,
        CardTitle,
        CardSubtitle,
        CardText,
        CardFooter,
        Button,
        Container,
} from "reactstrap";

const Course=()=>{
    return (
        <Card>
            <CardBody>
                <CardSubtitle>Java course</CardSubtitle>
                <CardText>it is for java and only i can use </CardText>
                <Container className="text-center">
                    <Button>Delete</Button>
                    <Button>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )

}

export default Course;