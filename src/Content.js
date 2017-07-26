/**
 * Created by Administrator on 2017/7/26.
 */
import React, { Component } from 'react';
import './content.css';

class Content extends Component {
    con
    handleClickToBtn(){
        console.log(this);
    }
    render () {
        return (
            <div className="content">
                <div>
                    <span className="app-title">用户名：</span><input type="text" className="user_name" />
                </div>
                <div>
                    <span className="app-title">评论内容：</span><textarea className="content-wrappre"></textarea>
                </div>
                <div className="clearfix">
                    <button className="fr publish-btn" onClick={this.handleClickToBtn.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default Content;