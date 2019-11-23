import React, { Component } from 'react';

export const Routeguard = Compo => {
    return class PackageCompo extends Component {
        constructor(props) {
            super(props);
            const token = window.localStorage.getItem('token');
            if (!token) {
                props.history.replace('/login');
            }
        }
        /* componentDidUpdate() {
            const token = window.localStorage.getItem('token');
            if (!token) {
                this.props.history.replace('/login');
            }
        } */
        render() {
            return <Compo {...this.props} />;
        }
    };
};

export const RouteguardIsLogin = Login => {
    return class PackageLogin extends Component {
        constructor (props) {
            super(props);
            let token = window.localStorage.getItem('token');
            if (token) props.history.replace('/home');
        }
        render() {
            return <Login {...this.props} />
        }
    }
}
