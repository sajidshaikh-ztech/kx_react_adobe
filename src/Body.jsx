import React from 'react';
import Box from '@mui/material/Box';
import BackgroundImage from './images/mbr_backgroud.jpeg';
import ProfileComponent from "./component/ProfileComponent";
import GraphsComponent from "./component/GraphsComponent";
import {Container, Grid} from "@mui/material";
import TilesComponent from "./component/TilesComponent";

function Body() {
    return (
        <Container maxWidth="lg">  {/* Adjust maxWidth as needed */}
            <Grid container spacing={2}>  {/* Adjust spacing as needed */}
                <Grid item xs={12}>
                    <ProfileComponent/>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ mb: 4 }}> {/* Add spacing at the bottom */}
                        <GraphsComponent/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ mb: 4 }}> {/* Add spacing at the bottom */}
                        <TilesComponent/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Body;
