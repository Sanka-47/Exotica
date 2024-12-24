import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import image from "../assets/images/153473.png";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../pages/css/Signin.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

function Signin() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/Home");
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col md:flex-row">
          <div className="flex w-full md:w-1/2">
            <img
              src={image}
              className="h-64 md:h-full w-full object-cover"
              alt="Description of the image"
            />
          </div>

          <div className="flex flex-col gap-3 items-center justify-center w-full md:w-1/2 p-4">
            <div>
              <h1 className="text-4xl mb-10 edu-au-vic-wa-nt-guides">
                Welcome To Exotica
              </h1>
            </div>
            <div className="mb-3 w-80">
              <TextField
                id="outlined-required"
                label="Email"
                placeholder="John@gmail.com"
                fullWidth
              />
            </div>
            <div className="w-80">
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                placeholder="3y4hbjfew7o931"
                fullWidth
              />
            </div>
            <div className="flex gap-4">
              <div>
                <FormControlLabel
                  control={<Checkbox color="primary" size="small" />}
                  label="Remember Me"
                />
              </div>
              <div>
                <h1 className="mt-1 text-blue-500">
                  <a href="/Home" >Forgot Password</a>
                </h1>
              </div>
            </div>

            <div className="w-80 mt-4 h-10">
              <Button
                variant="contained"
                className="w-full h-full"
                sx={{ borderRadius: "16px" }}
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>

        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2024 Exotica. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default Signin;
