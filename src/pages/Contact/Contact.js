import React from 'react';
import me from '../../images/Shahed.jpg';

const About = () => {
    return (
        <div className="container">
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center items-center m-2 gap-4'>
                <div>
                    <img className='img-fluid' src={me} alt="" />
                </div>
                <div>
                    <h2 className='fw-bold text-3xl text-accent p-2'>S M Shahed Yousuf</h2>
                    <p className='fs-5 ms-2 font-bold p-2'>Hi. I am a Web developer and Love making websites. I am a computer science graduate and experienced in modern web develpment technologies.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;