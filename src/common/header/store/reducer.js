import * as constants from './constants'
// immutabale 将速度转换为不可修改  获取immutable用get ;修改使用set()返回一个全新的immutable对象,修改多个值使用merge
import {fromJS} from 'immutable'
const defaultState = fromJS({
    focused: false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});
export default (state = defaultState, action) => {
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
            // return state.set('list',action.data).set('totalPage',action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case constants.CHANGE_PAGE:
            return state.set('page',action.page)
        default:
            return state;
    }
} 