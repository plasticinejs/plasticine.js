import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router';

import PageDemo from './page/demo'

const App = React.createClass({
    render() {
        return (
            <div>
                <Link to="/about">asdasdasdasdasd</Link>
                <Link to="/demo">demo</Link>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

const About = React.createClass({
    render() {
        return (
            <div>123123123123
                <Link to="/">asdasdasdasdasd</Link>
            </div>
        )
    }
});

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="demo" component={PageDemo} />
        </Route>
    </Router>
), document.getElementById('app'));