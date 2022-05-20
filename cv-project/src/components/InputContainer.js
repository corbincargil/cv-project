import { Component } from 'react';
import GenInputContainer from './GenInputContainer';
import EduInputContainer from './EduInputContainer';
import PracInputContainer from './PracInputContainer';

class InputContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className='input-container'>
                <GenInputContainer />
                <EduInputContainer />
                <PracInputContainer />
            </div>
        )
    }
}

export default InputContainer;