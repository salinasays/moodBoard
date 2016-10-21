import React from 'react';
import $ from 'jquery';
import collection from './collection'

var ImageSearch = React.createClass({
	getInitialState: function (){
		return {search: '', pictures: []};
	},
	handleChange: function(event) {
		this.setState({search: event.target.value});
	},
	handleSearch: function() {  
		var that = this
         $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=" + this.state.search + "&count=50&mkt=en-us",
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","154447823008427391e320b8dfa2708a");
            },
            type: "GET",
            // Request body
            data: "{body}",
            success: function(data, idx){
            	console.log(data)
            	that.setState({pictures: data.value})
            }
        })
        .done(function(data) {
            console.log("success");
        })
        .fail(function() {
            alert("error");
        });
	},
	addToCollection: function(e){

		collection.push(e.target.src);
		console.log(collection)
		console.log('added')
	},
	render: function() {
		console.log(this.state.pictures)
		var that = this;
		
		return (
			<div>
			<h2>_search for inspiration</h2>
			<hr />
			<div className="form">
				<input 
				className="input"
				type="text" 
				placeholder="keywords"
				value={this.state.search}
				onChange={this.handleChange} 
				/>

		        <button 
		        className="button"
		        type="submit"
		        onClick={this.handleSearch}
		        >Search</button>
		    </div>

		        <br />

		        <div className="containpics">
			        {this.state.pictures.map(function (clothingObject, idx) {
			        	
			        	return <img 
			        	onClick={e => that.addToCollection(e)} 
			        	className="myPics" key= {idx} src ={clothingObject.thumbnailUrl}></img>
			        })}
		        </div>
	        </div>
		)
	}
})



export default ImageSearch; 