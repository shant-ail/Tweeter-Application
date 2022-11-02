import React from "react";

class LikeButton extends React.Component{

    state = {likes:0};
    handleChange = (event) => {};

    render(){
        return(
            <div className="likeButton">
                <button onClick={() => this.setState({likes: this.state.likes + 1})}> Like </button>
                <div className="likeCount">
                    {this.state.likes} Likes
                </div>
            </div>
        )
    }
}

export default LikeButton;