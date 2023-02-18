import React from 'react';

// Mui Components
import { Box } from '@mui/joy';

// Css 
import styles from './header.module.css' ;

//logo 
import Logo from "../../images/logo.png" ;

const Header = () => {
    return (
        <Box>
            <img src={Logo} alt="logo shop" />
        </Box>
    );
};

export default Header;