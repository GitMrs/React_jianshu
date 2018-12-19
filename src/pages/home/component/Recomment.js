import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {
    RecommentWrap,
    RecommentItem
} from '../style'
class Recomment extends PureComponent {
    render() {
        const {recommentList} = this.props;
        // console.log(recommentList)
        return (
            <RecommentWrap>
                {
                    recommentList.map((item)=>{
                        return (
                            <RecommentItem key={item.get('id')} ImgUrl={item.get('imgUrl')}></RecommentItem>
                        )
                    })
                }
                {/* <RecommentItem  ImgUrl="http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"></RecommentItem> */}
            </RecommentWrap>
        )
    }
}
const mapState = (state) => ({
    recommentList: state.getIn(['home','recomentList'])
})
export default connect(mapState,null)(Recomment)