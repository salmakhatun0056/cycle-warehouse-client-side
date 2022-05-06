import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import './ExtraSection.css'

const ExtraSection = () => {
    const emailRef = useRef('')
    const messageRef = useRef('')
    const nameRef = useRef('')

    const handleRegister = async (event) => {
        const email = emailRef.current.value
        const message = messageRef.current.value
        const name = nameRef.current.value
        console.log(email, message, name)
        event.preventDefault()
    }
    return (
        <div className='container'>
            <div className='extra-container'>
                <div>
                    <h2>ABOUT US</h2>
                    <p>But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count of the system, and expound the actual teaings of the great explorer idea announcing. But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count of the system, and expound the actual teaings of the great explorer idea announcing.

                        But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and i will give you a complete count of the system, and expound the actual teaings of the great explorer idea announcing. <a href="">READ MORE</a></p>
                </div>
                <div className='request-section'>
                    <h2>REQUEST A QUICK QUOTE </h2>
                    <p>But i must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete count.</p>

                    <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control ref={nameRef} type="name" placeholder="Your First and Last name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Email-address" required />
                        </Form.Group>
                        <Form.Group className="mb-3 message" controlId="formBasicMessage">
                            <textarea ref={messageRef} name="message" id="" cols="auto" rows="3" placeholder='Your Message' />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;