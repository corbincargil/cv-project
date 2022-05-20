import { Component } from 'react';

class EduInputContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className='input-box'>
                <h2>Educational Experience</h2>
                <form action="edu-input" className="form">
                    <p>
                        <label htmlFor="school">School Name:</label>
                        <input type="text" id='school' required/>
                    </p>
                    <p>
                        <label htmlFor="schl-type">Type:</label>
                        <input list='school-type'/>
                        <datalist id='school-type'>
                            <option value="High School"/>
                            <option value="Boot Camp"/>
                            <option value="Trade School"/>
                            <option value="University"/>
                        </datalist>
                    </p>
                    <p>
                        <label htmlFor="start-date">Start Date:</label>
                        <input type="date" id='start-date' required/>
                    </p>
                    <p>
                        <label htmlFor="end-date">End Date:</label>
                        <input type="date" id='end-date' required/>
                    </p>
                    <p>
                        <label htmlFor="major">Major/Discipline:</label>
                        <input type="text" id='major' required/>
                    </p>
                    <p>
                        <label htmlFor="minor">Minor?</label>
                        <input type="checkbox" name="minor" id="minor" />
                        <input type="text" id='minor'/>
                    </p>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default EduInputContainer;