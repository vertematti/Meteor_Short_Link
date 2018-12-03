import React from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : this.props.count || 0
        };
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }
    render () {
        return (
            <div>
                <h1>Signup Page</h1>

                <p>{this.state.count}</p>
                <button onClick={() => {
                    this.setState({count: this.state.count - 1})
                }}>-1</button>&nbsp;
                <button onClick={this.increment.bind(this)}>+1</button><br/><br/>

                <Link to="/">Go to login.</Link>
            </div>
        )
    }
}