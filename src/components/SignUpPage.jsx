import { Checkbox, TextField } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import "./SignupPage.css";

const SignUpPage = () => {
  return (
    <div className="signUpPage card w-25 p-5">
      <div className="">
        <div
          className="d-flex headerText justify-content-center mb-4"
          style={{ color: "lightseagreen" }}
        >
          <h2 className="fw-bolder text-bold">FINE</h2>
          <h2>bank</h2>
          <h2>.IO</h2>
        </div>

        <div className="bodyContent mt-3">
          <div className="email">
            <div className="mb-1">Email Address</div>
            <div className="mb-4">
              <input
                type="email"
                style={{
                  borderRadius: "5px",
                  border: "1px solid black",
                  width: "22rem",
                  height: "31px",
                }}
                placeholder="Email"
              />
            </div>
          </div>
        </div>

        <div className="password">
          <div className="d-flex justify-content-between">
            <span className="mb-1">Password</span>
            <span className="forgotPassword align-self-end">
              Forgot Password?
            </span>
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Password"
              style={{
                borderRadius: "5px",
                border: "1px solid black",
                width: "22rem",
                height: "31px",
              }}
            />
          </div>
        </div>

        <div className="checkBox d-flex">
          <div>
            {/* <input type={'checkbox'} style={{height:'2rem'}} /> */}
            <Checkbox style={{ color: "lightseagreen" }} />
          </div>
          <div className="align-self-center">Keep me signed in</div>
        </div>

        <Button
          className="login my-3"
          style={{
            width: "22rem",
            border: 0,
            backgroundColor: "lightseagreen",
          }}
        >
          Login
        </Button>
        <div className="d-flex">
          {/* <div className='border-bottom '></div> */}
          <div className="text-black-50">or sign in with</div>
          {/* <div className='border-bottom'></div> */}
          {/* <div>or sign in with</div> */}
        </div>

        <Button className="googleLogin my-3" style={{ width: "22rem" }}>
          Continue with Google
        </Button>

        <div className="createAccount text-center mt-3">Create an account</div>
      </div>
    </div>
  );
};

export default SignUpPage;
