import React from 'react';

function Upload(){
    return (
        <div className='login-container'>
            <form>
                <div className='input-field'>
                        <input 
                            type='text' required
                            name='place'
                        />
                        <span></span>
                        <label>Place</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='number' required
                            name='noise-level'
                        />
                        <span></span>
                        <label>Noise level</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            name='time-length'
                        />
                        <span></span>
                        <label>Time length</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            name='pleasantness'
                        />
                        <span></span>
                        <label>Pleasantness</label>
                    </div>
                    <div className='input-field'>
                        <input 
                            type='text' required
                            name='noise-type'
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