export const selectUser = (user) => {
	console.log("You click on the user: "+ user.first);
	return{
		type: "USER_SELECTED",  //action name created
		payload: user
	} //action
 
};  //action creater

	// wheneven action is generated it is automatically send to all reducers