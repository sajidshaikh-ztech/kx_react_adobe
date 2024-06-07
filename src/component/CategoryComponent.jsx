import React, {useEffect, useState} from 'react';

import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import { gql, useQuery } from '@apollo/client';
import {GET_CATEGORIES} from "../queries";

const GET_SUBCATEGORIES = gql`
  query {
  categories(
    filters: {
      ids: {in: ["119"]}
      parent_id: {in: ["2"]}
    }
    pageSize:3
    currentPage: 1
  ) {
    total_count
    items {
      uid
      level
      name
      path
      children_count
      children {
        uid
        level
        name
        path
        children_count
        children {
          uid
          level
          name
          path
        }
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
  }
}
`;


const CategoryComponent = ({ category }) => {
    //const [subcategories, setSubcategories] = useState([]);
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    const categories = data?.categories?.items || [];

    const titlesData = {
        "machines": ['Blasthole Drills', 'Crushing', 'Dozers', 'Draglines', 'Electric Rope Shovels', 'Entry Development'],
        "parts":    ['Air Filters', 'Breather Fitlers', 'Corrosion Resistor', 'Engine Oil Filters', 'Filters Kit', 'Fuel Filters']
    };


    /*useEffect(() => {
        if (data && data.categories) {
            setSubcategories(data.categories.items);
        }
        console.log("Subcategories " + subcategories);
    }, [data]);*/

    const imagesData = {
        'Blasthole Drills':'https://komatsu.stylelabs.cloud/api/public/content/Related_6478d3f017dc49e9a23131c29a866945?v=2c3c232f',
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
            <div>
                <h1>Categories and Children</h1>
                {categories.map(category => (
                    <div key={category.uid}>
                        <h2>{category.name}</h2>
                        {category.children.map(child => (
                            <p key={child.uid}>{child.name}</p>
                        ))}
                    </div>
                ))}
            </div>
            <Grid container spacing={2} >
                <Grid item xs={12} sx={{
                    padding:'2vh',
                }}>  {/* 40% width for the first section */}
                    <Typography variant="h4"  sx={{ paddingTop: '2vh' }}>
                        {category.toUpperCase()}
                    </Typography>
                </Grid>

                {titlesData[category].map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={item} >
                        <Link to={`/kx_react_adobe/${category}`}>
                            <Box p={2} display="flex" alignItems="center" justifyContent="center">
                                <img src={imagesData[item]} alt={item} style={{ width: 200, height: 200, marginRight: 20 }} />
                            </Box>
                        </Link>
                        <Box p={2} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" >
                                   {item}
                            </Typography>
                        </Box>

                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CategoryComponent;
