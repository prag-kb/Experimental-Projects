import React from 'react'
import { Button } from 'react-bootstrap'
import './Homepage.css'
import {Routes, Route, useNavigate} from 'react-router-dom';
import SignUpPage from './SignUpPage';

export const Homepage = () => {
    const navigate = useNavigate();

    const navigateToSignUpPage = () => {
    // 👇️ navigate to /contacts
        navigate('/sign-up');
    };


  return (
    <div className='homepage text-center'>
        <div>
        <h2 className="indexContent">
            Welcome to the
        </h2>
        <h3 className='indexContent'>
            FinBank - Financial Management
        </h3>
        <h3 className='indexContent'>
            Dashboard
        </h3>
        </div>
        <Button className="button" onClick={navigateToSignUpPage}>Click here...</Button>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />} />
          {/* <Route path="/" element={<Homepage />} /> */}
        </Routes>
    </div>
  )
}
