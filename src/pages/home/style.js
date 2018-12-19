import styled from 'styled-components';

export const HomeWrap = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
    `;
export const HomeLeft = styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
    `;
export const HomeRight = styled.div`
    width:280px;
    float:right;

`;
export const TopicWrap = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    padding-right:10px
    line-height:32px;
    margin-left:18px;
    margin-bottom:18px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        margin-right:10px;
        width:32px;
        height:32px;
    }
`;
export const ListItem = styled.div`
    padding:20px 0;
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
    .List-img{
        width:125px;
        height:100px;
        display:block;
        float:right;
        border-radius:10px;
    }
` ;
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .detail{
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`;
export const RecommentWrap = styled.div`
    width:280px;
    margin:30px 0;

`;
export const RecommentItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=> props.ImgUrl});
    background-size:contain;
`;
export const WriteWrap = styled.div`
    width:100%;
    margin-top:20px;
`
export const WriteTitle = styled.div`
    width:100%;
    height:30px;
    line-height:30px;
    overflow:hidden;
    font-size:13px;
    color:#999;
    cursor: pointer;
    .write-change{
        float:right;
    }
`
export const WriteItem = styled.div`
    width:100%;
    margin-top:10px;
    line-height:20px;
    .item-img-wrap{
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
    }
    .item-img-wrap img{
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .item-fllow{
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
    .item-name{
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    .item-desc{
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`;
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    margin:30px;
`;
export const BackTop = styled.div`
    position:fixed;
    width:60px;
    height:60px;
    text-align:center;
    line-height:60px;
    border:1px solid #ccc;
    right:100px;
    font-size:14px;
    bottom:100px;
`;