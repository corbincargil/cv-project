import { Component } from 'react';

class GenDisplayContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className='display-box'>
            <h2>General Information</h2>
            <p><strong>Full Name: </strong> {this.props.name}</p>
            <p><strong>Email Address: </strong> {this.props.email}</p>
            <p><strong>Phone Number: </strong> {this.props.phone}</p>
            <p><strong>Date of Birth: </strong> {this.props.birth}</p>

            </div>
        )
    }
}

export default GenDisplayContainer;