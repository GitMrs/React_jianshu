import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {
    TopicWrap,
    TopicItem
} from '../style'
class Topic extends PureComponent {
    render() {
        const {List} = this.props;
        return (
            <TopicWrap>
                {List.map((item)=>{
                    return (
                        <TopicItem key={item.get('id')}>
                            <img alt='' className='topic-pic' src={item.get('imgUrl')} />
                            {item.get('title')}
                        </TopicItem>
                    )
                })}
            </TopicWrap>
        )
    }
}
const mapState = (state) => ({
    List:state.getIn(['home','topicList'])
})
// const mapDispath = () => {

// }
export default connect(mapState,null)(Topic)