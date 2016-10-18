import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component{

	createListItems(){
		return this.props.users.map((user) => {
			return(
				<li 
					key={user.id} 
					onClick= {() => this.props.selectUser(user)} 
				>
					{user.first} {user.last}
				</li>
			);
		});
	}


	render(){

		return(
			<ul>
				{this.createListItems()}
			</ul>
		);
	}
}

function mapStateToProps(state){  
  // takes piece of (state)/application state/store/date passes in to your component as a property
	return {
		users: state.users
	};

}

function matchDispatchToProps(dispatch){ // for actions to hook to props

	return bindActionCreators({selectUser: selectUser}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
  // returning making component aware of user data 