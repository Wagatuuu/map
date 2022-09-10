import React, {useState, useEffect} from 'react';

function Map(){

    const [location, setLocation] = useState('');
    const [noiseinfo, setNoiseinfo] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const data = await fetch('http://127.0.0.1:8000/info', {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })

            const res = await data.json()
            setNoiseinfo(res)
        }
        fetchData()
    },[])

    const place = noiseinfo.find(data => {
        return data.place === location
    })

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
    }

    return(
        <>
            <div className='nav'>
                <h1>NoiseCapture</h1>
                <div className='acc'>
                    <h2>Georgeey</h2>
                </div>
            </div>

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
                
            </div>
        </>
    )
}

export default Map;