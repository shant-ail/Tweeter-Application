import Comment from './Comment';
import React from 'react';

class TweetContainer extends React.Component{

    state = {comment:"", comments: []};

    handleChange = (event) => {
        this.setState({comment: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let newComments = this.state.comments;
        let newComment = {text: this.state.comment, time: new Date()};
        newComments.push(newComment);
        this.setState({ comments: newComments });
        this.setState({ comment: "" });
    };

    render(){
        return (
            <div className='tweetContainer'>
                <div className = 'tweet'>
                    <b>{this.props.status}</b>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type = "text" name = "commentBox" value = {this.state.comment} onChange = {this.handleChange}/>
                    <button type = 'submit'>Post</button><br/>
                </form>
                {this.state.comments.map((comment, i) => {
                    return <Comment commentPassed = {comment} key = {i} />;
                })}
            </div>
        );
    }
}
 
export default TweetContainer;