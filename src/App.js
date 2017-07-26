import React, { Component } from 'react';
import CommentInput from "./CommentInput";
import CommentList from './CommentList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      comments : []
    }
  }

  handleCallback(content){
    if(!content) return;
    if(!content.username) return alert('请输入用户名');
    if(!content.content) return alert('请输入内容');
    this.setState( (props) => {
      return props.comments.push(content);
    })
  }

  render() {
    return (
      <div className="App">
        <CommentInput onSubmit={ this.handleCallback.bind(this) } />
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;
