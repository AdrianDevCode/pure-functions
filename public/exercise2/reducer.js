let initialState = {
	counters: []
};

// This reducer isn't pure! It updates the nested "counters" array of the original 
//     state object
const reducer = (state = initialState, action) => {
	let { type, counterIndex } = action;
	let newState = {
		...state,
		counters: [...state.counters]
	}
	if (type == "INCREMENT") {
		
		newState.counters[counterIndex]++;
		return newState;
	} else if (type == "ADD_COUNTER") {
		newState.counters.push(0);
		return newState;
	} else {
		return newState;
	}
}
