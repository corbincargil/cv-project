import { Component } from 'react';

class PracInputContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className='input-box'>
            <h2>Practical Experience</h2>
                <form action="prac-input" className="form">
                    <p>
                        <label htmlFor="company">Company Name:</label>
                        <input type="text" id='company' required/>
                    </p>
                    <p>
                        <label htmlFor="position">Position Title:</label>
                        <input type="text" id='position' required/>
                    </p>
                    <p>
                        <label htmlFor="description">Description:</label>
                        <textarea id='description' name='description' required/>
                    </p>
                    <p>
                        <label htmlFor="start-date">Start Date:</label>
                        <input type="date" id='start-date' required/>
                    </p>
                    <p>
                        <label htmlFor="current">Current Job?</label>
                        <input type="checkbox" name="current" id="current" />
                        <label htmlFor="end-date">End Date:</label>
                        <input type="date" id='start-date' required/>
                    </p>
                    <button type="submit">Submit</button>
                </form>
                

            </div>
        )
    }
}

export default PracInputContainer;