import { Component } from 'react';

class GenDisplayContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className='display-box'>
            <h2>General Information</h2>
            <p><strong>Full Name: </strong> John Doe</p>
            <p><strong>Email Address: </strong> jdoe@gmail.com</p>
            <p><strong>Phone Number: </strong> (123) 456-7890</p>
            <p><strong>Date of Birth: </strong> 5/20/2022</p>

            </div>
        )
    }
}

export default GenDisplayContainer;