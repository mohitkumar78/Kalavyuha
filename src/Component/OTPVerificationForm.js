import React, { useState } from "react";
import { Box, Grid2, Typography, TextField, Button } from "@mui/material";
import Sidebar from "./Sidebar";
function OTPVerification() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6 OTP inputs

    // Handle OTP input change
    const handleChange = (index, value) => {
        if (value.length > 1) return; // Only accept single digit
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus to the next field
        if (value && index < 5) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    // Handle Verify OTP
    const handleVerifyOTP = () => {
        const customOtp = "010101"
        const userOtp = otp.join("")
        if (customOtp === userOtp) {
            alert('Welcome Otp is verifed')
        }
        else {
            alert(`Wrong Entered OTP: ${otp.join("")}`);
        }

    };

    return (
        <Grid2 container sx={{ minHeight: "100vh" }}>
            {/* Sidebar */}



            {/* OTP Section */}
            <Grid2
                item
                xs={12}
                md={8}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    marginLeft: "200px"
                }}
            >
                <Box sx={{ textAlign: "center", p: 4 }}>
                    <Typography
                        variant="h4"
                        sx={{ mb: 2, fontWeight: "bold", color: "#003366" }}
                    >
                        Enter the Code
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
                        Enter the OTP code that we sent to your phone number{" "}
                        <strong>+91--------</strong>. <br />
                        Be careful not to share the code with anyone.
                    </Typography>

                    {/* OTP Input Boxes */}
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 4 }}>
                        {otp.map((value, index) => (
                            <TextField
                                key={index}
                                id={`otp-input-${index}`}
                                variant="outlined"
                                value={value}
                                onChange={(e) => handleChange(index, e.target.value)}
                                inputProps={{
                                    maxLength: 1,
                                    style: {
                                        textAlign: "center",
                                        fontSize: "1.5rem",
                                        width: "2.5rem",
                                        height: "2.5rem",
                                    },
                                }}
                            />
                        ))}
                    </Box>

                    {/* Verify OTP Button */}
                    <Button
                        variant="contained"
                        onClick={handleVerifyOTP}
                        sx={{
                            backgroundColor: "#003366",
                            color: "#fff",
                            "&:hover": { backgroundColor: "#002855" },
                            px: 4,
                            py: 1,
                            fontSize: "1rem",
                        }}
                    >
                        Verify OTP
                    </Button>

                    <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                        One more step to get started
                    </Typography>
                </Box>
            </Grid2>
        </Grid2>
    );
}

export default OTPVerification;
