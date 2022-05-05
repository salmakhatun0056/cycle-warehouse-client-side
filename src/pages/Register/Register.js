import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')

    const handleRegister = () => {
        const email = emailRef.current.value
    }
    return (
        <div>
            <h2>This is register pages</h2>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {/* <p>Already Have an account ? <Link to='/login' className='text-info pe-auto text-decoration-none'>Please login </Link></p>
                {error && <p className='text-danger pe-auto'>{error.message}</p>}
                <Button variant="primary" type="submit">
                    Register
                </Button> */}
            </Form>
        </div>
    );
};

export default Register;