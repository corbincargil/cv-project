import { Component } from 'react';
import './App.css';
import DisplayContainer from './components/DisplayContainer';
import InputContainer from './components/InputContainer.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      //for Gen values
      name: 'John Doe',
      email: 'John.doe@gmail.com',
      phone: '(XXX) XXX-XXXX',
      birth: '5/20/2022',

      //for Edu values
      school: 'University of Texas at San Antonio',
      schoolType: 'University',
      startDate: '',
      endDate: '',
      major: 'B.S., Mechanical Engineering',
      hasMinor: false,
      minor: '',

      //for Prac values
      company: 'Your Company Name',
      position: 'CEO',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis hic perspiciatis suscipit voluptates exercitationem soluta dolorum illo? Sint explicabo aut deleniti dolores, cum excepturi! Eaque officiis eligendi natus dolore praesentium.',
      workStart: '',
      workEnd: '',
      current: false,
      
    };  
    //functions for Gen inputs
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleBirth = this.handleBirth.bind(this);

    //functions for Edu inputs
    this.handleSchoolInput = this.handleSchoolInput.bind(this);
    this.handleSchoolTypeInput = this.handleSchoolTypeInput.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleMajor = this.handleMajor.bind(this);
    this.handlePursuingMinor = this.handlePursuingMinor.bind(this);
    this.handleMinor = this.handleMinor.bind(this);

    //functions for Prac inputs
    this.handleCompany = this.handleCompany.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleWorkStart = this.handleWorkStart.bind(this);
    this.handleWorkEnd = this.handleWorkEnd.bind(this);
    this.handleCurrent = this.handleCurrent.bind(this);
  }

  //Functions for Gen handling
  handleName(name) {
    this.setState({
      name: name
    });
  }

  handleEmail(email) {
    this.setState({
      email: email
    });
  }

  handlePhone(phone) {
    this.setState({
      phone: phone
    });
  }

  handleBirth(birth) {
    this.setState({
      birth: birth
    });
  }
  //Functions for Edu handling
  handleSchoolInput(school) {
    this.setState({
        school: school
    });
  }

  handleSchoolTypeInput(schoolType) {
    this.setState({
      schoolType: schoolType
    });
  }

  handleStartDate(startDate) {
    this.setState({
      startDate: startDate
    });
  }

  handleEndDate(endDate) {
    this.setState({
      endDate: endDate
    });
  }

  handleMajor(major) {
    this.setState({
      major: major
    });
  }

  handlePursuingMinor(hasMinor) {
    this.setState({
      hasMinor: hasMinor
    });
  }

  handleMinor(minor) {
    this.setState({
      minor: minor
    });
  }
  
  //Functions for Prac handling
  handleCompany(company) {
    this.setState({
      company: company
    });
  }

  handlePosition(position) {
    this.setState({
      position: position
    });
  }

  handleDescription(description) {
    this.setState({
      description: description
    });
  }

  handleWorkStart(workStart) {
    this.setState({
      workStart: workStart
    });
  }

  handleWorkEnd(workEnd) {
    this.setState({
      workEnd: workEnd
    });
  }

  handleCurrent(current) {
    this.setState({
      current: current
    })
  }

  render() {
    const {name, email, phone, birth, school, schoolType, startDate, endDate, major, hasMinor, minor,company, description, position, workEnd, workStart, current} = this.state;
      return (
      <div className="App">
        <InputContainer
          //general
          name={name}
          email={email}
          phone={phone}
          birth={birth}
          handleName={this.handleName}
          handleEmail={this.handleEmail}
          handlePhone={this.handlePhone}
          handleBirth={this.handleBirth}
          //education
          school={school}
          schoolType={schoolType}
          startDate={startDate}
          endDate={endDate}
          major={major}
          hasMinor={hasMinor}
          minor={minor}
          handleSchoolInput={this.handleSchoolInput}
          handleSchoolTypeInput={this.handleSchoolTypeInput}
          handleStartDate={this.handleStartDate}
          handleEndDate={this.handleEndDate}
          handleMajor={this.handleMajor}
          handlePursuingMinor={this.handlePursuingMinor}
          handleMinor={this.handleMinor}
          //practical
          company={company}
          position={position}
          description={description}
          workStart={workStart}
          workEnd={workEnd}
          current={current}
          handleCompany={this.handleCompany}
          handlePosition={this.handlePosition}
          handleDescription={this.handleDescription}
          handleWorkStart={this.handleWorkStart}
          handleWorkEnd={this.handleWorkEnd}
          handleCurrent={this.handleCurrent}
         />
        <DisplayContainer 
          name={name}
          email={email}
          phone={phone}
          birth={birth}
          school={school}
          schoolType={schoolType}
          startDate={startDate}
          endDate={endDate}
          major={major}
          hasMinor={hasMinor}
          minor={minor}
          company={company}
          position={position}
          description={description}
          workStart={workStart}
          workEnd={workEnd}
          current={current}
        />
      </div>
    );
  }
}

export default App;
