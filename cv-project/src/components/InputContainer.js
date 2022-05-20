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
                <form action="">
                    <GenInputContainer 
                        name={this.props.name}
                        email={this.props.email}
                        phone={this.props.phone}
                        birth={this.props.birth}
                        handleName={this.props.handleName}
                        handleEmail={this.props.handleEmail}
                        handlePhone={this.props.handlePhone}
                        handleBirth={this.props.handleBirth}
                    />
                    <EduInputContainer
                        school={this.props.school}
                        schoolType={this.props.schoolType}
                        startDate={this.props.startDate}
                        endDate={this.props.endDate}
                        major={this.props.major}
                        hasMinor={this.props.hasMinor}
                        minor={this.props.minor}
                        handleSchoolInput={this.props.handleSchoolInput}
                        handleSchoolTypeInput={this.props.handleSchoolTypeInput}
                        handleStartDate={this.props.handleStartDate}
                        handleEndDate={this.props.handleEndDate}
                        handleMajor={this.props.handleMajor}
                        handlePursuingMinor={this.props.handlePursuingMinor}
                        handleMinor={this.props.handleMinor}
                    />
                    <PracInputContainer 
                        company={this.props.company}
                        position={this.props.position}
                        description={this.props.description}
                        workStart={this.props.workStart}
                        workEnd={this.props.workEnd}
                        current={this.props.current}
                        handleCompany={this.props.handleCompany}
                        handlePosition={this.props.handlePosition}
                        handleDescription={this.props.handleDescription}
                        handleWorkStart={this.props.handleWorkStart}
                        handleWorkEnd={this.props.handleWorkEnd}
                        handleCurrent={this.props.handleCurrent}
                    />
                </form>
            </div>
        )
    }
}

export default InputContainer;