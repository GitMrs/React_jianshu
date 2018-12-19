import axios from 'axios';
import * as constants  from './constents';
const changeLogin = () => ({
    type:constants.CHANGE_LOGIN,
    value:true
})
export const login = (accout, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+accout + 'password=' + password).then((res)=>{
            const reslut = res.data.data;
            if(reslut) {
                dispatch(changeLogin())
            }else{
                alert('err')
            }
        })
    }
}

export const logout = () => ({
    type:constants.CHANGE_LOGIN_OUT,
    value:false
})