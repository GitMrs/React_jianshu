import React, {PureComponent} from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recomment from './component/Recomment';
import Write from './component/Write';
import {actionCreators} from './store'
import {connect} from 'react-redux'
import {HomeWrap,
        HomeLeft,
        HomeRight,
        BackTop
} from './style'
class Home extends PureComponent {
    handerScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWrap>
                <HomeLeft>
                    <img className='banner-img' alt='' src='//upload.jianshu.io/admin_banners/web_images/4335/e504c50f53a2f4b4c9b6b9441fd50ec72e233b25.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'  />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recomment />
                    <Write />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handerScrollTop}>返回顶部</BackTop> : ''}
            </HomeWrap>
        )
    }
    componentDidMount() {
       this.props.changeHomeData()
       this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollShow)

    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollShow)
    }
}
const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    },
    changeScrollShow(e) {
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapState, mapDispatch)(Home)