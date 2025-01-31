import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/authProvider/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
    const [error,setError]=useState('');
    const {createUser,updateUserProfile,verifyEmail}=useContext(AuthContext);

    const [accepted,setAccepted]=useState(false);

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log("register")
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photoUrl.value;
        const email=form.email.value;
        const password=form.password.value;

        // console.log(name,photoURL,email,password);

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
            setError('');
            handleUpdateUserprofile(name,photoURL);
            handleEmailVerification();
            toast.success('please verify your email address before login')
            
        })
        .catch(error=>{
            
            console.error(error)
            setError(error.message)
        })
    }

  const handleAccepted=(event)=>{

    // console.log(event.target.checked)
    setAccepted(event.target.checked)
  }

  const handleUpdateUserprofile=(name,photoURL)=>{
    const profile={
      displayName:name,
      photoURL:photoURL
    }
    updateUserProfile(profile)

    .then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

  const handleEmailVerification=()=>{
    verifyEmail()
    .then(() => {
      // Email verification sent!
      // ...
    })
    .catch(error=>{
            
      console.error(error)
  })
  }
    
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" placeholder="Photo URL" name="photoUrl"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox"
        onClick={handleAccepted}
        label={<>Accept <Link to='/terms'>Terms and Condition</Link></>} />
      </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <Form.Text className="text-danger">
            {error}
        </Form.Text>
      </Form>
    </div>
  );
};

export default Register;
