import axios from 'axios'
import * as contants  from './constants';
const addDetai = (action) => ({
    type:contants.ADD_DETAIL,
    titie:action.titie,
    content:action.content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then((res)=>{
            dispatch(addDetai(res.data.content))
        }).catch((err)=>{
            console.log(err)
        })
    }
}