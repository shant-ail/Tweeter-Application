import LikeButton from './LikeButton';
import Timer from './Timer';
import React from 'react';

class Comment extends React.Component{

    state = {};
    handleChange = (event) => {};

    render(){
        return ( 
            <div className='comment'>
                <Timer time = {this.props.commentPassed.time}/>
                <div style={{marginRight: "50px"}}>
                    <b>{this.props.commentPassed.text}</b>
                </div>
                <LikeButton/>
            </div>
        );
    }
}
 
export default Comment;