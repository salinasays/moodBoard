import React from 'react';
import collection from './collection';

var Create = React.createClass({
	render: function(){
		return (
			<div>
				<h2>_your moodBoard</h2>
				<hr />
				<div className="collection-imgs">
					{collection.map(function(imgs, indx) {
						return <img className= "savedImg" key={indx} src={imgs}></img>
					})}
				</div>
			</div>
		)
	}
})

export default Create;