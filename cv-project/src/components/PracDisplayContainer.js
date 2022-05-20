import { Component } from 'react';

class PracDisplayContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className='display-box'>
            <h2>Practical Experience</h2>
            <p><strong>Company: </strong> {this.props.company}</p>
            <p><strong>Position: </strong> {this.props.position}</p>
            <p><strong>Start: </strong> {this.props.workStart}</p>
            <p><strong>End: </strong> {this.props.workEnd}</p>
            <p><strong>Description: </strong> {this.props.description}</p>
                

            </div>
        )
    }
}

export default PracDisplayContainer;