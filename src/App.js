import React from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom'; // Import all from react-router-dom
import SignInPage from "./pages/SignInPage";
import RegisteredUserPage from "./pages/RegisteredUserPage";
import Header from "./Header";
import Footer from "./Footer";
import CategoryLandingPage from "./pages/CategoryLandingPage";
import ProductsListingPage from "./pages/ProductsListingPage";
import GuestUserPage from "./pages/GuestUserPage";
import PartsListingPage from "./pages/PartsListingPage";
import SolutionsListingPage from "./pages/SolutionsListingPage"; // Import your Footer component
import { ApolloProvider } from '@apollo/client';
import client from './apolloclient'
import MachineCategoryComponent from "./component/MachineCategoryComponent";

// Option 2: BrowserRouter with basename (uncomment this block)
function App() {
    return (
            <div>
                <ApolloProvider client={client}>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/kx_react_adobe/" element={<SignInPage />} />
                            <Route path="/kx_react_adobe/registered-user" element={<RegisteredUserPage />} />
                            <Route path="/kx_react_adobe/guest-user" element={<GuestUserPage />} />
                            <Route path="/kx_react_adobe/machines" element={<ProductsListingPage />} />
                            <Route path="/kx_react_adobe/sign-in" element={<SignInPage />} />
                            <Route path="/kx_react_adobe/category/machines" element={<MachineCategoryComponent />} />
                            <Route path="/kx_react_adobe/category-landing/:category" element={<CategoryLandingPage />} />
                            <Route path="/kx_react_adobe/parts" element={<PartsListingPage />} />
                            <Route path="/kx_react_adobe/solutions-listing" element={<SolutionsListingPage />} />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </ApolloProvider>
            </div>

    );
}

export default App;
