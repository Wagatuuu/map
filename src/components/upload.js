import React, {useState} from 'react';

function Upload(){

    const [userdata, setUserData] = useState({
        place: '',
        noiselevel: '',
        timelength: '',
        pleasantness: '',
        noise_type: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userdata)
        window.location.reload()
    };

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <div className='input-field'>
                        <input 
                            type='text' required
                            value={userdata.place}
                            onChange={(e) => setUserData(prevState => ({
                                ...prevState, place: e.target.value
                            }))}
                        />
                        <span></span>
                        <label>Place</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='number' required
                            value={userdata.noiselevel}
                            onChange={(e) => setUserData(prevState => ({
                                ...prevState, noiselevel: e.target.value
                            }))}
                        />
                        <span></span>
                        <label>Noise level</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            value={userdata.timelength}
                            onChange={(e) => setUserData(prevState => ({
                                ...prevState, timelength: e.target.value
                            }))}
                        />
                        <span></span>
                        <label>Time length</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            value={userdata.pleasantness}
                            onChange={(e) => setUserData(prevState => ({
                                ...prevState, pleasantness: e.target.value
                            }))}
                        />
                        <span></span>
                        <label>Pleasantness</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            value={userdata.noise_type}
                            onChange={(e) => setUserData(prevState => ({
                                ...prevState, noise_type: e.target.value
                            }))}
                        />
                        <span></span>
                        <label>Noise type</label>
                    </div>
                <input type='submit' value='Upload Data' style={{marginBottom: '20px'}}/>
            </form> 
        </div>
    )
}

export default Upload;