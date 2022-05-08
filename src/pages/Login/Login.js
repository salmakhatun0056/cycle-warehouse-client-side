import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleRegister = (event) => {
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
        event.preventDefault()
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        <LoadSpinner></LoadSpinner>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div>
            <h1 className='text-info text-center mt-5'>Please Login</h1>
            <Form onSubmit={handleRegister} className='w-50 mx-auto'>
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
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                <p>New to cycle warehouse ? <Link to='/register' className='text-info pe-auto text-decoration-none'>Please Register </Link></p>
                {error && <p className='text-danger pe-auto'>{error.message}</p>}
                <Button variant="primary" type="submit">Login</Button>
            </Form>
            <ToastContainer></ToastContainer>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;