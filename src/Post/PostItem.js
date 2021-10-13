import React from "react";
import PropTypes from 'prop-types'

function PostItem(props){
  const {post} = props;
    // 点赞逻辑
    const handleClick = () => {
      props.onVote(post.id)
  }
    return (<li>
      <div>{post.title}</div>
      <div>创建人：<span>{post.author}</span></div>
      <div>创建时间：<span>{post.date}</span></div>
      <div><button onClick={handleClick} >投票</button>
      &nbsp;<span>{post.vote}</span>
      </div>
    </li>)
}

PostItem.propTypes = {
  onVote: PropTypes.func
}



export default PostItem;