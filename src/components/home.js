import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(){
    return (
        <div className='container'>
            <div className='nav'>
                <h1>Noise Screening Lite.</h1>
                <Link to='/signup' style={{textDecoration: 'none'}}>
                    <h2>Create account</h2>
                </Link>
            </div>
            <div className='home'>
                <h3>Explore Noise Maps</h3>
                <p>Your No.1 stop for screening Noise data. Feel free to contribute by uploading noise data of your area</p>
            </div>
            <div className='footer'>
                @2022, Wagatu Ian - All rights reserved
            </div>
        </div>
    )
}