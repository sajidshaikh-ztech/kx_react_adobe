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

// Option 2: BrowserRouter with basename (uncomment this block)
function App() {
    return (
            <div>
                <ApolloProvider client={client}>
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/kx_member_network" element={<SignInPage />} />
                            <Route path="/kx_member_network/registered-user" element={<RegisteredUserPage />} />
                            <Route path="/kx_member_network/guest-user" element={<GuestUserPage />} />
                            <Route path="/kx_member_network/machines" element={<ProductsListingPage />} />
                            <Route path="/kx_member_network/sign-in" element={<SignInPage />} />
                            <Route path="/kx_member_network/category-landing/:category" element={<CategoryLandingPage />} />
                            <Route path="/kx_member_network/parts" element={<PartsListingPage />} />
                            <Route path="/kx_member_network/solutions-listing" element={<SolutionsListingPage />} />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </ApolloProvider>
            </div>

    );
}

export default App;
