import React from 'react'
import { Button } from 'react-bootstrap'
import './Homepage.css'
// import {useHistory, Route, Router} from 'react-router-dom';

export const Homepage = () => {

    // const history = useHistory();
    // console.log('history:', history)

    // const navigateToSignUpPage = () => {
    // // 👇️ navigate to /contacts
    //     // navigate('/sign-up');
    //     let path = `sign-up-page`
    //     history.push(path)
    // };


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
        <Button className="button">Click here...</Button>
        {/* <Router>
          <Route path="/sign-up" element={<SignUpPage />} />
          {/* <Route path="/" element={<Homepage />} /> */}
        {/* </Router>} */}
    </div>
  )
}
