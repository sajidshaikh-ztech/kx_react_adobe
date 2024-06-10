import React from 'react';

import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import { useQuery } from '@apollo/client';

import {GET_PARTS_CATEGORIES} from "../partsqueries";


const PartsCategoryComponent = () => {
    //const [subcategories, setSubcategories] = useState([]);
    const { loading, error, data } = useQuery(GET_PARTS_CATEGORIES);
    const categories = data?.categories?.items || [];

     const imagesData = {
         'MTMw':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/FT_Filters.png?29032024',
        'MTMx':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/207-60-51310-WM.jpg?29032024',
        'MTMy':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/1257937H1-WM.jpg?29032024',
        'MTMz':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/600-212-1411-WM.jpg?29032024',
        'MTM0':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/Main_Fuel_Filter.png?29032024',
        'MTM1':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/207-60-71183-WM.jpg?29032024',
         'MTUw':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/207-60-71183-WM.jpg?29032024'
    };
    return (
        <Container maxWidth="false" sx={{
            paddingBottom:'10vh',
        }}>
            <Grid container spacing={2} >
                {categories.map(category => (
                    <Grid item xs={12} sx={{
                        padding:'2vh',
                    }} key={category.name}>
                        <Typography variant="h4"  sx={{ paddingTop: '2vh' }}>
                            {category.name.toUpperCase()}
                        </Typography>
                        <Grid container spacing={2}>
                            {category.children.map(child => (
                                <Grid item xs={12} sm={6} md={4} key={child.uid} >
                                    <Link to={`/kx_react_adobe/${category.name}`}>
                                        <Box p={2} display="flex" alignItems="center" justifyContent="center">
                                            <img src={child.image} alt={child.name} style={{ width: 300, height: 200, marginRight: 20 }} />
                                        </Box>
                                    </Link>
                                    <Box p={2} display="flex" alignItems="center" justifyContent="center">
                                        <Typography variant="h6" align="center" >
                                            {child.name}
                                        </Typography>
                                    </Box>

                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PartsCategoryComponent;
