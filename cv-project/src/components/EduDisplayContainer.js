import { Component } from 'react';

class EduDisplayContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className='display-box'>
            <h2>Educational Experience</h2>
            <p><strong>School: </strong> {this.props.school}</p>
            <p><strong>Type: </strong> {this.props.schoolType}</p>
            <p><strong>Start Date: </strong> {this.props.startDate}</p>
            <p><strong>End Date: </strong> {this.props.endDate}</p>
            <p><strong>Major/Discipline: </strong> {this.props.major}</p>
            <p><strong>Minor: </strong> {this.props.minor}</p>




            
                         

            </div>
        )
    }
}

export default EduDisplayContainer;