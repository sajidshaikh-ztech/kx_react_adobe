import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import LogoImage from './images/komatsu-icon.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'; // Import Link for navigation


function Header() {
    const [activeTab, setActiveTab] = useState(0);
    const navigate = useNavigate();
    const handleTabChange = (event, newValue) => {
        console.log('NewValue---- ' + newValue);
        if (newValue === 0) {
            //navigate('/category-landing');
        } else if (newValue === 1) {
            //navigate('/products-listing');
        }
        setActiveTab(newValue);
    };

    const handleOnClick = (tab) => {
        console.log('Here---- ' + tab.label);
        navigate('/kx_react_adobe/'+tab.label);
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{
                bgcolor: 'white',
            }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                   <Link to={'/kx_react_adobe'}><img src={LogoImage} alt="Logo" style={{ height: 80, marginRight: 10 }} /></Link>
                </Typography>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    aria-label="navigation tabs"
                    sx={{ flexGrow: 1 }}
                >

                    <Tab label="Machines" sx={{ typography: 'h7', fontWeight: 'bold' }} onClick={() => handleOnClick({ label: "category/machines" })}/>
                    <Tab label="Parts" sx={{ typography: 'h7', fontWeight: 'bold' }} onClick={() => handleOnClick({ label: "category-landing/parts" })}/>
                    <Tab label="Solutions" sx={{ typography: 'h7', fontWeight: 'bold' }} onClick={() => handleOnClick({ label: "solutions-listing" })}/>
                    <Tab label="Support & Service" sx={{ typography: 'h7', fontWeight: 'bold' }} />
                    <Tab label="Shop" sx={{ typography: 'h7', fontWeight: 'bold' }} />
                </Tabs>
                <InputBase
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    startAdornment={<SearchIcon />}
                    sx={{
                        borderRadius: 20,
                        border: 1,
                        paddingLeft: 2,
                        paddingRight: 2,
                        marginRight: 2,
                        width: '300px',
                    }}
                />

                <Typography color="common.black"
                            variant="body2" sx={{ marginRight: 2 }}>
                    <LanguageIcon sx={{ marginRight: 1 }}/>Language
                </Typography>

                <Typography color="common.black" variant="body2" sx={{ marginRight: 2 }}>
                    <LocationOnIcon sx={{ marginRight: 1 }}/> Find a Dealer
                </Typography>

                {/*<IconButton color="color.black">
                    <PersonIcon/>
                </IconButton>*/}
                <IconButton color="color.black">
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;