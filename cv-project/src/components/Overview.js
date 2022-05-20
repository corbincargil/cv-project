import { Component } from 'react';

class Overview extends Component {
    constructor(props) {
        super(props);

        const tasks = props;
    }

    render(){
        return (
            <div className="tasks">
                <ul>
                    {this.props.tasks.map(task => <li>{task}</li>)}
                </ul>
            </div>
        )
    }
}

export default Overview;