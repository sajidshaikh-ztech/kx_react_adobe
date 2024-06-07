import React from 'react';
import {Container} from '@mui/material';
import CategoryComponent from "../component/CategoryComponent";
import {useParams} from 'react-router-dom';

function CategoryLandingPage() {
    const { category } = useParams();
    const { categoryId } = useParams();
    return (
        <Container>
            <CategoryComponent category={category}/>
        </Container>
    );
}

export default CategoryLandingPage;