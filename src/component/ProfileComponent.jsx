import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import GenericImage from '../images/generic-person.png';
import CompanyLogoImage from '../images/mbr_company_logo.png'


function ProfileComponent({ user }) {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>  {/* 40% width for the first section */}
                <Box p={2} display="flex" alignItems="center">
                    <img alt="Personal" src={GenericImage} style={{ width: 200, height: 200, marginRight: 20 }} />
                </Box>
            </Grid>
            <Grid item xs={5}>
                <Box p={2} display="flex" alignItems="center">
                    {user === 'guest' ? (
                        <Typography variant="h5" sx={{pt: 10}}>
                            Good morning, John<br/>
                            Owner
                        </Typography>
                    ) : (
                        <Typography variant="h5" sx={{pt: 10}}>
                            Good morning, Henry<br/>
                            Member ID: 10012938476<br/>
                            Sierra Construction Company, Inc<br/>
                            Owner
                        </Typography>
                    )}

                </Box>
            </Grid>
            {user !== 'guest' ? (
                <Grid item xs={4}>
                    <Box sx={{ pt: 10 }} display="flex" alignItems="center">
                        <img src={CompanyLogoImage} alt="Company Logo"  />
                    </Box>
                </Grid>
            ) : (
                <Grid item xs={4}>
                </Grid>
            )}

        </Grid>
    );
}

export default ProfileComponent;
