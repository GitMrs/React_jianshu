import {fromJS}  from 'immutable'
import * as contants from './constants';
const defaultState = fromJS({
    topicList:[],
    ListData:[],
    recomentList:[],
    articlePage:0,
    showScroll:false
})

const changeHomeList = (state, action) => {
    return state.merge({
        'topicList': fromJS(action.topicList),
        'ListData': fromJS(action.ListData),
        "recomentList": fromJS(action.recomentList)
    })
}

const addArticleList = (state, action) => {
    return state.merge({
        "ListData":state.get('ListData').concat(action.list),
        "articlePage": action.nextPage
    })
}
export default (state = defaultState, action) => {
    switch(action.type){
        case contants.CHANGE_HOME_DATA:
            return changeHomeList(state, action)
        case contants.ADD_ARTICLE_LIST:
            return addArticleList(state, action)
        case contants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show)
        default:
            return state
    }
}
