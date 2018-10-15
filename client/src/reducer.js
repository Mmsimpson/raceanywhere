let updateCurrentUser = (oldState, action) => {
    let newUser = {...oldState.currentUser, ...action.user};
    
    window.localStorage.setItem('user', JSON.stringify(newUser))
    return {...oldState, currentUser: newUser};
};

let loadRecentVideos = (oldState, action) => {
    return {...oldState, recentVideos: action.recentVideos}
}

let loadVideos = (oldState, action) => {
    return {...oldState, videos: action.videos};
}

let reducers = {
    'UPDATE_CURRENT_USER': updateCurrentUser,
    'LOAD_VIDEOS': loadVideos,
    'LOAD_RECENT_VIDEOS': loadRecentVideos,
};

let reducer = (oldState, action) => {
    let doer = reducers[action.type];
    return doer ? doer(oldState, action) : oldState;
};

export default reducer;