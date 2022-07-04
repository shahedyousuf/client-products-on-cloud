import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Info></Info>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;