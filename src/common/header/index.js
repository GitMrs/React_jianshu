import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { actionCreators}  from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  NavSearchWrap,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'
import { CSSTransition } from 'react-transition-group'

//无状态组件
class Header extends PureComponent {
  getListArea() {
    const {focused, list, page,totalPage ,mouseIn ,handelMouseEnter, handelMouseLeave, handelChangePage} = this.props;
    const newList = list.toJS()
    const pageList = []
    if(newList.length){
      for(let i = ((page - 1)* 10); i < page * 10; i++){
        if(newList[i] !== undefined){
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }
    if(focused || mouseIn){
      return (
        <SearchInfo 
          onMouseEnter= {handelMouseEnter}
          onMouseLeave = {handelMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handelChangePage(page,totalPage,this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
              {
                pageList
              }  
          </SearchInfoList> 
        </SearchInfo>
      )
    }else{
      return null;
    }
  }
  render() {
    const {focused, handleInputFocus, handleInputBlur, list, login,loginOut} = this.props
    return( <HeaderWrapper>
      <Link to='/'>  <Logo /> </Link>
     
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载APP</NavItem>
        {login ? 
          <NavItem onClick={loginOut} className="right">退出</NavItem> : 
          <Link to='/Login'><NavItem className="right">登录</NavItem></Link>}
        <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
        <NavSearchWrap>
          <CSSTransition timeout={200} in={focused} classNames='slide'>
            <NavSearch
              onFocus={()=>handleInputFocus(list)}
              onBlur={handleInputBlur}
              className={focused ? 'focused' : ''} />
          </CSSTransition>
          <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe602;</i>
          {this.getListArea()}
        </NavSearchWrap>
      </Nav>
      <Addition>

        <Link to='/write'><Button className="writting"> <i className="iconfont">&#xe60f;</i>  写文章</Button></Link>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
    )
  }
}
// class Header extends Component {
//     render() {
//         return (
//             <HeaderWrapper>
//                 <Logo />
//                 <Nav>
//                     <NavItem className="left active">首页</NavItem>
//                     <NavItem className="left">下载APP</NavItem>
//                     <NavItem className="right">登录</NavItem>
//                     <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
//                     <NavSearchWrap>
//                         <CSSTransition timeout={200} in={this.props.focused} classNames='slide'>
//                             <NavSearch 
//                                 onFocus={this.props.handleInputFocus} 
//                                 onBlur = {this.props.handleInputBlur}
//                                 className={this.props.focused ? 'focused' : ''}  />
//                          </CSSTransition>
//                         <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe602;</i>
//                     </NavSearchWrap>
//                 </Nav>
//                 <Addition>
//                     <Button className="writting"> <i className="iconfont">&#xe60f;</i>  写文章</Button>
//                     <Button className="reg">注册</Button>
//                 </Addition>
//             </HeaderWrapper>
//         )
//     }
// }
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn']),
    totalPage: state.getIn(['header','totalPage']),
    login: state.getIn(['login','Login'])
    // focused: state.get('header').get('focused')
  }
}

const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus(list) {
      // console.log(actionCreators.searchFocus())
      (list.size === 0) && dispath(actionCreators.getList())
      dispath(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispath(actionCreators.searchBlur())
    },
    handelMouseEnter() {
      dispath(actionCreators.mouseEnter())
    },
    handelMouseLeave() {
      dispath(actionCreators.mouseLeave())
    },
    handelChangePage(page,totalPage,spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      console.log(originAngle)
      if(originAngle){
        originAngle = parseInt(originAngle,10);
      }else{
        originAngle = 0;
      }
      spin.style.transform = 'rotate('+(originAngle + 360 )+'deg)'
      if(page < totalPage){
        dispath(actionCreators.changePage(page + 1));
      }else{
        dispath(actionCreators.changePage(1))
      }
    },
    loginOut() {
      dispath(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)