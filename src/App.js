import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router'
import ImageSearch from './imageSearch.jsx';
import './App.css';
import $ from 'jquery';
import Home from './home';
import Create from './create';

var App = React.createClass({
  render: function() {
    return (
      <div>
      	<img className="ribbon" src={require('../imgs/salmonRibbon.png')} />

      	<div className="logo-class">
        	<img className="logo" src={require('../imgs/logo.png')} />
       
        </div>

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="nav navbar-nav">
              <Link to='/'>_home</Link> 
              <Link to='ImageSearch'>_search</Link>
              <Link to='Create'>_create</Link>
              <Link to='#'>_discover</Link>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}) 

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={App}>
  	<IndexRoute component={Home} />
 		<Route path="ImageSearch" component={ImageSearch} />
 		<Route path="Create" component={Create} />
  	</Route>
  </Router>,
  document.getElementById('root')
);
