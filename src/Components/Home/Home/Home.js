import React from 'react';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import Clients from '../Clients/Clients';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import RecentWorkCarousel from '../RecentWorkCarousel/RecentWorkCarousel';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Clients></Clients>
            <Services></Services>
            <RecentWorkCarousel></RecentWorkCarousel>
            <ClientFeedback></ClientFeedback>
            <Contact></Contact>
        </div>
    );
};

export default Home;