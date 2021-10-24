// import React, {useState} from 'react';
// import {Form, Button, inputGroup} from "react-bootstrap";

// import css from './RegisterForm.module.scss';

// let RegisterForm = function () {
//     const [validated, setValidated] = useState(false);

//     const handleSubmit = (event) => {
//         const form = event.currentTarget;
//         let password = document.getElementById('formPassword').value;
//         let repeatedPassword = document.getElementById('formRepeatPassword').value;
//         console.log(password, repeatedPassword);

//         if (password !== repeatedPassword && form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         }

//         setValidated(true);
//     }

//     return (
//         <Form validated={validated} onSubmit={handleSubmit} className={css.form}>
//             <Form.Group controlId="avatar" className="mb-3">
//                 <Form.Label>input avatar photo</Form.Label>
//                 <Form.Control required type="file" />
//                 <Form.Control.Feedback>Nice photo!</Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group>
//                 <Form.Label>Username</Form.Label>
//                 <inputGroup hasValidation>
//                     <inputGroup.Text id="inputGroupPrepend">@</inputGroup.Text>
//                     <Form.Control
//                         type="text"
//                         placeholder="veryCreativeUsername"
//                         aria-describedby="inputGroupPrepend"
//                         required
//                     />
//                     <Form.Control.Feedback type="invalid">
//                         Please choose a username.
//                     </Form.Control.Feedback>
//                 </inputGroup>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control required type="email" placeholder="example@something.com" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control required type="password" placeholder="place here something strong" />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//                 Sign up
//             </Button>
//         </Form>
//     )
// }

// export default RegisterForm;

import { useState } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../../contexts/AuthContext';

import {Container, Row, Col, Button, Form, FormGroup, Label, input, Alert} from 'react-bootstrap';

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = event => {
    setError(null)
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if(passwordOne === passwordTwo)
      createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log("Success. The user is created in Firebase")
        router.push("/logged_in");
      })
      .catch(error => {
        // An error occurred. Set error message to be displayed to user
        setError(error.message)
      });
    else
      setError("Password do not match")
    event.preventDefault();
  };

  return (
    <Container className="text-center custom-container">
      <Row>
        <Col>
          <Form 
            className="custom-form"
            onSubmit={onSubmit}>
          { error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              {/* <Label for="signUpEmail" sm={4}>Email</Label> */}
              <Col sm={8}>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="signUpEmail"
                  placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup row>
              {/* <Label for="signUpPassword" sm={4}>Password</Label> */}
              <Col sm={8}>
                <input
                  type="password"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={(event) => setPasswordOne(event.target.value)}
                  id="signUpPassword"
                  placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row>
              {/* <Label for="signUpPassword2" sm={4}>Confirm Password</Label> */}
              <Col sm={8}>
                <input
                  type="password"
                  name="password"
                  value={passwordTwo}
                  onChange={(event) => setPasswordTwo(event.target.value)}
                  id="signUpPassword2"
                  placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup row>
             <Col>
               <button type="submit">Sign Up</button>
             </Col>
           </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterForm;