import React, {useState} from 'react';
import {Form, Button, InputGroup} from "react-bootstrap";

import css from './RegisterForm.module.scss';

let RegisterForm = function () {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    return (
        <Form validated={validated} onSubmit={handleSubmit} className={css.form}>
            <Form.Group controlId="avatar" className="mb-3">
                <Form.Label>Input avatar photo</Form.Label>
                <Form.Control required type="file" />
                <Form.Control.Feedback>Nice photo!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                        type="text"
                        placeholder="veryCreativeUsername"
                        aria-describedby="inputGroupPrepend"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="example@something.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="place here something strong" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign up
            </Button>
        </Form>
    )
}

export default RegisterForm;