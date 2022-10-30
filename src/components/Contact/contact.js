import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm () {
    const [ formState, setFormState ] = useState ({name:'', email:'', message:''});

    const [ errorMessage, setErrorMessage ] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if ( e.target.name === 'email') {
            const emailValid = validateEmail(e.target.value);
            if (!emailValid) {
                setErrorMessage('Enter a valid email to proceed!');
            } else {
                setErrorMessage('');
            }

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`); 
            } else {
                setErrorMessage('');
        }
    }

    if (!errorMessage){
        setFormState({...formState, [e.target.name]:e.target.value})
    }

}

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        < section className='container'>
            <h1 data-testid='h1tag' className='contact-title'>  Please Fill Contact Form </h1>
            <hr></hr>
            <form class='justify-content-center' id='contact-form'>
                <div class= 'mt-4'>
                    <label htmlFor='name'>Name:</label>
                    <input class='form-control' type='text' name='name' defaultValue={name} onBlur={handleChange}/>
                </div>
                <div class= 'mt-4'>
                    <label htmlFor='email'>Email:</label>
                    <input class='form-control' type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                </div>
                <div class= 'mt-4'>
                    <label htmlFor='message'>Message:</label>
                    <textarea class='form-control' type='message' name='message' defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <div class= 'mt-4 mb-4'>
                    <button data-testid='button' class='btn btn-outline-link' type='submit' onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default ContactForm;