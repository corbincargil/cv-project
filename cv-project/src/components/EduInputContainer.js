import { Component } from 'react';

class EduInputContainer extends Component {
    constructor(props) {
        super(props);

        this.onSchoolInput = this.onSchoolInput.bind(this);
        this.onSchoolTypeInput = this.onSchoolTypeInput.bind(this);
        this.onStartDate = this.onStartDate.bind(this);
        this.onEndDate = this.onEndDate.bind(this);
        this.onMajor = this.onMajor.bind(this);
        this.onPursuingMinor = this.onPursuingMinor.bind(this);
        this.onMinor = this.onMinor.bind(this);
    }

    onSchoolInput(e) {
        this.props.handleSchoolInput(e.target.value);
    }

    onSchoolTypeInput(e) {
        this.props.handleSchoolTypeInput(e.target.value);
    }

    onStartDate(e) {
        this.props.handleStartDate(e.target.value);
    }

    onEndDate(e) {
        this.props.handleEndDate(e.target.value);
    }

    onMajor(e) {
        this.props.handleMajor(e.target.value);
    }

    onPursuingMinor(e) {
        this.props.handlePursuingMinor(e.target.value);
    }

    onMinor(e) {
        this.props.handleMinor(e.target.value);
    }

    render(){
        return (
            <div className='input-box'>
                <h2>Educational Experience</h2>
                <p>
                    <label htmlFor="school">School Name:</label>
                    <input 
                        type="text"
                        id='school' 
                        onChange={this.onSchoolInput}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="schl-type">Type:</label>
                    <input list='school-type'
                            onChange={this.onSchoolTypeInput}
                    />
                    <datalist id='school-type'>
                        <option value="High School"/>
                        <option value="Boot Camp"/>
                        <option value="Trade School"/>
                        <option value="University"/>
                    </datalist>
                </p>
                <p>
                    <label htmlFor="start-date">Start Date:</label>
                    <input 
                        type="date" 
                        id='start-date' 
                        onChange={this.onStartDate}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="end-date">End Date:</label>
                    <input 
                        type="date" 
                        id='end-date' 
                        onChange={this.onEndDate}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="major">Major/Discipline:</label>
                    <input 
                        type="text" 
                        id='major'
                        onChange={this.onMajor} 
                        required
                    />
                </p>
                <p>
                    <label htmlFor="minor">Minor?</label>
                    <input 
                        type="checkbox" 
                        name="minor" 
                        //id="minor" 
                        onChange={this.onPursuingMinor}
                    />
                    <input 
                        type="text" 
                        id='minor'
                        onChange={this.onMinor}
                    />
                </p>
            </div>
        )
    }
}

export default EduInputContainer;