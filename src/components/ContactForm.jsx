import React, { useRef, useState, useEffect } from 'react';
import "./ContactForm.css";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const form = useRef();
    
    // 1. Create a ref for the Name input field
    const nameInputRef = useRef(null); 

    const currentTime = new Date().toLocaleString();

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // 2. Use the useEffect hook to handle auto-focus
    useEffect(() => {
        // Check if the form is visible AND the ref is attached to the DOM element
        if (isFormVisible && nameInputRef.current) {
            // Automatically focus on the Name input field
            nameInputRef.current.focus();
        }
    }, [isFormVisible]); // Dependency array: run this effect whenever isFormVisible changes

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormVisible) {
            // First click: Prevent email sending and show the form fields
            setIsFormVisible(true);
            return; // Stop execution here
        }

        // Second click (when the form is visible): Proceed with email submission
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                alert('Message sent successfully!');
                e.target.reset(); 
                setIsFormVisible(false); // Hide form after successful send
            }, (error) => {
                console.error('Email sending failed:', error.text);
                alert('Failed to send message. Please try again later.');
            });
    };

    return (
        <form ref={form} onSubmit={handleSubmit} className={isFormVisible ? 'active-form' : ''}>
            <input type="hidden" name="time" value={currentTime} />

            {/* Wrap the form fields in a div for animation (based on previous solution) */}
            <div className={`form-fields-container ${isFormVisible ? 'visible' : ''}`}>
                {isFormVisible && ( // Conditional rendering needed for refs to work correctly
                    <>
                        <div id="message-name-email">
                            <label htmlFor="name">Name</label>
                            {/* 3. Attach the ref to the Name input */}
                            <input type="text" name="name" ref={nameInputRef} /> 
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" required />
                        </div>

                        <label htmlFor="message">Message</label>
                        <textarea name="message" required />
                    </>
                )}
            </div>

            <button type="submit" className="send-msg-btn">
                {isFormVisible ? "Send" : "Send a message"}
            </button>
        </form>
    );
};

export default ContactForm;