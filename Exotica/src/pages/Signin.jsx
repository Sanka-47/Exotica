import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import image from "../assets/images/153473.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export function Signin() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2 h-48 sm:h-64 lg:h-auto relative">
          <img
            src={image}
            className="w-full h-full object-cover absolute inset-0"
            alt="Description of the image"
          />
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12">
          <div className="w-full max-w-md space-y-8">
            {/* Header */}
            <h1 className="text-3xl sm:text-4xl text-center font-bold edu-au-vic-wa-nt-guides">
              Welcome To Exotica
            </h1>

            {/* Form Fields */}
            <div className="space-y-6">
              <TextField
                id="outlined-required"
                label="Email"
                placeholder="John@gmail.com"
                fullWidth
                className="text-base sm:text-lg"
              />

              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                placeholder="3y4hbjfew7o931"
                fullWidth
                className="text-base sm:text-lg"
              />

              {/* Remember Me and Forgot Password */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <FormControlLabel
                  control={<Checkbox color="primary" size="small" />}
                  label="Remember Me"
                  className="text-sm sm:text-base"
                />
                <Link 
                  to="/forgot-password" 
                  className="text-blue-500 hover:text-blue-600 text-sm sm:text-base"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Link to="/home" className="block w-full">
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "16px",
                    padding: "10px 0",
                    fontSize: { xs: '0.875rem', sm: '1rem' }
                  }}
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 text-sm sm:text-base">
        <p>&copy; 2024 Exotica. All rights reserved.</p>
      </footer>
    </div>
  );
}