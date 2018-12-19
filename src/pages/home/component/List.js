import React, {PureComponent} from 'react';
import {actionCreators} from '../store'
import {Link} from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'
import {connect} from 'react-redux'
class List extends PureComponent {
    render() {
        const {ListData, getMoreList, page} = this.props;
        console.log(page)
        return (
            <div>
                {
                    ListData.map((item, index)=>{
                        return (
                            <Link kry={index} to={'/detail/' + item.get('id') }>
                                <ListItem key={index}>
                                    <img src={item.get('imgUrl')} alt='' className='List-img' />
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='detail'>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={()=>getMoreList(page)}>更多</LoadMore>
            </div>
            
        )
    }
}

const mapState = (state) => ({
    ListData : state.getIn(['home','ListData']),
    page: state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapState,mapDispatch)(List)