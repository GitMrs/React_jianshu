import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionCreator} from './store';
import {
    DetailWrap,
    Header,
    Conent
} from './style'
class Detail extends Component {
    render() {
        const {title, content} = this.props;
        // console.log(this)
        return (
            <DetailWrap>
                <Header>{title}</Header>
                <Conent dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrap>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}
const mapState = (state) => ({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})
const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreator.getDetail(id))
    }
})
export default connect(mapState,mapDispatch)(Detail)