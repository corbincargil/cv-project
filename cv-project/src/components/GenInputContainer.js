import { Component } from 'react';

class GenInputContainer extends Component {
    constructor(props) {
        super(props);

        this.onName = this.onName.bind(this);
        this.onEmail = this.onEmail.bind(this);
        this.onPhone = this.onPhone.bind(this);
        this.onBirth = this.onBirth.bind(this);
    }

    onName(e){
        this.props.handleName(e.target.value);
    }

    onEmail(e){
        this.props.handleEmail(e.target.value);
    }

    onPhone(e){
        this.props.handlePhone(e.target.value);
    }

    onBirth(e){
        this.props.handleBirth(e.target.value);
    }

    render(){
        return (
            <div className='input-box'>
                <h2>General Information</h2>
                <p>
                    <label htmlFor="full-name">Full Name:</label>
                    <input 
                    type="text" 
                    placeholder='John Doe' 
                    id='full-name' 
                    onChange={this.onName}
                    required
                    />
                </p>
                <p>
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id='email' 
                    placeholder='john.doe@gmail.com' 
                    onChange={this.onEmail}
                    required
                    />
                </p>
                <p>
                    <label htmlFor="phone">Phone Number:</label>
                    <input 
                    type="tel" 
                    id='phone' 
                    placeholder='(XXX) XXX-XXXX' 
                    onChange={this.onPhone}
                    required
                    />
                </p>
                <p>
                    <label htmlFor="birth">Date of Birth:</label>
                    <input 
                    type="date" 
                    id='birth' 
                    onChange={this.onBirth}
                    required
                    />
                </p>
            </div>
        )
    }
}

export default GenInputContainer;