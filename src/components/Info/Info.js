import React from 'react';
import shopping from '../../images/shopping.png';

const Info = () => {
    return (
        <div>
            <div id='home' class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={shopping} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className='text-primary text-3xl font-bold'>Best in the market!</h1>
                        <p class="py-6">Are you looking for products for daily needs but don't have time to go to shopping center. Products on cloud will help you to solve this issue. You add cost efficient products to your cart that you love.</p>
                        <button class="btn btn-accent">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;