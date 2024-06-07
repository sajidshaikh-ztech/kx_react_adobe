import React from 'react';

import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import {Button, Container} from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';

const PartsComponent = () => {
    const navigate = useNavigate();
    const name = ['Filter, Cabin Air Element', 'Cabin Air Filter', 'Air Filter', 'Cabin Air Filter Accessory',
                            'Water Pump Assembly','Starter, Gear Reduction type, 24 Volts 5.5 KW'];
    const images = [
        'https://mykomats-prd-storageaccount.azureedge.net/partsimage/FT_Filters.png?28032024',
        'https://mykomats-prd-storageaccount.azureedge.net/partsimage/145-Z79-5810-WM.jpg?28032024',
        'https://mykomats-prd-storageaccount.azureedge.net/partsimage/14X-911-7750-WM.jpg?28032024',
        'https://mykomats-prd-storageaccount.azureedge.net/partsimage/22B-979-1730-WM.jpg?28032024',
        'https://mykomats-prd-storageaccount.azureedge.net/partsimage/EN_Engine.png?28032024',
        'https://mykomats-prd-storageaccount.azureedge.net/partsimage/PSTR1028_PL_Starter.png?28032024'
    ];
    const partNumber = ['00840205','145-Z79-5810','14X-911-7750', '22B-979-1730','R600-821-9390','R600-863-5131'];


    return (
        <Container maxWidth="false" sx={{
            paddingBottom:'10vh',
        }}>

            <Grid container spacing={2} >
                {name.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={item} >
                        <Link to={`/products-listing`}>
                            <Box p={2} display="flex" alignItems="center" justifyContent="center">
                                <img src={images[index]} style={{ width: 200, height: 200, marginRight: 20 }} />
                            </Box>
                        </Link>
                        <Box p={1} display="flex" alignItems="center">
                            <Typography variant="h6" align="center" >
                                {name[index]}
                            </Typography>
                        </Box>
                        <Box p={2} display="flex" alignItems="center">
                            <Typography variant="h7" align="center" >
                                {partNumber[index]}
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

export default PartsComponent;
