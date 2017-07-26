/**
 * Created by Administrator on 2017/7/26.
 */
import React, { Component } from 'react';
import './content.css';

class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    handleClickToBtn(){
        if(this.props.onSubmit){
            const { username, content } = this.state;
            this.props.onSubmit({username, content})
            this.setState({ content: '' })
        }
    }
    handleUsernameChange(event){
        this.setState({
            username:event.target.value
        })
    }
    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    ren
    render () {
        return (
            <div className="content">
                <div>
                    <span className="app-title">用户名：</span><input type="text" className="user_name" value={this.state.username} onChange={this.handleUsernameChange.bind(this)}/>
                </div>
                <div>
                    <span className="app-title">评论内容：</span><textarea className="content-wrappre" value={this.state.content} onChange={this.handleContentChange.bind(this)}></textarea>
                </div>
                <div className="clearfix">
                    <button className="fr publish-btn" onClick={this.handleClickToBtn.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;