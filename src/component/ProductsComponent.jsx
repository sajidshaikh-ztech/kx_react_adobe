import React from 'react';
import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid';
import {Button, Container} from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';


const ProductsComponent = () => {
    const titles = ['ZT44', 'ZR77', 'ZR122', '320XPC'];
    const images = [
        'https://komatsu.stylelabs.cloud/api/public/content/2Related_d305f48e981b4bd5909bdd3a83927a38?v=c8320406',
        'https://komatsu.stylelabs.cloud/api/public/content/Related_2bb302c4c7a941f480b2a345cfd373b0?v=003558bd',
        'https://komatsu.stylelabs.cloud/api/public/content/Related_010d9b6931ed443782a97fe7ad04a277?v=dfde7a2e',
        'https://komatsu.stylelabs.cloud/api/public/content/Related_3e999bcd65ac43129a0b4c1c37cab32a?v=375d749a'
    ];
    const holeDiameter = ['7 7/8 - 10 5/8 in', '13 3/4 in', '10 5/8 - 17 1/2 in', '10 5/8 - 17 1/2 in'];
    const bitLoading = ['77,000 lbs.', '77,000 lbs.', '122,000 lbs.', '150,000 lbs.'];
    const holeRange = ['5.5 - 8.5 in', '55 ft.', '65 ft.', '65 ft.'];


    return (
        <Container maxWidth="false" sx={{
            paddingBottom:'10vh',
        }}>

            <Grid container spacing={2} >
                {titles.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={item} >

                        <Box p={2} display="flex" alignItems="center" justifyContent="center">
                            <img src={images[index]} style={{ width: 200, height: 200, marginRight: 20 }} />
                        </Box>

                        <Box p={2} display="flex" alignItems="center">
                            <Typography variant="h6" align="center" >
                                   {item}
                            </Typography>
                        </Box>
                        <Box p={2} display="flex" alignItems="center">
                            <Typography variant="h7" align="center" >
                                Hole Diameter {holeDiameter[index]}
                            </Typography>
                        </Box>
                        <Box p={2} display="flex" alignItems="center">
                            <Typography variant="h7" align="center" >
                                Bit Loading {bitLoading[index]}
                            </Typography>
                        </Box>
                        <Box p={2} display="flex" alignItems="center">
                            <Typography variant="h7" align="center" >
                                Single pass hole depth {holeRange[index]}
                            </Typography>
                        </Box>
                        <Box p={2} display="flex" alignItems="center">
                            <Button
                                type="button"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => window.open('https://www.komatsu.com/en/request-a-quote/', '_blank')}
                            >
                                Request Quote
                            </Button>
                        </Box>

                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductsComponent;
