import { Component } from 'react';

class PracDisplayContainer extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <div className='display-box'>
            <h2>Practical Experience</h2>
            <p><strong>Company: </strong> Your Company Name</p>
            <p><strong>Position: </strong> Lead Engineer</p>
            <p><strong>Start Date: </strong> Jan. 1, 2015</p>
            <p><strong>End Date: </strong> Dec. 31, 2019</p>
            <p><strong>Description: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat libero molestiae accusantium. Dolorem tempore itaque, distinctio fugit debitis nam consequuntur dolor recusandae ullam minus necessitatibus nemo? Molestias, obcaecati laudantium.</p>
                

            </div>
        )
    }
}

export default PracDisplayContainer;