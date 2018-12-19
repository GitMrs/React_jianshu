import axios from 'axios';
import * as constans from './constants';
import {fromJS} from 'immutable'
const changeHomeData = (result) => ({
    "type":constans.CHANGE_HOME_DATA,
    "topicList":result.topicList,
    "ListData":result.ListData,
    "recomentList":result.recomentList
})
export const getHomeInfo = () => {
    return (dispatch) =>{
        axios.get('/api/home.json').then((res)=>{
            dispatch(changeHomeData(res.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}
const addHomeList = (list,nextPage) => ({
    type:constans.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage: nextPage 
})
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+ page).then((res)=>{
            dispatch(addHomeList(res.data.data,page+1))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const toggleTopShow = (show) => ({
    type:constans.TOGGLE_SCROLL_TOP,
    show
})