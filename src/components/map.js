import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import {Modal} from '@mui/material';
import Upload from './upload';

function Map(){

    const [location, setLocation] = useState('');
    const [noiseinfo, setNoiseinfo] = useState([]);
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState([])

    useEffect(() => {
        async function fetchData(){
            const data = await fetch('https://noisecapture.herokuapp.com/info', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            });

            const userdata = await fetch('https://noisecapture.herokuapp.com/cur', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            });

            const res = await data.json()
            setNoiseinfo(res)

            const user_res = await userdata.json()
            setUser(user_res)
        }
        fetchData()
    },[]);

    const place = noiseinfo.find(data => {
        return data.place === location
    });

    let display;

    if (location){
        var arr = []
        arr.push(place)
        display = (
            arr.map(info => (
                <ul key= {info.pk_track}>
                <li>
                    <h4>Noiselevel:</h4>
                    <p>{info.noiselevel}</p>
                </li>
                <li>
                    <h4>Timelength:</h4>
                    <p>{info.timelength}</p>
                </li>
                <li>
                    <h4>Tags:</h4>
                    <p>{info.tags}</p>
                </li>
                <li>
                    <h4>Time epoch:</h4>
                    <p>{info.time_epoch}</p>
                </li>
                <li>
                    <h4>Pleasantness:</h4>
                    <p>{info.pleasantness}</p>
                </li>
                <li>
                    <h4>Track uuid:</h4>
                    <p>{info.track_uuid}</p>
                </li>
                <li>
                    <h4>Time ISO8601:</h4>
                    <p>{info.time_ISO8601}</p>
                </li>
            </ul>
            ))
        )
    };

    const username = user.map(user => user.username);

    return(
        <>
            <div className='nav'>
                <h1>Noise Screening Lite.</h1>
                <div className='acc'>
                    <h2>{username[0]}</h2>
                    <h3 onClick={() => setOpen(!open)}>Upload Data</h3>
                </div>
            </div>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Upload />
            </Modal>

            <div className='map'>
                <div className='data'>
                    <div className='location'>
                        <h5>Choose location:</h5>
                        <ul>
                            <button onClick={() => setLocation('Kenya_Nairobi_Dagoretti North')}>Dagoretti North</button>
                            <button onClick={() => setLocation('Kenya_Nairobi_Embakasi East')}>Embakasi East</button>
                            <button onClick={() => setLocation('Kenya_Nairobi_Kibra')}>Kibra</button>
                            <button onClick={() => setLocation('Kenya_Nairobi_Starehe')}>Starehe</button>
                            <button onClick={() => setLocation('Kenya_Nairobi_Kasarani')}>Kasarani</button>
                            <button onClick={() => setLocation('Kenya_Nairobi_Embakasi West')}>Embakasi West</button>
                            <button onClick={() => setLocation('Kenya_Nairobi_Langata')}>Langata</button>
                            <button onClick={() => setLocation('Kenya_Nairobi_Roysambu')}>Roysambu</button>
                            <button onClick={() => setLocation('Kenya_Nairobi_Westlands')}>Westlands</button>
                        </ul>
                    </div>

                    <div className='raw'>

                    {display}

                    </div>

                </div>

                <div className='actualmap'>
                <MapContainer 
                    center={[-1.292066, 36.821945]} 
                    zoom={13} 
                    scrollWheelZoom={true} 
                    style={{height: '100vh', width: '100vh'}}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-1.292066, 36.821945]}>
                        
                    </Marker>
                </MapContainer>
                </div>
                
            </div>
        </>
    )
}

export default Map;