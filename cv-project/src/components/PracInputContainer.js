import { Component } from 'react';

class PracInputContainer extends Component {
    constructor(props) {
        super(props);

        this.onCompany = this.onCompany.bind(this);
        this.onPosition = this.onPosition.bind(this);
        this.onDescription = this.onDescription.bind(this);
        this.onWorkStart = this.onWorkStart.bind(this);
        this.onWorkEnd = this.onWorkEnd.bind(this);
        this.onCurrent = this.onCurrent.bind(this);
    }

    onCompany(e) {
        this.props.handleCompany(e.target.value);
      }
    
      onPosition(e) {
        this.props.handlePosition(e.target.value);
      }
    
      onDescription(e) {
        this.props.handleDescription(e.target.value);
      }
    
      onWorkStart(e) {
        this.props.handleWorkStart(e.target.value);
      }
    
      onWorkEnd(e) {
        this.props.handleWorkEnd(e.target.value);
      }
    
      onCurrent(e) {
        this.props.handleCurrent(e.target.value);
      }
    render(){
        return (
            <div className='input-box'>
                <h2>Practical Experience</h2>
                <p>
                    <label htmlFor="company">Company Name:</label>
                    <input 
                        type="text" 
                        id='company' 
                        onChange={this.onCompany}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="position">Position Title:</label>
                    <input 
                        type="text" 
                        id='position' 
                        onChange={this.onPosition}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        id='description' 
                        name='description' 
                        onChange={this.onDescription}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="start-date">Start Date:</label>
                    <input 
                        type="date" 
                        id='start-date' 
                        onChange={this.onWorkStart}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="end-date">End Date:</label>
                    <input 
                        type="date" 
                        id='start-date'
                        onChange={this.onWorkEnd}
                    />
                    <label htmlFor="current">Current Job?</label>
                    <input 
                        type="checkbox" 
                        name="current" 
                        id="current" 
                        onChange={this.onCurrent}
                    />
                </p>
            </div>
        )
    }
}

export default PracInputContainer;