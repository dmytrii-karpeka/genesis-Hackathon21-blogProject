import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts/AuthContext';

import {Container, Row, Col, Button, Form, FormGroup, Label, Input, Alert} from 'react-bootstrap';

const Login = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { signInWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    setError(null)
    signInWithEmailAndPassword(email, password)
    .then(authUser => {
      console.log('authUser', authUser);
      router.push('/');
    })
    .catch(error => {
      setError(error.message)
    });
    event.preventDefault();
  };

  // Listen for changes on loading and authUser, redirect if needed
  // useEffect(() => {
  //   if (!loading && !authUser)
  //     router.push('/')
  // }, [authUser, loading])

  return (
    <Container className="text-center" style={{ padding: '40px 0px'}}>
      <Row>
        <Col>
          <h2>Login</h2>
        </Col>
      </Row>
      <Row style={{maxWidth: '400px', margin: 'auto'}}>
        <Col>
          <Form onSubmit={onSubmit}>
          { error && <Alert color="danger">{error}</Alert>}
            <FormGroup row>
              {/* <Label for="loginEmail" sm={4}>Email</Label> */}
              <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    name="email"
                    id="loginEmail"
                    placeholder="Email" />

              <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="loginPassword"
                  placeholder="Password" />
              {/* <Col sm={8}>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  id="loginEmail"
                  placeholder="Email" />
              </Col> */}
            </FormGroup>
            <FormGroup row>
              {/* <Label for="loginPassword" sm={4}>Password</Label> */}
              {/* <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  id="loginPassword"
                  placeholder="Password" />
              </Col> */}
            </FormGroup>
            <FormGroup row>
             <Col>
               <button type="submit">Login</button>
             </Col>
           </FormGroup>
           <FormGroup row>
            <Col>
              No account? <Link href="/sign_up">Create one</Link>
            </Col>
          </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login;

