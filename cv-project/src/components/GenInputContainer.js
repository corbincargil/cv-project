import { Component } from 'react';

class GenInputContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className='input-box'>
                <h2>General Information</h2>
                <form action="gen-input" className="form">
                    <p>
                        <label htmlFor="full-name">Full Name:</label>
                        <input type="text" placeholder='John Doe' id='full-name' required/>
                    </p>
                    <p>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id='email' placeholder='john.doe@gmail.com'required/>
                    </p>
                    <p>
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="number" id='phone' placeholder='(XXX) XXX-XXXX' required/>
                    </p>
                    <p>
                        <label htmlFor="birth">Date of Birth:</label>
                        <input type="date" id='birth' required/>
                    </p>
                    <button type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default GenInputContainer;