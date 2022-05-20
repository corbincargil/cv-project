import { Component } from 'react';
import GenDisplayContainer from './GenDisplayContainer';
import EduDisplayContainer from './EduDisplayContainer';
import PracDisplayContainer from './PracDisplayContainer';

class DisplayContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className='display-container'>
                <GenDisplayContainer />
                <div className="divider"></div>
                <EduDisplayContainer />
                <div className="divider"></div>
                <PracDisplayContainer />
            </div>
        )
    }
}

export default DisplayContainer;