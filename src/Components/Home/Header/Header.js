import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import './Header.css'
const Header = () => {
    return (
       <header className="header">
           <Navigation></Navigation>
           <HeaderBanner></HeaderBanner>
       </header>
    );
};

export default Header;