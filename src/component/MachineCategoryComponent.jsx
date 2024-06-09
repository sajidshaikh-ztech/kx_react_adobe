import React from 'react';

import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import { useQuery } from '@apollo/client';
import {GET_CATEGORIES} from "../queries";


const CategoryComponent = () => {
    //const [subcategories, setSubcategories] = useState([]);
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    const categories = data?.categories?.items || [];

     const imagesData = {
        'Blasthole Drills':'https://komatsu.stylelabs.cloud/api/public/content/Related_6478d3f017dc49e9a23131c29a866945?v=2c3c232f',
        'Excavators': 'https://komatsu.stylelabs.cloud/api/public/content/2Related_f937840c020b402896bf4624cfeb224e?v=e93b8377',
        'Crushing':'https://komatsu.stylelabs.cloud/api/public/content/RelatedProducts_8852417d275449f6aaf572677bef53a5?v=3ed56c6a',
        'Dozers':'https://komatsu.stylelabs.cloud/api/public/content/Thumb_SM_62fb608aecc54b9480492311f8b14db5?v=4ad3107f',
        'Draglines':'https://komatsu.stylelabs.cloud/api/public/content/2Related_ef031d8fc67a45f7a1a028481b91656d?v=57e433fb',
        'Electric Rope Shovels':'https://komatsu.stylelabs.cloud/api/public/content/productthumbsm_1c458be0ddad458599b1f66eaee1c1f7?v=b6eb0cdd',
        'Entry Development':'https://komatsu.stylelabs.cloud/api/public/content/306d4d333f3e4631aae767fa684ef12e?v=32fa3397',
        'Air Filters':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/FT_Filters.png?29032024',
        'Breather Fitlers':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/207-60-51310-WM.jpg?29032024',
        'Corrosion Resistor':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/1257937H1-WM.jpg?29032024',
        'Engine Oil Filters':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/600-212-1411-WM.jpg?29032024',
        'Filters Kit':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/Main_Fuel_Filter.png?29032024',
        'Fuel Filters':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/207-60-71183-WM.jpg?29032024'
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
                                            <img src={imagesData[child.name]} alt={child.name} style={{ width: 300, height: 200, marginRight: 20 }} />
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

export default CategoryComponent;
