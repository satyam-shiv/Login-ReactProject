import React, { useRef } from 'react';
import './loginSignup.css';
import email from '../Assets/email.png';
import password from '../Assets/password.png';
import person from '../Assets/person.png';

const Loginsignup = ({ onSubmit }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const checkInputs = () => {
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    // Define target values for comparison
    const targetValues = {
      name: 'Shivam Mishra', // Example target value for name
      email: 'shivammishra@gmail.com', // Example target value for email
      password: 'pswd123', // Example target value for password
    };

    // Check if input values match the target values
    if (
      nameValue === targetValues.name &&
      emailValue === targetValues.email &&
      passwordValue === targetValues.password
    ) {
      alert('Successful!'); // Show success message
    } else {
      alert('Invalid inputs. Please try again.'); // Show error message
    }
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Signup</div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={person} alt="" />
            <input type="text" name="name" placeholder="Name" ref={nameRef} />
          </div>
          <div className="input">
            <img src={email} alt="" />
            <input type="email" name="email" placeholder="Email" ref={emailRef} />
          </div>
          <div className="input">
            <img src={password} alt="" />
            <input type="password" name="password" placeholder="Password" ref={passwordRef} />
          </div>
        </div>
        <div className="submit-container">
          <div className="submit">
            <button onClick={checkInputs}>Sign up</button>
          </div>
          <div className="submit">
            <button onClick={checkInputs}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
