let updateCurrentUser = (oldState, action) => {
    let newUser = {...oldState.currentUser, id: action.user.id, userName: action.user.username};
    return {...oldState, currentUser: newUser};
};

let reducers = {
    'UPDATE_CURRENT_USER': updateCurrentUser,

};


let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
};

export default reducer;