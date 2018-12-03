import React from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base'

export default class Signup extends React.Component {
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

        if(password.length < 9) {
            return this.setState({ error: 'Passwor must be more than 8 characters long.'})
        }

        Accounts.createUser({email, password}, (err) => {
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
                    <h1>Signup Page</h1>

                    {this.state.error ? <p>{this.state.error}</p> : undefined}

                    <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view_form">
                        <input type="email" ref="email" name="email" placeholder="E-mail"/>
                        <input type="password" ref="password" name="password" placeholder="Password"/>
                        <button className="button">Create Account</button>
                    </form>
                    <Link to="/">Go to login.</Link>
                </div>
            </div>
        )
    }
}