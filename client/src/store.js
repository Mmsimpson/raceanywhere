import { createStore } from 'redux';
import reducer from './reducer';

let initialState = {
    currentUser: JSON.parse(localStorage.getItem('user')),
    videos: [],
    recentVideos: []
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;