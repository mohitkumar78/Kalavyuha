import React, { useState } from "react";
import {
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Typography,
    Box,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    IconButton,
    InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import OTPVerification from "./OTPVerificationForm";

function RegistrationForm() {
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: "",
        password: "",
    });
    const [showOtpPage, setShowOtpPage] = useState(false);
    const [countryCode, setCountryCode] = useState("+91"); // Default country code
    const [showPassword, setShowPassword] = useState(false);

    const countries = [
        { code: "+1", name: "USA" },
        { code: "+44", name: "UK" },
        { code: "+91", name: "India" },
        { code: "+61", name: "Australia" },
        { code: "+81", name: "Japan" },
    ];

    const handleSubmit = () => {
        setShowOtpPage((prev) => !prev);
    };

    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleCountryCodeChange = (e) => {
        setCountryCode(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <Box
                sx={{
                    display: { xs: "none", md: "block" },
                    width: "25%",
                }}
            >
                <Sidebar email={input.email} name={`${input.firstname} ${input.lastname}`} />
            </Box>

            {/* Conditional Rendering */}
            <Box
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: { xs: 2, md: 4 },
                }}
            >
                {showOtpPage ? (
                    <OTPVerification />
                ) : (
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: 500,
                            backgroundColor: "#fff",
                            p: { xs: 3, md: 4 },
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    >
                        <Typography
                            variant="h4"
                            align="center"
                            gutterBottom
                            sx={{ color: "#003366", fontWeight: "bold" }}
                        >
                            Create an Account :)
                        </Typography>
                        <Typography align="center" color="textSecondary" sx={{ mb: 3 }}>
                            Let’s get started with your 90 days free trial
                        </Typography>

                        <form>
                            {/* Name Fields */}
                            <TextField
                                fullWidth
                                label="First Name"
                                placeholder="Jim"
                                variant="outlined"
                                value={input.firstname}
                                onChange={inputHandler}
                                name="firstname"
                                required
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                fullWidth
                                label="Last Name"
                                placeholder="Giovani"
                                variant="outlined"
                                value={input.lastname}
                                onChange={inputHandler}
                                name="lastname"
                                required
                                sx={{ mb: 2 }}
                            />

                            {/* Email */}
                            <TextField
                                fullWidth
                                label="Email Address"
                                placeholder="jim322.buzinez@gmail.com"
                                variant="outlined"
                                value={input.email}
                                onChange={inputHandler}
                                name="email"
                                required
                                sx={{ mb: 2 }}
                            />

                            {/* Country Code and Phone */}
                            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                                <FormControl fullWidth variant="outlined" required>
                                    <InputLabel>Country Code</InputLabel>
                                    <Select
                                        value={countryCode}
                                        onChange={handleCountryCodeChange}
                                        label="Country Code"
                                    >
                                        {countries.map((country) => (
                                            <MenuItem key={country.code} value={country.code}>
                                                {country.code} ({country.name})
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    placeholder="77768 - 49878"
                                    variant="outlined"
                                    value={input.phoneNumber}
                                    onChange={inputHandler}
                                    name="phoneNumber"
                                    required
                                />
                            </Box>

                            {/* Password */}
                            <TextField
                                fullWidth
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                variant="outlined"
                                value={input.password}
                                onChange={inputHandler}
                                name="password"
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={togglePasswordVisibility}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ mb: 2 }}
                            />

                            {/* Terms Checkbox */}
                            <FormControlLabel
                                control={<Checkbox required />}
                                label="Yes, I understand and agree to the Kalavyuha Terms of services"
                                sx={{ mb: 2 }}
                            />

                            {/* Buttons */}
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{
                                    backgroundColor: "#003366",
                                    color: "#fff",
                                    "&:hover": { backgroundColor: "#002855" },
                                    mb: 2,
                                }}
                                onClick={handleSubmit}
                            >
                                Create Account
                            </Button>

                            <Typography align="center" sx={{ mb: 2 }}>
                                Or
                            </Typography>

                            <Typography align="center">
                                Already have an account?{" "}
                                <Link
                                    to="/"
                                    style={{
                                        color: "#003366",
                                        textDecoration: "none",
                                    }}
                                >
                                    Sign in
                                </Link>
                            </Typography>

                            <Box textAlign="center" sx={{ mt: 2 }}>
                                <Button variant="outlined" color="error">
                                    Continue with Google
                                </Button>
                            </Box>
                        </form>
                    </Box>
                )}
            </Box>
        </Box>
    );
}

export default RegistrationForm;
