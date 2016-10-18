export default function	(state=null, action){

	switch(action.type){

		case "USER_SELECTED":
			return action.payload;
			break;
	}

	return state;
}

// wheneven action is generated it is automatically send to all reducers

