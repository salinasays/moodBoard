import React from 'react';

var Home = React.createClass({
	render: function () {
		return (
			<div>
				<h2>_hello, there!</h2>
				<hr />
				<img className="welcome" src={require('../imgs/home.jpg')} />
			</div>
		)
	}
})

export default Home;