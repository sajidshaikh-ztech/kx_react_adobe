import { React, useState } from 'react';
import {TextField, Button, Box, Typography, Container, Paper} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Grid from "@mui/material/Grid";

const HomePage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const handleSignInClick = () => {
        navigate('/kx_react_adobe/signin');
    };

    return (
        <Container maxWidth="lg">
            <Typography variant="h4" style={{ marginTop: '30px' }}>
                My Komatsu Member Network
            </Typography>
            <hr/>
            <Box my={4}>

                <Grid container spacing={8}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" component="h2">
                            Sign In
                        </Typography>
                        <Typography variant="body1" component="p" style={{ marginTop: '8px' }}>
                           Access the full suite of Komatsu applications with your account. You can shop online, manage your equipment, go mobile and more.
                        </Typography>
                        <Button variant="contained" color="primary" style={{ marginTop: '16px' }} onClick={handleSignInClick}>
                            Sign In
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" component="h2">
                            Register
                        </Typography>
                        <Typography variant="body1" component="p" style={{ marginTop: '8px' }}>
                            Create your Komatsu account to log into select services. Shop for parts, manage equipment, and enjoy mobile features. Sign up now for
                            immediate access and benefits.
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#ffc82f',
                                color: 'black',
                                marginTop: '16px',
                            }}
                        >
                            <b>Register</b>
                        </Button>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    );
};

export default HomePage;
