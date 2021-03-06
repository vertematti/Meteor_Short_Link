import React from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : this.props.count || 0
        };
    }
    onSubmit(e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
            if(err) {
                this.setState({error:err.reason})
            }
            else {
                this.setState({error:''});
            }
        });
    }
    render () {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>Short Link</h1>

                    {this.state.error ? <p>{this.state.error}</p> : undefined}

                    <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view_form">
                        <input type="email" ref="email" name="email" placeholder="E-mail"/>
                        <input type="password" ref="password" name="password" placeholder="Password"/>
                        <button className="button">Login</button>
                    </form>
                    <Link to="/signup">Have an account?</Link>
                </div>
            </div>
        )
    }
}