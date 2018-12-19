import {combineReducers} from 'redux-immutable'
// import {combineReducers } from 'redux'
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store';
import {reducer as loginReducer} from '../pages/login/store';
//将redux 转换为immutable对象
//安装redux-immutalebe

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login:loginReducer
})
export default reducer