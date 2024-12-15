import React from "react";
import { Grid2, Paper, Typography, Button } from "@mui/material";
import { Email, Chat } from "@mui/icons-material";

function Sidebar({ email, name }) {


    return (
        <Grid2
            item
            xs={12}
            md={4}
            sx={{
                backgroundColor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 4,
                height: "100%"
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    width: "100%",
                    maxWidth: 350,
                    textAlign: "center",
                    borderRadius: 2,
                }}
            >
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                    Kalavyuha
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Chat with us
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<Chat />}
                    sx={{
                        mb: 2,
                        backgroundColor: "#003366",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#002855" },
                    }}
                >
                    Start live chat
                </Button>
                <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                    <Email sx={{ verticalAlign: "middle", mr: 1 }} /> Shoot us an email
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    <strong>Your Details:</strong>
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    <strong>Full Name:</strong> {name || "Not Provided"}
                </Typography>
                <Typography variant="body1">
                    <strong>Email:</strong> {email || "Not Provided"}
                </Typography>
            </Paper>
        </Grid2>
    );
}

export default Sidebar;
