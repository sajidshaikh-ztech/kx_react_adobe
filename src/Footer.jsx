import {Container, Grid, List, ListItem, Typography} from "@mui/material";

import React from "react";
import {Link} from "react-router-dom";


function Footer() {
    return (
        <Container maxWidth="lg">  {/* Adjust maxWidth as needed */}
            <Grid container spacing={2} color={"#030C71"}>
                <Grid item xs={3}>  {/* 40% width for the first section */}
                    <Typography variant="h6">
                        Associate Websites
                    </Typography>
                    <List>
                        <ListItem>
                            <Link to="http://www.modularmining.com/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                Modular Mining
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="http://www.ivolve.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                Ivolve
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="http://www.montabert.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                            Montabert
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="http://www.komatsuforklift.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                Komatsu Forklifts
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="http://www.komatsufinancial.com" target="_blank"  rel="noreferrer" style={{ textDecoration: 'none' }}>
                                Komatsu Financial
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="http://www.quadco.com" target="_blank"  rel="noreferrer" style={{ textDecoration: 'none' }}>
                            Quadco
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="http://www.hensely.com" target="_blank"  rel="noreferrer" style={{ textDecoration: 'none' }}>
                            Hensely
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="http://www.timberpro.com" target="_blank"  rel="noreferrer" style={{ textDecoration: 'none' }}>
                            Timberpro
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="http://www.americanbatterysolutions.com" target="_blank"  rel="noreferrer" style={{ textDecoration: 'none' }}>
                            American Battery Solutions
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>  {/* 40% width for the first section */}
                    <Typography variant="h6">
                        Tools
                    </Typography>
                    <List>
                        <ListItem>Request a quote</ListItem>
                        <ListItem>Locator tool</ListItem>
                        <ListItem>My Komatsu</ListItem>
                        <ListItem>Competitive comparison</ListItem>
                        <ListItem>Mining Analytics Platform</ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>  {/* 40% width for the first section */}
                    <Typography variant="h6">
                        Company
                    </Typography>
                    <List>
                        <ListItem>About Us</ListItem>
                        <ListItem>Blog</ListItem>
                        <ListItem>Careers</ListItem>
                        <ListItem>Commitment to society</ListItem>
                        <ListItem> Events</ListItem>
                        <ListItem> Merchandise</ListItem>
                        <ListItem>Newsroom</ListItem>
                        <ListItem>Success stories</ListItem>
                        <ListItem> Investor relations</ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>  {/* 40% width for the first section */}
                    <Typography variant="h6">
                        Connect
                    </Typography>
                    <List>
                        <ListItem>Contact us</ListItem>
                        <ListItem>Social media</ListItem>
                        <ListItem>Customer / dealer portals</ListItem>
                        <ListItem>Suppliers</ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;