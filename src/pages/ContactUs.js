import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  EJS_SERVICE_ID,
  EJS_TEMPLATE_ID,
  EJS_PUBLIC_KEY,
} from '../constants/appEnv';
import useInputValidate from '../hooks/useInputValidate';

const ContactUs = () => {
  const form = useRef();

  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInputValidate((value) => value.trim() !== '');

  const emailRegPattern = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/g;

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInputValidate((value) => emailRegPattern.test(value.trim()));

  const {
    value: phone,
    isValid: phoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInputValidate((value) => value.trim() !== '');

  const {
    value: subject,
    isValid: subjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInputValidate((value) => value.trim() !== '');

  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInputValidate((value) => value.trim() !== '');

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !nameIsValid ||
      !emailIsValid ||
      !phoneIsValid ||
      !subjectIsValid ||
      !messageIsValid
    ) {
      console.log('Fill all the fields');
      return;
    }

    emailjs
      .sendForm(EJS_SERVICE_ID, EJS_TEMPLATE_ID, form.current, EJS_PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    resetNameInput();
    resetEmailInput();
    resetPhoneInput();
    resetSubjectInput();
    resetMessageInput();
  };

  return (
    <>
      <Header />
      <main className='contact container'>
        <div className='contact-wrapper'>
          <div className='description-text'>
            <h1>Have any questions for us?</h1>
            <p>
              We at <em>Moore Advanced Solutions</em> believe in equiping
              organizations with resource and tools needed in pursuit of
              success...
            </p>
          </div>
          <form
            ref={form}
            onSubmit={formSubmitHandler}
            className='contact-form'
          >
            <div className='row'>
              <div className={`input-group ${nameInputHasError && 'invalid'}`}>
                <label htmlFor='name'>Your Name</label>
                <input
                  type='text'
                  placeholder='Ex. John...'
                  id='name'
                  name='name'
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
                  value={name}
                />
              </div>
              <div className={`input-group ${emailInputHasError && 'invalid'}`}>
                <label htmlFor='email'>Your Email</label>
                <input
                  type='email'
                  placeholder='info@mail.com'
                  id='email'
                  name='email'
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                  value={email}
                />
              </div>
            </div>
            <div className='row'>
              <div className={`input-group ${phoneInputHasError && 'invalid'}`}>
                <label htmlFor='phone'>Phone Number</label>
                <input
                  type='text'
                  placeholder='(081)890-8918'
                  id='phone'
                  name='phone'
                  onChange={phoneChangeHandler}
                  onBlur={phoneBlurHandler}
                  value={phone}
                />
              </div>
              <div
                className={`input-group ${subjectInputHasError && 'invalid'}`}
              >
                <label htmlFor='subject'>Your Subject</label>
                <input
                  placeholder='Subject'
                  id='subject'
                  name='subject'
                  onChange={subjectChangeHandler}
                  onBlur={subjectBlurHandler}
                  value={subject}
                />
              </div>
            </div>
            <div className='row'>
              <div
                className={`input-group ${messageInputHasError && 'invalid'}`}
              >
                <label htmlFor='message'>Your Email</label>
                <textarea
                  rows={10}
                  placeholder='Message...'
                  id='message'
                  name='message'
                  onChange={messageChangeHandler}
                  onBlur={messageBlurHandler}
                  value={message}
                ></textarea>
              </div>
            </div>
            <button type='submit'>Send a message</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
