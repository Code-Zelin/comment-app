/**
 * Created by shen on 2017/7/26.
 */
import React, { Component } from 'react';
import './list.css';

class CommentList extends Component {
    static defaultProps = {
        comments:[
            {
                username:'测试',
                content: '测试测试'
            }
        ]
    };
    render () {
        return (
            <ul className="comment-list">
                {this.props.comments.map( (item,i) =>
                    <li key={i}>
                        <h3>{item.username}</h3>
                        <p>{item.content}</p>
                    </li>
                )}
            </ul>
        )
    }
}

export default CommentList;