import React from 'react';

import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import {Button, Container} from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
import {GET_PARTS_LIST} from "../partslistingqueries";
import { useQuery } from '@apollo/client';


const PartsListingComponent = () => {
    const { loading, error, data } = useQuery(GET_PARTS_LIST);
    const products = data?.products?.items || [];
    const navigate = useNavigate();

    return (
        <Container maxWidth="false" sx={{
            paddingBottom:'10vh',
        }}>
            <Typography variant="h4"  sx={{ paddingTop: '2vh' }}>
                Parts Under Air Filters
            </Typography>
            <Grid container spacing={2} >

                {products.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={item} >
                        <Link to={`/products-listing`}>
                            <Box p={2} display="flex" alignItems="center" justifyContent="left">
                                <img src={item.image.url} style={{ width: 200, height: 200, marginRight: 20 }} />
                            </Box>
                        </Link>
                        <Box p={1} display="flex" alignItems="center">
                            <Typography variant="h6" align="center" >
                                {item.name}
                            </Typography>
                        </Box>
                        <Box p={2} display="flex" alignItems="center">
                            <Typography variant="h7" align="center" >
                                {item.sku}
                            </Typography>
                        </Box>
                        <Button
                            type="button"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => window.open('https://mykomatsu.komatsu/', '_blank')}
                        >
                            Buy Now
                        </Button>

                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PartsListingComponent;
