import React from 'react';
// Css 
import styles from './Header.module.css' ;

// Mui Components
import { Box,  Button,  Container, IconButton, List,  ListItem } from '@mui/joy';


//logo 
import Logo from "../../assets/images/logo.png" ;
import {  Person, ShoppingCart } from '@mui/icons-material';



const Header = () => {

    const blueHeader = "#fff";
    return (
        <>
            <Box 
                bgcolor={blueHeader}
                padding="10px 0"
            >
                <Container maxWidth="lg" >
                        <Box 
                            component="nav"
                            display="flex"
                            justifyContent="space-between"
                            aria-label="My site"
                            sx={{ flexGrow: 1 }}
                        >
                            <img src={Logo} width="100" alt="logo shop" />
                            <Box 
                                display="flex"
                                gap="10px" 
                                alignItems="center"
                            >
                                <List   role="menubar"  orientation="horizontal" >
                                    <ListItem>خانه</ListItem>
                                    <ListItem>محصولات</ListItem>
                                    <ListItem>تماس با ما</ListItem>
                                    <ListItem>درباره ما</ListItem>
                                </List>
                            </Box>
                            <Box
                                padding="10px"
                                display="flex"
                                gap='10px'
                                alignItems="center"
                            >
                                <IconButton variant='soft' color='primary' >
                                    <ShoppingCart/>
                                </IconButton>
                                <IconButton variant='soft' color='primary' > 
                                    <Person/>
                                </IconButton>
                            </Box>
                        </Box>
                </Container>
            </Box>
        </>
    );
};

export default Header;