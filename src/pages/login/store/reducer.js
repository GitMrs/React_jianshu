import {fromJS}  from 'immutable';
import * as constents from './constents';
const defaultState = fromJS({
   Login:false
})


export default (state = defaultState, action) => {
    switch(action.type){
        case constents.CHANGE_LOGIN:
            return state.set('Login',action.value);
        case constents.CHANGE_LOGIN_OUT:
            return state.set('Login',action.value)
        default:
            return state
    }
}
