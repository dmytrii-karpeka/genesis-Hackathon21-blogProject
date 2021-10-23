import react from "react";
import {Button, Col, Container, FormControl, Image, InputGroup, Row, Form} from "react-bootstrap";

let ViewItem = function (props) {
    return(
        <Container className={"container"}>
            <Row>
                <Col sm={1}>

                </Col>
                <Col sm={4}>
                    <Image src={props.image} alt={"Something went wrong?"} rounded fluid />
                </Col>
                <Col sm={6}>
                    <Row>
                        <h1>{props.title}</h1>
                    </Row>
                    <Row>
                        <p>Release date: {props.releaseDate}</p>
                    </Row>
                    <Row>
                        <p>{props.description}</p>
                    </Row>
                    <Row>
                        <Button size="lg" href={props.link} target="_blank">
                            Visit game
                        </Button>
                    </Row>
                    <br />
                    {/*//TODO: commentary component*/}
                    <InputGroup>
                        <FormControl as="textarea" />
                        <Button size="sm" variant="outline-primary" id="button-addon2">
                            Post
                            commentary
                        </Button>
                    </InputGroup>
                </Col>
                <Col sm={1}>

                </Col>
            </Row>
        </Container>
    )
}

export default ViewItem;