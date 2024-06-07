import { Container, Grid } from '@mui/material';
import Typography from "@mui/material/Typography";

import FinancialImage from "../images/mbr-financials.png";
import SitesImage from "../images/mbr-sites.png";
import React from "react";


function GraphsComponent() {
    return (
        <Container maxWidth="false">  {/* Adjust maxWidth as needed */}
            <Grid container spacing={2} sx={{
                backgroundColor: 'white',
                padding: '2vh',
                }}>  {/* Adjust spacing as needed */}
                <Grid item xs={4}>  {/* 40% width for the first section */}
                    <Grid container direction="column" spacing={2}>  {/* Nested grid for rows */}
                        <Grid item>
                            <Typography variant="h6" align={"center"}>  {/* Adjust variant as needed for title */}
                               Financials
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={FinancialImage} alt="Financial" style={{ width: 300, height: 200}} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>  {/* 30% width for each remaining section */}
                    <Grid container direction="column" spacing={2}>  {/* Nested grid for rows */}
                        <Grid item>
                            <Typography variant="h6" align={"center"}>  {/* Adjust variant as needed for title */}
                                New Sites
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={SitesImage} alt="Financial Image" style={{ width: 175, height: 200}} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Grid container direction="column" spacing={2}>  {/* Nested grid for rows */}
                        <Grid item>
                            <Typography variant="h6" align={"center"}>  {/* Adjust variant as needed for title */}
                                Assets
                            </Typography>
                        </Grid>
                        <Grid item textAlign={"center"}>
                            <Typography variant="h7" align={"center"}>   {/* Adjust variant as needed for title */}
                                14 Machines <br/><br/>
                            </Typography>
                            <Typography variant="h7">
                            4.6 / 5 <br/>
                            Avg. Health Score<br/><br/>
                            </Typography>
                            <Typography variant="h7">
                            66% <br/>
                            Avg. Utilization<br/><br/>
                            </Typography>
                            <Typography variant="h7">
                            37%<br/>
                            Avg. Connectivity<br/><br/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction="column" spacing={2}>  {/* Nested grid for rows */}
                        <Grid item>
                            <Typography variant="h6" align={"center"}>  {/* Adjust variant as needed for title */}
                                Alerts & Notifications
                            </Typography>
                        </Grid>
                        <Grid item textAlign={"center"}>
                            <Typography variant="h7" color="red">   {/* Adjust variant as needed for title */}
                                0 Notifications <br/><br/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GraphsComponent;
