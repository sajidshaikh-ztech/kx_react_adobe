import React from 'react';
import Box from '@mui/material/Box';

import ProfileComponent from "./ProfileComponent";

import {Container, Grid, IconButton, Typography} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function GuestBodyComponent() {
    return (
        <Container maxWidth="lg">  {/* Adjust maxWidth as needed */}
            <Grid container spacing={2}>  {/* Adjust spacing as needed */}
                <Grid item xs={12}>
                    <ProfileComponent user={'guest'}/>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ mb: 4 }}> {/* Add spacing at the bottom */}
                        <Container maxWidth="lg">
                            <Grid container spacing={2}>
                                    <Grid item xs={3} >
                                        <Box sx={{
                                            width: '200px',
                                            height: '200px',
                                            backgroundColor: '#D3D3D3',
                                            color: 'primary.contrastText',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Grid container direction="column" spacing={2}>
                                                <Grid item textAlign={"center"}>
                                                    <IconButton><AccountCircleIcon sx={{ fontSize: 80 }}/></IconButton>
                                                </Grid>
                                                <Grid item textAlign={"center"} fontWeight={"bold"}>
                                                    <Typography variant="h7" color={"#030C71"}>Create Account</Typography>
                                                </Grid>

                                            </Grid>
                                        </Box>
                                    </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GuestBodyComponent;
