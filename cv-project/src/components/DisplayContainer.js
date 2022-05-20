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
                <GenDisplayContainer 
                    name={this.props.name}
                    email={this.props.email}
                    phone={this.props.phone}
                    birth={this.props.birth}
                />
                <div className="divider"></div>
                <EduDisplayContainer 
                    school={this.props.school}
                    schoolType={this.props.schoolType}
                    startDate={this.props.startDate}
                    endDate={this.props.endDate}
                    major={this.props.major}
                    hasMinor={this.props.hasMinor}
                    minor={this.props.minor}
                />
                <div className="divider"></div>
                <PracDisplayContainer 
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
            </div>
        )
    }
}

export default DisplayContainer;