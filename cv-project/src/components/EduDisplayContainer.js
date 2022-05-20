import { Component } from 'react';

class EduDisplayContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className='display-box'>
            <h2>Educational Experience</h2>
            <p><strong>University: </strong> Johns Hopkins University</p>
            <p><strong>Start Date: </strong> Fall 2015</p>
            <p><strong>End Date: </strong> Fall 2019</p>
            <p><strong>Major/Discipline: </strong> Mechanical Engineering</p>
            <p><strong>Minor: </strong> Biomechanical Engineering</p>




            
                         

            </div>
        )
    }
}

export default EduDisplayContainer;