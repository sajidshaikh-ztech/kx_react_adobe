import {Box, Container, Grid, IconButton, Typography} from '@mui/material';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DocumentScannerOutlinedIcon from '@mui/icons-material/DocumentScannerOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';

function TilesComponent() {

    const greenTiles = ['Create Account', 'My Profile', 'My Organization', 'Help Desk', 'Manage Alerts',
                                'Application Status'];

    const redTiles = ['My Community', 'Manage My Fleet', 'Manage My Site', 'My Reports', 'Shop',
                               'Financing', 'Documents', 'New Product Sales Enablement', 'Service My Fleet',
                                'Service & Warranty', 'Training'];
    //const icons = Array(12).fill(<PrecisionManufacturingIcon sx={{ fontSize: 40 }}/>, <ApartmentIcon sx={{ fontSize: 40 }}/>);
    const greenIcons = [
        <AccountCircleIcon sx={{ fontSize: 80 , color: 'white'}}/>,
        <AccountCircleOutlinedIcon sx={{ fontSize: 80, color: 'white' }}/>,
        <GroupsOutlinedIcon sx={{ fontSize: 80, color: 'white'  }}/>,
        <HelpOutlinedIcon sx={{ fontSize: 80, color: 'white'  }}/>,
        <AddAlertOutlinedIcon sx={{ fontSize: 80, color: 'white'  }}/>,
        <AutorenewOutlinedIcon sx={{ fontSize: 80, color: 'white'  }}/>
    ];

    const redIcons = [
        <Diversity3OutlinedIcon sx={{ fontSize: 80 , color: 'white'}}/>,
        <PrecisionManufacturingOutlinedIcon sx={{ fontSize: 80, color: 'white' }}/>,
        <ConstructionOutlinedIcon sx={{ fontSize: 80, color: 'white'  }}/>,
        <SummarizeOutlinedIcon sx={{ fontSize: 80, color: 'white'  }}/>,
        <ShoppingCartOutlinedIcon sx={{ fontSize: 80, color: 'white'  }}/>,
        <DescriptionOutlinedIcon sx={{ fontSize: 80, color: 'white' }}/>,
        <DocumentScannerOutlinedIcon sx={{ fontSize: 80, color: 'white' }}/>,
        <MovingOutlinedIcon sx={{ fontSize: 80, color: 'white' }}/>,
        <EngineeringOutlinedIcon sx={{ fontSize: 80, color: 'white' }}/>,
        <HealthAndSafetyOutlinedIcon sx={{ fontSize: 80, color: 'white' }}/>,
        <DirectionsRunOutlinedIcon sx={{ fontSize: 80, color: 'white' }}/>
    ];

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                {greenTiles.map((title, index) => (
                    <Grid item xs={3} key={index}>
                        <Box sx={{
                            width: '200px',
                            height: '200px',
                            backgroundColor: '#140a9a',
                            color: 'primary.contrastText',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item textAlign={"center"}>
                                    <IconButton>{greenIcons[index]}</IconButton>
                                </Grid>
                                <Grid item textAlign={"center"} fontWeight={"bold"}>
                                    <Typography variant="h7" color={"white"}>{title}</Typography>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                ))}
                {redTiles.map((title, index) => (
                    <Grid item xs={3} key={index}>
                        <Box sx={{
                            width: '200px',
                            height: '200px',
                            backgroundColor: '#ffc82f',
                            color: 'primary.contrastText',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item textAlign={"center"}>
                                    <IconButton>{redIcons[index]}</IconButton>
                                </Grid>
                                <Grid item textAlign={"center"} fontWeight={"bold"}>
                                    <Typography variant="h7" color={"white"}>{title}</Typography>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default TilesComponent;
