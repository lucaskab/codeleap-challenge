import { combineReducers } from 'redux';
import Login from './login';
import CreatePost from './createPost';
import PostInfos from './postInfos';

export default combineReducers({
    Login,
    PostInfos,
    CreatePost,
});