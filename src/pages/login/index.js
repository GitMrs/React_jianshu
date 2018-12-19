import React,{PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    LoginWrap,
    LoginBox,
    Input,
    Button
} from './style'
import {actionCreators} from './store';

class Login extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if(!loginStatus){
            return (
                <LoginWrap>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={(input)=>{this.accout = input}} />
                        <Input placeholder='密码' type='password' innerRef={(input)=>{ this.password = input}} />
                        <Button onClick={() => this.props.login(this.accout,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrap>
            )
        }else{
            return <Redirect to='/' />
        }
         
    }
}
const mapState = (state) => ({
    loginStatus: state.getIn(['login','Login'])
})
const mapDispatch = (dispatch)=> ({
    login(accoutElemrnt,passwordElement) {
        dispatch(actionCreators.login(accoutElemrnt.value, passwordElement.value))
    }
})
export default connect(mapState, mapDispatch)(Login)