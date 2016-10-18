import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends Component{ // component is just a class that renders HTML

	render(){

		if(!this.props.user){
			return(<h2>Select a user... </h2>);			
		}
		return(
			<div>
				<img src={this.props.user.thumbnail} />
				<h2>{this.props.user.first} {this.props.user.last}</h2>	
				<h3>Age: {this.props.user.age}</h3>
				<h3>Description: {this.props.user.description}</h3>	
			</div>
		);
	}


}

	function mapStateToProps(state){  
  // takes piece of (state)application state,store,date passes in to your component as a property
	return {
		user: state.activeUser
	};

}

export default connect(mapStateToProps)(UserDetail);