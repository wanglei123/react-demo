import React, { Component } from 'react';
import PostItem from './PostItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const postData = [
  {id: 1,title: '大家一起来讨论',author: '张三', date: '2021-09-09 10:00', vote:0},
  {id: 2,title: '前端框架，你最爱哪一个',author: '李四', date: '2021-09-11 10:00', vote:0},
  {id: 3,title: 'web app的时代已经到来',author: '王五', date: '2021-09-09 10:00', vote:0},
]

class PostList extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null;
  }



  handleVote = (id) => {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? {...item, vote: ++item.vote} : item;
      return newItem;
    })
    this.setState({
      posts
    })
  }

  componentDidMount(){
    this.timer = setTimeout(() => {
      this.setState({posts: postData})
    }, 1000)
  }

  componentWillUnmount(){
    if(this.timer){
      clearTimeout(this.timer)
    }
  }


  render(){
    return (<div style={{textAlign: 'left'}}>
      帖子列表:
      <ul>
        {this.state.posts.map(item => <PostItem post={item} onVote={this.handleVote} />)}
      </ul>
    </div>)
  }
}

export default PostList;