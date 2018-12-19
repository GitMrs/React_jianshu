import React, {PureComponent} from 'react';
import {
    WriteWrap,
    WriteItem,
    WriteTitle
}
 from '../style'
class Write extends PureComponent {
    render() {
        return (
            <WriteWrap>
                <WriteTitle>
                    <span>推荐作者</span>
                    <span className="write-change"> <i className = "iconfont">&#xe851;</i> 换一换 </span>
                </WriteTitle>
                <div>
                    <WriteItem>
                        <a className="item-img-wrap"><img alt='' className="WriteItem-img" src='http://upload.jianshu.io/users/upload_avatars/11740279/5841dba1-205f-433e-a105-b3feb5981abd.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96' /></a>
                        <a className="item-fllow">关注</a>
                        <a className="item-name">阿特otter</a>
                        <p className="item-desc">写了98.9k字 · 273喜欢</p>
                    </WriteItem>
                </div>
            </WriteWrap>
        )
    }
}
export default Write