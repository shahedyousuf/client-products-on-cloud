import React from 'react';
import Header from '../../components/Header/Header';
import Info from '../../components/Info/Info';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Info></Info>
            <Products></Products>
        </div>
    );
};

export default Home;